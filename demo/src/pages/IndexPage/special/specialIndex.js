import React, { Component } from "react";
import { inject, observer } from "mobx-react";
//import BScroll from "better-scroll";
import "./specialIndex.scss";

// 引入 lazyimg
import Lazyimg, { withLazyimg } from "react-lazyimg-component";
// 引入 volecity.js
import "velocity-animate";
import "velocity-animate/velocity.ui";
// 配置
const config = {
  placeholder: "loading.svg",
  js_effect: "transition.shrinkIn" // 支持 velocity.js 动画效果
};
const Lazy = withLazyimg(config);

@inject("special")
@observer
class SpecialIndex extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.special.getTopicModule();
  }

  //跳转到详情页
  jumpTopicDetail(id) {
    this.props.history.push({ pathname: `/topicDetail/${id}` });
  }

  render() {
    let data = this.props.special.getTopicData.data;

    return (
      <div className="specialBox">
        {data &&
          data.map((item, index) => {
            return (
              <div
                className="specialMain"
                key={item.id}
                onClick={() => {
                  this.jumpTopicDetail(item.id);
                }}
              >
                {/* <Lazy className="lazy" src={item.scene_pic_url} /> */}
                <img src={item.scene_pic_url} alt="" />
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
                <div className="price">{item.price_info}元起</div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default SpecialIndex;
