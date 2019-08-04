import React, { Component } from "react";
import "./address.scss";
import "../../scss/fonts/iconfont.css";
import addressAllData from "./addressData/address";
import { inject, observer } from "mobx-react";
import { Picker, List } from "antd-mobile";
import { createForm } from "rc-form";
import { Toast} from 'antd-mobile';
@inject("address")
@observer
class Address extends Component {
  constructor() {
    super();

    // flag:1是地址管理 flag:2 新增地址 flag:3编辑地址
    this.state = {
      site: "",
      flag: 1, //默认是地址管理
      name: "", //姓名
      tel: "", //电话
      address: "", //详细的地址
      defaultAddress: false,
      value: [],
      isShow: false,
      num: null,
      addressID: [], //地址
      editAddress: [], //编辑页面的位置选项
      editId: -1
    };
  }
  componentDidMount() {
    this.props.address.findAddress();
    this.setState({ site: this.state.pickerValue });
  }
  //新建地址
  changeAddress = () => {
    this.setState({ flag: 2, editAddress:[],
        name: "",
        tel: "",
        address:"",
        defaultAddress: false,
       });
  };
  //保存
  preserve = type => {
    let { address, defaultAddress, tel, name, addressID, editId } = this.state;
    //输入框值得验证
    if(!name||!tel||!addressID.length){
      Toast.info('内容不能为空', 1);
    }
    else if(!(/^1[3456789]\d{9}$/.test(tel))){
      Toast.info('请输入正确的手机号码', 1);

    }else{
      if (type === "add") {
        console.log(name, tel, address, defaultAddress);
        this.props.address.addAddress({
          address: address,
          city_id: Number(addressID[1]),
          district_id: Number(addressID[2]),
          is_default: defaultAddress,
          mobile: tel,
          name: name,
          province_id: Number(addressID[0])
        });
      } else if (type === "edit") {
        this.props.address.addAddress({
          address: address,
          city_id: Number(addressID[1]),
          district_id: Number(addressID[2]),
          is_default: defaultAddress,
          mobile: tel,
          name: name,
          province_id: Number(addressID[0]),
          id: editId
        });
      }
      this.setState({ flag: 1 });
    }
   
  };
  //取消
  cancel = () => {
    this.setState({ flag: 1 });
  };
  //是否为默认地址
  defaultAdd = () => {
    let defaultAddress = !this.state.defaultAddress;
    this.setState({ defaultAddress });
  };

  //跳转到编辑的页面
  jumpEdit(data) {
    //console.log(data);
    let arr = [];
    arr.push(data.province_id);
    arr.push(data.city_id);
    arr.push(data.district_id);
   // console.log(arr);
    this.setState({
      flag: 3,
      editAddress: arr,
      name: data.name,
      tel: data.mobile,
      address: data.address,
      defaultAddress: data.is_default,
      editId: data.id
    });
  }

