import React from "react";

class Siderbar extends React.Component {
  render() {
    return (
      <div className="side-wrap">
        <a className="down-img" href="/">
          <img
            src="http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
            alt="简书二维码"
          />
          <div className="side-text">
            <p className="donw-text">下载简书手机APP</p>
            <p className="creat-text">随时随地发现和创作内容</p>
          </div>
        </a>
        <div className="recommend-authors">
          <div className="author-wrap">
            <span>推荐作者</span>
            <a className="change-author" href="/">
              <i />
              换一批
            </a>
          </div>
          <ul className="attention-wrap">
            {this.props.autherList.map((item, index) => {
              return (
                <li key={item.get("id")}>
                  <a className="head-author" href="/">
                    <img
                      src={item.get("avatar_source")}
                      alt="简书头像"
                    />
                  </a>
                  <div className="description">
                    <a href="/">{item.get("nickname")}</a>
                    <p>{item.get("total_wordage")} · {item.get("total_likes_count")}</p>
                  </div>
                  <a className="guanzhu" href="/">
                    +关注
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Siderbar;
