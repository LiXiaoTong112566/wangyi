import React, { Component } from 'react'

export default class imgBlend extends Component {
    render() {
       let {list}=this.props;
        return (
            <dl>
                <dt><img src={list.list_pic_url} alt=""></img></dt>
                <dd>
                    <div>{list.name}</div>
                    <span>￥{list.retail_price}</span>
                </dd>
            </dl>
        )
    }
}
