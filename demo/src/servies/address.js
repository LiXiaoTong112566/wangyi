/**
 * 地址
 */

 //获取用户地址数据
 import request from "../utils/request";
export function getAddressList() {
  return request.get("/api/address/list" );
}

export function getAddressServer(params) {
  return request.get("/sockjs-node/info",{params} );
}



//新增地址
export function postAddAddress (params) {
  return request.post("/address/save",params)
}
//删除地址
export function delAddress (params) {
  return request.post("/address/delete",params)
}