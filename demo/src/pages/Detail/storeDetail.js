import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import "./storeData.scss";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import ImgBlend from "../../component/imgBlend"
import {Icon,Drawer} from "antd"

@inject("classify")
@observer
class StoreDetail extends Component {
  constructor() {
    super();
    this.state = {
      storeData: [],
      visible:false
    };

    this.swiperContainer=React.createRef();
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.classify.getGoodsDetailModule({ id: id });
    this.props.classify.GoodsCommodities({id:id})
  }
  componentDidUpdate(){
    let container=this.swiperContainer.current;
    new Swiper(container,{
        autoplay:true,
        loop:true,
        pagination: {
            el: '.swiper-pagination',
          }
    })

  }
  goodsMask(){
    this.setState({
      visible: true,
    });
  }
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    let { getGoodsDetailData,goods } = this.props.classify;
  
    //商品规格
    let  specs = getGoodsDetailData.attribute;
    //常见问题
    let  issue = getGoodsDetailData.issue;
    //库存
    let img =getGoodsDetailData.info&&getGoodsDetailData.info.primary_pic_url;
    let num = getGoodsDetailData.productList;
    return (
      <div className="storeDetail_box">
        <div className="header">
          <h3>{getGoodsDetailData.info && getGoodsDetailData.info.name}</h3>
          <span onClick={()=>this.props.history.goBack()}>&lt;</span>
        </div>
        <div className="article">
           {/* 轮播 */}
            <div className="swiperBox">
              <div className="swiper-container" ref={this.swiperContainer}>
                <div className="swiper-wrapper">
                    {getGoodsDetailData.gallery&&getGoodsDetailData.gallery.map((item,index)=>{
                        return (
                          <div className="swiper-slide" key={item.id}><img src={item.img_url} alt=""/></div>
                        )
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
                <div>{getGoodsDetailData.info && getGoodsDetailData.info.goods_brief}</div>
                <div className="price">
                   ￥{getGoodsDetailData.info&& getGoodsDetailData.info.retail_price}
                </div>
            </div>
            <div className="norms" onClick={()=>this.goodsMask()}>
                <span className="color_num">x&nbsp;{0}</span>
                <span>选择规格&nbsp;&gt;</span>
            </div>
            {/* 商品参数 */}
            <div className="communal parameters">
                <p>商品参数</p>
                <ul>
                  {specs&&specs.map((file,index)=><li key={"specs"+index}>
                     <span className="left_specs">{file.name}</span>
                     <span className="right_specs">{file.value}</span>
                   </li>)}
                </ul>  
            </div>
            <div className="detailBox">
              <div dangerouslySetInnerHTML={{__html:getGoodsDetailData.info&&getGoodsDetailData.info.goods_desc}}>
              </div>
            </div>
            {/* 常见问题 */}
            <div className="communal question">
              <p>常见问题</p>
              {issue&&issue.map(file=><div key={file.id} className="problemWrap">
                    <div><span>√</span>{file.question}</div>
                    <div style={{color:"#666"}}>{file.answer}</div>
              </div>)}
            </div>
            {/* 相关商品 */}
            <div className="communal related">
               <p>大家都在看</p>
               <div className="blend">
                  {goods&&goods.map(file=>
                      <ImgBlend list={file} key={file.id}></ImgBlend>
                    )}
               </div>
               
            </div>
        </div>
        <div className="footer">
            <span><Icon type="star"/></span>
            <span><Icon type="shopping-cart"/>0</span>
            <div className="btn">
               <button style={{background:"orangered"}}>加入购物车</button>
               <button style={{background:"skyblue"}}>立即购买</button>
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
                  <img src={img} alt=""></img>
                </dt>
                <dd>
                  <div>单价：<span>￥{num&&num[0].retail_price}</span></div>
                  <div>库存：<span>￥{num&&num[0].goods_number}</span></div>
                  <div>已选择：</div>
                </dd>
              </dl>
              <div className="goods_money">
                <div>数量:</div>
                <div>
                    <span>-</span>
                    <span>0</span>
                    <span>+</span>
                </div>
              </div>
              <div className="goodsBtn">
               <button style={{background:"orangered"}}>加入购物车</button>
               <button style={{background:"skyblue"}}>立即下单</button>
             </div>
          </div>
          
        </Drawer>
      </div>
    );
  }
}

export default StoreDetail;
