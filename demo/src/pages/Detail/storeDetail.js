import React, { Component } from "react";
import { inject, observer } from "mobx-react";
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
    let id = this.props.match.params.id;
    this.props.classify.getGoodsDetailModule({ id: id });
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

  render() {
    let { getGoodsDetailData } = this.props.classify;
    //商品规格
    let  specs = getGoodsDetailData.attribute;
    //常见问题
    let  issue = getGoodsDetailData.issue;
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
            <div className="norms">
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
        </div>
        <div className="footer">
            购物车
        </div>
      </div>
    );
  }
}

export default StoreDetail;
