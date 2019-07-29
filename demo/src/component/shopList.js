import React, { Component } from "react";
import ImgBlend from "./imgBlend";

export default class shopList extends Component {
  jumpTopicDetail(data) {
    this.props.history.push({ pathname: `/classifyDetail/${data}` });
  }

  render() {
    let { list, type, id } = this.props;

    return (
      <div className="blend">
        {list && list.map(file => <ImgBlend key={file.id} list={file} />)}
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
