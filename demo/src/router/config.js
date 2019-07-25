import React from "react";
import Loadable from "react-loadable";//路由懒加载

//定义一个函数
function Load() {
    return <div>
        Loading...加载中...
    </div>
}
                                                                                                                
//一级路由
//首页
    const HomeIndex=Loadable({
        loader:()=>import ("../pages/IndexPage/home/homeIndex")
    })
//分类
    const classifyIndex=Loadable({
        loader:()=>import ("../pages/IndexPage/classify/classifyIndex")
    })
//主题
    const SpecialIndex=Loadable({
        loader:()=>import ("../pages/IndexPage/special/specialIndex")
    })
//购物车
    const ShoppingIndex=Loadable({
        loader:()=>import ("../pages/IndexPage/shopping/shoppingIndex")
    })
//我的
    const MyIndex=Loadable({
        loader:()=>import ("../pages/IndexPage/my/myIndex")
    })

//登录
const LoginIndex=Loadable({
    loader:()=>import ("../pages/login/login")
})




