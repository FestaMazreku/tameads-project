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

        <div className="all-footer-links">
          <div className="footer-list">
            <p> TameAds </p>
            <p> Advertisers </p>
            <p> Ad Formats </p>
            <p> Agencies </p>
            <p> Download </p>
            <p> Affiliate </p>
          </div>

          <div className="footer-list">
            <p> Additional Text 1 </p>
            <p> Additional Text 2 </p>
            <p> Additional Text 3 </p>
          </div>

          <hr />
          <div className="footer-list">
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
      </div>
    </footer>
  );
}

export default Footer;
