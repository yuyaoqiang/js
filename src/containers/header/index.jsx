import React from "react";
import "./header.scss";
class Header extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <header className="header-wrap">
          <div className="header-content">
            <div className="header-left-title">简数</div>
            <div className="header-input">首页</div>
            <div className="header-rigth-logoin">写文章</div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
