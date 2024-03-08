import React from "react";
import "../stylesheets/Formats.css";
import { RiLoginCircleLine } from "react-icons/ri";

function Formats() {
  return (
    <>
      <center>
        <h1> TameAds Formats </h1>
        <p>
          {" "}
          Both publishers and brands will be happy to know that we cater to
          different formats. We created a variety of formats that can be <br />{" "}
          adjusted to the publisher's design themes and website behavior.{" "}
        </p>
      </center>

      <br />
      <img
        src="images/Earth.png"
        alt="CrossScreen"
        className="responsive-image"
      />
      <br />
      <h2> Latest News </h2>

      <p>
        {" "}
        Stay ahead of industry trends with our ad tech blog. <br /> Read our
        native advertising tips & tricks.{" "}
      </p>

      <p className="viewall">
        View all
        <span>
          {" "}
          <RiLoginCircleLine className="icon" size={35} />{" "}
        </span>
      </p>
      <center>
        <img
          src="images/Leadership.png"
          alt="CrossScreen"
          className="leadership"
        />
      </center>
      <br />
    </>
  );
}

export default Formats;
