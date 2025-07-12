import React from "react";
import { Link } from "react-router-dom";

import { MoreBtn } from "../Button/Button";
import SectionHeading from "../SectionHeading/SectionHeading";

const speciaList = [
  {
    id: 1,
    img: "/assets/img/service/service_1.jpg",
    title: "Custom Performance Tuning",
    desp: "Unlock your vehicle’s full potential with our expert performance tuning and customization. From engine remapping to upgraded exhausts, we ensure enhanced speed, power, and fuel efficiency.",
  },
  {
    id: 2,
    img: "/assets/img/service/service_2.jpg",
    title: "Advanced Engine Diagnostics",
    desp: "Our cutting-edge diagnostic tools detect engine issues with precision. Whether it’s a warning light or performance drop, we identify the root cause and offer accurate, effective repairs.",
  },
  {
    id: 3,
    img: "/assets/img/service/service_3.jpg",
    title: "Tire Maintenance & Alignment",
    desp: "Stay safe and enjoy smooth rides with our complete tire care—rotation, balancing, alignment, and puncture repair. We use industry-best equipment to extend your tire lifespan.",
  },
];

const SpecialistTeamMembers = ({ team }) => {
  console.log(team);

  return (
    <>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="d-flex justify-content-center">
        <div className="sticky-content container">
          <div className="content style_2">
            <div className="service">
              {speciaList.map((item) => (
                <div
                  className="service-card"
                  data-aos="fade-left"
                  key={item?.id}
                >
                  <Link to={`/service-single/${item?.id}`} className="card-img">
                    <img src={`${item?.img}`} className="ak-bg" alt="..." />
                  </Link>
                  <div className="card-info">
                    <Link
                      to={`/service-single/${item?.id}`}
                      className="card-title"
                    >
                      {item?.title}
                    </Link>
                    <p className="card-desp">{item?.desp}</p>
                    <MoreBtn to={`/service-single/${item?.id}`}>
                      VIEW MORE
                    </MoreBtn>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="sidebar width-none">
            <div className="services-content">
              <SectionHeading
                bgText={"Services"}
                title={team?.name}
                desp={team?.desp}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialistTeamMembers;
