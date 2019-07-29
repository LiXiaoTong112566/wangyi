import request from "../utils/request";
//获取专题数据
export function getTopicServer(params) {
  return request.get("/topic/list");
}

//根据专题Id获取专题详情

export function getTopicDetailServer(params) {
  return request.get("/topic/detail", { params });
}

//根据专题Id获取相关专题

export function getTopicDetailRelatedServer(params) {
  return request.get("/topic/related", { params });
}

//根据专题id获取相关评论

export function getCommentListServer(params) {
  return request.get("/comment/list", { params });
}

//对专题id进行评论
export function postSetCommentServer(params) {
  return request.post("/comment/post", params);
}
