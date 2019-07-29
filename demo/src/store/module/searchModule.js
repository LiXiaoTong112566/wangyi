import { observable, action } from "mobx";

import {
  getGoodsSearchMsgServer,
  getDeleteGoodsSearchHistoryServer,
  getGoodsSearchKeyServer
} from "./../../servies";
export default class SearchModule {
  @observable getGoodsSearchData = null; //获取专题的数据
  @observable getDeleteGoodsSearchHistoryData = null;
  @observable getGoodsSearchKeyData = null;

  //获取商品查询的相关信息
  @action async getGoodsSearchMsg() {
    let data = await getGoodsSearchMsgServer();

    this.getGoodsSearchData = data.data; //获取到专题数据
  }
  //删除商品查询的历史记录
  @action async getDeleteGoodsSearchHistoryModule() {
    let data = await getDeleteGoodsSearchHistoryServer();

    this.getDeleteGoodsSearchHistoryData = data.data; //获取到专题数据
  }
  //模糊查找
  @action async getGoodsSearchKey() {
    let data = await getGoodsSearchKeyServer();

    this.getGoodsSearchKeyData = data.data; //获取到专题数据
  }
}
