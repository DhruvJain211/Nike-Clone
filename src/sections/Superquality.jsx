import React from "react";
import Button from "../Components/Button";
import { shoe8 } from "../assets/images";

const Superquality = () => {
  return (
    <section
      id="about-us"
      className=" flex justify-between items-center max-lg:flex-col gap10 w-full max-container"
    >
      <div className=" flex flex-col flex-1">
        <h2 className="     text-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className=" text-coral-red mt-3">Super</span>
          <span className=" text-coral-red mt-3">Quality</span> Shoes
        </h2>
        <p className="  mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className=" lg:max-w-lg info-text mt-6">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className=" mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe"
          width={570}
          height={522}
          className=" object-contain"
        />
      </div>
    </section>
  );
};

export default Superquality;
