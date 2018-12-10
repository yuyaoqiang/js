import React from "react";
import "./style.scss";
import { connect } from "react-redux";
import { createForm } from "rc-form";
import { Modal, Spin } from "antd";
import FormCreatHoc from "../../components/hocComponent/formCreatHOC";
class Login extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        console.log(errors);
        return;
      }
    });
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className="login_wrap">
        <div className="phone_wrap">
          <input
            type="text"
            name="username"
            placeholder="手机号或邮箱"
            {...getFieldProps("username", {
              validateFirst: true,
              initialValue: "",
              rules: [
                { required: true, message: "手机号为必填" },
                (rule, value, callback, source, options) => {
                  let errors = [];
                  if (!/(\+86|0086)?\s*1[34578]\d{9}/.test(value)) {
                    errors = "请输入有效的手机号码";
                  }
                  if (value.length === 0) {
                    errors = [];
                  }
                  callback(errors);
                }
              ]
            })}
          />
          <i />
        </div>
        <div className="password_wrap">
          <input
            type="password"
            name="password"
            placeholder="密码"
            {...getFieldProps("password", {
              validateFirst: true,
              initialValue: "",
              rules: [
                { required: true, message: "密码必须填写" },
                {
                  min: 6,
                  message: "密码必须是6-16位"
                },
                {
                  max: 12,
                  message: "密码必须是6-16位"
                },
                (rule, value, callback, source, options) => {
                  let errors = [];
                  if (!/^([\u4E00-\u9FFF]|\w){2,11}$/g.test(value)) {
                    errors = "密码必须是6-16位";
                  } else {
                    this.setState({
                      nameValid: true
                    });
                    callback(errors);
                  }
                }
              ]
            })}
          />
          <i />
        </div>
        <div className="remenber fl">
          <input type="checkbox" />
          <span>记住我</span>
        </div>
        <div className="quistion fr">
          <a href="#">登录遇到问题？</a>
        </div>
          <button className="clearfix submit" onClick={this.handleSubmit}>
            登录
          </button>

        <div className="more-sign">
          <h6>社交账号登录</h6>
          <ul>
            <li>
              <i className="iconfont icon-feather-blur-light-b" />
            </li>
            <li>
              <i className="iconfont icon-feather-blur-light-b" />
            </li>
            <li>
              <i className="iconfont icon-feather-blur-light-b" />
            </li>
            <li>
              <i className="iconfont icon-feather-blur-light-b" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default connect()(createForm()(FormCreatHoc(Login)));
//export default connect()(FormCreatHoc(Login))
