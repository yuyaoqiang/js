import React from "react";
import "./style.scss";
import { from } from "rxjs";
class Login extends React.Component {
  render() {
    return (
      <div className="login_wrap">
        <div className="phone_wrap">
          <input type="text" placeholder="手机号或邮箱" />
          <i />
        </div>
        <div className="password_wrap">
          <input type="password" placeholder="密码" />
          <i />
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
              <i className="iconfont icon-feather-blur-light-b"/>
            </li>
            <li>
              <i className="iconfont icon-feather-blur-light-b"/>
            </li>
            <li>
              <i className="iconfont icon-feather-blur-light-b"/>
            </li>
            <li>
              <i className="iconfont icon-feather-blur-light-b"/>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Login;
