import React, { Component } from 'react'
import ImgBlend from "./imgBlend"

export default class shopList extends Component {
    render() {
        let {list,type}= this.props;
        console.log(list)
        return (
            <div className="blend">
              {list&&list.map(file=>
                <ImgBlend key={file.id} list={file}></ImgBlend>
                )}
                <div className="more_things">
                    更多{type}好物
                </div>
            </div>
        )
    }
}
