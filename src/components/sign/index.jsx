import React from "react";
import Login from "../../containers/login";
import Register from "../../containers/register";
import "./style.scss";

export default class Sign extends React.Component {
  render() {
    return (
      <div className="sign_wrap">
        <div className="vertical_center">
         <h4 className="titles-wrap">
            <span className="login_tital">登录</span>
            <span>·</span>
            <span className="register_tital">注册</span>
         </h4>
          {/* <Login /> */}
          <Register />
        </div>
      </div>
    );
  }
}
