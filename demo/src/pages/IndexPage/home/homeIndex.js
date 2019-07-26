import React, { Component } from 'react'
import "./homeIndex.scss"
//import ReactSwipe from "react-swipe"
import Swiper from "swiper";
import "./swiper.css"
import {inject, observer} from 'mobx-react';
import ImgBlend from "../../../component/imgBlend"

@inject('indexPageModule')
@observer
class homeIndex extends Component {
    componentDidMount(){
        let {indexPageModule}=this.props;
        indexPageModule.changeCount()
        let {ban,pagination,card}= this.refs
        new Swiper(ban,{
            pagination: {
                el: pagination,
              }
        })
        new Swiper(card,{
           loop:true
        })
    }
    render() {
        let count =this.props.indexPageModule.count;
       if(Object.keys(count).length>0){
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
       }
       
        return (
            <>
                <div className="banner">
                    <div className="swiper-container" ref="ban">
                       <div className="swiper-wrapper">
                         {banner&&banner.map(file=>
                            <div key={file.id} className="swiper-slide">
                              <img src={file.image_url} alt=""/>
                            </div>
                          )}
                       </div>
                       <div className="swiper-pagination" ref="pagination"></div>
                    </div>
                    
                </div>
                <div className="easyList">
                    {channel&&channel.map(file=>
                       <dl key={file.id}>
                          <dt>
                              <img src={file.icon_url}></img>
                          </dt>
                          <dd>{file.name}</dd>
                       </dl>
                    )}
                </div>
                <div className="dlslist">
                    <p>品牌制造商直供</p>
                    <div className="dls">
                      {brandList&&brandList.map(file=>
                         <div className="dlImg" key={file.id} style={{background:`url(${file.new_pic_url})`,backgroundSize:"100%"}}>
                             <div>
                                 <h5>{file.name}</h5>
                                 <span>{file.floor_price}元起</span>
                             </div>
                         </div>
                        )}
                    </div>  
                </div>
                <div className="dlslist">
                    <p>新品首发</p>
                    <div className="blend">
                       {newGoodsList&&newGoodsList.map(file=>
                          <ImgBlend key={file.id}  list={file}></ImgBlend>
                        )}
                    </div>
                </div>
                <div className="dlslist">
                    <p>人气推荐</p>
                    <div className="blend hot_blend">
                      {hotGoodsList&&hotGoodsList.map(file=>
                          <dl key={file.id}>
                              <dt><img src={file.list_pic_url}></img></dt>
                              <dd>
                                  <div>{file.name}</div>
                                  <div style={{color:"#ccc"}}>{file.goods_brief}</div>
                                  <span>￥{file.retail_price}</span>
                              </dd>
                          </dl>
                        )}
                    </div>
                </div>
                <div className="dlslist">
                    <p>专题精选</p>
                    <div className="swiper-container card-slide" ref="card">
                       <div className="swiper-wrapper">
                         {topicList&&topicList.map(file=>
                            <dl key={file.id} className="swiper-slide">
                               <dt><img src={file.scene_pic_url} alt=""/></dt> 
                               <dd>
                                   <div>{file.title}<span>￥{file.price_info}元起</span></div>
                                   <div style={{color:"#ccc"}}>{file.subtitle}</div>
                               </dd>
                            </dl>
                          )}
                       </div>
                    </div>
                </div>
            </>
        )
    }
}
export default homeIndex;
