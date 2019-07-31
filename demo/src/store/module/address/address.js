/**
 * 地址
 */
import { observable, action } from "mobx";
import { 
    getAddressList,
    postAddAddress 
} from "../../../servies/index";

 class Address {
  @observable state = {};
  @observable addstate = {};
  //获取用户地址数据
  @action async findAddress(params) {
    let listAdd = await getAddressList(params);
    console.log(listAdd)
    this.state = listAdd.data
  }
  //新增地址
  @action async addAddress(params) {
    console.log(params)
    let list = await postAddAddress(params);
    console.log(list)
    this.addstate = list.data
  }
}
export default Address