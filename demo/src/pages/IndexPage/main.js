import React, { Component } from 'react';
import Footer from "../../component/footerCom";
import RouterView from "../../router/routerView";
import "./main.scss";
export class Main extends Component {
    
    render() {

        console.log(this.props);
        return (
            <div className="main">

                <div className="mainBox">
                    <RouterView router={this.props.child}></RouterView>

                </div>

                <div className="footerBox">
                <Footer></Footer>
                </div>

               
                
                
            </div>
        )
    }
}

export default Main
