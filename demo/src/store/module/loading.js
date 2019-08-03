
import { observable, action,autorun } from "mobx";

export default class LoadingModule {
  @observable isLoading = false; //登录返回来的数据
  
  //修饰方法
  @action changeLoading(value) {
      this.isLoading=value;  
  }
  constructor(){
    autorun(()=>{
        console.log("isLoading...", this.isLoading);
    })
  }
  
}
