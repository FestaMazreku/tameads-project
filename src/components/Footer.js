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
        <p className="text-footer"> Join the largest ad network in the world. </p>
        <br />
        <p className="tameads"> &copy; 2023 - TameAds - All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
