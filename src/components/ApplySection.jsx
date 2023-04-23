import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ApplySection() {
  return (
    <div className="apply-section position-relative">
      <div className="apply-section-overlay position-absolute top-0 left-0 w-100 h-100">
        <Container className="h-100">
          <Row className="mx-0 h-100">
            <Col lg={11} className="mx-auto my-auto h-100 col-expand">
              <Row className="mx-0 d-flex justify-content-center align-items-center w-100 h-100">
                <Col md={7}>
                  <h2 className="apply-section-title" data-aos="fade-right">
                    Apply for a Loan for your startup, education or company
                  </h2>
                </Col>
                <Col md={1}></Col>
                <Col sm={4}>
                  <div className="d-flex justify-content-center align-items-center w-100 h-100 apply-section-btn-container">
                    <a
                      href="/"
                      className="apply-section-btn text-decoration-none rounded text-center d-inline-block text-white fw-semibold"
                      data-aos="fade-up"
                    >
                      Apply Now
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ApplySection;
