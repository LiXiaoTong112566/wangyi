/**
 * 地址
 */

 //获取用户地址数据
 import request from "../utils/request";
export function getAddressList() {
  return request.get("/address/list" );
}
//新增地址
export function postAddAddress (params) {
  console.log(params)
  return request.post("/address/save", {params})
}