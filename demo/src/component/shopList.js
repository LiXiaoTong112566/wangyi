import React, { Component } from "react";
import ImgBlend from "./imgBlend";

export default class shopList extends Component {

 
  jumpTopicDetail(data) {
    this.props.history.push({ pathname: `/classifyDetail/${data}` });
  }

  render() {
    let { data, type, id } = this.props;
    console.log(data);

    return (
      <div className="blend">
        
        {data && data.map(item => <ImgBlend key={item.id} list={item} {...this.props}/>)}
        <div
          className="more_things"
          onClick={() => {
            this.jumpTopicDetail(id);
          }}
        >
          更多{type}好物
        </div>
      </div>
    );
  }
}
