import React from "react";
import PricingCard from "./PricingCard";
import SectionHeading from "../SectionHeading/SectionHeading";

const pricingData = [
  {
    title: "Essential Car Service",
    discountPrice: "₹2,999",
    mainPrice: "₹3,999",
    options: [
      "Basic Engine Check-up",
      "Oil & Filter Change",
      "Tire Rotation",
      "Interior Cleaning",
    ],
    isActive: false,
    aosDelay: 0,
  },
  {
    title: "Premium Performance Care",
    discountPrice: "₹6,499",
    mainPrice: "₹8,999",
    options: [
      "Full Car Diagnostics",
      "Brake & Suspension Tune-up",
      "Engine Tuning",
      "Complete Detailing (Interior + Exterior)",
    ],
    isActive: true,
    aosDelay: 50,
  },
  {
    title: "Corporate Fleet Maintenance",
    discountPrice: "₹12,999",
    mainPrice: "₹15,999",
    options: [
      "Monthly Fleet Health Reports",
      "Priority Service Scheduling",
      "Routine Maintenance",
      "On-Site Pickup & Drop",
    ],
    isActive: false,
    aosDelay: 100,
  },
];


const PricingTable = ({ type }) => {
  return (
    <>
      {type ? (
        <div className="ak-height-75 ak-height-lg-75"></div>
      ) : (
        <div className="ak-height-160 ak-height-lg-80"></div>
      )}
      <div className="ak-bg pricing-section-bg-img">
        <div className="ak-height-100 ak-height-lg-50"></div>
        <div className="container">
          {type || (
            <>
              <SectionHeading
                type={true}
                bgText="Pricing"
                title="Pricing"
                desp="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
              />
              <div className="ak-height-50 ak-height-lg-50"></div>
            </>
          )}

          <div className="pricing">
            {pricingData.map((data, index) => (
              <PricingCard
                key={index}
                title={data.title}
                discountPrice={data.discountPrice}
                mainPrice={data.mainPrice}
                options={data.options}
                isActive={data.isActive}
                aosDelay={data.aosDelay}
              />
            ))}
          </div>
        </div>
        <div className="ak-height-100 ak-height-lg-80"></div>
      </div>
    </>
  );
};

export default PricingTable;
