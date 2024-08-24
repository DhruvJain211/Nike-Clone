import React from "react";
import { services } from "../constants/index";
import Servicecard from "../Components/Servicecard";
const Services = () => {
  return (
    <section className=" flex flex-wrap justify-center max-container gap-9">
      {services.map((service) => {
        return <Servicecard key={service.label} {...service} />;
      })}
    </section>
  );
};

export default Services;
