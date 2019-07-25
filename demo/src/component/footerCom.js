import React, { Component } from 'react'
import { NavLink, Route, Redirect } from "react-router-dom";
export class FooterCom extends Component {
    render() {
        return (
            <ol className="footer">
            <li><NavLink to="/main/homeIndex"  activeClassName="active">首页 </NavLink></li>
            <li><NavLink to="/main/specialIndex" activeClassName="active">专题 </NavLink></li>
            <li><NavLink to="/main/classifyIndex" activeClassName="active">分类 </NavLink></li>
            <li><NavLink to="/main/ShoppingIndex" activeClassName="active">购物车 </NavLink></li>
            <li><NavLink to="/main/MyIndex" activeClassName="active">我的 </NavLink></li>
            
            </ol>
        )
    }
}

export default FooterCom
