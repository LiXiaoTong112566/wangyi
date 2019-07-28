import React, { Component } from 'react'
import {inject,observer} from "mobx-react";
import BScroll from "better-scroll";
import "./specialIndex.scss";

@inject("special")
@observer
 class SpecialIndex extends Component {

    constructor(){
        super();
        this.state={

        }
    }

    componentDidMount(){
        console.log(this.props);
        this.props.special.getTopicModule();
        

    }

    //跳转到详情页
    jumpTopicDetail(id){

        this.props.history.push({pathname:`/topicDetail/${id}`})
        

    }



    render() {
        let data=this.props.special.getTopicData.data;
        console.log(data);
        return (
            <div className="specialBox">
                {
                    data&&data.map((item,index)=>{
                        return (
                            <div className="specialMain" key={item.id} onClick={()=>{this.jumpTopicDetail(item.id)}}>
                            <img src={item.scene_pic_url} alt=""/>
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                            <div className="price">{item.price_info}元起</div>
                        </div>
        

                        )
                    })
                }
               
               
                
            </div>
        )
    }
}

export default SpecialIndex
