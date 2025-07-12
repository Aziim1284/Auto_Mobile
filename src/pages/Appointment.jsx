import React from "react";

import AppointmentForm from "../components/AppointmentForm/AppointmentForm";
import CommonPageHero from "../components/CommonPageHero/CommonPageHero";
import ServiceProgres from "../components/ServiceProgres/ServiceProgres";
import SectionHeading from "../components/SectionHeading/SectionHeading";

const Appointment = () => {
  return (
    <>
      <CommonPageHero title={"Appointment"} />
      <AppointmentForm />
      <div className="ak-height-125 ak-height-lg-80"></div>
      <SectionHeading
        type={true}
        bgText={"PROCESS"}
        title={"OUR WORK PROCESS"}
        desp={
          "We follow a streamlined, customer-focused process—from inspection and diagnostics to expert repair and final quality checks—to ensure your vehicle receives the care it deserves."
        }
      />
      <ServiceProgres />
    </>
  );
};

export default Appointment;
