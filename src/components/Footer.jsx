import React from "react";
import { footerLogo } from "../assets/js/imagesImport";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <footer className="bg-white" id="contact">
      <Container className="footer">
        <Row className="mx-0 h-100">
          <Col lg={11} className="mx-auto col-expand">
            <Row className="mx-0 d-flex justify-content-center w-100 h-100">
              <Col
                lg={4}
                md={6}
                className="footer-column-each"
                data-aos="fade-up"
              >
                <a href="/">
                  <img src={footerLogo} alt="Footer-logo" />
                </a>
                <div className="my-5 fw-normal" id="footer-contact">
                  <p>finloan@support.com</p>
                  <p>+234 816 652 7649</p>
                  <p>Lagos, Nigeria</p>
                </div>
                <div className="footer-social-links-container">
                  <a
                    href="https://twitter.com/Moroundiya08"
                    alt="Footer-Social"
                    className="footer-social-links rounded-circle d-inline-flex me-3"
                  >
                    <Icon icon="bxl:facebook" />
                  </a>
                  <a
                    href="https://twitter.com/Moroundiya08"
                    alt="Footer-Social"
                    className="footer-social-links rounded-circle d-inline-flex me-3"
                  >
                    <Icon icon="mdi:twitter" />
                  </a>
                  <a
                    href="https://twitter.com/Moroundiya08"
                    alt="Footer-Social"
                    className="footer-social-links rounded-circle d-inline-flex me-3"
                  >
                    <Icon icon="mdi:instagram" />
                  </a>
                  <a
                    href="https://twitter.com/Moroundiya08"
                    alt="Footer-Social"
                    className="footer-social-links rounded-circle d-inline-flex me-3"
                  >
                    <Icon icon="mdi:google-plus" />
                  </a>
                </div>
              </Col>
              <Col lg={2} md={6} data-aos="fade-up">
                <p className="footer-menu-title fw-semibold fs-5">Services</p>
                <div className="footer-pages-links my-5 fw-normal d-flex flex-column">
                  <a href="/">Investment</a>
                  <a href="/">Loan</a>
                  <a href="/">Real Estate</a>
                  <a href="/">Business Idea</a>
                </div>
              </Col>
              <Col lg={2} md={6} data-aos="fade-up">
                <p className="footer-menu-title fw-semibold fs-5">
                  Useful Links
                </p>
                <div className="footer-pages-links my-5 fw-normal d-flex flex-column">
                  <a href="#offer-section">Loan</a>
                  <a href="#choose-us">About</a>
                  <a href="#work-section">How it works</a>
                  <a href="#faq">FAQ</a>
                </div>
              </Col>
              <Col lg={4} md={6} data-aos="fade-up">
                <p className="footer-menu-title fw-semibold fs-5">Subscribe</p>
                <div className="subscribe-container mt-5 mb-3 rounded d-flex p-1">
                  <input
                    placeholder="Enter your email"
                    type="email"
                    className="subscribe-input-box border-0 w-75 mx-2"
                  />
                  <button
                    type="submit"
                    className="subscribe-btn rounded border-0"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="footer-pages-info">
                  Subscribe to our newsletter for daily business tips and ideas.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="sub-footer p-3 bg-white text-center">
        <a
          href="https://twitter.com/Moroundiya08"
          className="text-black text-decoration-none fw-semibold"
        >
          Designed by Moroundiya 😎
        </a>
      </div>
    </footer>
  );
}
export default Footer;
