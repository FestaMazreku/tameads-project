import React, { useState } from "react";
import "../stylesheets/Navigationbar.css";

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState("home");

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  return (
    <nav>
      <ul>
        <li>
          <img src="/images/TameAds.png" alt="TameAds Logo" className="logo" />
        </li>
        <li
          className={activeNavItem === "advertisers" ? "active" : ""}
          onClick={() => handleNavItemClick("advertisers")}
        >
          Advertisers
        </li>
        <li
          className={activeNavItem === "mediaowners" ? "active" : ""}
          onClick={() => handleNavItemClick("mediaowners")}
        >
          Media Owners
        </li>
        <li
          className={activeNavItem === "aboutus" ? "active" : ""}
          onClick={() => handleNavItemClick("aboutus")}
        >
          About Us
        </li>
        <li
          className={activeNavItem === "resources" ? "active" : ""}
          onClick={() => handleNavItemClick("resources")}
        >
          Resources
        </li>
        <li
          className={activeNavItem === "adformats" ? "active" : ""}
          onClick={() => handleNavItemClick("adformats")}
        >
          Ad Formats
        </li>
        <li
          className={activeNavItem === "contact" ? "active" : ""}
          onClick={() => handleNavItemClick("contact")}
        >
          Contact
        </li>
        <li
          className={activeNavItem === "login" ? "active" : ""}
          onClick={() => handleNavItemClick("login")}
        >
          Log in
        </li>
        <li
          className={activeNavItem === "signup" ? "active" : ""}
          onClick={() => handleNavItemClick("signup")}
        >
          Sign up
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
