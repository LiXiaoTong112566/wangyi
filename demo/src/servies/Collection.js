/**
 * 收藏
 */
import request from "../utils/request";
//是否添加到收藏栏
export function postDoLikes(params) {
    return request.post("/collect/addordelete", params);
}
//查询收藏栏商品
export function getLikes(params) {
    return request.get("/collect/list", {params});
}