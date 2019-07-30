/**
 * 购物车
 */
import request from '../utils/request';
//添加到购物车
export  function postAddCartServer (params){

    return request.post("/cart/add", params)

}
//获取购物车里面的商品数量

export  function getCartNumServer (){

    return request.get("/cart/goodscount")

}

//获取到购物车里面的数据
export  function getCartDataServer (){
    
    return request.get("/cart/index")

}

//购物车里面数据的选中状态


export  function postCartCheckServer (params){
    return request.post("/cart/checked",params)

}