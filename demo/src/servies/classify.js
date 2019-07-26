/** 
 * 分类页面的数据
*/

//获取分类首页的数据
import request from '../utils/request';
export  function getCatalogInitServer (params){
    return request.get("/catalog/index")

}

//根据分类ID获取当前分类信息和子分类

export  function getCatalogMsgServer(params){
    console.log(params);
    return request.get("/catalog/current",{params})

}

//获取分类ID分类Nav数据

export  function getCategoryNavServer(params){
    console.log(params);
    return request.get("/goods/category",{params})

}




//根据分类Id或者制造商Id获取商品

export  function getGoodsServer(params){
    console.log(params);
    return request.get("/goods/list",{params})

}

//获取商品详情

export function getGoodsDetailServer(params){
    console.log(params);
    return request.get("/goods/detail",{params})

}


