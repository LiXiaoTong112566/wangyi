import { observable, action } from "mobx";

import {getTopicServer,getTopicDetailServer,getTopicDetailRelatedServer,getCommentListServer,postSetCommentServer} from "../../../servies/special";

export default class SpecialModule{
    @observable getTopicData =[];//获取专题的数据
    @observable getTopicDetailData =[];//获取到专题详情
    @observable getTopicDetailRelatedData =[];//获取到相关专题
    @observable getCommentListData =[];//根据专题id获取到相关评论
    @observable addCommentrErrno="";//对专题id进行评论
    

//获取到专题数据
    @action async getTopicModule(){
        let data=await getTopicServer();
        console.log(data);
        this.getTopicData=data.data;//获取到专题数据

    }

    
    //根据专题Id获取专题详情
    @action async getTopicDetailModule(params){
        let data=await getTopicDetailServer(params);
        console.log(data);
        this.getTopicDetailData=data.data;//获取到专题详情

    }

    //根据专题Id获取相关专题

    @action async getTopicDetailRelatedModule(params){
        let data=await getTopicDetailRelatedServer(params);
        console.log(data);
        this.getTopicDetailRelatedData=data.data;//获取到相关专题

    }

    //根据专题获取相关评论

    @action async getCommentListModule(params){
        let data=await getCommentListServer(params);
        console.log(data);
        this.getCommentListData=data.data;//获取到相关专题

    }

    //根据专题添加评论
    @action async postSetCommentModule(params){
        let data=await postSetCommentServer(params);
        console.log(data.errno);
      this.addCommentrErrno=data.errno;

    }







}