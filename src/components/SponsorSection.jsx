import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import sponsor from "../assets/js/sponsor";
import createSponsor from "../props/Sponsor";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function SponsorSection() {
  const options = {
    margin: 10,
    responsiveClass: true,
    nav: false,
    infinite: true,
    autoplay: true,
    navText: ["Prev", "Next"],
    smartSpeed: 500,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      600: {
        items: 3,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
  return (
    <div className="sponsor-section">
      <Container>
        <Row className="mx-0">
          <Col lg={11} className="mx-auto text-center col-expand">
            <div>
              <OwlCarousel className="slider-items owl-carousel" {...options}>
                {sponsor.map(createSponsor)}
              </OwlCarousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SponsorSection;
