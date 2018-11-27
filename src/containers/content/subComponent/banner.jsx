import React from "react";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
import "./sytles.scss";
import banner1 from "../../../assets/img/banner1.jpg";
import banner2 from "../../../assets/img/banner2.jpg";
import banner3 from "../../../assets/img/banner3.jpg";
class Banner extends React.Component {
  componentDidMount() {
    new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      outline: "none",
      pagination: {
        el: ".swiper-pagination",
        hideOnClick :true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        hideOnClick: true,
      }
    });
  }
  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src={banner1} alt="简书" />
          </div>
          <div className="swiper-slide">
            <img src={banner2} alt="简书" />
          </div>
          <div className="swiper-slide">
            <img src={banner3} alt="简书" />
          </div>
        </div>
        <div className="swiper-pagination" />
        <div className="swiper-button-prev swiper-button-white" />
        <div className="swiper-button-next swiper-button-white" />
      </div>
    );
  }
}

export default Banner;
