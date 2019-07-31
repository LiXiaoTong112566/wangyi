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
  @action async findAddress() {
    let listAdd = await getAddressList();
    console.log(listAdd)
    this.state = listAdd.data
  }
  //新增地址
  @action async addAddress() {
    let list = await postAddAddress();
    console.log(list)
    this.addstate = list.data
  }
}
export default Address