import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import "./commit.scss";

@inject("special")
@observer
class Discuss extends Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.special.getCommentListModule({ valueId: id, typeId: 0 });
  }
  render() {
    let discuss = this.props.special.getCommentListData.data;

    return (
      <div className="discuss">
        <div className="header">
          <h3>查看更多评论</h3>
          <span onClick={() => this.props.history.goBack()}>&lt;</span>
        </div>
        <div className="subject">
          {discuss &&
            discuss.map(file => (
              <div className="commentCont" key={file.id}>
                <p>
                  <span>匿名用户</span>
                  <span>{discuss && file.add_time}</span>
                </p>
                <div>{discuss && file.content}</div>
                <div>
                  {file.pic_list.map(item => (
                    <img key={item.id} src={item.pic_url} alt="" />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
export default Discuss;
