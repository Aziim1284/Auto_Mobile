import { useState } from "react";

const tabContents = [
  {
    title: "Our Commitment",
    description:
      "We are dedicated to providing dependable automotive solutions with an emphasis on safety, precision, and customer-first service. Every repair and tune-up reflects our promise to care for your vehicle as if it were our own.",
  },
  {
    title: "Future Goals",
    description:
      "Looking ahead, we aim to lead the automotive service industry by integrating cutting-edge technology, expanding our expert team, and continually raising the bar for service excellence and customer experience.",
  },
  {
    title: "Our Journey",
    description:
      "What began as a modest workshop has evolved into a full-scale automotive service center. Our growth is powered by loyal customers, expert mechanics, and a clear vision to always deliver more than expected.",
  },
];

const CompanyTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="company-tab">
        <ul className="tabs">
          {tabContents?.map((tab, index) => (
            <li
              key={index}
              className={activeTab === index ? "active-tab" : ""}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </li>
          ))}
        </ul>

        <div className="tabs-content">
          <div className="list">
            <div className="ak-section-heading ak-style-1 ak-type-1">
              <div className="background-text">About Company</div>
              <h3 className="desp">{tabContents[activeTab].description}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyTab;
