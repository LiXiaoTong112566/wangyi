import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Form, Icon, Input, Button } from "antd";
import "./login.scss";

@inject("login")
@observer
class Login extends Component {
  componentDidMount() {}

  //登录成功跳转到首页

  //登录
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login.getLogin(values);
        localStorage.setItem("mobile", values.mobile);
       

      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    if (this.props.login.dataFlag === 0) {
      this.props.history.push("/main/homeIndex");
    }

    return (
      <div className="loginBox">
        <div className="loginBox_logo">
          <img
            src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"
            alt=""
          />
        </div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("mobile", {
                rules: [{ required: true, message: "请输入手机号码" }]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="请输入手机号码"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "请输入密码" }]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="请输入登录密码"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        
      </div>
    );
  }
}

export default Form.create()(Login);
