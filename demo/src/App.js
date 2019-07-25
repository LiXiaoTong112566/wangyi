import React from 'react'
import "./App.css"

import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom"
import Main from "./pages/main";

function App() {
    return (
      <BrowserRouter>
         <Switch>
          <Route path="/home" component={Main}></Route>
          <Redirect to="/home"></Redirect>
         </Switch>
      </BrowserRouter>
    );
}
export default App