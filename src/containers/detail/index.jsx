import React from "react";
import { connect } from "react-redux";
import { actionCreator } from "./store";
import "./style.scss";
class Detail extends React.Component {
  componentDidMount() {
    let id = this.props.location.state.id;
    this.props.getDetailById(id);
  }
  render() {
    return (
      <div className="detail-wrap">
        <div className="ad-wrap" />
        <div className="article-wrap">
          <h1>我是标题</h1>
          <div className="author-wrap">
            <a href="#" className="author-img">
              <img
                src="http://cdn2.jianshu.io/assets/default_avatar/2-9636b13945b9ccf345bc98d0d81074eb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"
                alt="头像"
              />
            </a>
            <div className="author-info">
              <span className="name">徐晶</span>
              <a className="btn" href="#">
                <i>+</i>
                <span>关注</span>
              </a>
              <div className="metas">
                <span>2018.10.14 09:14</span>
                <span>字数 768</span>
                <span>阅读 9309</span>
                <span>评论 52</span>
                <span>喜欢 151</span>
                <span>赞赏 1</span>
              </div>
            </div>
          </div>
          <div className="detail-conten-wrap"  dangerouslySetInnerHTML={{__html: this.props.detail.content}}>
          </div>
        </div>
      </div>
    );
  }
}
const stateToProps = state => {
  return {
    detail: state.getIn(["detail", "detail"])
  };
};
const dipatchToProps = dispatch => {
  return {
    getDetailById(id) {
      dispatch(actionCreator.detail(id));
    }
  };
};
export default connect(
  stateToProps,
  dipatchToProps
)(Detail);
