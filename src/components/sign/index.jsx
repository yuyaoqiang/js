import React from "react";
import Login from "../../containers/login";
import Register from "../../containers/register";
import { connect } from "react-redux";
import "./style.scss";

class Sign extends React.Component {
  render() {
    let { loginOrRegister } = this.props;
    return (
      <div className="sign_wrap">
        <div className="vertical_center">
          <h4 className="titles-wrap">
            <span className={loginOrRegister ? "login_tital" : ""}>登录</span>
            <span>·</span>
            <span className={!loginOrRegister ? "register_tital" : ""}>
              注册
            </span>
          </h4>
          {loginOrRegister ? <Login /> : <Register />}
        </div>
      </div>
    );
  }
}
const mapstateToProps = state => {
  return {
    loginOrRegister: state.getIn(["sign", "loginOrRegister"])
  };
};
export default connect(
  mapstateToProps,
  null
)(Sign);
