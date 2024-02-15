import React from "react";
import "../stylesheets/DataDriven.css";

function Data() {
  return (
    <div className="data">
      <div className="card">
        <b>
          {" "}
          <img src="images/Cookies.png"></img>
          <p className="data">Cookieless</p> 
        </b>
        <p> Teads offers </p>
      </div>
      <div className="card">
        <b>
          {" "}
          <img src="images/CrossScreen.png" className="CrossScreen"></img>
        </b>
      </div>
      <div className="card">
        <b>
          {" "}
          <img src="images/Page.png"></img>
          <p className="data">Contextual</p>{" "}
        </b>
      </div>
      <div className="card">
        <b>
          {" "}
          <img src="images/Commerce.png"></img>
          <p className="data">Commerce</p>{" "}
        </b>
      </div>
    </div>
  );
}

export default Data;
