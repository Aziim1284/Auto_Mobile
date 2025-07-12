import React from "react";
import { Link } from "react-router-dom";

import bg1 from "/assets/img/bg/commpagesbg.jpg";
import bg2 from "/assets/img/bg/a1.webp";
import bg3 from "/assets/img/bg/commpagesbg.jpg";
import bg4 from "/assets/img/bg/a1.webp";


// Choose one randomly
const bgImages = [bg1, bg2, bg3, bg4];
const getRandomBg = () => bgImages[Math.floor(Math.random() * bgImages.length)];

const CommonPageHero = ({ title }) => {
  const selectedBg = getRandomBg();

  return (
    <div
      className="common-hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${selectedBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "100px 0",
        color: "#fff",
      }}
    >
      <div className="container">
        <div className="common-page-title">
          <h3 className="page-title">{title}</h3>
          <div className="d-flex gap-2 align-items-center">
            <Link to="/" style={{ color: "#fff", textDecoration: "underline" }}>
              Home
            </Link>
            <p>/ {title}</p>
          </div>
        </div>
        <div className="primary-color-border"></div>
      </div>
    </div>
  );
};

export default CommonPageHero;
