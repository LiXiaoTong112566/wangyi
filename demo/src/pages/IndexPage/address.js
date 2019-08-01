import React, { Component } from 'react'
 import "./address.scss"
 import "../../scss/fonts/iconfont.css"
import { inject, observer } from "mobx-react";
import { Picker, List } from "antd-mobile";
import arrayTreeFilter from "array-tree-filter";
import { district } from "antd-mobile-demo-data";

import dislist from "../../component/city.json"

@inject("address")
@observer
 class address extends Component {
     constructor(){
         super()
         this.state={
             site:"",
             flag:true,
             name:"",
             tel:"",
             address:"",
             defaultAddress:false,
             adds:null,
             isShow:false,
             num:null,
         }
     }
    componentDidMount(){
         this.props.address.findAddress();
        //  this.props.address.getAddressModule({t: 1564622502322})
        //  this.setState({site:this.state.pickerValue})
    }
    //新建地址
    changeAddress=()=>{
       this.setState({flag:false})
    }
    //保存
    preserve=()=>{
        //新增地址
         let adds=this.treeChildren.map(v => v.label).join(',');
        this.setState({adds})
        let {name,tel,address,defaultAddress,pickerValue} = this.state;
        console.log(".....",pickerValue,adds)
        this.props.address.addAddress({
            address: address,
            city_id: pickerValue[1],
            district_id: pickerValue[2],
            is_default: defaultAddress,
            mobile: tel,
            name: name,
            province_id: pickerValue[0],
            full_region:adds
        })  
        this.setState({flag:true})
        
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
    getSel() {
        const value = this.state.pickerValue;
        if (!value) {
          return '';
        }
        this.treeChildren = arrayTreeFilter(district, (c, level) => c.value === value[level]);
        return this.treeChildren.map(v => v.label).join(',');
      }
    render() {
        // console.log(district)

        let site = this.props.address.state;
        // console.log(site)
        let {flag,name,tel,address,defaultAddress,isShow,num} = this.state;
        return (
            <div className="address">
             {flag
                ?<><div className="header">
                    <h3>地址管理</h3>
                    <span onClick={()=>this.props.history.goBack()}>&lt;</span>
                </div>
                <div className="subject">
                  {/* 地址 */}
                  {site&&site.map(file=>
                    <dl key={file.id} className={file.is_default?"action":""}>
                      <dt>{file.name}</dt>
                      <dd className="message">
                          <p>{file.mobile}</p>
                          <p>{file.full_region}</p>
                          <p>{file.address}</p>
                      </dd>
                      <dd className="removeAdd" onClick={this.delAddress.bind(this,file.id)}><i className="iconfont icon-lajitong"></i></dd>
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
                            {/* <Picker extra="请选择(可选)"
                                data={district}
                                onOk={e => this.setState({value:e})}
                                >
                                <List.Item></List.Item>
                            </Picker> */}
                            <Picker
                                visible={this.state.visible}
                                data={district}
                                value={this.state.pickerValue}
                                onChange={v => this.setState({ pickerValue: v })}
                                onOk={() => this.setState({ visible: false })}
                                onDismiss={() => this.setState({ visible: false })}
                                >
                                <List.Item extra={this.getSel()} onClick={() => this.setState({ visible: true })}>
                                    地址
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
                {
                    isShow ? <div className='wrapper'>
                        <div className='am-modal-mask'></div>
                        <div className='am-modal-wrap'>
                    <div className='am-modal am-modal-transparent'>
                        <div className='am-modal-content'>
                            <div className='am-modal-header'>
                                <div className='am-modal-title'>删除</div>
                            </div>
                            <div className='am-modal-body'>
                                <div className='am-modal-alert-content'>您确定删除该地址吗????</div>
                            </div>
                            <div className='am-modal-footer'>
                                <div className='am-modal-button-group-h am-modal-button-group-normal'>
                                    <button className='am-modal-button aa' onClick={()=>this.setState({isShow:false})}>否</button>
                                    <button className='am-modal-button' onClick={this.remove.bind(this,num)}>是</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </div> : null
                }
                
            </div>
        )
    }
    delAddress(id){
        this.setState({isShow:true,num:id})
    }
    remove(id){
        console.log(id)
        this.setState({isShow:false})
        this.props.address.del_Address({id:id})
    }
}

export default address;
