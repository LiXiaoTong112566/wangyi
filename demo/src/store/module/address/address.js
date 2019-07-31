/**
 * 地址
 */
import { observable, action } from "mobx";
import { 
    getAddressList,
    postAddAddress ,
    delAddress
} from "../../../servies/index";

 class Address {
  @observable state = [];
  //获取用户地址数据
  @action async findAddress(params) {
    let data = await getAddressList(params);
    this.state = data.data
  }
  //新增地址
  @action async addAddress(params) {
    console.log(params)
    let data = await postAddAddress(params);
    console.log(data)
    if(data.errno ===0){
      let data = await getAddressList(params);
      this.state = data.data
    }
  }
  //删除地址
  @action async del_Address(params){
    let data = await delAddress(params)
    if(data.errno ===0){
      let data = await getAddressList(params);
      this.state = data.data
    }
  }
}
export default Address