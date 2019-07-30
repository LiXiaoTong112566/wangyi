import React, { Component } from "react";
import "./shoppingIndex.scss";
import ShopEdit from "../../../component/shopEdit"; //编辑
import ShopFinish from "../../../component/shopFinish"; //编辑
export class ShoppingIndex extends Component {
  constructor() {
    super();

    this.state = {
      isEdit: true, //默认的是完成页面
      isChecked: false //判断有没有选中
    };
  }

  changeEdit = e => {
    this.setState({
      isEdit: !this.state.isEdit
    });
   
  };
  render() {
    return (
      <div className="shopBox">
        {/* 头部 */}
        <ul className="service">
          <li>
            <span>★</span>
            30天无忧退货
          </li>
          <li>
            <span>★</span>
            48小时快速退款
          </li>
          <li>
            <span>★</span>
            满88包邮
          </li>
        </ul>
        {/* 内容 */}
        <div className="main">
          {this.state.isEdit ? <ShopFinish /> : <ShopEdit />}
        </div>
        {/* 选项 */}
        <div className="shop">
          <div className="checkedBox">
            <div className="choice">
              <div className="check">
                <img
                  src={
                    this.state.isChecked
                      ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg=="
                      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC"
                  }
                  alt=""
                />
              </div>
              <div>已选(3)</div>
              {this.state.isEdit ? <div>￥0</div> : null}
            </div>
          </div>

          <div className="edit" onClick={e => this.changeEdit(e)}>
            {this.state.isEdit ? "编辑" : "完成"}
          </div>

          <div className="option">
            {this.state.isEdit ? "下单" : "删除所选"}
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingIndex;
