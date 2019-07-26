import {observable,action}  from "mobx";
import {
  getHomeData,
  getBrandDetail,
  getGoodsData 

} from "../../../servies"

export default class IndexPageModule{  
    @observable count={};
    //修饰方法
    @action changeCount(type){
        getHomeData().then(res=>{
          console.log(res)
            this.count= res.data.data
          } 
         )
    }
    @action brandDetail(type){
      getBrandDetail({id:type}).then(res=>{
          this.count= res.data.data
       } 
      )
    }
    @action list(type){
      getGoodsData ({brandId:type}).then(res=>{
          this.count = res.data.data
       } 
      )
    }
}
