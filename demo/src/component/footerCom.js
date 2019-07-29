import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../scss/fonts/iconfont.css"

export class FooterCom extends Component {
  render() {
    return (
      <>
        <span>
          <NavLink to="/main/homeIndex" activeClassName="active">
           <i className="iconfont icon-shouye"></i> 首页
          </NavLink>
        </span>
        <span>
          <NavLink to="/main/specialIndex" activeClassName="active">
           <i className="iconfont icon-zixun"></i> 
            专题
          </NavLink>
        </span>
        <span>
          <NavLink to="/main/classifyIndex" activeClassName="active">
          <i className="iconfont icon-gongzuo"></i> 
            分类
          </NavLink>
        </span>
        <span>
          <NavLink to="/main/ShoppingIndex" activeClassName="active">
          <i className="iconfont icon-gouwuche"></i> 
            购物车
          </NavLink>
        </span>
        <span>
          <NavLink to="/main/MyIndex" activeClassName="active">
          <i className="iconfont icon-wode"></i> 
            我的
          </NavLink>
        </span>
      </>
    );
  }
}

export default FooterCom;
