import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import logo, { footerLogo } from "../assets/js/imagesImport";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-scroll";
function OffCanvasExample({ name, ...props }) {
  const [navbarScroll, setNavbarScroll] = useState(false);
  window.onscroll = () => {
    if (window.scrollY > 1) {
      setNavbarScroll(true);
      console.log(window.scrollY, navbarScroll);
    } else {
      setNavbarScroll(false);
      console.log(window.scrollY, navbarScroll);
    }
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container fluid>
        <div
          className="finloans-navbar d-flex align-items-center justify-content-between fixed-top navbar-light"
          style={{
            backgroundColor: navbarScroll
              ? "rgba(0, 29, 56, .85)"
              : "transparent",
          }}
        >
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
          <div className="d-flex justify-content-center navbar-menu-list">
            <Link
              className="nav-link"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={80}
            >
              Home
            </Link>
            <Link
              className="nav-link"
              to="offer-section"
              spy={true}
              smooth={true}
              offset={-100}
              duration={80}
            >
              Loan
            </Link>
            <Link
              className="nav-link"
              to="work-section"
              spy={true}
              smooth={true}
              offset={-100}
              duration={80}
            >
              How it works
            </Link>
            <Link
              className="nav-link"
              to="testimonial"
              spy={true}
              smooth={true}
              offset={-100}
              duration={80}
            >
              Testimonial
            </Link>
            <Link
              className="nav-link"
              to="faq"
              spy={true}
              smooth={true}
              offset={-100}
              duration={80}
            >
              FAQ
            </Link>
          </div>
          <div class="d-flex my-2 my-lg-0 align-items-center navbar-contact-menu">
            <a
              href="/"
              class="me-4 d-flex justify-content-center align-items-center text-white text-decoration-none"
            >
              <Icon
                icon="clarity:phone-handset-solid"
                className="me-2 call-icon"
              />
              <span className="finloan-phone">+234 816 652 7649</span>
            </a>
            <a
              class="apply-btn text-info text-decoration-none ms-1 border rounded border-info py-2 px-3"
              href="/"
            >
              Apply For A Loan
            </a>
          </div>
          <div className="navbar-mobile-hamburger">
            <Icon
              icon="eva:menu-2-fill"
              className="mobile-hamburger"
              onClick={handleShow}
            />
          </div>
        </div>
      </Container>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={footerLogo} alt="" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Link
            className="mobile-nav-link"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={80}
            onClick={handleClose}
          >
            Home
          </Link>
          <Link
            className="mobile-nav-link"
            to="offer-section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={80}
            onClick={handleClose}
          >
            Loan
          </Link>
          <Link
            className="mobile-nav-link"
            to="work-section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={80}
            onClick={handleClose}
          >
            How it works
          </Link>
          <Link
            className="mobile-nav-link"
            to="testimonial"
            spy={true}
            smooth={true}
            offset={-100}
            duration={80}
            onClick={handleClose}
          >
            Testimonial
          </Link>
          <Link
            className="mobile-nav-link"
            to="faq"
            spy={true}
            smooth={true}
            offset={-100}
            duration={80}
            onClick={handleClose}
          >
            FAQ
          </Link>
          <div class="d-flex my-2 my-lg-0 align-items-center">
            <a
              class="apply-btn text-info text-decoration-none border rounded border-info py-2 px-3 mt-3"
              href="/"
            >
              Apply For A Loan
            </a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
function OffCanvas() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}
export default OffCanvas;
