import React, { Component } from 'react'
import {inject, observer} from 'mobx-react';

import "./brandDetail.scss"

@inject("indexPageModule")
@observer
class BrandDetail extends Component {
    componentDidMount(){
        let {indexPageModule}=this.props;
        let ids = this.props.match.params.id
        indexPageModule.brandDetail(ids)
    }
    goback(){
        this.props.history.goBack()
    }
    render() {
      let store = this.props.indexPageModule.count.brand || [];
      console.log(store)
        return (
            <div className="brand_Detail">
                <div className="detail_top"><span onClick={()=>this.goback()}>&lt;</span>{store.name}</div>
                <div className="detail_img">
                    <img src={store.app_list_pic_url}></img>
                </div>
                <div className="title">
                    {store.simple_desc}
                </div>
            </div>
        )
    }
}
export default BrandDetail