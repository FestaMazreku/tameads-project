import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";
import "../stylesheets/DataDriven.css";

function Data() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <Card className="custom-card">
          <Card.Body>
            <img src="images/Cookies.png" alt="Cookies" className="image" />
            <br />
            <b>
              <Card.Title>Cookieless</Card.Title>
            </b>
            <Card.Text>
              Teads offers the most advanced Cookieless targeting in the
              industry allowing you to have 60% more reach as compared to
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card
          className="custom-card"
          style={{ backgroundImage: "url('images/CrossScreen.png')" }}
        >
          <Card.Body> </Card.Body>
        </Card>
      </div>
      <div>
        <Card className="custom-card">
          <Card.Body>
            <img src="images/Page.png" alt="Page" className="image" />
            <br />
            <b>
              <Card.Title>Contextual</Card.Title>
            </b>
            <Card.Text>
              Understand the context and sentiment around the content being
              consumed.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card className="custom-card">
          <Card.Body>
            <img src="images/Commerce.png" alt="Commerce" className="image" />
            <br />
            <b>
              <Card.Title>Commerce</Card.Title>
            </b>
            <Card.Text>
              We provide purchase data from top retail ers allowing for
              targeting and online and offline measurement solutions.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Slider>
  );
}

export default Data;
