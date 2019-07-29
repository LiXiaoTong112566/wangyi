import request from "../../utils/request";
//获取首页数据
export function getHomeData() {
  return request.get("/");
}
//根据制造商ID获取制造商详情
export function getBrandDetail(params) {
  return request.get("/brand/detail", { params });
}
//根据制造商ID获取制造商相关商品 --- 没写呢
export function getBrandGoods(params) {
  return request.get("/brand/detail", { params });
}
//根据分类Id或者制造商Id获取商品
export function getGoodsData(params) {
  return request.get("/goods/list", { params });
}
