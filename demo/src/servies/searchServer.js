import request from "../utils/request";
//获取商品查询的相关信息
export function getGoodsSearchMsgServer(params) {
  return request.get("/search/index");
}
//删除商品查询的历史记录
export function getDeleteGoodsSearchHistoryServer(params = {}) {
  return request.get("/search/clearhistory", { params });
}

//模糊查找
export function getGoodsSearchKeyServer(params) {
  return request.get("/search/helper", { params });
}

//根据内容查询
export function getGoodsListServer(params) {
  return request.get("/api/goods/list", { params });
}
