import React from "react";
import "../stylesheets/RecommendationsView.css";

function RecommendationsView() {
  return (
    <div className="view">
      <div className="container">
        <div className="content">
          <div className="text-container">
            <b>
              <p className="text">
                TameAds is the technology company powering the discovery feeds
                on your favorite media.{" "}
              </p>
            </b>
            <br />
            <p className="text2">
              We've perfected the art of native advertising, empowering
              publishers and <br /> advertisers to grow their brand presence and
              revenues.
            </p>
            <br />

            <div className="border">
              <p className="number">344B</p>
              <p className="text3">Monthly Recommendations</p>
            </div>

            <div className="border">
              <p className="number">55+</p>
              <p className="text3">Countries in Network</p>
            </div>

            <p className="learnmore">
              Learn more
              <span className="icon">➔</span>
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