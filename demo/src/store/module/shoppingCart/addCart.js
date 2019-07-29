/**
 * 购物车
 */
import {observable,action}  from "mobx";
import {
    
  
  } from "../../../servies"

export default class detailList{  
    @observable state={};
    //修饰方法
    @action list(type){
      getGoodsData ({brandId:type}).then(res=>{
          this.state = res.data.data
       } 
      )
    }
}
