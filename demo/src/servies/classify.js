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