import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import NavbarToggle from "./NavbarToggle";

function Header() {
  return (
    <header className="header w-100" id="home">
      <div class="header-overlay w-100 h-100">
        <NavbarToggle />
        <Container className="header-content">
          <Row className="mx-0">
            <Col lg={11} className="mx-auto col-expand">
              <Row className="mx-0">
                <Col lg={7} md={6}>
                  <div className="d-flex justify-content-center flex-column h-100 w-100">
                    <h1
                      className="banner-title text-white"
                      data-aos="fade-right"
                    >
                      Get Loan for your Business growth or startup
                    </h1>
                    <div data-aos="fade-right">
                      <a
                        href="#work-section"
                        className="work-btn rounded text-white text-decoration-none fw-semibold d-inline-block"
                      >
                        How It Works
                      </a>
                    </div>
                  </div>
                </Col>
                <Col lg={5} md={6}>
                  <div
                    className="d-flex flex-column align-items-end"
                    data-aos="zoom-in-down"
                  >
                    <div className="loan-form bg-white rounded text-center w-100">
                      <h2 className="loan-form-want-title">
                        How much do you want ?
                      </h2>
                      <p className="mt-3 mb-5 loan-form-desc">
                        We provide online instant cash loans.
                      </p>
                      <form action="" className="w-100 register-form px-2">
                        <div className="position-relative">
                          <Icon
                            icon="material-symbols:arrow-drop-down"
                            className="position-absolute pe-none top-50 translate-middle end-0 fs-4 dropdown-select-arrow"
                          />
                          <select
                            name=""
                            id=""
                            className="w-100 rounded btn-outline-none register-form-select"
                          >
                            <option value="" selected disabled>
                              Amount
                            </option>
                            <option value="">$10</option>
                            <option value="">$40</option>
                            <option value="">$50</option>
                          </select>
                          <iconify-icon
                            icon="ic:twotone-arrow-drop-down"
                            className="dropdown-select-arrow"
                          ></iconify-icon>
                        </div>
                        <div className="position-relative my-3">
                          <Icon
                            icon="material-symbols:arrow-drop-down"
                            className="position-absolute pe-none top-50 translate-middle end-0 fs-4 dropdown-select-arrow"
                          />
                          <select
                            name=""
                            id=""
                            className="w-100 rounded  btn-outline-none register-form-select"
                          >
                            <option value="" selected disabled>
                              Month
                            </option>
                            <option value="">3 Months</option>
                            <option value="">6 Months</option>
                            <option value="">9 Months</option>
                            <option value="">12 Months</option>
                          </select>
                        </div>
                        <p className="text-start amount-pay-text">
                          You have to pay: $0
                        </p>
                        <div className="d-grid gap-2">
                          <button
                            className="pay-amount-btn rounded fw-semibold"
                            type="submit"
                          >
                            Continue
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
}

export default Header;
