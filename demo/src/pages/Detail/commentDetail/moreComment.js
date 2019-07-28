import React, { Component } from "react";
import "./moreComment.scss";

import { inject, observer } from "mobx-react";
@inject("special")
@observer
class MoreComment extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    //获取评论区的数据
    this.props.special.getCommentListModule({ valueId: id, typeId: 1,page:1,size:100 });
  }

  render() {
    let {getCommentListData } = this.props.special;
    console.log(getCommentListData);
    return (
      <div className="moreCommentBox">
        <div className="moreCommentBox_header">
          <span onClick={()=>{this.props.history.goBack()}}>&lt;</span>
          <h3>查看更多评论</h3>
        </div>

        <div className="moreCommentBox_main">
          {getCommentListData.data &&
            getCommentListData.data.map((item, index) => {
              return (
                <dl className="comment_list" key={item.id}>
                  <dt>
                    <span>匿名用户</span>
                    <span className="time">{item.add_time}</span>
                  </dt>
                  <dd>{item.content}</dd>
                </dl>
              );
            })}
        </div>
      </div>
    );
  }
}

export default MoreComment;
