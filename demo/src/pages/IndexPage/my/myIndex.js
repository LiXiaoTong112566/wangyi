import React, { Component } from 'react'
import "../../../scss/fonts/iconfont.css"
import { Toast } from "antd-mobile";
import "./myIndex.scss"
import {removeCookie} from '../../../utils/index'
import { inject, observer } from "mobx-react";
@inject("login")
@observer
 class myIndex extends Component {
  constructor(){
    super()
    this.state={
       list:[
           {"icon":"iconfont icon-gongzuojilu","title":"我的收藏","type":"collect"},
           {"icon":"iconfont icon-dizhi-01","title":"地址管理","type":"address"},
           {"icon":"iconfont icon-wodedingdan","title":"我的订单"},
           {"icon":"iconfont icon-riqixuanze","title":"周末拼单"},
           {"icon":"iconfont icon-youhuiquan-01","title":"优惠券"},
           {"icon":"iconfont icon-dianzan","title":"优选购"},
           {"icon":"iconfont icon-qianbao","title":"我的红包"},
           {"icon":"iconfont icon-yonghu","title":"会员plus"},
           {"icon":"iconfont icon-paynumber","title":"邀请返利"},
           {"icon":"iconfont icon-07","title":"意见反馈"},
           {"icon":"iconfont icon-kefu","title":"客服咨询"},
           {"icon":"iconfont icon-suo","title":"账户安全"}
       ]
    }
  }
  

  jumpPages = file => {
    if (file.title === "我的收藏" || file.title === "地址管理") {
      this.props.history.push({ pathname: `/${file.type}` });
    } else {
      Toast.offline(`${file.title}的功能正在研发中，请耐心等待`, 6);
    }
  };
  render() {
    let list = this.state.list;
    let user = localStorage.getItem("mobile");
    return (
      <>
        <dl className="user">
          <dt />
          <dd>
            <p>{user}</p>
            <p>普通用户</p>
          </dd>
        </dl>
        <div className="userPower">
          {list.map((file, index) => (
            <dl key={"icon" + index} onClick={() => this.jumpPages(file)}>
              <dt>
                <i className={file.icon} />
              </dt>
              <dd>{file.title}</dd>
            </dl>
          ))}
        </div>
        <div className="loginOut"  onClick={this.click.bind(this)}>退出登录</div>
      </>
    );
  }
  click(){
    removeCookie()
    this.props.history.push('/login')
  }
}

export default myIndex;
