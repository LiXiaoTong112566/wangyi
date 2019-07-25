import {observable,action}  from "mobx";

export default class IndexPageModule{
   
    @observable count=1000;

    //修饰方法
    @action changeCount(type){
        type==='+'?this.count++:this.count--;
    }
}