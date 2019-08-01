import { postLogin } from "../../../servies/index";
import { setCookie } from "../../../utils/index";
import { observable, action } from "mobx";
import { Toast } from "antd-mobile";
export default class IndexPageModule {
  @observable dataFlag = -1; //登录返回来的数据
  @observable userName = "";

  //修饰方法
  @action getLogin(data) {
    postLogin(data).then(res => {
      this.dataFlag = res.data;
      console.log(res);
      if (res.errno === 0) {
        Toast.success("登录成功", 1);

        this.dataFlag = res.errno;
        this.userName = res.data.mobile;
        setCookie(res.data.sessionKey);
      } else {
        Toast.offline("用户名或密码有误", 1);
        this.dataFlag = res.errno;
      }
    });
  }
}
