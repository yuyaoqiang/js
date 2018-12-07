import React from "react";
import "./style.scss";
import { connect } from "react-redux";
import { createForm } from "rc-form";
class Login extends React.Component {
  render() {
    console.log(this.props.form);
    let errors;
    const { getFieldProps, getFieldError } = this.props.form;
    return (
      <div className="login_wrap">
        <div className="phone_wrap">
          <input type="text" name="username" placeholder="手机号或邮箱" {...getFieldProps("username",{
            onchange(){},
            validateFirst: true,
            rules:[
              { required: true },
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
          })} />
          <i />
        </div>
        <div className="password_wrap">
          <input type="password" name="password" placeholder="密码" />
          <i />
        </div>
        <div className="password_wrap">
        {(errors = getFieldError('username')) ? errors.join(',') : null}
        </div>
        <div className="remenber fl">
          <input type="checkbox" />
          <span>记住我</span>
        </div>
        <div className="quistion fr">
          <a href="#">登录遇到问题？</a>
        </div>
        <button className="clearfix submit">登录</button>
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
export default connect()(createForm()(Login));
