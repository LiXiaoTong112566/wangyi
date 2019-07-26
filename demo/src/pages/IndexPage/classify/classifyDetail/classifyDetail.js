import React, { Component } from 'react'

import {inject,observer} from "mobx-react";
import BScroll from "better-scroll";

@inject("classify")
@observer

//奇趣分类的页面
 class ClassifyDetail extends Component {


    componentDidMount(){
     let id=this.props.match.params.id;
     
        this.props.classify.getCatalogMsgModule({id:id})
        

    }





    render() {
       
        let {classifyRightBoxData}=this.props.classify;

        return (
            <div>
                <div className="header">
                    <span>&lt;</span>
                    奇趣分类
                </div>

                <ul className="nav">
                    {console.log(classifyRightBoxData)}
                    <li></li>


                </ul>


                
            </div>
        )
    }
}

export default ClassifyDetail
