import LoginModule from "./module/loginModule/login.js";
import classifyModule from "./module/classify/classifyModule.js";
import IndexPageModule from "./module/home/IndexPageModule";
import DetailList from "./module/home/detailList";
import SpecialModule from "./module/special/specialModule";
import SearchModule from "./module/searchModule";
import AddCard from "./module/shoppingCart/addCart";
import Collect from "./module/shoppingCart/collection"
import Address from "./module/address/address"
import Loading from './module/loading';
//实例化模块
//登录的方法
const login = new LoginModule();
const classify = new classifyModule();
const indexPageModule = new IndexPageModule();
const detailList = new DetailList();
const special = new SpecialModule();
const search = new SearchModule();
//收藏
const collect = new Collect();

//购物车
const card = new AddCard();
//地址
const address = new Address();
//loading
const loading = new Loading();

export default {
  login,
  classify,
  indexPageModule,
  detailList,
  special,
  search,
  card,
  collect,
  address,
  loading
};
