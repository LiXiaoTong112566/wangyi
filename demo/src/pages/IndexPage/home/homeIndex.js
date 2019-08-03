import React, { Component } from "react";
import "./homeIndex.scss";

import ProgressiveImage from "react-progressive-image";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import { inject, observer } from "mobx-react";
import ImgBlend from "../../../component/imgBlend";
import ShopList from "../../../component/shopList";

@inject("indexPageModule")
@observer
class homeIndex extends Component {
  componentDidMount() {
    let { indexPageModule } = this.props;
    indexPageModule.changeCount();
  }

  componentDidUpdate() {
    let { ban, pagination, card } = this.refs;
    new Swiper(ban, {
      autoplay: true,
      loop: true,
      pagination: {
        el: pagination,
        disableOnInteraction: false,
      }
    });
    new Swiper(card, {
      loop: true,
      waitForTransition: false,
    });
  }
  brandDetail(ids) {
    let { history } = this.props;
    history.push({ pathname: `/brandDetail/${ids}` });
  }

  jumpClassifyDetail(id, index) {
    localStorage.setItem("index", index);
    this.props.history.push({ pathname: `/classifyDetail/${id}` });
  }
  render() {
    let count = this.props.indexPageModule.count;
    if (Object.keys(count).length > 0) {
      //轮播图
      var banner = count.banner;
      //导航
      var channel = count.channel;
      //品牌制造商直供
      var brandList = count.brandList;
      //新品首发
      var newGoodsList = count.newGoodsList;
      //人气推荐
      var hotGoodsList = count.hotGoodsList;
      //专题精选
      var topicList = count.topicList;
      // list
      var categoryList = count.categoryList;
    }

    return (
      <>
        <div className="banner">
          <div className="swiper-container" ref="ban">
            <div className="swiper-wrapper">
              {banner &&
                banner.map(file => (
                  <div key={file.id} className="swiper-slide">
                  
                    <img src={file.image_url} alt="" />
                  </div>
                ))}
            </div>
            <div className="swiper-pagination" ref="pagination" />
          </div>
        </div>
        <div className="easyList">
          {channel &&
            channel.map((file, index) => (
              <dl
                key={file.id}
                onClick={() => {
                  this.jumpClassifyDetail(file.id, index);
                }}
              >
                <dt>
                <ProgressiveImage
                          src={file.icon_url}
                          placeholder="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564683988647&di=089d64d919c0d8b1c2d7d34679951d4d&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0168905ad83519a801213867ae45cf.gif"
                        >
                          {src => <img src={src} alt="" />}
                        </ProgressiveImage>
                </dt>
                <dd>{file.name}</dd>
              </dl>
            ))}
        </div>
        <div className="dlslist">
          <p>品牌制造商直供</p>
          <div className="dls">
            {brandList &&
              brandList.map(file => (
                <div
                  className="dlImg"
                  key={file.id}
                  style={{
                    background: `url(${file.new_pic_url})`,
                    backgroundSize: "100%"
                  }}
                  onClick={() => this.brandDetail(file.id)}
                >
                  <div>
                    <h5>{file.name}</h5>
                    <span>{file.floor_price}元起</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="dlslist">
          <p>新品首发</p>
          <div className="blend">
            {newGoodsList &&
              newGoodsList.map(file => (
                <ImgBlend key={file.id} list={file} {...this.props} />
              ))}
          </div>
        </div>
        <div className="dlslist">
          <p>人气推荐</p>
          <div className="blend hot_blend">
            {hotGoodsList &&
              hotGoodsList.map(file => (
                <dl
                  key={file.id}
                  onClick={() => {
                    this.props.history.push({
                      pathname: `/storeDetail/${file.id}`
                    });
                  }}
                >
                  <dt>
                  <ProgressiveImage
                          src={file.list_pic_url}
                          placeholder="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564683988647&di=089d64d919c0d8b1c2d7d34679951d4d&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0168905ad83519a801213867ae45cf.gif"
                        >
                          {src => <img src={src} alt="" />}
                        </ProgressiveImage>
                  
                  
                    {/* <img src={file.list_pic_url} alt="" /> */}
                  </dt>
                  <dd>
                    <div>{file.name}</div>
                    <div style={{ color: "#ccc" }}>{file.goods_brief}</div>
                    <span>￥{file.retail_price}</span>
                  </dd>
                </dl>
              ))}
          </div>
        </div>
        <div className="dlslist">
          <p>专题精选</p>
          <div className="swiper-container card-slide" ref="card">
            <div className="swiper-wrapper">
              {topicList &&
                topicList.map(file => (
                  <dl
                    key={file.id}
                    className="swiper-slide"
                    onClick={() => {
                      this.props.history.push({
                        pathname: `/topicDetail/${file.id}`
                      });
                    }}
                  >
                    <dt>
                      <img src={file.scene_pic_url} alt="" />
                    </dt>
                    <dd>
                      <div>
                        {file.title}
                        <span>￥{file.price_info}元起</span>
                      </div>
                      <div style={{ color: "#ccc" }}>{file.subtitle}</div>
                    </dd>
                  </dl>
                ))}
            </div>
          </div>
        </div>
        <div className="shop_list dlslist">
          
          {categoryList &&
            categoryList.map(file => (
            
              <div key={file.id}>
                <p>{file.name}</p>
                <ShopList
                  data={file.goodsList}
                  type={file.name}
                  id={file.id}
                  {...this.props}
                />
              </div>
            ))}
        </div>
      </>
    );
  }
}
export default homeIndex;
