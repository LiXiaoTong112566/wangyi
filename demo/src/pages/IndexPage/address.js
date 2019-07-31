import React, { Component } from 'react'
import "./address.scss"
import { inject, observer } from "mobx-react";

@inject("address")
@observer
 class address extends Component {
     constructor(){
         super()
         this.state={
             flag:true,
             name:"姓名",
             tel:"电话号码",
             address:"详细地址",
             defaultAddress:false,
         }
     }
    componentDidMount(){
        this.props.address.findAddress()
        // this.props.address.addAddress({address:,name:})
    }
    changeAddress=()=>{
       this.setState({flag:false})
    }
    preserve=()=>{
      
    }
    cancel=()=>{
        this.setState({flag:true})
    }
    defaultAdd=()=>{
        let defaultAddress= !this.state.defaultAddress;
        this.setState({defaultAddress})
    }
    render() {
        let site = this.props.address;
        let {flag,name,tel,address,defaultAddress} = this.state;
      
        return (
            <div className="address">
             {flag
                ?<><div className="header">
                    <h3>地址管理</h3>
                    <span onClick={()=>this.props.history.goBack()}>&lt;</span>
                </div>
                <div className="subject">
                
                </div>
                <div className="footer" onClick={()=>this.changeAddress()}>
                    新建地址
                </div></>
                :<div className="skip" ref="skip">
                    <div className="header">
                        <h3>新增地址</h3>
                    </div>
                    <div className="subject">
                       <p><input type="text" value={name} onChange={(e)=>this.setState({name:e.target.value})}></input></p>
                       <p><input type="text" value={tel} onChange={(e)=>this.setState({tel:e.target.value})}></input></p>
                       <p>地址：</p>
                       <p><input type="text" value={address} onChange={(e)=>this.setState({address:e.target.value})}></input></p>
                       <div>设置默认地址
                           <span 
                            onClick={()=>this.defaultAdd()}
                            className={defaultAddress?"default":""}
                            ></span>
                       </div>
                     </div>
                    <div className="footer">
                        <span onClick={()=>this.cancel()}>取消</span>
                        <span style={{background:"#108EE9",color:"#fff"}} onClick={()=>this.preserve()}>保存</span>
                    </div>
                </div>}
                
                
            </div>
        )
    }
}

export default address
