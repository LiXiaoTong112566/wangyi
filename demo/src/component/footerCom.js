import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../scss/fonts/iconfont.css"

export class FooterCom extends Component {
  render() {
    return (
      <>
        <span>
            <dl>
              <dt><i className="iconfont icon-shouye"></i></dt>
              <dd> <NavLink to="/main/homeIndex" activeClassName="active"> 首页</NavLink></dd>
            </dl>
        </span>
        <span>
           <dl>
              <dt><i className="iconfont icon-zixun"></i> </dt>
              <dd><NavLink to="/main/specialIndex" activeClassName="active"> 专题</NavLink></dd>
            </dl> 
        </span>
        <span>
            <dl>
              <dt> <i className="iconfont icon-gongzuo"></i>  </dt>
              <dd> <NavLink to="/main/classifyIndex" activeClassName="active">分类 </NavLink></dd>
            </dl> 
        </span>
        <span>
            <dl>
              <dt>  <i className="iconfont icon-gouwuche"></i>   </dt>
              <dd>  <NavLink to="/main/ShoppingIndex" activeClassName="active"> 购物车</NavLink></dd>
            </dl>  
        </span>
        <span>
            <dl>
              <dt><i className="iconfont icon-wode"></i>  </dt>
              <dd><NavLink to="/main/MyIndex" activeClassName="active">我的</NavLink></dd>
            </dl>
        </span>
      </>
    );
  }
}

export default FooterCom;
