import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../stylesheets/Formats.css";

function Formats() {
  return (
    <>
      <Container fluid className="text-center">
        <h1>TameAds Formats</h1>
        <br />
        <p>
          Both publishers and brands will be happy to know that we cater to
          different formats. We created a variety of formats that can be
          adjusted to the publisher's design themes and website behavior.
        </p>
      </Container>

      <Container fluid className="mb-4">
        <Row>
          <Col md={12}>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab eventKey="bannerads" title="Banner Ads">
                <p>Tab content for Home</p>
              </Tab>
              <Tab eventKey="nativeads" title="Native Ads">
                <p>Tab content for Profile</p>
              </Tab>
              <Tab eventKey="notifications" title="Push Notifications">
                <p>Tab content for Contact</p>
              </Tab>
              <Tab eventKey="native" title="Native Interstitials">
                <p>Tab content for Contact</p>
              </Tab>
              <Tab eventKey="video" title="Video Pre-Roll">
                <p>Tab content for Contact</p>
              </Tab>
              <Tab eventKey="popunder" title="Popunder">
                <p>Tab content for Contact</p>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>

      <Container fluid className="text-center mb-4">
        <img
          src="images/Earth.png"
          alt="CrossScreen"
          className="responsive-image"
        />
      </Container>

      <Container fluid>
        <Row className="mb-4 text-center">
          <Col md={6}>
            <h1 className="news">Latest News</h1>
            <p className="text-news">
              Stay ahead of industry trends with our ad tech blog. <br /> Read
              our native advertising tips & tricks.
            </p>
            <p className="viewall" style={{ JustifyContent: "flex-end" }}>
              View all
              <span>
                <FontAwesomeIcon icon={faCircleArrowRight} />
              </span>
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="text-center mb-4">
        <img
          src="images/Leadership.png"
          alt="Leadership"
          className="leadership"
        />
      </Container>

      <Container
        fluid
        className="content light-gray-bg publishers-container mb-4"
      >
        <Row className="align-items-center">
          <Col md={6} className="image-container">
            <img
              src="images/Advertisers.png"
              alt="Advertisers"
              className="advertisers"
            />
          </Col>
          <Col md={4} className="text-container">
            <h2 className="publishers">Publishers</h2>
            <p className="text2">
              <h4>Join The Global Media Platform</h4>
              Unlock incremental revenue from premium advertisers through ad
              experiences that respect your users.
            </p>
            <p className="join-now">
              Join now
              <span>
                &nbsp; <FontAwesomeIcon icon={faCircleArrowRight} />
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Formats;
