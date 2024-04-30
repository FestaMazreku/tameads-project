import React from "react";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";
import "../stylesheets/RecommendationsView.css";

function RecommendationsView() {
  return (
    <Container>
      <br />
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
            <Col lg={6} md={6} xs={12} className="num-text highlighted">
              <p
                style={{
                  color: "rgb(32, 47, 255)",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                344B{" "}
              </p>
              <br />
              <p
                style={{
                  color: "#26282A",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Monthly Recommendations
              </p>
            </Col>
            <Col lg={5} md={6} xs={12} className="num-text highlighted">
              <p
                style={{
                  color: "rgb(32, 47, 255)",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                55+{" "}
              </p>
              <br />
              <p
                style={{
                  color: "#26282A",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Countries in the Network
              </p>
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
