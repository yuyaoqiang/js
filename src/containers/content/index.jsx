import React from "react";
import Banner from "./subComponent/banner";
import Recommend from "./subComponent/recommend";
import Siderbar from "./subComponent/siderbar";
import TitleList from "./subComponent/titleList";
import "./content.scss";
class Content extends React.Component {
  render() {
    return (
      <div className="content-wrap">
        <div className="content-left-wrap">
          <Banner />
          <TitleList />
        </div>
        <div className="content-right-wrap">
          <Recommend />
          <Siderbar />
        </div>
      </div>
    );
  }
}

export default Content;
