import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../stylesheets/Navigationbar.css";

function Navigationbar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <img src="/images/TameAds.png" alt="TameAdsLogo" className="logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links">
            <Nav.Link href="advertisers">Advertisers</Nav.Link>
            <Nav.Link href="mediaowners">Media Owners</Nav.Link>
            <Nav.Link href="aboutus">About Us</Nav.Link>
            <Nav.Link href="resources">Resources</Nav.Link>
            <Nav.Link href="adformats">Ad Formats</Nav.Link>
            <Button variant="outline-secondary">
              {" "}
              <FontAwesomeIcon icon={faHeadphones} /> Contact
            </Button>{" "}
            <Nav.Link href="login">Log in</Nav.Link>
            <Button variant="primary">Sign Up</Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
