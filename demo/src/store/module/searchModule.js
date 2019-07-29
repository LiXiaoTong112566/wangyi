import { observable, action } from "mobx";

import {
  getGoodsSearchMsgServer,
  getDeleteGoodsSearchHistoryServer,
  getGoodsSearchKeyServer,
  getGoodsListServer
} from "./../../servies";
export default class SearchModule {
  @observable getGoodsSearchData = "";
  @observable getDeleteGoodsSearchHistoryData = "";
  @observable getGoodsSearchKeyData = "";
  @observable getGoodsListData = "";

  //获取商品查询的相关信息
  @action async getGoodsSearchMsg() {
    let data = await getGoodsSearchMsgServer();

    this.getGoodsSearchData = data.data; //获取到专题数据
  }
  //删除商品查询的历史记录
  @action async getDeleteGoodsSearchHistoryModule() {
    let data = await getDeleteGoodsSearchHistoryServer();
    console.log(data);
    this.getDeleteGoodsSearchHistoryData = data.data; //获取到专题数据
    if (data.errno === 0) {
      this.getGoodsSearchMsg();
    }
  }
  //模糊查找
  @action async getGoodsSearchKey(params) {
    let data = await getGoodsSearchKeyServer(params);
    console.log(data);
    this.getGoodsSearchKeyData = data.data; //获取到专题数据
  }

  //根据内容查询

  @action async getGoodsListModule(params) {
    let data = await getGoodsListServer(params);
    console.log(data);
    this.getGoodsListData = data.data; //获取到专题数据
  }
}
