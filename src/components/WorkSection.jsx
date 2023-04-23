import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import work from "../assets/js/work";
import HowItWorks from "../props/HowItWorks";

function WorkSection() {
  return (
    <div className="work-section" id="work-section">
      <Container>
        <div className="offer-service-spacing mx-auto h-auto d-flex justify-content-center align-items-center flex-column">
          <div data-aos="fade-up" className="text-center">
            <span className="offer-title-border-top d-inline-block"></span>
            <h1 className="offer-title mt-2">How it Works</h1>
            <p className="offer-description mb-5 mt-2 mx-auto">
              We provide online instant cash loans with quick approval that suit
              your term
            </p>
          </div>
          <Row className="mx-0">
            <Col lg={11} className="mx-auto col-expand">
              <Row className="mx-0">
                {work.map((details) => (
                  <HowItWorks key={details.id} {...details} />
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default WorkSection;
