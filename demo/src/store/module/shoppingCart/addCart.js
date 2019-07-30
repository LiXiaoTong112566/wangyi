/**
 * 购物车
 */
import {observable,action}  from "mobx";
import {
  postAddCartServer,
  getCartDataServer,
  getCartNumServer,
  postCartCheckServer
  
  } from "../../../servies"

export default class cardShop{  
    @observable state={};
    @observable cardNum=0;
    @observable getCartData=[];
    @observable getCartNumData=0;
    @observable postCartCheckData="";
    @observable isChecked="";//默认的选中状态

    //修饰方法
    //添加到购物;
    @action postAddCartModule(data){
      postAddCartServer (data).then(res=>{
        console.log(res);
          this.state = res.data.data;
          this.getCartNumModule();

       } 
      )
    }
    
    //获取到购物车的数据

    @action async getCartDataModule(){
      let data=await getCartDataServer();
      console.log(data);
      this.getCartData=data.data;
      
    }

    //获取到购物车商品数量
    @action async getCartNumModule(){
      console.log(123);
      let data=await getCartNumServer();
      console.log(data);
      this.getCartNumData=data.data.cartTotal;
      
    }

    //数据的全选和反选
    @action async postCartCheckModule(params){
      console.log(123);
      let data=await postCartCheckServer(params);
      console.log(data);
      this.postCartCheckData=data;
      this.getCartDataModule();
      
    }




}
