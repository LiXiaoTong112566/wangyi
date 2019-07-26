import React, { Component } from 'react'
import "./classifyDetail.scss";
import {inject,observer} from "mobx-react";
import BScroll from "better-scroll";

@inject("classify")
@observer

//奇趣分类的页面
 class ClassifyDetail extends Component {

    constructor(){
        super();
        this.state={
            classifyIndex:-1,
        }
    }


    componentDidMount(){
        console.log(this.props);
     let id=this.props.match.params.id;
     let index=this.props.location.params.index;
        this.props.classify.getCatalogMsgModule({id:id})
       
        this.setState({
            classifyIndex:index,
            
        })


        

    }

    changeInd(index){
        this.setState({
            classifyIndex:index,
        })

    }





    render() {
       
        let {classifyRightBoxData}=this.props.classify;

        return (
            <div className="classifyDetail_box">
                <div className="header">
                    <span onClick={()=>{this.props.history.push(`/main/classifyIndex`)}}>&lt;</span>
                    奇趣分类
                </div>

                <ul className="classifyDetail_nav">
                    {classifyRightBoxData.subCategoryList&&classifyRightBoxData.subCategoryList.map((item,index)=>{
                return (
                  <li key={item.id} className={this.state.classifyIndex===index?"active":""} onClick={()=>{this.changeInd(index)}}>
                    {item.name}
                  </li>
                )
              })}


                </ul>


                
            </div>
        )
    }
}

export default ClassifyDetail
