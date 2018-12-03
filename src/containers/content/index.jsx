import React from "react";
import Banner from "./subComponent/banner";
import Recommend from "./subComponent/recommend";
import Siderbar from "./subComponent/siderbar";
import TitleList from "./subComponent/titleList";
import { actionCreator } from "./store";
import "./style.scss";
import { connect } from "react-redux";
class Content extends React.Component {
  componentDidMount() {
    this.props.getHomeTitleList();
    this.props.doAutherDataList();
  }
  render() {
    return (
      <div className="content-wrap">
        <div className="content-left-wrap">
          <Banner />
          <TitleList homeList={this.props.homeList} />
        </div>
        <div className="content-right-wrap">
          <Recommend />
          <Siderbar autherList={this.props.autherList}/>
        </div>
      </div>
    );
  }
}
const stateToProps = state => {
  return {
    homeList: state.getIn(["home", "homeList"]),
    autherList: state.getIn(["home", "autherList"])
  };
};
const dispatchToprops = dispatch => {
  return {
    doAutherDataList(){
      dispatch(actionCreator.doAutherList())
    },
    getHomeTitleList() {
      dispatch(actionCreator.getHomeTitleList());
    }
  };
};
export default connect(
  stateToProps,
  dispatchToprops
)(Content);
