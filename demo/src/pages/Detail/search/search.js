import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import "./search.scss";
import { SearchBar, Button, WhiteSpace, WingBlank } from "antd-mobile";
@inject("search")
@observer
class Search extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      flag: -1
    };
  }

  onChange = value => {
    this.setState({
      value: value,
      flag: 1
    });
  };

  componentDidMount(){
      console.log(123);

      this.props.search.getGoodsSearchMsg();



  }
  render() {
    console.log(this.props.search.getGoodsSearchData);
      //const {historyKeywordList,hotKeywordList}=this.props.search.getGoodsSearchData.historyKeywordList.length&&this.props.search.getGoodsSearchData;

    
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
            placeholder={this.props.search.getGoodsSearchData&&this.props.search.getGoodsSearchData.defaultKeyword.keyword}
            onChange={this.onChange}
            showCancelButton="true"
          />
        </div>
        <div className="main">
          {/* 历史记录 */}
          <div className="searchList">
            <div className="historyMain">
              <div className="header">
                <span>历史记录</span>
                <span>删除</span>
              </div>
              <ul className="historyMain_content">
               {this.props.search.getGoodsSearchData&&this.props.search.getGoodsSearchData.historyKeywordList.map((item,index)=>{
                   return <li key={index}>{item}</li>
               })}
              </ul>
            </div>

            <div className="hotSearch">
                <div className="hotSearch_header">
                    热门搜索
                </div>

                <ul className="hotSearch_list">
                {this.props.search.getGoodsSearchData&&this.props.search.getGoodsSearchData.hotKeywordList.map((item,index)=>{
                   return <li key={"hot"+index}>{item.keyword}</li>
               })}

                </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
