/**
 * 购物车
 */
import { observable, action } from "mobx";
import {
  postAddCartServer,
  getCartDataServer,
  getCartNumServer,
  postCartCheckServer
} from "../../../servies";

export default class cardShop {
  @observable state = {};//添加购物车返回的数据的接口
  @observable getCartData = [];//购物车的数据
  @observable getCartNumData = 0;//获取到购物车商品数量
  @observable postCartCheckData = "";//商品选中方法获取的数据
  @observable FinishIsChecked = ""; //完成页面默认的全选
  @observable EditIsChecked = ""; //编辑页面默认的全选
  @observable EditCheckedCount= 0;//编辑页面选中的数量

  //给页面全选的按钮赋值

  @action async changeInitFinishCheckedFn() {
    ///let data = await this.getCartDataModule();
    //获取到完成页面的全选的状态
    let Finishflag =
      this.getCartData &&
      this.getCartData.cartList.every((item, index) => {
        return item.checked;
      });
//获取到编辑页面的全选的状态
      let Editflag =
      this.getCartData &&
      this.getCartData.cartList.every((item, index) => {
        return item.flag;
      });
    this.EditIsChecked = Editflag;
    this.FinishIsChecked=Finishflag;
  }

  //修饰方法
  //添加到购物;
  @action postAddCartModule(data) {
    postAddCartServer(data).then(res => {
      // console.log(res);
      this.state = res.data.data;
      this.getCartNumModule();
    });
  }

  //获取到购物车的数据

  @action async getCartDataModule() {
    let data = await getCartDataServer();
    // console.log(data);
    let newData=data.data.cartList.map((item,index)=>{
      item.flag=false;
      return item;
    })
    // console.log(newData);
    let obj={cartList:newData,cartTotal:data.data.cartTotal}

    this.getCartData =obj;
  }

  //获取到购物车商品数量
  @action async getCartNumModule() {
    // console.log(123);
    let data = await getCartNumServer();
    // console.log(data);
    this.getCartNumData = data.data.cartTotal;
  }

  //数据的全选和反选
  @action async postCartCheckModule(params) {
    // console.log(params);
    let data = await postCartCheckServer(params);
    // console.log(data);
    this.postCartCheckData = data.data;
    this.getCartDataModule(); //重新获取的数购物车的数据
    this.changeInitFinishCheckedFn();
  }

  //切换完成页面的全选和反选
  @action changeChecked() {
    // console.log(123);
    this.FinishIsChecked = !this.FinishIsChecked;
    let arr = this.getCartData.cartList.map((item, index) => {
      return item.product_id;
    });
    // console.log(arr);
    let productIdsData = arr.join();
    // console.log(productIdsData);

    if (this.FinishIsChecked) {
      this.postCartCheckModule({
        isChecked: 1,
        productIds: productIdsData
      });

    } else {
      this.postCartCheckModule({
        isChecked: 0,
        productIds: productIdsData
      });
    }
  }

  //切换编辑页面的全选和反选
  @action changeEditChecked() {
    console.log(123);
    this.EditIsChecked = !this.EditIsChecked;
   let data= this.getCartData.cartList.map((item,index)=>{
      item.flag=this.EditIsChecked;
      return item;
    })
    if(this.EditIsChecked){
      this.EditCheckedCount=this.getCartData.cartList.length;
    }else{
      this.EditCheckedCount=0;
    }

    this.getCartData.cartList=data;

  }

   //切换编辑页面每一项的全选和反选功能
   @action changeEditItemChecked(data) {
     console.log(data);

     let newData=this.getCartData.cartList.map((item,index)=>{
        if(item.product_id=== data.product_id){
          item.flag=!item.flag;
        }
        return item;
     })
     //编辑页面的全选按钮的状态
     this.EditIsChecked= newData.every((item,index)=>{
       return item.flag;
     })
     //编辑页面数据的选中的状态
     this.getCartData.cartList=newData;

     //编辑页面的数量
    let newDataCount= newData.filter((item,index)=>{
       return item.flag;
     })

     this.EditCheckedCount=newDataCount.length;
  }
  
}
