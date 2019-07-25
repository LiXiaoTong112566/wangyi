/** 
 * 分类页面的数据
*/

import request from '../utils/request';
export  function getCatalogInitData (params){
    return request.get("/auth/loginByMobile")

}