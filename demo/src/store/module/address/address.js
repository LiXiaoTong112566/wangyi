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
  @observable userAddressData = [];//获取用户数据
  @observable addAddressData = [];//添加地址
  @observable delAddressData = [];//删除地址


  //获取用户地址数据
  @action async findAddress() {
    let data = await getAddressList();
   // console.log(data);
    this.userAddressData = data.data
  }
  //新增地址
  @action async addAddress(params) {
   // console.log(params)
    let data = await postAddAddress(params);
    this.addAddressData=data;
   // console.log(data)
    if(data.errno ===0){
      this.findAddress();
    }
  }
  //删除地址
  @action async del_Address(params){
    let data = await delAddress(params);
    this.delAddressData=data;
    if(data.errno ===0){
      this.findAddress();
    }
  }
}
export default Address