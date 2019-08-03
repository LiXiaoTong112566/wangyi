import React, { Component } from "react";

import ProgressiveImage from "react-progressive-image";

class ImgBlend extends Component {
  render() {
    let { list } = this.props;

    return (
      <dl style={{ marginBottom: 0 }} onClick={()=>this.props.history.push({pathname:`/storeDetail/${list.id}`})}>
       
          <dt>
            <ProgressiveImage
              src={list.list_pic_url}
              placeholder="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564683988647&di=089d64d919c0d8b1c2d7d34679951d4d&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0168905ad83519a801213867ae45cf.gif"
            >
              {src => <img src={src} alt="" />}
            </ProgressiveImage>
            {/* <img src={list.list_pic_url} alt=""></img> */}
          </dt>
          <dd>
            <div>{list.name}</div>
            <span>￥{list.retail_price}</span>
          </dd>
       
      </dl>
    );
  }
}

export default (props)=><ImgBlend {...props} key={props.location.pathname}/>;
