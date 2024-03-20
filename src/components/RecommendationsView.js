import React from "react";
import "../stylesheets/RecommendationsView.css";
import { RiLoginCircleLine } from "react-icons/ri";

function RecommendationsView() {
  return (
    <div className="view">
      <div className="container">
        <div className="content">
          <div className="text-container">
            <b>
              <h2>
                TameAds is the technology company <br /> powering the discovery
                feeds on your <br /> favorite media.{" "}
              </h2>
            </b>
            <br />
            
            <p className="text2">
              We've perfected the art of native advertising, empowering
              publishers and <br /> advertisers to grow their brand presence and
              revenues.
            </p>
            <br />

            <div className="align">
              <div className="number-container">
                <p className="number">344B</p>
                <p className="text3">Monthly Recommendations</p>
              </div>

              <div className="number-container">
                <p className="number">55+</p>
                <p className="text3">Countries in the Network</p>
              </div>
            </div>

            <p className="learnmore">
              Learn more
              <span>
                {" "}
                <RiLoginCircleLine className="icon" size={30} />{" "}
              </span>
            </p>
          </div>

          <div className="image-container">
            <img src="images/phone.png" alt="Phone" className="image2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendationsView;