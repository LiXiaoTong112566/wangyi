import React, { Component } from "react";
import "./shoppingIndex.scss";
import { inject, observer } from "mobx-react";
import { Toast } from "antd-mobile";
@inject("card")
@observer
class ShoppingIndex extends Component {
  constructor() {
    super();
    this.state = {
      isFinish: true, //默认的是完成页面
      isChecked: true //判断有没有选中
    };
  }

  componentDidMount() {
    //获取购物车里面的数据
    this.props.card.getCartDataModule();
    //获取页面全选的数据
    this.props.card.changeInitFinishCheckedFn();
  }

  //切换页面
  changeEdit = e => {
    this.setState({
      isFinish: !this.state.isFinish
    });
  };

  //切换完成页面的选中的按钮
  changeChecked(data) {
    let checked = data.checked === 0 ? 1 : 0;
    this.props.card.postCartCheckModule({
      isChecked: checked,
      productIds: data.product_id
    });
  }

  //编辑页面的加减功能

  changeEditStoreCount(data, type) {
    if (type === "+") {
      this.props.card.postCartUpdateModule({
        goodsId: data.goods_id,
        id: data.id,
        number: data.number + 1,
        productId: data.product_id
      });
    } else {
      this.props.card.postCartUpdateModule({
        goodsId: data.goods_id,
        id: data.id,
        number: data.number - 1,
        productId: data.product_id
      });
    }
  }

  //删除所选的
  delChecked(e) {
    if (e.nativeEvent.target.innerHTML === "删除所选") {
      this.props.card.postCartDeleteModule();
    } else if (e.nativeEvent.target.innerHTML === "下单") {
      Toast.loading("下单功能还没有开启，请耐心等待", 1, () => {
        console.log("Load complete !!!");
      });
    }
  }

  render() {
    let data = this.props.card.getCartData;

    //let { postCartCheckData } = this.props.card;

   // let { isFinish } = this.state;
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
        <div className="main1">
          {data.cartList &&
            data.cartList.map((item) => {
              return (
                <div className="shopFinshBox" key={item.goods_name}>
                  {this.state.isFinish ? (
                    <div
                      className="check"
                      onClick={() => {
                        this.changeChecked(item);
                      }}
                    >
                      <img
                        src={
                          item.checked === 1
                            ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg=="
                            : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC"
                        }
                        alt=""
                      />
                    </div>
                  ) : (
                    <div
                      className="check"
                      onClick={() => {
                        this.props.card.changeEditItemChecked(item);
                      }}
                    >
                      <img
                        src={
                          item.flag
                            ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg=="
                            : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC"
                        }
                        alt=""
                      />
                    </div>
                  )}
                  <div className="img">
                    <img src={item.list_pic_url} alt="" />
                  </div>

                  {this.state.isFinish ? (
                    <div className="shopFinshBox_main">
                      <div className="shopFinshMain_top">
                        <h3>{item.goods_name}</h3>
                        <div className="num">
                          x<span>{item.number}</span>
                        </div>
                      </div>
                      <div className="price">￥{item.market_price}</div>
                    </div>
                  ) : (
                    <div className="itemBox_main">
                      <div className="title">{item.goods_name}</div>
                      <div className="numPrice">
                        <div className="price">￥{item.market_price}</div>
                        <div className="numBox">
                          <span onClick={() => this.changeEditStoreCount(item, "-")}>-</span>
                          <span className="num">{item.number}</span>
                          <span onClick={() => this.changeEditStoreCount(item, "+")}>+</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
        {/* 选项 */}
        <div className="shop">
          <div className="checkedBox">
            <div className="choice">
              {this.state.isFinish ? (
                <div
                  className="check"
                  onClick={() => this.props.card.changeChecked()}
                >
                  <img
                    src={
                      this.props.card.FinishIsChecked
                        ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg=="
                        : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC"
                    }
                    alt=""
                  />
                </div>
              ) : (
                <div
                  className="check"
                  onClick={() => this.props.card.changeEditChecked()}
                >
                  <img
                    src={
                      this.props.card.EditIsChecked
                        ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg=="
                        : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC"
                    }
                    alt=""
                  />
                </div>
              )}

              {this.state.isFinish ? (
                <div>
                  已选{data.cartTotal && data.cartTotal.checkedGoodsCount}个
                </div>
              ) : (
                <div>已选择{this.props.card.EditCheckedCount}</div>
              )}
              {this.state.isFinish ? (
                <div>
                  ￥{data.cartTotal && data.cartTotal.checkedGoodsAmount}
                </div>
              ) : null}
            </div>
          </div>

          <div className="edit" onClick={e => this.changeEdit(e)}>
            {this.state.isFinish ? "编辑" : "完成"}
          </div>

          <div
            className="option"
            onClick={e => {
              this.delChecked(e);
            }}
          >
            {this.state.isFinish ? "下单" : "删除所选"}
          </div>
        </div>

        <div className="mask" />
      </div>
    );
  }
}

export default ShoppingIndex;
