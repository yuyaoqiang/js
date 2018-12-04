import React from "react";
import "./style.scss";
class Register extends React.Component {
  render() {
    return (
      <div className="register_wrap">
        <div className="name_wrap">
          <input type="text" placeholder="你的昵称" />
          <i />
          </div>
        <div className="phone_wrap">
          <input type="text" placeholder="手机号或邮箱" />
          <i />
        </div>
        <div className="verification">
          <input type="text" placeholder="验证码" />
          <i />
          <a href="#">发送验证码</a>
        </div>
        <div className="password_wrap">
          <input type="password" placeholder="密码" />
          <i />
        </div>
        <button className="clearfix submit">登录</button>
        <p className="regsiter-text">
          点击 “注册” 即表示您同意并愿意遵守简书
          <br />
          <a href="#">用户协议</a> 和 <a href="#">隐私政策</a>
        </p>
        <div className="more-sign">
          <h6>社交账号直接注册</h6>
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
export default Register;
