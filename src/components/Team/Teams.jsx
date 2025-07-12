import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { MoreBtn } from "../Button/Button";
import TeamCard from "./TeamCard";

const membersData = [
  {
    id: 1,
    name: "Rajesh Kumar",
    title: "Chief Automotive Engineer",
    image: "/assets/img/member/member_1.webp",
    desp: "Rajesh brings over 15 years of hands-on experience in automotive engineering, specializing in engine performance and drivetrain optimization. He leads with precision and passion, ensuring every vehicle runs at peak performance.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/",
      facebook: "https://www.facebook.com",
      twitter: "https://twitter.com/",
    },
    contact: {
      address: "Plot No. 78, Sector 22, Dwarka, New Delhi - 110077",
      email: "rajesh.kumar@autocare.in",
      phone: "+91 98185 12345",
      website: "www.autocareindia.in",
    },
  },
  {
    id: 2,
    name: "Meera Iyer",
    title: "Customer Service Advisor",
    image: "/assets/img/member/member_2.jpg",
    desp: "With a strong background in customer relations, Meera ensures a smooth service experience. She assists clients with service bookings, vehicle updates, and post-service feedback to maintain high satisfaction.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
    },
    contact: {
      address: "Flat 4B, Lakshmi Enclave, Anna Nagar, Chennai - 600040",
      email: "meera.iyer@autocare.in",
      phone: "+91 98842 67890",
      website: "www.autocareindia.in",
    },
  },
  {
    id: 3,
    name: "Arjun Desai",
    title: "Senior Diagnostic Technician",
    image: "/assets/img/member/member_3.jpg",
    desp: "Arjun excels in advanced diagnostics and fault analysis, using the latest OBD and scanning tools. He is known for resolving complex issues in engine management and electrical systems quickly and accurately.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
    },
    contact: {
      address: "23, JP Road, Andheri West, Mumbai - 400058",
      email: "arjun.desai@autocare.in",
      phone: "+91 98330 45678",
      website: "www.autocareindia.in",
    },
  },
];


const Teams = () => {
  return (
    <div className="container">
      <div className="ak-height-190 ak-height-lg-80"></div>
      <div className="team-contant">
        <div className="team-heading" data-aos="fade-right">
          <SectionHeading
            bgText={"Team"}
            title={"Our Team"}
            desp={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            }
          />
          <div className="ak-height-50 ak-height-lg-10"></div>
          <MoreBtn to={"/team"}>VIEW MORE</MoreBtn>
        </div>
        <div
          className="teams"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
        >
          <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 g-3 g-md-3">
            {membersData?.map((member, index) => (
              <TeamCard key={index} member={member} delay={index * 50} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Teams;
