import React from "react";
import "../stylesheets/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="text-left">
        <br />
        <img
          src="/images/TameAdslogo.png"
          alt="TameAds Logo"
          className="logo"
        />
        <p className="text-footer">
          {" "}
          Join the largest ad network in the world.{" "}
        </p>
        <br />
        <hr className="hr" />

        <div className="footer-row">
          <p> TameAds </p>
          <p> Advertisers </p>
          <p> Ad Formats </p>
          <p> Agencies </p>
          <p> Download </p>
          <p> Affiliate </p>
        </div>

        <hr className="hr" />
        <div className="footer-row">
          <p> Subscribe newsletter </p>
        </div>

        <hr />
        <div className="footer-row">
          <p className="tameads">
            {" "}
            &copy; 2023 - TameAds - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
