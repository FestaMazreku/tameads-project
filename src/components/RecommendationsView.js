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
            <p>
              We've perfected the art of native advertising, empowering
              publishers and advertisers to grow their brand presence and
              revenues.
            </p>
          </div>
          <div className="image-container">
            <img
              src="/path/to/your/image.jpg"
              alt="TameAds Image"
              className="image2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendationsView;
