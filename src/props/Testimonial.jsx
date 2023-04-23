import React from "react";
import { Row, Col } from "react-bootstrap";

function Testimonial(props) {
  return (
    <div className="px-5" id="testimonial-text-container">
      <Row className="mx-0">
        <Col
          md={4}
          className="testimonial-img-container position-relative d-flex justify-content-center align-items-center"
        >
          <div className="testimonial-quote-container d-flex justify-content-center align-items-center rounded-circle">
            ❝
          </div>
          <img
            src={props.img}
            alt="Author"
            className="img-fluid testimonial-img rounded-circle"
          />
        </Col>
        <Col
          md={8}
          className="testimonial-container d-flex flex-column justify-content-center "
        >
          <p className="testimonial-text">{props.info}</p>
          <p className="testimonial-name fw-bold">{props.authorName}</p>
        </Col>
      </Row>
    </div>
  );
}

function createTestimonial(details) {
  <Testimonial
    key={details.id}
    img={details.img}
    info={details.info}
    authorName={details.authorName}
  />;
}

export default Testimonial;
export { createTestimonial };
