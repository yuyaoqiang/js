import React from "react";
import Bubble from "./bubble";
import Loader from "./loading";
import { getRect } from "../../util/dom";
import bscroll from "better-scroll";
import "./style.scss";
export default class Scroll extends React.Component {
  constructor() {
    super();
    this.state = {
      pullDownInitTop: -50,
      beforePullDown: true, // 拉下来之前
      isRebounding: false, // 是否反弹
      isPullingDown: false, // 是否下拉
      isPullUpLoad: false, // 是否上拉
      pullUpDirty: true, // 拉起来脏了?
      pullDownStyle: -50, // 下拉样式
      bubbleY: 0, // 气泡位置
      options: {
        scrollY: true, // 横向
        pullDownRefresh: {
          threshold: 80,
          stop: 40,
          stopTime: 0
        },
        pullUpLoad: { threshold: -60,text:"加载更多"},
        startY: 0,
        bounce: true
      }
    };
    this.scroll = null;
    this.forceUpdate = this.forceUpdate.bind(this);
    this._initPullUpLoad = this._initPullUpLoad.bind(this);
    this._initPullDownRefresh = this._initPullDownRefresh.bind(this);
  }
  componentDidMount() {
    this.initScroll();
    this._initPullDownRefresh();
    this._initPullUpLoad();
  }
  forceUpdate(dirty) {
    if (this.state.isPullingDown) {
      this.state.isPullingDown = false;
      this._reboundPullDown().then(() => {
        this._afterPullDown();
      });
    }
    if (this.state.isPullUpLoad) {
      this.setState({ pullUpDirty: dirty ,isPullUpLoad:false},()=>{
        this.pullUpText();
        this.scroll.finishPullUp();
        this.refresh();
      });
    }
  }
  onChildUpdate(flag) {
    console.log(flag)
    this.forceUpdate(flag);
  }
  pullUpText() {
    let text = this.state.pullUpDirty ? "加载更多" : "没有更多的数据";
    let data = Object.assign({},this.state.options.pullUpLoad,{text:text})
    let option = {...this.state.options,pullUpLoad:data}
    this.setState({
      options :  option
    });
  }
  initScroll() {
    if (!this._scrollWrap) return;
    if (this._scroll) {
      this._scroll.style.minHeight =
        getRect(this._scrollWrap).height + 1 + "px";
    }
    console.log(this.state.options)
    this.scroll = new bscroll(this._scrollWrap, this.state.options);
  }
  _initPullDownRefresh() {
    this.scroll.on("pullingDown", () => {
      this.setState(() => ({
        beforePullDown: false,
        isPullingDown: true
      }));
      this.props.pullingDown();
    });
    this.scroll.on("scroll", pos => {
      if (this.state.beforePullDown) {
        this.setState({
          bubbleY: Math.max(0, pos.y + this.state.pullDownInitTop),
          pullDownStyle: Math.min(pos.y + this.state.pullDownInitTop, 10)
        });
      } else {
        this.setState({ bubbleY: 0 });
      }
      if (this.state.isRebounding) {
        this.setState({
          pullDownStyle: 10 - (this.state.options.pullDownRefresh.stop - pos.y)
        });
      }
    });
  }
  _initPullUpLoad() {
    this.scroll.on("pullingUp", (pox) => {
      this.setState({
        isPullUpLoad: true
      },()=>{this.props.pullingUp()});
    });
    
  }

  _reboundPullDown() {
    return new Promise(resolve => {
      setTimeout(() => {
        this.setState(() => ({ isRebounding: true }));
        this.scroll.finishPullDown(); // 当下拉刷新数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载
        resolve();
      }, 600);
    });
  }
  _afterPullDown() {
    setTimeout(() => {
      this.setState(() => ({
        pullDownStyle: this.state.pullDownInitTop,
        beforePullDown: true,
        isRebounding: false
      }));
      this.refresh();
    }, 800);
  }
  refresh() {
    // 刷新
    this.scroll && this.scroll.refresh();
  }
  render() {
    return (
      <div
        className="scroll-wrap"
        ref={sw => {
          this._scrollWrap = sw;
        }}
      >
        <div className="scroll">
          <div
            className="scroll-list"
            ref={s => {
              this._scroll = s;
            }}
          >
           { this.props.children()}
          </div>
          <div className="pullup-wrapper">
            <div className="loader-gif-container">
              {this.state.isPullUpLoad ? <Loader /> : this.state.options.pullUpLoad.text}
            </div>
          </div>
        </div>
        <div
          className="pulldown-wrap"
          style={{ top: this.state.pullDownStyle + "px" }}
        >
          <div className="loader-gif-container">
            {this.state.isPullingDown && <Loader />}
            {!this.state.beforePullDown && !this.state.isPullingDown && (
              <div>已刷新数据</div>
            )}
          </div>
          {this.state.beforePullDown && <Bubble y={this.state.bubbleY} />}
        </div>
        <div
          className="pulldown-wrap"
          style={{ top: this.state.pullDownStyle + "px" }}
        >
          <div className="loader-gif-container">
            {this.state.isPullingDown && <Loader />}
            {!this.state.beforePullDown && !this.state.isPullingDown && (
              <div>已刷新数据</div>
            )}
          </div>
          {this.state.beforePullDown && <Bubble y={this.state.bubbleY} />}
        </div>
      </div>
    );
  }
}
