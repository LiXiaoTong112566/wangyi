import React, { Component } from 'react'
import "./homeIndex.scss"
import ReactSwipe from "react-swipe"

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
             <div><img src="http://p0.meituan.net/movie/b06492e646a61c9bce9f08dc0f058c02151482.jpg" alt=""/></div>
             <div><img src="http://p0.meituan.net/movie/b64e58008e4883490cf60b466b75e595103754.jpg" alt=""/></div>
              </ReactSwipe>
                </div>
            </>
        )
    }
}
export default homeIndex
