import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../stylesheets/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            urna eget nunc varius lacinia.
          </p>
        </div>

        <div className="footer-column">
          <h2>TameAds</h2>
          <ul>
            <li>
              <p>Advertisers</p>
            </li>
            <li>
              <p>Publishers</p>
            </li>
            <li>
              <p>Ad Formats</p>
            </li>
            <li>
              <p>Agencies</p>
            </li>
            <li>
              <p>Download</p>
            </li>
            <li>
              <p>Affiliate</p>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h2>Advertisers</h2>
          <ul>
            <li>
              <p>Advertise With Us</p>
            </li>
            <li>
              <p>How To Buy TameAds</p>
            </li>
            <li>
              <p>Smartads Gallery</p>
            </li>
            <li>
              <p>Advertiser Guidelines</p>
            </li>
            <li>
              <p>Advertising FAQ</p>
            </li>
            <li>
              <p>Onboarding Kit</p>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h2>Publishers</h2>
          <ul>
            <li>
              <p>Publisher Overview</p>
            </li>
            <li>
              <p>Discover Smartlogic</p>
            </li>
            <li>
              <p>New Media</p>
            </li>
            <li>
              <p>Publishers Guidelines</p>
            </li>
            <li>
              <p>Publishers FAQ</p>
            </li>
            <li>
              <p>Request a Demo</p>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h2>Company</h2>
          <ul>
            <li>
              <p>About Us</p>
            </li>
            <li>
              <p>Jobs</p>
            </li>
            <li>
              <p>Offices</p>
            </li>
            <li>
              <p>Blog</p>
            </li>
            <li>
              <p>News</p>
            </li>
            <li>
              <p>Team</p>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h2>Resources</h2>
          <ul>
            <li>
              <p>Help Center</p>
            </li>
            <li>
              <p>Education Center</p>
            </li>
            <li>
              <p>Case Studies</p>
            </li>
            <li>
              <p>FAQs</p>
            </li>
            <li>
              <p>Investors</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h2>Legal</h2>
          <ul>
            <li>
              <p>Trust & Transparency</p>
            </li>
            <li>
              <p>Developers</p>
            </li>
            <li>
              <p>Fraud Protection</p>
            </li>
            <li>
              <p>Imprint</p>
            </li>
            <li>
              <p>Report Abuse</p>
            </li>
            <li>
              <p>GDPR</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Subscribe to our newsletter</p>
        <div className="subscribe-container">
          <Form.Control
            type="text"
            placeholder="Enter your Email"
            className="subscribe-input"
          />
          <Button className="subscribe-button">Subscribe</Button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>

      <div className="footer-social">
        <img
          src="/images/socialmedia.png"
          alt="Social Media"
          className="responsive-image"
        />
      </div>
    </footer>
  );
};

export default Footer;
