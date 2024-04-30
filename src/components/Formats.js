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
        <h3>TameAds Formats</h3>
        <p>
          Both publishers and brands will be happy to know that we cater to
          different formats. We created a variety of formats that can be <br />
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

      <img
        src="images/Earth.png"
        alt="CrossScreen"
        className="responsive-image"
      />

      <br />
      <br />
      <Container fluid>
        <Row className="mb-4 text-center">
          <Col md={5}>
            <h2 className="news">Latest News</h2>
            <br />
            <p className="text-news">
              Stay ahead of industry trends with our ad tech blog. Read our
              native advertising tips & tricks.
            </p>
            <p className="viewall" style={{ JustifyContent: "flex-end" }}>
              View all &nbsp;
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
            <img src="images/Advertisers.png" alt="Advertisers" />
          </Col>
          <Col md={4} xs={6} className="text-container">
            <h4 className="publishers">Publishers</h4>
            <br />
            <p className="text2">
              <h5>Join The Global Media Platform</h5>
              Unlock incremental revenue from premium advertisers through ad
              experiences that respect your users.
            </p>
            <Col md={6} className="join-now">
              Join now
              <span>
                &nbsp; <FontAwesomeIcon icon={faCircleArrowRight} />
              </span>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Formats;
