import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import "./collect.scss";
import { SwipeAction, List } from "antd-mobile";

@inject("collect")
@observer
class collect extends Component {
  componentDidMount() {
    this.props.collect.findList({ typeId: 0 });
  }

  delData(data) {
    this.props.collect.addEnshrine({ typeId: 0, valueId: data.value_id });
  }
  render() {
    let list = this.props.collect.addCollection;

    return (
      <div className="collect">
        <div className="header">
          <h3>easyLikeGoods</h3>
          <span onClick={() => this.props.history.goBack()}>&lt;</span>
        </div>
        <div className="subject">
          {list &&
            list.map(file => (
              <List key={file.id}>
                <SwipeAction
                  right={[
                    {
                      text: "删除",
                      onPress: () => this.delData(file),
                      style: { backgroundColor: "red", color: "#fff" }
                    }
                  ]}
                >
                  <List.Item>
                    <dl className="dlBox" onClick={()=>{this.props.history.push({pathname:`/storeDetail/${file.value_id}`})}}>
                     
                        <dt>
                          <img src={file.list_pic_url} alt="" />
                        </dt>
                        <dd>
                          <div style={{ fontSize: ".35rem" }}>{file.name}</div>
                          <div style={{ color: "#ccc" }}>
                            {file.goods_brief}
                          </div>
                          <span>￥{file.retail_price}</span>
                        </dd>
                     
                    </dl>
                  </List.Item>
                </SwipeAction>
              </List>
            ))}
        </div>
      </div>
    );
  }
}

export default collect;
