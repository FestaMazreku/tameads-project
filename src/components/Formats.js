import React from "react";
import "../stylesheets/Formats.css";
import { RiLoginCircleLine } from "react-icons/ri";

function Formats() {
  return (
    <>
      <center>
        <h1> TameAds Formats </h1>
        <p>
          Both publishers and brands will be happy to know that we cater to
          different formats. We created a variety of formats that can be <br />
          adjusted to the publisher's design themes and website behavior.
        </p>

        <br />
        <img
          src="images/Earth.png"
          alt="CrossScreen"
          className="responsive-image"
        />
      </center>
      <br />
      <h1 className="news"> Latest News </h1>

      <p className="text-news">
        Stay ahead of industry trends with our ad tech blog. <br /> Read our
        native advertising tips & tricks.
      </p>

      <p className="viewall">
        View all
        <span>
          <RiLoginCircleLine className="icon" size={35} />
        </span>
      </p>

      <center>
        <img
          src="images/Leadership.png"
          alt="CrossScreen"
          className="leadership"
        />
      </center>

      <div className="content light-gray-bg publishers-container">
        <div className="image-container">
          <img
            src="images/Advertisers.png"
            alt="audience"
            className="advertisers"
          />
        </div>

        <div className="text-container">
          <b>
            <h2 className="publishers"> Publishers </h2>
          </b>

          <p className="text2">
            <h4> Join The Global Media Platform </h4>
            Unlock incremental revenue from <br /> premium advertisers through
            ad experiences <br /> that respect your users.
          </p>

          <p className="join-now">
            Join now
            <span>
              <RiLoginCircleLine className="icon" size={35} />
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Formats;