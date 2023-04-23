import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import createOfferService from "../props/OfferService";
import services from "../assets/js/services";

function OfferSection() {
  return (
    <Container className="offer-service-spacing" id="offer-section">
      <div className="mx-auto h-auto d-flex justify-content-center align-items-center flex-column">
        <div data-aos="fade-up" className="text-center">
          <span className="offer-title-border-top d-inline-block"></span>
          <h1 className="offer-title mt-2">What we offer for you</h1>
          <p className="offer-description mb-5 mt-2">
            We provide online instant cash loans with quick approval that suit
            your term
          </p>
        </div>
      </div>
      <Row className="mx-0 pb-5">
        <Col lg={11} className="mx-auto col-expand">
          <Row className="mx-0 mt-1">{services.map(createOfferService)}</Row>
        </Col>
      </Row>
    </Container>
  );
}

export default OfferSection;
