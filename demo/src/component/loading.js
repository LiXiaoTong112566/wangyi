import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("loading")
@observer
class Loading extends Component {
  render() {
    if (!this.props.loading.isLoading) {
      return null;
    }
    return (
      <div className="loadingBox">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564836623294&di=71447ea406da267277c8e7d33dc6c3c4&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F4e609cbc57e0f26b2e03ccdd163d1d99ebce1e543fc9d-YUS1p5_fw658"
          alt=""
        />
      </div>
    );
  }
}

export default Loading;
