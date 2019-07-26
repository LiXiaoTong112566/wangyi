import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import RouterView from "./routerView";

import router from "./config";
//console.log(RouterView);
function Routers(){
   return <Router>
           <RouterView router={router}/>
   </Router>
}


export default Routers;