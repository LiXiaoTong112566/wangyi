import React, { Component } from 'react'
import "./homeIndex.scss"
import ReactSwipe from "react-swipe"
import {Icon} from "antd"
class homeIndex extends Component {
   
    render() {
        let opt = {
            auto: 1000,
            autoPlay: true,
          }
        return (
            <>
                <div className="banner">
                    <ReactSwipe className="card-slide" swipeOptions={opt}>
                        <div><img src="http://p0.meituan.net/movie/6309046b820ed1de6971d8fe19d3c3d892027.jpg" alt=""/></div>
                    </ReactSwipe>
                </div>
               <div className="easyList">
                    <dl>
                        
                    </dl>
               </div>
            </>
        )
    }
}
export default homeIndex
