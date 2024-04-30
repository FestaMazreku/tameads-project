import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../stylesheets/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-start">
        <img src="images/TameAdslogo.png" alt="Phone" className="image" />
        <p>Join the largest ad network in the world.</p>
      </div>
      <hr />

      <div className="footer-container">
        <div className="footer-column">
          <br />
          <h6>TameAds</h6>
          <br />
          <p>Advertisers</p>

          <p>Publishers</p>

          <p>Ad Formats</p>

          <p>Agencies</p>

          <p>Download</p>

          <p>Affiliate</p>
        </div>

        <div className="footer-column">
          <br />
          <h6>Advertisers</h6>
          <br />

          <p>Advertise With Us</p>

          <p>How To Buy TameAds</p>

          <p>Smartads Gallery</p>

          <p>Advertiser Guidelines</p>

          <p>Advertising FAQ</p>

          <p>Onboarding Kit</p>
        </div>

        <div className="footer-column">
          <br />
          <h6>Publishers</h6>
          <br />

          <p>Publisher Overview</p>

          <p>Discover Smartlogic</p>

          <p>New Media</p>

          <p>Publishers Guidelines</p>

          <p>Publishers FAQ</p>

          <p>Request a Demo</p>
        </div>

        <div className="footer-column">
          <br />
          <h6>Company</h6>
          <br />

          <p>About Us</p>

          <p>Jobs</p>

          <p>Offices</p>

          <p>Blog</p>

          <p>News</p>

          <p>Team</p>
        </div>

        <div className="footer-column">
          <br />
          <h6>Resources</h6>
          <br />

          <p>Help Center</p>

          <p>Education Center</p>

          <p>Case Studies</p>

          <p>FAQs</p>

          <p>Investors</p>

          <p>Contact</p>
        </div>

        <div className="footer-column">
          <br />
          <h6>Legal</h6>
          <br />

          <p>Trust & Transparency</p>

          <p>Developers</p>

          <p>Fraud Protection</p>

          <p>Imprint</p>

          <p>Report Abuse</p>

          <p>GDPR</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="newsletter-heading">
          <h4>Subscribe newsletter</h4>
        </div>
        <div className="subscribe-container">
          <Form.Control
            type="text"
            placeholder="Enter your Email"
            className="subscribe-input"
          />
          <Button className="subscribe-button">Subscribe</Button>
        </div>
      </div>

      <div className="footer-copy">
        <p>&copy; 2024 Your Company. All rights Reserved.</p>

        <div className="footer-social">
          <img src="/images/socialmedia.png" alt="Social Media" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
