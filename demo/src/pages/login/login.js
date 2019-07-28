import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Form, Icon, Input, Button } from "antd";
import "./login.scss";

@inject("login")
@observer
class Login extends Component {
  componentDidMount() {}

  //登录成功跳转到首页
  componentDidUpdate() {
    if (this.props.login.dataFlag === 0) {
      this.props.history.push("/main/homeIndex");
    }
  }

  //登录
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login.getLogin(values);
        // console.log(this.props.login.dataFlag);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    // console.log(this.props.login.dataFlag);
    return (
      <div className="loginBox">
        <div className="loginBox_logo">
          <img
            src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"
            alt=""
          />
        </div>

        <div className="form_box">
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
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default Form.create()(Login);
