import React from "react";
import Login from "../../containers/login";
import Register from "../../containers/register";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCreator } from "./store";
import "./style.scss";

const LOGIN_PATH = "login";
const REGISTER_PATH = "register";
class Sign extends React.Component {
  toPath(path) {
    path === "login" ? this.props.goToLogin() : this.props.goToRegister();
  }
  render() {
    let { loginOrRegister } = this.props;
    return (
      <div className="sign_wrap">
        <div className="vertical_center">
          <h4 className="titles-wrap">
            <span
              className={loginOrRegister ? "login_tital" : ""}
              onClick={() => {
                this.toPath(LOGIN_PATH);
              }}
            >
              登录
            </span>
            <span>·</span>
            <span
              className={!loginOrRegister ? "register_tital" : ""}
              onClick={() => {
                this.toPath(REGISTER_PATH);
              }}
            >
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
const mapDispatchToProps = dispatch => {
  return {
    goToLogin() {
      dispatch(actionCreator.setLoginState());
    },
    goToRegister() {
      dispatch(actionCreator.setRegisterState());
    }
  };
};
export default connect(
  mapstateToProps,
  mapDispatchToProps
)(withRouter(Sign));
