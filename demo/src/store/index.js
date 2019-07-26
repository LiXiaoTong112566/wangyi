import IndexPageModule from "./module/home/IndexPageModule";
import DetailList from "./module/home/detailList";
//实例化模块
const indexPageModule =new IndexPageModule();
const detailList = new DetailList();

export default {
    indexPageModule,
    detailList
}