/**
 * 购物车
 */
import request from '../utils/request';
//添加到购物车
export  function postAddCart (params){

    return request.post("/cart/add", params)

}