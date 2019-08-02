import React, { Component } from "react";
import { NavLink,withRouter } from "react-router-dom";
import "../scss/fonts/iconfont.css"

export class FooterCom extends Component {
  constructor(){
    super()
    this.state={
      list:[
        {icon:"iconfont icon-shouye",type:"/main/homeIndex",title:"首页"},
        {icon:"iconfont icon-zixun",type:"/main/specialIndex",title:"专题"},
        {icon:"iconfont icon-gongzuo",type:"/main/classifyIndex",title:"分类"},
        {icon:"iconfont icon-gouwuche",type:"/main/ShoppingIndex",title:"购物车"},
        {icon:"iconfont icon-wode",type:"/main/MyIndex",title:"我的"}
     ],
     ind:0,
    }
  }
  render() {
    let {list,ind}= this.state;
    return (
      <>
       {list.map((file,index)=>
          <div 
            key={index} 
            onClick={this.action.bind(this,file.type,index)}
            className={ind===index?"active":""}
            >
            <i className={file.icon}></i>
            <div>{file.title}</div>
          </div>
        )}
      </>
    );
  }
  action(type,index){
    this.setState({ind:index})
    this.props.history.push({pathname:type})
  }
}

export default withRouter(FooterCom);
