import Navigationbar from "./Navigationbar";
import Data from "./DataDriven";
import RecommendationsView from "./RecommendationsView";
import Vision from "./Vision";
import Solutions from "./Solutions";
import Formats from "./Formats";
import Footer from "./Footer";
import React from "react";
import "../stylesheets/Home.css";

function Home() {
  return (
  
    <div className="Home">
      <br />
      <br />
      <Navigationbar />
      <img src="images/Dashboard2x.png" alt="Dashboard" className="dashboard" />
      <br />
      <img src="images/Group 10.png" alt="Logos" className="logos" />
      <br />
      <br />
      <br />
      <br />
      <p className="title"> Data Driven Reach </p>
      <br />
      <br />
      <Data />
      <br />
      <br />
      <RecommendationsView />
      <br />
      <Vision />
      <Solutions />
      <Formats />
      <Footer />
    </div>
  );
}
export default Home;
