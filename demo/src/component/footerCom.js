import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
export class FooterCom extends Component {
    render() {
        return (
            <>
            <span><NavLink to="/main/homeIndex"  activeClassName="active">首页 </NavLink></span>
            <span><NavLink to="/main/specialIndex" activeClassName="active">专题 </NavLink></span>
            <span><NavLink to="/main/classifyIndex" activeClassName="active">分类 </NavLink></span>
            <span><NavLink to="/main/ShoppingIndex" activeClassName="active">购物车 </NavLink></span>
            <span><NavLink to="/main/MyIndex" activeClassName="active">我的 </NavLink></span>
            
            </>
        )
    }
}

export default FooterCom
