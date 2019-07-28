import LoginModule from "./module/loginModule/login.js";
import classifyModule from "./module/classify/classifyModule.js";
import IndexPageModule from "./module/home/IndexPageModule";
import DetailList from "./module/home/detailList";
import SpecialModule from "./module/special/specialModule";
//实例化模块
//登录的方法
const login =new LoginModule();
const classify=new classifyModule();
const indexPageModule =new IndexPageModule();
const detailList = new DetailList();
const special=new SpecialModule();


export default {
    login,
    classify,
    indexPageModule,
    detailList,
    special
}