/** 
 * 登录的页面
*/

import request from '../utils/request';
export  function postLogin(params){

    return request.post("/auth/loginByMobile",params)

}