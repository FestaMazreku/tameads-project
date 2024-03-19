import React, { useState } from "react";
import "../stylesheets/Navigationbar.css";

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav>
      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        ☰
      </div>
      <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
        <li>
          <img src="/images/TameAds.png" alt="TameAds Logo" className="logo" />
        </li>
        <li
          className={`nav-item ${
            activeNavItem === "advertisers" ? "active" : ""
          }`}
          onClick={() => handleNavItemClick("advertisers")}
        >
          Advertisers
        </li>
        <li
          className={`nav-item ${
            activeNavItem === "mediaowners" ? "active" : ""
          }`}
          onClick={() => handleNavItemClick("mediaowners")}
        >
          Media Owners
        </li>
        <li
          className={`nav-item ${activeNavItem === "aboutus" ? "active" : ""}`}
          onClick={() => handleNavItemClick("aboutus")}
        >
          About Us
        </li>
        <li
          className={`nav-item ${
            activeNavItem === "resources" ? "active" : ""
          }`}
          onClick={() => handleNavItemClick("resources")}
        >
          Resources
        </li>
        <li
          className={`nav-item ${
            activeNavItem === "adformats" ? "active" : ""
          }`}
          onClick={() => handleNavItemClick("adformats")}
        >
          Ad Formats
        </li>
        <li
          className={`nav-item ${activeNavItem === "contact" ? "active" : ""}`}
          onClick={() => handleNavItemClick("contact")}
        >
          <div class="navigation-right">Contact</div>
        </li>

        <li
          className={`nav-item ${activeNavItem === "login" ? "active" : ""}`}
          onClick={() => handleNavItemClick("login")}
        >
          Log in
        </li>
        <li
          className={`nav-item ${activeNavItem === "signup" ? "active" : ""}`}
          onClick={() => handleNavItemClick("signup")}
        >
          Sign up
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
