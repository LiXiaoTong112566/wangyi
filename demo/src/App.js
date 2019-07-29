import "./App.css";
import "antd/dist/antd.css";
import "antd-mobile/dist/antd-mobile.css";
import React, { Component } from "react";

import routes from "./router/config";
import Routers from "./router";

export class App extends Component {
  render() {
    return (
      <div className="allBox">
        <Routers route={routes} />
      </div>
    );
  }
}
export default App;
