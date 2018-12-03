import React from "react";

class TitleList extends React.Component {
  render() {
    return (
      <div className="list-wrap">
        <div className="spack-border" />
        <ul className="list-ul">
          {this.props.homeList.map((item, index) => {
            return (
              <li className="list-li" key={item.get("id")}>
                <a href="/" className="img-wrap">
                  <img src={item.get("imgUrl")} alt="简书" />
                </a>
                <div className="meta-wrap">
                  <a href="/" className="title">
                    {item.get("title")}
                  </a>
                  <p className="abstract">{item.get("desc")}</p>
                  <div className="meta">
                    <a className="nackname" href="/">
                      爱编程的妹子
                    </a>
                    <a className="_blank" href="/">
                      <i className="iconfont icon-xin" />
                      20
                    </a>
                    <span className="heart">
                      <i className="iconfont icon-xin" />
                      10
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default TitleList;
