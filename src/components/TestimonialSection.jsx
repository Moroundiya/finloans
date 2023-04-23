import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import testimonialData from "../assets/js/testimonialData";
import createTestimonial from "../props/Testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TestimonialSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="testimonial-section" id="testimonial">
      <Container>
        <div data-aos="fade-up" className="text-center mb-5">
          <span className="offer-title-border-top d-inline-block"></span>
          <h1 className="testimonial-title mt-2">Testimonial</h1>
        </div>
        <Row className="mx-0">
          <Col lg={11} className="mx-auto col-expand">
            <Slider {...settings}>
              {testimonialData.map(createTestimonial)}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TestimonialSection;
