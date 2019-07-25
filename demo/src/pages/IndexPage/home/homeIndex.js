import React, { Component } from 'react'
import "./homeIndex.scss"
import ReactSwipe from "react-swipe"
import {inject, observer} from 'mobx-react';

@inject('indexPageModule')
@observer
class homeIndex extends Component {
    componentDidMount(){
        let {indexPageModule}=this.props;
        indexPageModule.changeCount()
    }
    render() {
        let count =this.props.indexPageModule.count;
       if(Object.keys(count).length>0){
            var banner = count.banner;
            var channel = count.channel;
            var brandList = count.brandList;
       }
        let opt = {
            auto: 1000,
            autoPlay: true,
          }
         
        return (
            <>
                <div className="banner">
                    <ReactSwipe className="card-slide" swipeOptions={opt}>
                        {banner&&banner.map(file=><div key={file.id}><img src={file.image_url} alt=""/></div>)}
                    </ReactSwipe>
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
                <div className="directSupply">
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
            </>
        )
    }
}
export default homeIndex;
