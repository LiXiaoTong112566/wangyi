import { postLogin } from "../../../servies/index";
import { setCookie, getCookie } from "../../../utils/index";
import { observable, action } from "mobx";

export default class IndexPageModule {
  @observable dataFlag = -1; //登录返回来的数据

  //修饰方法
  @action getLogin(data) {
    postLogin(data).then(res => {
      // this.dataFlag=res.data;
      if (res.errno === 0) {
        alert("登录成功");
        this.dataFlag = res.errno;
        setCookie(res.data.sessionKey);
      } else {
        alert("登录失败");
        this.dataFlag = res.errno;
      }
    });
  }
}
