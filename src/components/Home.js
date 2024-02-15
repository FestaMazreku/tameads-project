import Navbar from "./Navigationbar";
import Data from "./DataDriven";
import React from "react";
import "../stylesheets/Home.css";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <img src="images/Dashboard2x.png" alt="Dashboard" className="dashboard" />
      <br />
      <img src="images/Group 10.png" alt="Logos" className="logos" />
      <br />
      <br />
      <br />
      <p className="title"> Data Driven Reach </p>
      <Data />
      <br />
    </div>
  );
}

export default Home;
