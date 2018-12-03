import React from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import {
  handleInputFocus,
  handleInputBlur,
  handlDivFoucs,
  handlDivBlur
} from "../../actions/header";
import "./header.scss";

const Header = props => {
  const { isFocus, isHover,handleInputFocus, handleInputBlur ,handlDivFoucs,handlDivBlur } = props;
  return (
    <React.Fragment>
      <header className="header-wrap">
        <div className="header-content">
          <div className="header-left-title">
            <img
              src="http://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png"
              alt="简书"
            />
          </div>

          <div className="header-rigth-logoin">
            <span className="register">注册</span>
            <span className="write">写文章</span>
          </div>
          <div className="header-rigth-logoin">
            <span className="setting">Aa</span>
            <span className="login">登录</span>
          </div>
          <div className="header-container clearfix">
            <ul>
              <li className="fl container-index">首页</li>
              <li className="fl container-down">下载APP</li>
              <li className="fl container-li">
                <CSSTransition in={isFocus} timeout={300} classNames="slide">
                  <input
                    className={
                      isFocus
                        ? "container-focuk container-input"
                        : "container-input"
                    }
                    type="text"
                    placeholder="搜索"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </CSSTransition>
                <i
                  className={
                    isFocus
                      ? " iconfont icon-feather-blur-light-b input-serach focuk-iconft "
                      : "iconfont icon-feather-blur-light-b input-serach"
                  }
                />
                <div
                  onMouseOver={handlDivFoucs}
                  onMouseLeave={handlDivBlur}
                  className={isFocus||isHover ? "search-tip" : "search-tip hide"}
                >
                  <div className="search-trending">
                    <div className="trending-header">
                      <span>热门搜索</span>
                      <a href="/">换一批</a>
                    </div>
                    <ul className="trending-tag-wrap">
                      <li>
                        <a href="/">交友交友</a>
                      </li>
                      <li>
                        <a href="/">交友</a>
                      </li>
                      <li>
                        <a href="/">交友</a>
                      </li>
                      <li>
                        <a href="/">交友</a>
                      </li>
                      <li>
                        <a href="/">交友</a>
                      </li>
                      <li>
                        <a href="/">交友</a>
                      </li>
                      <li>
                        <a href="/">交友</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
const stateToProps = state => {
  return {
    isFocus: state.getIn(["header", "isFocus"]),
    isHover: state.getIn(["header", "isHover"])
  };
};
const stateToDispatch = dispatch => {
  return {
    handleInputFocus() {
      debugger
      dispatch(handleInputFocus());
    },
    handleInputBlur() {
      dispatch(handleInputBlur());
    },
    handlDivFoucs() {
      dispatch(handlDivFoucs());
    },
    handlDivBlur() {
      dispatch(handlDivBlur());
    }
  };
};
export default connect(
  stateToProps,
  stateToDispatch
)(Header);
