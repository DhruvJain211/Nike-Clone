import React from "react";
import { star } from "../assets/icons";
const Reviewcard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className=" mt-4 max-lg:mt-10 flex flex-col justify-center items-center">
      <div className=" m-auto rounded-full  object-contain overflow-hidden">
        <img src={imgURL} alt={customerName} width={120} height={120} />
      </div>
      <div className=" mt-6 info-text  max-w-lg text-center ">
        <p>{feedback}</p>
      </div>
      <div className=" flex  gap-2.5 mt-3 justify-center items-center">
        <img className=" object-contain " src={star} alt="star" />
        <span className=" font-montserrat text-slate-gray text-lg">
          ({rating})
        </span>
      </div>
      <div className="  mt-3 font-palanquin text-xl font-bold text-center">
        {customerName}
      </div>
    </div>
  );
};

export default Reviewcard;
