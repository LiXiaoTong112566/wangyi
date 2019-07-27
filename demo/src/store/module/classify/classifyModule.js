import {
  getCatalogInitServer,
  getCatalogMsgServer,
  getCategoryNavServer,
  getGoodsServer,
  getGoodsDetailServer
} from "../../../servies/index";

import { observable, action } from "mobx";
export default class IndexPageModule {
  @observable getCatalogInitData = []; //登录返回来的数据
  @observable classifyLeftBoxData = []; //左侧的盒子
  @observable classifyRightBoxData = []; //右侧的盒子
  @observable  getCategoryNavData=[];//获取分类ID分类Nav数据  
  @observable  getGoodsData=[];// 根据分类Id或者制造商Id获取商品
  @observable  getGoodsDetailData=[];//获取商品详情

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

  //获取分类ID分类Nav数据

  @action getCategoryNavModule(data) {
    getCategoryNavServer(data).then(res => {
      console.log(res);
      this.getCategoryNavData = res.data;
    });
  }

  

  //根据分类Id或者制造商Id获取商品
  @action getGoodsModule(data) {
    console.log(data);
    getGoodsServer(data).then(res => {
      console.log(res);
      this.getGoodsData = res.data;
    });
  }

  //获取商品的详情
  @action getGoodsDetailModule(data) {
    getGoodsDetailServer(data).then(res => {
      console.log(res);
      this.getGoodsDetailData = res.data;
    });
  }





  
}
