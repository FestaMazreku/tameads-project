import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { faCircleArrowRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../stylesheets/Formats.css";

function Formats() {
  return (
    <>
      <Container fluid className="text-center">
        <h3>TameAds Formats</h3>
        <br />
        <p>
          Both publishers and brands will be happy to know that we cater to
          different formats. We created a variety of formats that can be <br />
          adjusted to the publisher's design themes and website behavior.
        </p>
      </Container>

      <Container fluid className="mb-4">
        <Row>
          <Col md={12}>
            <Tabs defaultActiveKey="bannerads" id="uncontrolled-tab-example">
              <Tab eventKey="bannerads" title="Banner Ads">
                <p>Tab content for Banner Ads</p>
              </Tab>
              <Tab eventKey="nativeads" title="Native Ads">
                <br />
                <Carousel indicators={false} controls={false}>
                  <Carousel.Item>
                    <Row>
                      <Col>
                        <img
                          className="d-block w-40"
                          src="images/newsweek.png"
                          alt="First slide"
                        />
                      </Col>
                      <Col>
                        <img
                          className="d-block w-10"
                          src="images/newsweekphone.png"
                          alt="Second slide"
                        />
                        <br />
                        <br />
                        <center>
                          <h4> Native Ads </h4>
                          <p>
                            {" "}
                            Native advertising is a type advertising that <br />{" "}
                            matches the form and the platform <br /> upon which
                            it appears.
                          </p>
                          <p style={{color: "blue"}}> Learn more <FontAwesomeIcon icon={faArrowRight} /></p>
                        </center>
                      </Col>
                      <Col>
                        <img
                          className="d-block w-40"
                          src="images/newsweekvideo.png"
                          alt="Third slide"
                        />
                      </Col>
                    </Row>
                  </Carousel.Item>
                </Carousel>
              </Tab>
              <Tab eventKey="notifications" title="Push Notifications">
                <p>Tab content for Push Notifications</p>
              </Tab>
              <Tab eventKey="native" title="Native Interstitials">
                <p>Tab content for Native Interstitials</p>
              </Tab>
              <Tab eventKey="video" title="Video Pre-Roll">
                <p>Tab content for Video Pre-Roll</p>
              </Tab>
              <Tab eventKey="popunder" title="Popunder">
                <p>Tab content for Popunder</p>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>

      {/* <img
        src="images/Earth.png"
        alt="CrossScreen"
        className="responsive-image"
      /> */}

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
            <p className="viewall" style={{ justifyContent: "flex-end" }}>
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
