import React from "react";
import Button from "../Components/Button";
import { offer } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section className="max-container flex  flex-wrap items-center max-xl:flex-col-reverse gap-10 ">
      <div className="  flex-1">
        <img src={offer} width={773} height={687} />
      </div>
      <div className=" flex flex-col flex-1">
        <h2 className="     text-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className=" text-coral-red mt-3">Special</span> Offer
        </h2>
        <p className="  mt-4  info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className=" lg:max-w-lg info-text mt-6">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className=" mt-11 flex flex-wrap gap-4 ">
          <Button label="View Details" />
          <Button
            label="Learn more"
            bordercolor=" border-slate-gray"
            textcolor="text-slate-gray"
            backgroundcolor="bg-white"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
