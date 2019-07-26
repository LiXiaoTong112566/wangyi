import {
  getCatalogInitServer,
  getCatalogMsgServer
} from "../../../servies/index";

import { observable, action } from "mobx";
export default class IndexPageModule {
  @observable getCatalogInitData = []; //登录返回来的数据
  @observable classifyLeftBoxData = []; //左侧的盒子
  @observable classifyRightBoxData = []; //右侧的盒子

  //修饰方法
  //获取分类页面的初始页面的数据
  @action getCatalogInitModule(data) {
    getCatalogInitServer().then(res => {
      this.classifyLeftBoxData = res.data.categoryList; //左侧盒子的数据
      this.classifyRightBoxData = res.data.currentCategory; //右侧盒子的数据
    });
  }

  //根据分类ID获取当前分类信息和子分类
  @action getCatalogMsgModule(data) {
    
    getCatalogMsgServer(data).then(res => {
      console.log(res);
      this.classifyRightBoxData = res.data.currentCategory;
    });
  }
}
