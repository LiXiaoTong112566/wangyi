import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Toast } from "antd-mobile";
import "./storeData.scss";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import ImgBlend from "../../component/imgBlend";
import { Drawer } from "antd";
import "../../scss/fonts/iconfont.css";

@inject("classify", "card", "special", "collect")
@observer
class StoreDetail extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      count: 0
    };
    this.swiperContainer = React.createRef();
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.classify.getGoodsDetailModule({ id: id });
    this.props.classify.GoodsCommodities({ id: id });
    this.props.special.getCommentListModule({ valueId: id, typeId: 0 });
    this.props.card.getCartNumModule(); //获取用户商品的数量
  
   
  }

  componentDidUpdate(){
    let container = this.swiperContainer.current;
    new Swiper(container, {
      
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable :true,
      }
    });
  }
 
  goodsMask() {
    this.setState({
      visible: true
    });
  }
  onClose = () => {
    this.setState({
      visible: false
    });
  };

  //数量的加减
  changeCount(type) {
    if (type === "+") {
      this.setState({
        count: this.state.count + 1
      });
    } else {
      if (this.state.count === 0) {
        this.setState({
          count: 0
        });
      } else {
        this.setState({
          count: this.state.count - 1
        });
      }
    }
  }
  //添加到收藏
  addStore = e => {
    let id = this.props.match.params.id;
    //获取到商品的收藏的状态
    this.props.classify.addEnshrine({ typeId: 0, valueId: id });
  };

  //添加到购物车
  //postAddCartModule

  joinCart = () => {
    let { getGoodsDetailData } = this.props.classify;
    let data = getGoodsDetailData.productList;

    this.props.card.postAddCartModule({
      goodsId: data[0].goods_id,
      productId: data[0].id,
      number: this.state.count
    });

    Toast.success("添加成功", 1);
  };

  storeShop() {
    Toast.offline("下单功能还未开启，请观察版本更新", 1);
  }

  render() {
    let { getGoodsDetailData, goods } = this.props.classify;

    let { getCartNumData } = this.props.card;

    //商品规格
    let specs = getGoodsDetailData.attribute;
    //常见问题
    let issue = getGoodsDetailData.issue;
    //库存
    let img =
      getGoodsDetailData.info && getGoodsDetailData.info.primary_pic_url;
    let num = getGoodsDetailData.productList;
    //评论
    
    let discuss = this.props.special.getCommentListData;

    return (
      <div className="storeDetail_box">
        <div className="header">
          <h3>{getGoodsDetailData.info && getGoodsDetailData.info.name}</h3>
          <span onClick={() => this.props.history.goBack()}>&lt;</span>
        </div>
        <div className="article">
          {/* 轮播 */}
          <div className="swiperBox">
            <div className="swiper-container" ref={this.swiperContainer}>
              <div className="swiper-wrapper">
                {getGoodsDetailData.gallery &&
                  getGoodsDetailData.gallery.map(item => {
                    return (
                      <div className="swiper-slide" key={item.id}>
                        <img src={item.img_url} alt="" />
                      </div>
                    );
                  })}
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
          {/* 星星 */}
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
          <div className="content">
            <h3>{getGoodsDetailData.info && getGoodsDetailData.info.name}</h3>
            <div>
              {getGoodsDetailData.info && getGoodsDetailData.info.goods_brief}
            </div>
            <div className="price">
              ￥
              {getGoodsDetailData.info && getGoodsDetailData.info.retail_price}
            </div>
          </div>
          <div className="norms" onClick={() => this.goodsMask()}>
            <span className="color_num">x&nbsp;{this.state.count}</span>
            <span>选择规格&nbsp;&gt;</span>
          </div>
          {/* 评论 */}
          <div className="commentGoods">
         
            <div className="commentTop">
              
              <span>评论 ({discuss[0] && discuss.length})</span>
              {discuss[0] && discuss[0] ? (
                <span
                  onClick={() =>
                    this.props.history.push(
                      `/comment/${this.props.match.params.id}`
                    )
                  }
                >
                  查看全部&gt;
                </span>
              ) : (
                ""
              )}
            </div>
           
            {discuss[0] && discuss[0] ? (
              <div className="commentCont">
                <p>
                  <span>匿名用户</span>
                  <span>{discuss && discuss[0].add_time}</span>
                </p>
                <div>{discuss && discuss[0].content}</div>
                <div>
                  <img src={discuss[0] && discuss[0].pic_list[0].pic_url} alt="" />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          {/* 商品参数 */}
          <div className="communal parameters">
            <p>商品参数</p>
            <ul>
              {specs &&
                specs.map((file, index) => (
                  <li key={"specs" + index}>
                    <span className="left_specs">{file.name}</span>
                    <span className="right_specs">{file.value}</span>
                  </li>
                ))}
            </ul>
          </div>
          <div className="detailBox">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  getGoodsDetailData.info && getGoodsDetailData.info.goods_desc
              }}
            />
          </div>
          {/* 常见问题 */}
          <div className="communal question">
            <p>常见问题</p>
            {issue &&
              issue.map(file => (
                <div key={file.id} className="problemWrap">
                  <div>
                    <span>√</span>
                    {file.question}
                  </div>
                  <div style={{ color: "#666" }}>{file.answer}</div>
                </div>
              ))}
          </div>
          {/* 相关商品 */}
          <div className="communal related">
            <p>大家都在看</p>
            <div className="blend">
              {goods &&
                goods.map(file => <ImgBlend list={file} key={file.id} {...this.props}/>)}
            </div>
          </div>
        </div>
        <div className="footer">
          <span>
            <i
              className={
                getGoodsDetailData.userHasCollect === 0
                  ? "iconfont icon-shoucang2"
                  : "iconfont icon-shoucang2 start"
              }
              onClick={e => this.addStore(e)}
            />
          </span>
          <span
            onClick={() =>
              this.props.history.push({ pathname: "/main/ShoppingIndex" })
            }
          >
            <i className="iconfont icon-gouwuche-xuanzhong" />
            {getCartNumData && getCartNumData.goodsCount}
          </span>
          <div className="btn">
            <button className="add_cardbtn" onClick={() => this.goodsMask()}>
              加入购物车
            </button>
            <button
              className="add_shopbtn"
              onClick={() => {
                this.storeShop();
              }}
            >
              立即购买
            </button>
          </div>
        </div>
        <Drawer
          placement="bottom"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <div className="goodscart_list">
            <dl>
              <dt>
                <img src={img} alt="" />
              </dt>
              <dd>
                <div>
                  单价：<span>￥{num && num[0].retail_price}</span>
                </div>
                <div>
                  库存：<span>￥{num && num[0].goods_number}</span>
                </div>
                <div>已选择：</div>
              </dd>
            </dl>
            <div className="goods_money">
              <div>数量:</div>
              <div>
                <span onClick={() => this.changeCount("-")}>-</span>
                <span>{this.state.count}</span>
                <span onClick={() => this.changeCount("+")}>+</span>
              </div>
            </div>
            <div className="goodsBtn">
              <button className="add_cardbtn" onClick={() => this.joinCart()}>
                加入购物车
              </button>
              <button
                className="add_shopbtn"
                onClick={() => {
                  this.storeShop();
                }}
              >
                立即下单
              </button>
            </div>
            <div
              className="close"
              onClick={() => {
                this.onClose();
              }}
            >
              X
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default StoreDetail;
