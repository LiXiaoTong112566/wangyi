import LoginModule from "./module/loginModule/login.js";
import classifyModule from "./module/classify/classifyModule.js";
//实例化模块
//登录的方法
const login =new LoginModule;
const classify=new classifyModule;

export default {
    login,
    classify
    
}