import request from '../../utils/request';
//获取首页数据
export function getHomeData() {
    return request.get('/');
}
//根据制造商ID获取制造商详情
export function getBrandDetail(params){
    return request.get("/brand/detail", {params})
}