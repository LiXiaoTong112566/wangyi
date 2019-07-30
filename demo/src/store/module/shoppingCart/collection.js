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

      //是否添加到收藏栏
      @action async addEnshrine(params) {
          let list = await postDoLikes(params);
          this.addCollection = list.data;
      }
      //查询收藏栏商品
      @action async findList(params) {
        let list = await getLikes(params);
        console.log(list)
        this.addCollection = list.data;
     }
  }
