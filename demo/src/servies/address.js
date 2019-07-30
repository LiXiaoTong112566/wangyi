/**
 * 地址
 */

 //获取用户地址数据
 import request from "../utils/request";
export function getAddressList() {
  return request.get("/address/list" );
}