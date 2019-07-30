import React, { Component } from "react";

export class ShopEdit extends Component {
  render() {
    let {data}=this.props;
    return (
      <div className="item">
       <div className="check">
           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC" alt=""/>
       </div>
       <div className="img">
           <img src={data.list_pic_url} alt=""/>

       </div>
       <div className="itemBox_main">
           <h3>已选择:{data.goods_name}</h3>
           <div className="numPrice">
               <div className="price">￥{data.market_price}</div>

               <div className="numBox">
                   <span>-</span>
                   <span className="num">{data.number}</span>
                   <span>+</span>
               </div>

           </div>


       </div>
       
        
      </div>
    );
  }
}

export default ShopEdit;