  render() {
    let site = this.props.address.userAddressData;
    const { getFieldProps } = this.props.form;
   
    let {
      flag,
      name,
      tel,
      address,
      defaultAddress,
      isShow,
      num,
      editAddress
    } = this.state;
    return (
      <div className="address">
        {flag === 1 ? (
          <>
            <div className="header">
              <h3>地址管理</h3>
              <span onClick={() => this.props.history.goBack()}>&lt;</span>
            </div>
            <div className="subject">
              {/* 地址 */}
              {site &&
                site.map(file => (
                  <dl
                    key={file.id}
                    className={file.is_default ? "action" : ""}
                    onClick={() => {
                      this.jumpEdit(file);
                    }}
                  >
                    <dt>{file.name}</dt>
                    <dd className="message">
                      <p>{file.mobile}</p>
                      <p>{file.full_region}</p>
                      <p>{file.address}</p>
                    </dd>
                    <dd
                      className="removeAdd"
                      onClick={(e)=>{this.delAddress(e,file.id)}}

                     
                    >
                      <i className="iconfont icon-lajitong" />
                    </dd>
                  </dl>
                ))}
            </div>
            <div className="footer" onClick={() => this.changeAddress()}>
              新建地址
            </div>
          </>
        ) : flag === 2 ? (
          <div className="skip" ref="skip">
            <div className="header">
              <h3>新增地址</h3>
            </div>
            <div className="subject">
              <p>
                <input
                  type="text"
                  placeholder="姓名"
                  value={name}
                  onChange={e => this.setState({ name: e.target.value })}
                />
              </p>
              <p>
                <input
                  type="text"
                  placeholder="电话号码"
                  value={tel}
                  onChange={e => this.setState({ tel: e.target.value })}
                />
              </p>
              {/* 地址弹框 */}
              <List>
                <Picker
                  extra="请选择城市"
                  data={addressAllData}
                  title="Areas"
                  {...getFieldProps("district", {})}
                  onOk={e => this.setState({ addressID: e })}
                >
                  <List.Item></List.Item>
                </Picker>
              </List>

              <p>
                <input
                  type="text"
                  placeholder="详细地址"
                  value={address}
                  onChange={e => this.setState({ address: e.target.value })}
                />
              </p>
              <div>
                设置默认地址
                <span
                  onClick={() => this.defaultAdd()}
                  className={defaultAddress ? "default" : ""}
                />
              </div>
            </div>
            <div className="footer">
              <span onClick={() => this.cancel()}>取消</span>
              <span
                style={{ background: "#108EE9", color: "#fff" }}
                onClick={() => this.preserve("add")}
              >
                保存
              </span>
            </div>
          </div>
        ) : (
          <div className="skip" ref="skip">
            <div className="header">
              <h3>编辑地址</h3>
            </div>
            <div className="subject">
              <p>
                <input
                  type="text"
                  placeholder="姓名"
                  value={name}
                  onChange={e => this.setState({ name: e.target.value })}
                />
              </p>
              <p>
                <input
                  type="text"
                  placeholder="电话号码"
                  value={tel}
                  onChange={e => this.setState({ tel: e.target.value })}
                />
              </p>
              {/* 地址弹框 */}
              <List>
                <Picker
                  data={addressAllData}
                  title="Areas"
                  {...getFieldProps("district", {
                    initialValue: editAddress
                  })}
                  onOk={e => this.setState({ addressID: e })}
                >
                  <List.Item />
                </Picker>
              </List>

              <p>
                <input
                  type="text"
                  placeholder="详细地址"
                  value={address}
                  onChange={e => this.setState({ address: e.target.value })}
                />
              </p>
              <div>
                设置默认地址
                <span
                  onClick={() => this.defaultAdd()}
                  className={defaultAddress ? "default" : ""}
                />
              </div>
            </div>
            <div className="footer">
              <span onClick={() => this.cancel()}>取消</span>
              <span
                style={{ background: "#108EE9", color: "#fff" }}
                onClick={() => this.preserve("edit")}
              >
                保存
              </span>
            </div>
          </div>
        )}
        {isShow ? (
          <div className="wrapper">
            <div className="am-modal-mask" />
            <div className="am-modal-wrap">
              <div className="am-modal am-modal-transparent">
                <div className="am-modal-content">
                  <div className="am-modal-header">
                    <div className="am-modal-title">删除</div>
                  </div>
                  <div className="am-modal-body">
                    <div className="am-modal-alert-content">
                      您确定删除该地址吗????
                    </div>
                  </div>
                  <div className="am-modal-footer">
                    <div className="am-modal-button-group-h am-modal-button-group-normal">
                      <button
                        className="am-modal-button aa"
                        onClick={() => this.setState({ isShow: false })}
                      >
                        否
                      </button>
                      <button
                        className="am-modal-button"
                        onClick={this.remove.bind(this, num)}
                      >
                        是
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
  //删除的按钮
  delAddress(e,id) {
      e.stopPropagation();
    this.setState({ isShow: true, num: id,flag:1});
  }
  remove(id) {
    console.log(id);
    this.setState({ isShow: false });
    this.props.address.del_Address({ id: id });
  }
}

export default createForm()(Address);
