/**
 * 收藏
 */
import {observable,action}  from "mobx";
import {
    postDoLikes,
    getLikes
  } from "../../../servies";

  export default class Collection {
      @observable addCollection="";
      @observable isCollection="";
      //是否添加到收藏栏
      @action async addEnshrine(params) {
          let list = await postDoLikes(params);
          this.isCollection = list.data;
          this.findList({typeId:0})
      }
      //查询收藏栏商品
      @action async findList(params) {
        let list = await getLikes(params);
        this.addCollection = list.data;
     }
  }
