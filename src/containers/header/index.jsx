import React from "react";
import "./header.scss";
class Header extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <header className="header-wrap">
          <div className="header-content">
            <div className="header-left-title">
              <img src="http://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png" alt="简书"/>
            </div>
            <div className="header-container">
              123
              <a href=""></a>
              <a href=""></a>

            </div>
            <div className="header-rigth-logoin">
                <span className="login">注册</span>
                <span className="write">写文章</span>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
