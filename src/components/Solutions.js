import React from "react";
import "../stylesheets/Solutions.css";
import { RiLoginCircleLine } from "react-icons/ri";

function Solutions() {
  return (
    <>
      <p className="text">
        Delivering solutions <br /> across the marketing funnel{" "}
      </p>
      <img src="images/laptop.png" alt="laptop" className="laptop" />

      <div className="view">
        <div className="container">
          <div className="content">
            <div className="text-container">
              <b>
                <h2>
                  Effortlessly repurpose <br /> social assets
                </h2>
              </b>
              <p className="text2">
                Sometimes it's critical to get campaigns live in minutes, that's{" "}
                <br /> why we have developed the ability to repurpose your
                assets for <br />
                social platforms in just a few clicks. See how the same assets{" "}
                <br /> can garner 4-6x better performance than they do in a
                newsfeed.
              </p>

              <p className="learnmore">
                Learn more
                <span>
                  {" "}
                  <RiLoginCircleLine className="icon" size={35} />{" "}
                </span>
              </p>
            </div>

            <div className="image-container">
              <img src="images/apple.png" alt="Apple" className="apple" />
            </div>
          </div>
        </div>
      </div>

      <div className="view">
        <div className="container">
          <div className="content">
            <div className="image-container">
              <img
                src="images/audience.png"
                alt="audience"
                className="audience"
              />
            </div>

            <div className="text-container">
              <b>
                <h2> Deep audience insights </h2>
              </b>
              <p className="text2">
                Our platform offers deep insights that enable advertisers to{" "}
                <br /> understand what their audiences are interested in, where
                they <br /> spend time and how to target them more effictively.
                Many of <br /> these insights are based on cookieless signals
                that can be <br /> activated in the privacy-first era.
              </p>

              <p className="learnmore2">
                Learn more
                <span>
                  {" "}
                  <RiLoginCircleLine className="icon" size={35} />{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Solutions;
