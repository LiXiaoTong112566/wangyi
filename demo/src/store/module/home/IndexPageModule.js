import {observable,action}  from "mobx";
import {getHomeData} from "../../../servies"

export default class IndexPageModule{
   
    @observable count={};

    //修饰方法
    @action changeCount(type){
         getHomeData().then(res=>{
              console.log(res.data.data)
            this.count= res.data.data
          } 
         )
    }
}