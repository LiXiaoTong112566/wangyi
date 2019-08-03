import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "../scss/fonts/iconfont.css";

export class FooterCom extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          icon: "iconfont icon-shouye",
          type: "/main/homeIndex",
          title: "首页"
        },
        {
          icon: "iconfont icon-zixun",
          type: "/main/specialIndex",
          title: "专题"
        },
        {
          icon: "iconfont icon-gongzuo",
          type: "/main/classifyIndex",
          title: "分类"
        },
        {
          icon: "iconfont icon-gouwuche",
          type: "/main/ShoppingIndex",
          title: "购物车"
        },
        { icon: "iconfont icon-wode", type: "/main/MyIndex", title: "我的" }
      ],
      ind: 0
    };
  }
  render() {
    
    return (
      <>
        <NavLink to="/main/homeIndex" activeClassName="active">
          <dl>
            <dt>
              <i className="iconfont icon-shouye" />
            </dt>
            <dd>首页</dd>
          </dl>
          </NavLink>
          <NavLink to="/main/specialIndex" activeClassName="active">
          <dl>
            <dt>
              <i className="iconfont icon-zixun" />
            </dt>
            <dd>专题</dd>
          </dl>
          </NavLink>
          <NavLink to="/main/classifyIndex" activeClassName="active">
          <dl>
            <dt>
              <i className="iconfont icon-gongzuo" />
            </dt>
            <dd>分类</dd>
          </dl>

        </NavLink>

        <NavLink to="/main/ShoppingIndex" activeClassName="active">
          <dl>
            <dt>
              <i className="iconfont icon-gouwuche" />
            </dt>
            <dd>购物车</dd>
          </dl>

        </NavLink>

        <NavLink to="/main/MyIndex" activeClassName="active">
          <dl>
            <dt>
              <i className="iconfont icon-wode" />
            </dt>
            <dd>我的</dd>
          </dl>

        </NavLink>


       
      </>
    );
  }
}

export default withRouter(FooterCom);
