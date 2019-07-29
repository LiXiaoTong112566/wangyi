import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class imgBlend extends Component {
  jumpStoreDetail(id) {
    this.props.history.push({ pathname: `/storeDetail/${id}` });
  }

  render() {
    let { list } = this.props;

    return (
      <dl
        style={{ marginBottom: 0 }}
        onClick={() => this.jumpStoreDetail(list.id)}
      >
        <dt>
          <img src={list.list_pic_url} alt="" />
        </dt>
        <dd>
          <div>{list.name}</div>
          <span>￥{list.retail_price}</span>
        </dd>
      </dl>
    );
  }
}

export default withRouter(imgBlend);
