import React from "react";
import { Link } from "react-router-dom";
import { CtaBtn } from "../Button/Button";

const ctaData = {
  title: "Connect with Our Car Care Experts",
  description:
    "Have questions or need assistance? Talk to our skilled professionals for trusted advice, quick service, and top-notch car repair solutions. We're committed to keeping your vehicle in perfect shape.",
};

const Cta = () => {
  const { title, description } = ctaData;

  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="cta" data-aos="fade-right">
        <span className="border-pr"></span>
        <span className="border-wh"></span>
        <div className="cta-info">
          <h2 className="cta-title" data-aos="fade-left" data-aos-delay="100">
            {title}
          </h2>
          <p className="cta-desp">{description}</p>
          <CtaBtn to="/contact">GET IN TOUCH WITH US</CtaBtn>
        </div>
      </div>
    </div>
  );
};

export default Cta;
