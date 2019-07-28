import React, { Component } from "react";
import "./topicDetail.scss";
import { inject, observer } from "mobx-react";
@inject("special")
@observer
class TopicDetail extends Component {

    constructor(){
        super();
        this.state={
            id:"",
        }
    }
  componentDidMount() {
    let id = this.props.match.params.id;
    this.setState({
        id:id,
    })
    //获取到详情
    this.props.special.getTopicDetailModule({ id: id });

    //获取到推荐的专题
    this.props.special.getTopicDetailRelatedModule({ id: id });
    //获取评论区的数据
    this.props.special.getCommentListModule({ valueId: id, typeId: 1,page:1,size:5 });
  }
  render() {
    let { getTopicDetailData, getTopicDetailRelatedData,getCommentListData } = this.props.special;
    console.log(getCommentListData);

    return (
      <div className="topicDetailBox">
        {/* 头部 */}
        <div className="header">
          <span onClick={()=>{this.props.history.goBack()}}>&lt;</span>
          <h3>{getTopicDetailData && getTopicDetailData.title}</h3>
        </div>
        {/* 主题 */}
        <div className="main">
          <div
            dangerouslySetInnerHTML={{
              __html: getTopicDetailData && getTopicDetailData.content
            }}
          />
        </div>
        {/* 评论 */}
        <div className="comment">
          <div className="comment_header">
            <h3>精选留言</h3>
            <span onClick={()=>{this.props.history.push({pathname:`/addComment/${this.state.id}`})}}>添加</span>
          </div>
          <div className="comment_main">
            {getCommentListData.data&&getCommentListData.data.map((item, index) => {
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

          <div className="more_comment" onClick={()=>this.props.history.push({pathname:`/moreComment/${this.state.id}`})}>
              <h3>查看更多评论</h3>
          </div>
        </div>

        {/* 推荐主题 */}

        <div className="aboutSpecial">
          <h3>推荐专题</h3>
          <div className="list">
            {getTopicDetailRelatedData &&
              getTopicDetailRelatedData.map((item, index) => {
                return (
                  <dl key={item.id}>
                    <dt>
                      <img src={item.scene_pic_url} alt="" />
                    </dt>
                    <dd>{item.title}</dd>
                  </dl>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default TopicDetail;
