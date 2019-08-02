import React, { Component } from "react";
import { List, TextareaItem, Button,Toast } from "antd-mobile";
import { createForm } from "rc-form";
import { inject, observer } from "mobx-react";
import "./addComment.scss";
@inject("special")
@observer
class AddComment extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      value: ""
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    this.setState({
      id: id
    });
  }

  addCom() {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (values.content) {
          this.props.special.postSetCommentModule({
            content: values.content,
            typeId: 1,
            valueId: this.state.id
          });
          this.props.history.goBack();
        } else {
          Toast.offline("请输入内容", 1);
        }
      }
    });
  }

  render() {
    const { getFieldProps } = this.props.form;
    //let id = this.props.match.params.id;

    return (
      <div className="addCommentBox">
        <div className="header">
          <span
            onClick={() => {
              this.props.history.goBack();
            }}
          >
            &lt;
          </span>
          <h3>填写留言</h3>
        </div>

        <div className="main">
          <List>
            <TextareaItem
              {...getFieldProps("content", {
                initialValue: ""
              })}
              rows={5}
              count={100}
            />
          </List>
        </div>
        <div className="button">
          <Button
            type="primary"
            onClick={() => {
              this.addCom();
            }}
          >
            留言
          </Button>
        </div>
      </div>
    );
  }
}

export default createForm()(AddComment);
