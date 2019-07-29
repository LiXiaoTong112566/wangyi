import React, { Component } from "react";
import Footer from "../../component/footerCom";
import RouterView from "../../router/routerView";
import "./main.scss";
export class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="mainBox">
          <RouterView router={this.props.child} />
        </div>

        <div className="footerBox">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Main;
