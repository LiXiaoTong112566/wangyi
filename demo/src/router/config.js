import React from "react";
import Loadable from "react-loadable";//路由懒加载

//定义一个函数
function Loading() {
    return <div>
        Loading...加载中...
    </div>
}
                                                                                                                
//一级路由
const Main=Loadable({
    loader:()=>import ("../pages/IndexPage/main"),
    loading:Loading

})

//登录
const LoginIndex=Loadable({
    loader:()=>import ("../pages/login/login"),
    loading:Loading

})

//二级路由

//首页
    const HomeIndex=Loadable({
        loader:()=>import ("../pages/IndexPage/home/homeIndex"),
        loading:Loading

    })
//分类
    const ClassifyIndex=Loadable({
        loader:()=>import ("../pages/IndexPage/classify/classifyIndex"),
        loading:Loading

    })
//主题
    const SpecialIndex=Loadable({
        loader:()=>import ("../pages/IndexPage/special/specialIndex"),
        loading:Loading

    })
//购物车
    const ShoppingIndex=Loadable({
        loader:()=>import ("../pages/IndexPage/shopping/shoppingIndex"),
        loading:Loading

    })
//我的
    const MyIndex=Loadable({
        loader:()=>import ("../pages/IndexPage/my/myIndex"),
        loading:Loading

    })




let router=[
    {
        path:"/",
        redirect:"main/homeIndex",

    },
    {
        path:"/main",
        component:Main,
        
        children:[
            {
                path:"/main/homeIndex",
                component:HomeIndex,

            },{
                path:"/main/classifyIndex",
                component:ClassifyIndex
            },{
                path:"/main/specialIndex",
                component:SpecialIndex
            },{
                path:"/main/ShoppingIndex",
                component:ShoppingIndex
            },{
                path:"/main/MyIndex",
                component:MyIndex
            }
        ]
        
    },
    {
        path:"/loginIndex",
        component:LoginIndex
        
    }
]

export default router;




