import request from '../../utils/request';
//获取商品详情
export function getGoodsDetail (params) {
    return request.get("/goods/detail", {params})
}