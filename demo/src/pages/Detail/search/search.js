import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import "./search.scss";
import { SearchBar, Icon } from "antd-mobile";

import ImgBlend from "../../../component/imgBlend";
@inject("search")
@observer
class Search extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      flag: -1,
      show: true,
      navInd: 0,
      classifyInd: 0,
      classNameFlag: 1,
      iconFlag: -1
    };
    this.allClassify = React.createRef();
  }

  //input框的值得变化
  onChange = value => {
    if (value) {
      this.setState({
        value: value,
        flag: 1,
        show: true
      });

      this.props.search.getGoodsSearchKey({ keyword: value });
    } else {
      this.setState({
        value: value,
        flag: -1
      });
    }

    this.setState({
      show: true
    });
  };
  //按回车搜索
  postData = () => {
    this.setState({
      show: false
    });
    this.props.search.getGoodsListModule({ keyword: this.state.value });
  };

  //点击列表搜素内容
  searchData = e => {
    if (e.nativeEvent.target.tagName === "LI") {
      let data = e.nativeEvent.target.innerHTML;
      this.setState({
        show: false
      });
      this.props.search.getGoodsListModule({ keyword: data });
    }
  };

  //全部分类内容的显示和隐藏
  changeActive = (e, ind) => {
    this.setState({
      classNameFlag: ind
    });
    this.allClassify.current.classList.toggle("show");
  };

  //点击内容搜索
  getSearchTargetData = e => {
    if (e.nativeEvent.target.tagName === "LI") {
      this.setState(
        {
          value: e.nativeEvent.target.innerHTML
        },
        () => {
          this.props.search.getGoodsListModule({ keyword: this.state.value });
          this.setState({
            flag: 1,
            show: false
          });
        }
      );
    }
  };
  //删除记录
  delData = () => {
    this.props.search.getDeleteGoodsSearchHistoryModule();
  };

  //点击综合和价格导航切换样式
  changeNavActive = (e, ind) => {
    this.setState({
      classNameFlag: ind
    });
    //让全部分类隐藏
    if (this.allClassify.current.className.indexOf("show") > -1) {
      this.allClassify.current.classList.remove("show");
    }

    //获取数据

    //am-icon-down am-icon-up
    if (e.nativeEvent.target.innerHTML === "综合") {
      this.props.search.getGoodsListModule({
        keyword: this.state.value,
        order: "default"
      });
    }
  };
  //根据价格进行升降排序

  getNewData(type) {
    if (type === "up") {
      this.setState({
        iconFlag: 1
      });
      this.props.search.getGoodsListModule({
        keyword: this.state.value,
        sort: "price",
        order: "asc"
      });
    } else if (type === "down") {
      this.setState({
        iconFlag: 2
      });

      this.props.search.getGoodsListModule({
        keyword: this.state.value,
        sort: "price",
        order: "desc"
      });
    }
  }

  //分类的筛选
  classifyFn = (id, ind, name) => {
    this.setState({
      classifyInd: ind
    });

    if (this.allClassify.current.className.indexOf("show") > -1) {
      this.allClassify.current.classList.remove("show");
    }

    this.refs.all.innerHTML = name + "分类";

    this.props.search.getGoodsListModule({
      keyword: this.state.value,
      sort: "price",
      order: "desc",
      categoryId: id
    });
  };

  componentDidMount() {
    this.props.search.getGoodsSearchMsg();
  }
  render() {
    let { getGoodsSearchKeyData, getGoodsListData } = this.props.search;

    return (
      <div className="searchBox">
        <div className="header">
          <span
            className="back"
            onClick={() => {
              this.props.history.goBack();
            }}
          >
            &lt;
          </span>
          <SearchBar
            value={this.state.value}
            placeholder={
              this.props.search.getGoodsSearchData &&
              this.props.search.getGoodsSearchData.defaultKeyword.keyword
            }
            onChange={this.onChange}
            showCancelButton="true"
            onSubmit={this.postData}
          />
        </div>
        <div className="main">
          {/* 历史记录 */}

          {this.state.flag === -1 ? (
            <div className="searchList">
              <div className="historyMain">
                <div className="headerRecord">
                  <span>历史记录</span>
                  <span
                    onClick={() => {
                      this.delData();
                    }}
                  >
                    删除
                  </span>
                </div>
                <ul
                  className="historyMain_content"
                  onClick={e => {
                    this.getSearchTargetData(e);
                  }}
                >
                  {this.props.search.getGoodsSearchData &&
                    this.props.search.getGoodsSearchData.historyKeywordList.map(
                      (item, index) => {
                        return <li key={index}>{item}</li>;
                      }
                    )}
                </ul>
              </div>

              <div className="hotSearch">
                <div className="hotSearch_header">热门搜索</div>

                <ul
                  className="hotSearch_list"
                  onClick={e => {
                    this.getSearchTargetData(e);
                  }}
                >
                  {this.props.search.getGoodsSearchData &&
                    this.props.search.getGoodsSearchData.hotKeywordList.map(
                      (item, index) => {
                        return (
                          <li
                            className={item.is_hot === 1 ? "active" : ""}
                            key={"hot" + index}
                          >
                            {item.keyword}
                          </li>
                        );
                      }
                    )}
                </ul>
              </div>
            </div>
          ) : (
            <div className="searchListBox">
              {this.state.show ? (
                <ul
                  className="searchListBox_ul"
                  onClick={e => this.searchData(e)}
                >
                  {getGoodsSearchKeyData &&
                    getGoodsSearchKeyData.map((item, index) => {
                      return <li key={"ul" + index}>{item}</li>;
                    })}
                </ul>
              ) : (
                <div className="searchList_main">
                  <div className="searchListMain_header">
                    <ul className="searchListMainHeader_filter" ref="searchNav">
                      <li
                        className={
                          this.state.classNameFlag === 1 ? "active" : ""
                        }
                        onClick={e => {
                          this.changeNavActive(e, 1);
                        }}
                      >
                        综合
                      </li>
                      <li
                        className={
                          this.state.classNameFlag === 2
                            ? "price active"
                            : "price"
                        }
                        onClick={e => {
                          this.changeNavActive(e, 2);
                        }}
                      >
                        价格
                        <span>
                          <Icon
                            type="up"
                            className={
                              this.state.iconFlag === 1 ? "actives" : ""
                            }
                            onClick={() => this.getNewData("up")}
                          />

                          <Icon
                            type="down"
                            className={
                              this.state.iconFlag === 2 ? "actives" : ""
                            }
                            onClick={() => this.getNewData("down")}
                          />
                        </span>
                      </li>
                      <li
                        className={
                          this.state.classNameFlag === 3 ? "active" : ""
                        }
                        onClick={e => {
                          this.changeActive(e, 3);
                        }}
                        ref="all"
                      >
                        全部分类
                      </li>
                    </ul>
                    <div ref={this.allClassify} className="isShow">
                      <ul className="allClassifyBox">
                        {getGoodsListData &&
                          getGoodsListData.filterCategory.map((item, index) => {
                            return (
                              <li
                                className={
                                  index === this.state.classifyInd
                                    ? "active"
                                    : ""
                                }
                                key={item.id}
                                onClick={() => {
                                  this.classifyFn(item.id, index, item.name);
                                }}
                              >
                                {item.name}
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </div>

                  <div className="searchListMain_main">
                    {getGoodsListData &&
                      getGoodsListData.data.map((item, index) => {
                        return <ImgBlend key={"main" + index} list={item} />;
                      })}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
