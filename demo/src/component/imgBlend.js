import React, { Component } from 'react'
import {withRouter} from "react-router-dom";


 class imgBlend extends Component {

    render() {
       let {list}=this.props;
        return (
            <dl style={{marginBottom:0}} >
              <a href={`/storeDetail/${list.id}`}>
                <dt><img src={list.list_pic_url} alt=""></img></dt>
                <dd>
                    <div>{list.name}</div>
                    <span>￥{list.retail_price}</span>
                </dd></a>
            </dl>
        )
    }
}

export default withRouter(imgBlend)



