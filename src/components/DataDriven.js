import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../stylesheets/DataDriven.css";

function Data() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="card">
        <b>
          <img src="images/Cookies.png" alt="Cookies" className="image" />
          <p className="data">Cookieless</p>
        </b>
        <p>
          Teads offers the most advanced Cookieless targeting in the industry
          allowing you to have 60% more reach as compared to
        </p>
      </div>
      <div className="card2">
        <b>
          <img src="images/CrossScreen.png" alt="CrossScreen" />
        </b>
      </div>
      <div className="card">
        <b>
          <img src="images/Page.png" alt="Page" className="image" />
          <p className="data">Contextual</p>{" "}
        </b>
        <p>
          Understand the context and sentiment around the content being
          consumed.
        </p>
      </div>
      <div className="card">
        <b>
          <img src="images/Commerce.png" alt="Commerce" className="image" />
          <p className="data">Commerce</p>{" "}
        </b>
        <p>
          We provide purchase data from top retail ers allowing for targeting
          and online and offline measurement solutions.
        </p>
      </div>
    </Slider>
  );
}

export default Data;
