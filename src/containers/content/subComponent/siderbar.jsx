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
            <a className="change-author"  href="/">
              <i />
              换一批
            </a>
          </div>
          <ul className="attention-wrap">
            <li>
              <a className="head-author" href="/">
                <img
                  src="http://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
                  alt="简书头像"
                />
              </a>
              <div className="description">
                <a href="/">简书大课堂</a>
                <p>写了1459.9k字 · 26.6k喜欢</p>
              </div>
              <a className="guanzhu" href="/">
                +关注
              </a>
            </li>
            <li>
              <a className="head-author" href="/">
                <img
                  src="http://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
                  alt="简书头像"
                />
              </a>
              <div className="description">
                <a href="/">简书大课堂</a>
                <p>写了1459.9k字 · 26.6k喜欢</p>
              </div>
              <a className="guanzhu" href="/">
                +关注
              </a>
            </li>
            <li>
              <a className="head-author" href="/">
                <img
                  src="http://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
                  alt="简书头像"
                />
              </a>
              <div className="description">
                <a href="/">简书大课堂</a>
                <p>写了1459.9k字 · 26.6k喜欢</p>
              </div>
              <a className="guanzhu" href="/">
                +关注
              </a>
            </li>
            <li>
              <a className="head-author" href="/">
                <img
                  src="http://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
                  alt="简书头像"
                />
              </a>
              <div className="description">
                <a href="/">简书大课堂</a>
                <p>写了1459.9k字 · 26.6k喜欢</p>
              </div>
              <a href="/" className="guanzhu">
                +关注
              </a>
            </li>
            <li>
              <a className="head-author" href="/">
                <img
                  src="http://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
                  alt="简书头像"
                />
              </a>
              <div className="description">
                <a href="/">简书大课堂</a>
                <p>写了1459.9k字 · 26.6k喜欢</p>
              </div>
              <a href="/" className="guanzhu">
                +关注
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Siderbar;
