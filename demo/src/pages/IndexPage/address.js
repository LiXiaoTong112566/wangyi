import React, { Component } from 'react'
 import "./address.scss"
 import "../../scss/fonts/iconfont.css"
import { inject, observer } from "mobx-react";

import { Picker, List } from 'antd-mobile';

import arrayTreeFilter from 'array-tree-filter';

import { district } from 'antd-mobile-demo-data';

@inject("address")
@observer
 class address extends Component {
     constructor(){
         super()
         this.state={
             flag:true,
             name:"",
             tel:"",
             address:"",
             defaultAddress:false,
         }
     }
    componentDidMount(){
         this.props.address.findAddress()
    }
    //新建地址
    changeAddress=()=>{
       this.setState({flag:false})
    }
    //保存
    preserve=()=>{
        //新增地址
        let {name,tel,address,defaultAddress,pickerValue} = this.state;
        this.props.address.addAddress({
            address,
            name,
            mobile:tel,
            is_default:defaultAddress,
            province_id:pickerValue[0],
            city_id:pickerValue[1],
            district_id:pickerValue[2],
        })  
    }
    //取消
    cancel=()=>{
        this.setState({flag:true})
    }
    //是否为默认地址
    defaultAdd=()=>{
        let defaultAddress= !this.state.defaultAddress;
        this.setState({defaultAddress})
    }
    //地址弹框
    getSel=()=> {
        const value = this.state.pickerValue;
        if (!value) {
          return '';
        }
        // console.log(value)
        this.treeChildren = arrayTreeFilter(district, (c, level) => c.value === value[level]);  
        return this.treeChildren.map(v => v.label).join(',');
      }
    render() {
        let site = this.props.address.state;
        console.log(site)
        //let arr = [site[0].province_id,site[0].city_id,site[0].district_id]
        //console.log(arr)
        //console.log(arrayTreeFilter(district, (c, level) => c.value === [level]))
        let {flag,name,tel,address,defaultAddress} = this.state;
        return (
            <div className="address">
             {flag
                ?<><div className="header">
                    <h3>地址管理</h3>
                    <span onClick={()=>this.props.history.goBack()}>&lt;</span>
                </div>
                <div className="subject">
                  {/* 地址 */}
                 
                  {site.length&&site.map(file=>
                    <dl key={file.id}>
                      <dt>{file.name}</dt>
                      <dd className="message">
                          <p>{file.mobile}</p>

                          <p>{file.address}</p>
                      </dd>
                      <dd className="removeAdd"><i className="iconfont icon-lajitong"></i></dd>
                  </dl>
                    )}
                  
                </div>
                <div className="footer" onClick={()=>this.changeAddress()}>
                    新建地址
                </div></>
                :<div className="skip" ref="skip">
                    <div className="header">
                        <h3>新增地址</h3>
                    </div>
                    <div className="subject">
                       <p><input type="text" placeholder="姓名" value={name} onChange={(e)=>this.setState({name:e.target.value})}></input></p>
                       <p><input type="text" placeholder="电话号码" value={tel} onChange={(e)=>this.setState({tel:e.target.value})}></input></p>
                       {/* 地址弹框 */}
                        <List>
                        <Picker
                            visible={this.state.visible}
                            data={district}
                            value={this.state.pickerValue}
                            onChange={v => this.setState({ pickerValue: v })}
                            onOk={() => this.setState({ visible: false })}
                            onDismiss={() => this.setState({ visible: false })}
                        >
                            <List.Item extra={this.getSel()} onClick={() => this.setState({ visible: true })}>
                                选择地址
                            </List.Item>
                        </Picker>
                        </List>
                     
                       <p><input type="text" placeholder="详细地址" value={address} onChange={(e)=>this.setState({address:e.target.value})}></input></p>
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
// address: "222222"
// city_id: 37
// district_id: 403
// id: 78
// is_default: false
// mobile: "18810447474"
// name: "长得丑"
// province_id: 2
// address,
// name,
// mobile:tel,
// is_default:defaultAddress,
// province_id:pickerValue[0],
// city_id:pickerValue[1],
// district_id:pickerValue[2]