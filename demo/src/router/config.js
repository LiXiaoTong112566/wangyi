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

//分类专题里面的奇趣分类页面
const ClassifyDetail=Loadable({
    loader:()=>import ("../pages/IndexPage/classify/classifyDetail/classifyDetail"),
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
//制造商详情
    const BrandDetail=Loadable({
        loader:()=>import ("../pages/IndexPage/home/child/brandDetail"),
        loading:Loading
    })



let router=[
    {
        path:"/",
         redirect:"/login",

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
        path:"/login",
        component:LoginIndex
        
    },
    {
        path:"/classifyDetail/:id",
        component:ClassifyDetail
        
    },
    
    
    {
        path:"/brandDetail/:id",
        component:BrandDetail
    }
]

export default router;




