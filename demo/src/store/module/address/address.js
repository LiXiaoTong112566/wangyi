/**
 * 地址
 */
import { observable, action } from "mobx";
import { 
    getAddressList,
    postAddAddress ,
    delAddress,
    getAddressServer
} from "../../../servies/index";

 class Address {
  @observable state = [];
  //获取用户地址数据
  @action async findAddress() {
    let data = await getAddressList();
    console.log(data);
    this.state = data.data
  }

  // @action async getAddressModule(params) {
  //   let data = await getAddressServer(params);
  //   console.log(data);
   
  // }


  //新增地址
  @action async addAddress(params) {
    console.log(params)
    let data = await postAddAddress(params);
    console.log(data)
    if(data.errno ===0){
      this.findAddress();

    }
  }
  //删除地址
  @action async del_Address(params){
    let data = await delAddress(params)
    if(data.errno ===0){
      let data = await getAddressList(params);
      // this.state = data.data
    }
  }
}
export default Address