import React from "react";
import { Row, Col } from "react-bootstrap";
import { faqImg } from "../assets/js/imagesImport";
import faqQuestions from "../assets/js/faqQuestions";
import createFaq from "../props/Faq";

function FaqSection() {
  return (
    <div className="faq-section" id="faq">
      <Row className="mx-0">
        <Col lg={6} className="px-0">
          <img src={faqImg} alt="faqImg" className="img-fluid" />
        </Col>
        <Col lg={6} className="">
          <div
            className="h-100 d-flex flex-column justify-content-center ps-5"
            id="faq-all-question-container"
          >
            <h1 className="mb-5 faq-title" data-aos="fade-down">
              Frequently Ask Questions
            </h1>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
              {faqQuestions.map(createFaq)}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default FaqSection;
