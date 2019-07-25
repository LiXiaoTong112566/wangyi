import React from "react";
import { BrowserRouter as Router, Route,Redirect,Switch} from "react-router-dom";

function View(props){
   let {router}=props;
  let arr= router.filter((item)=>!item.redirect)
  let arr1= router.filter((item)=>item.redirect).map((val,index)=>
      <Redirect key={"val"+index} from={val.path} to={val.redirect} />
  )
   return <Switch>
       {
           arr.map((item,index)=>{
               return <Route key={"item"+index} path={item.path} render={(props)=>{
                   if(item.children){
                       return <item.component  {...props} child={item.children}></item.component>
                   }
                return <item.component {...props}></item.component>
               }}></Route>
           }).concat(arr1)
       }              
   </Switch>
}


export default View;
