/**
 * 地址
 */
import { observable, action } from "mobx";
import { getAddressList } from "../../../servies/index";

 class Address {
  @observable state = {};
  //修饰方法
  @action async findAddress() {
    let listAdd = await getAddressList();
    console.log(listAdd)
  }
}
export default Address