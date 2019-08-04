import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import ImgBlend from "../../../../component/imgBlend";
import "./brandDetail.scss";

@inject("indexPageModule", "detailList")
@observer
class BrandDetail extends Component {
  componentDidMount() {
    let { indexPageModule, detailList } = this.props;
    let ids = this.props.match.params.id;
    indexPageModule.brandDetail(ids);
    detailList.list(ids);
  }
  goback() {
    this.props.history.goBack();
  }
  render() {
    let store = this.props.indexPageModule.count.brand || [];
    let list = this.props.detailList.state || [];
    return (
      <div className="brand_Detail">
        <div className="detail_top">
          <span onClick={() => this.goback()}>&lt;</span>
          {store.name}
        </div>
        <div className="detail_subject">
          <div className="detail_img">
            <img src={store.app_list_pic_url} alt="" />
          </div>
          <div className="title">{store.simple_desc}</div>
          <div className="detail_shop">
            {list.length > 0
              ? list.map(file => <ImgBlend key={file.id} list={file} {...this.props}/>)
              : ""}
          </div>
        </div>
      </div>
    );
  }
}
export default BrandDetail;
