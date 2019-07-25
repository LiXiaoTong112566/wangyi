import React, { Component } from 'react'
import "./main.scss"
import {NavLink,Route} from "react-router-dom"
import HomeIndex from "./IndexPage/home/homeIndex"
export default class App extends Component {
  render() {
    return (
        <div className="main">
            <div className="subject">
               <Route path="/home/homeIndex" component={HomeIndex}></Route>
            </div>
            <div className="footer">
                <span><NavLink to="/home/homeIndex">首页</NavLink></span>
                <span><NavLink to="">专题</NavLink></span>
                <span><NavLink to="">分类</NavLink></span>
                <span><NavLink to="">购物车</NavLink></span>
                <span><NavLink to="">我的</NavLink></span>
            </div>
        </div>
    )
  }
}

