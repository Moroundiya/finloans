import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { about } from "../assets/js/imagesImport";

function ChooseSection() {
  return (
    <Container id="choose-us">
      <Row className="mx-0 pb-5">
        <Col lg={11} className="mx-auto col-expand">
          <Row className="mx-0">
            <Col lg={6} data-aos="fade-right">
              <img src={about} alt="about" className="img-fluid" />
            </Col>
            <Col lg={6}>
              <div className="d-flex justify-content-center flex-column w-100 h-100 px-5 why-choose-container">
                <div data-aos="fade-up">
                  <h1 className="about-title mb-4">Why Choose Us?</h1>
                  <p className="about-description">
                    Making money work for everyone is something we really care
                    about – from daily spending, to credit, savings, investments
                    and more. By simplifying finance, our users can become more
                    productive with their lives and businesses
                  </p>
                </div>
                <ul
                  className="d-block text-start offer-service-item lh-sm about-list-item"
                  data-aos="fade-right"
                >
                  <li>Loans with quick approval.</li>
                  <li>Low Interest Rate</li>
                  <li>Apply in Minutes</li>
                  <li>Up to ₦6m Loan</li>
                  <li>Flexible Terms</li>
                </ul>
                <a
                  href="#work-section"
                  className=" mt-5 work-btn about-work-btn px-2 about-work-btn text-center rounded text-white text-decoration-none fw-semibold d-inline-block"
                  data-aos="fade-up"
                >
                  About Us
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ChooseSection;
