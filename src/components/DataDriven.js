import React from "react";
import "../stylesheets/DataDriven.css";

function Data() {
  return (
    <div className="data">
      <div className="card">
        <b>
          <img src="images/Cookies.png" alt="Cookies" className="image"></img>
          <p className="data">Cookieless</p>
        </b>
        <p>
          Teads offers the most advanced Cookieless targeting in the industry
          allowing you to have 60% more reach as compared to
        </p>
      </div>
      <div className="card2">
        <b>
          <img src="images/CrossScreen.png" alt="CrossScreen"></img>
        </b>
      </div>
      <div className="card">
        <b>
          <img src="images/Page.png" alt="Page" className="image"></img>
          <p className="data">Contextual</p>{" "}
        </b>
        <p>
          Understand the context and sentiment around the content being
          consumed.
        </p>
      </div>
      <div className="card">
        <b>
          <img src="images/Commerce.png" alt="Commerce" className="image"></img>
          <p className="data">Commerce</p>{" "}
        </b>
        <p>
          We provide purchase data from top retailers allowing for targeting and
          online and offline measurement solutions.
        </p>
      </div>
    </div>
  );
}

export default Data;
