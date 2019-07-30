/**
 * 购物车
 */
import {observable,action}  from "mobx";
import {
  postAddCart
  
  } from "../../../servies"

export default class cardShop{  
    @observable state={};
    @observable cardNum=0;
    //修饰方法
    //添加到购物车
    @action addCardNum(type){
      postAddCart ({brandId:type}).then(res=>{
          this.state = res.data.data
       } 
      )
    }
    @action countShop(type){
      if(type==="+"){
        this.cardNum++
      }else{
        if(this.cardNum===0){
          this.cardNum=0
        }else{
           this.cardNum--
        }
      }
    }
}
