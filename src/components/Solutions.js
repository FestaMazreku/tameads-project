import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { RiLoginCircleLine } from "react-icons/ri";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Solutions() {
  return (
    <>
      <Container fluid className="text-center">
        <h3>
          Delivering solutions
          <br />
          across the marketing funnel
        </h3>
      </Container>

      <Container fluid className="laptop-container text-center">
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            {/* <img src="images/laptop.png" alt="laptop" className="laptop" /> */}
          </Col>

          <Col md={6}>
            <Tabs
              defaultActiveKey="Awareness"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="Awareness" title="Awareness">
                <Carousel indicators={true}>
                  <Carousel.Item>
                    <h4>
                      Designed to drive high-quality <br /> attention
                    </h4>
                    <br />
                    <p>
                      TameAds delivers ad experiences that are built for
                      attention which is at the root of brand lift and
                      awareness. We can drive up to 40% greater lift in ad
                      recall in our optimized units versus the original
                      creative.
                    </p>
                  </Carousel.Item>

                  <Carousel.Item>
                    <h4>
                      Designed to drive high-quality <br /> attention
                    </h4>
                    <br />
                    <p>
                      Sometimes it's critical to get campaigns live in minutes,
                      that's why we have developed the ability to repurpose your
                      assets for social platforms in just a few clicks. See how
                      the same assets can garner 4-6x better performance than
                      they do in a newsfeed.
                    </p>
                  </Carousel.Item>
                </Carousel>
              </Tab>

              <Tab eventKey="Consideration" title="Consideration">
                <p>Tab content for Consideration</p>
              </Tab>
              <Tab eventKey="Traffic" title="Traffic">
                <p>Tab content for Traffic</p>
              </Tab>
              <Tab eventKey="Conversions" title="Conversions">
                <p>Tab content for Conversions</p>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
      <br />

      <Container fluid className="view">
        <Row className="content">
          <Col md={4} lg={4} xs={8} className="text-container">
            <b>
              <h2>Effortlessly repurpose social assets</h2>
            </b>
            <p className="text2">
              Sometimes it's critical to get campaigns live in minutes, that's
              why we have developed the ability to repurpose your assets for
              social platforms in just a few clicks. See how the same assets can
              garner 4-6x better performance than they do in a newsfeed.
            </p>
            <p className="learnmore">
              Learn more
              <span>
                <RiLoginCircleLine className="icon" size={35} />
              </span>
            </p>
          </Col>
          <Col md={6} className="image-container">
            <img src="images/apple.png" alt="Apple" className="apple" />
          </Col>
        </Row>
      </Container>
      <br />
      <br />

      <Container fluid className="view">
        <Row className="content justify-content-center">
          <Col lg={4} md={4} className="text-center">
            <img
              src="images/audience.png"
              alt="audience"
              className="audience-image"
            />
          </Col>
          <Col lg={4} md={4} xs={8} className="text-container">
            <b>
              <h2>Deep audience insights</h2>
            </b>
            <br />
            <p className="text2">
              Our platform offers deep insights that enable advertisers to
              understand what their audiences are interested in, where they
              spend time, and how to target them more effectively. Many of these
              insights are based on cookieless signals that can be activated in
              the privacy-first era.
            </p>
            <p className="learnmore">
              Learn more
              <span>
                <RiLoginCircleLine className="icon" size={35} />
              </span>
            </p>
          </Col>
        </Row>
      </Container>
      <br />
    </>
  );
}

export default Solutions;
