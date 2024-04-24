import React from "react";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";
import "../stylesheets/RecommendationsView.css";

function RecommendationsView() {
  return (
    <Container>
      <Row className="content">
        <Col md={6} xs={6} className="text-container">
          <b>
            <h2>
              TameAds is the technology company
              <br /> powering the discovery feeds on your favorite media.
            </h2>
          </b>
          <br />

          <p className="text2">
            We've perfected the art of native advertising, empowering publishers
            and advertisers to grow their brand presence and revenues.
          </p>
          <br />

          <Row className="align">
            <Col md={4} xs={4} className="number-container">
              <div className="number">
                <p className="num-text highlighted">344B</p>
                <p className="text3">Monthly Recommendations</p>
              </div>
            </Col>
            <Col md={6} xs={6} className="number-container">
              <div className="number">
                <p className="num-text highlighted">55+</p>
                <p className="text3">Countries in the Network</p>
              </div>
            </Col>
          </Row>

          <br />
          <p className="learnmore">
            Learn more
            <span>
              {" "}
              <FontAwesomeIcon icon={faCircleArrowRight} />
            </span>
          </p>
        </Col>

        <Col md={4} xs={4}>
          <img src="images/phone.png" alt="Phone" className="image2" />
        </Col>
      </Row>
    </Container>
  );
}

export default RecommendationsView;
