import React, { Component } from "react";
import "./classifyIndex.scss";
import {NavLink} from "react-router-dom";
import {inject,observer} from "mobx-react"

@inject("login")
@observer

 class ClassifyIndex extends Component {

    componentDidMount(){
       



    }





  render() {
    return (
      <div className="classify_box">
        <div className="classify_header">搜索商品共239款好物</div>
        <div className="classify_main">
          <ul className="classifyLeftBox">
              <li></li>
            


          </ul>
          <div className="classifyRightBox">

          </div>

        </div>
      </div>
    );
  }
}

export default ClassifyIndex;
