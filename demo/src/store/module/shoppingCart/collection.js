/**
 * 收藏
 */
import {observable,action}  from "mobx";
import {
    postDoLikes
  } from "../../../servies";

  export default class Collection {
      @observable addCollection="";

      //是否添加到收藏栏
      @action async addEnshrine(params) {
          let list = await postDoLikes(params);
          this.addCollection = list.data;
      }
  }
