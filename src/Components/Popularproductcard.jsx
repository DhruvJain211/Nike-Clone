import React from "react";
import { star } from "../assets/icons";

const Popularproductcard = ({ imgURL, name, price }) => {
  return (
    <div className=" flex flex-col flex-1  w-full ">
      <img
        className=" hover:border-2 border border-coral-red rounded-[28px] hover:shadow-xl cursor-pointer"
        src={imgURL}
        width={280}
        height={280}
        alt={name}
      />

      <div className=" mt-8  flex gap-3 justify-start">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="  font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className=" mt-2 text-2xl leading-normal font-palanquin font-semibold">
        {name}
      </h3>
      <p className=" mt-2 font-semibold font-montserrat  text-coral-red text-xl">
        {price}
      </p>
    </div>
  );
};

export default Popularproductcard;
