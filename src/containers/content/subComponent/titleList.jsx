import React from "react";
import { Link } from "react-router-dom";
const TitleList = ({ ...props }) => {
  function toDetail(id) {
    debugger;
    console.log(props);
  }
  return (
    <div className="list-wrap">
      <div className="spack-border" />
      <ul className="list-ul">
        {props.homeList.map((item, index) => {
          return (
            <li className="list-li" key={item.get("id")}>
              <a href="/" className="img-wrap">
                <img src={item.get("imgUrl")} alt="简书" />
              </a>
              <div className="meta-wrap">
                <Link
                  className="title"
                  to={{ pathname: "/detail", state: { id: item.get("id") } }}
                >
                  {item.get("title")}
                </Link>
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
};

export default TitleList;
