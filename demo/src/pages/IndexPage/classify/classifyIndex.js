import React, { Component } from "react";
import "./classifyIndex.scss";
import { NavLink } from "react-router-dom";
import { inject, observer } from "mobx-react";
import BScroll from "better-scroll";

@inject("classify")
@observer
class ClassifyIndex extends Component {
  constructor() {
    super();
    this.state = {
      ind: 0,
      id: 1005000 //左侧盒子的id
    };

    this.leftScrollBox = React.createRef();
    this.rightScrollBox = React.createRef();
  }

  componentDidMount() {
    this.props.classify.getCatalogInitModule();

    this.leftBscroll = new BScroll(this.leftScrollBox.current, {
      probeType: 2,
      click: true
    });

    this.rightBscroll = new BScroll(this.rightScrollBox.current, {
      probeType: 2,
      click: true
    });
  }

  //点击左侧切换右侧
  leftBoxChangeId(id, index) {
    this.setState({
      ind: index,
      id: id
    });
    this.props.classify.getCatalogMsgModule({ id: id });
  }

  //跳转到详情页

  jumpClassifyDetail(classifyId, index) {
    localStorage.setItem("classifyId", classifyId);
    localStorage.setItem("index", index);

    this.props.history.push({ pathname: `/classifyDetail/${classifyId}` });
  }

  render() {
    let { classifyLeftBoxData, classifyRightBoxData } = this.props.classify;

    return (
      <div className="classify_box">
        <div className="classify_header" onClick={()=>this.props.history.push({pathname:"/search"})}>搜索商品共239款好物</div>
        <div className="classify_main">
          <ul className="classifyLeftBox" ref={this.leftScrollBox}>
            <div className="leftBoxScroll">
              {classifyLeftBoxData &&
                classifyLeftBoxData.map((item, index) => {
                  return (
                    <li
                      key={item.id}
                      className={this.state.ind === index ? "active" : ""}
                      onClick={() => {
                        this.leftBoxChangeId(item.id, index);
                      }}
                    >
                      {item.name}
                    </li>
                  );
                })}
            </div>
          </ul>
          <div className="classifyRightBox" ref={this.rightScrollBox}>
            <div className="classifyRightScroll">
              <div className="RightBox_header">
                <img
                  src={
                    classifyLeftBoxData && classifyRightBoxData.wap_banner_url
                  }
                  alt=""
                />
                <span>
                  {classifyLeftBoxData && classifyRightBoxData.front_name}
                </span>
              </div>

              <h3>
                <b />
                <span>{classifyLeftBoxData && classifyRightBoxData.name}</span>
                分类<b />
              </h3>
              <div className="rightBox_main">
                {console.log(classifyRightBoxData.subCategoryList)}
                {classifyRightBoxData.subCategoryList &&
                  classifyRightBoxData.subCategoryList.map((item, index) => {
                    return (
                      <dl
                        key={item.id}
                        onClick={() => {
                          this.jumpClassifyDetail(item.id, index);
                        }}
                      >
                        <dt>
                          <img src={item.wap_banner_url} alt="" />
                        </dt>
                        <dd>{item.name}</dd>
                      </dl>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassifyIndex;
