import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import BScroll from "better-scroll";
import "./storeData.scss";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";


@inject("classify")
@observer
class StoreDetail extends Component {
  constructor() {
    super();

    this.state = {
      storeData: []
    };

    this.swiperContainer=React.createRef();
  }

  componentDidMount() {
    console.log(this.props);
    let id = this.props.match.params.id;
    this.props.classify.getGoodsDetailModule({ id: id });
    
    
  }
  componentDidUpdate(){
    let container=this.swiperContainer.current;
    let swiperData =new Swiper(container,{
        autoplay:true,
        loop:true,
        pagination: {
            el: '.swiper-pagination',
          },

    })

  }


  render() {
    let { getGoodsDetailData } = this.props.classify;
    console.log(this.props.classify);
    console.log(getGoodsDetailData);
    return (
      <div className="storeDetail_box">
        <div className="header">
          <h3>{getGoodsDetailData.info && getGoodsDetailData.info.name}</h3>
          <span>&lt;</span>
        </div>

        <div className="swiperBox">
        <div className="swiper-container" ref={this.swiperContainer}>
          <div className="swiper-wrapper">
              {getGoodsDetailData.gallery&&getGoodsDetailData.gallery.map((item,index)=>{
                  return (
                    <div className="swiper-slide" key={item.id}><img src={item.img_url} alt=""/></div>
                  )
              })}
          </div>
          <div className="swiper-pagination"/>
        </div>
        </div>

        <ul className="service">
            <li>
                <span>★</span>
                <b>30天无忧退货</b>
            </li>
            <li>
            <span>★</span>
                <b>48小时快速退款</b>

            </li>
            <li>
            <span>★</span>
                <b>满88包邮</b>
            </li>

        </ul>

        <div className="content">
            <h3>{getGoodsDetailData.info && getGoodsDetailData.info.name}</h3>
            <div>{getGoodsDetailData.info && getGoodsDetailData.info.goods_brief}</div>
            <div className="price"><b>￥{getGoodsDetailData.info&& getGoodsDetailData.info.retail_price}</b></div>

        </div>

        <div className="detailBox">
         
          <div  dangerouslySetInnerHTML={{__html:getGoodsDetailData.info&&getGoodsDetailData.info.goods_desc}}>
          </div>

        </div>

      </div>
    );
  }
}

export default StoreDetail;
