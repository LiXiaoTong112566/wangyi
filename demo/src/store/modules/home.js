import {observable,action} from "mobx"

export default class Home {
    //@observable 修饰属性
    @observable count =1000;

    //@action 修饰方法
    @action changeCount(type){
        type === "+"?this.count++:this.count--;
    }
}