import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import OfferSection from "../components/OfferSection";
import ChooseSection from "../components/ChooseSection";
import WorkSection from "../components/WorkSection";
import FaqSection from "../components/FaqSection";
import TestimonialSection from "../components/TestimonialSection";
import SponsorSection from "../components/SponsorSection";
import ApplySection from "../components/ApplySection";
import Footer from "../components/Footer";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1300,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <OfferSection />
      <ChooseSection />
      <WorkSection />
      <FaqSection />
      <TestimonialSection />
      <SponsorSection />
      <ApplySection />
      <Footer />
    </>
  );
}

export default Home;
