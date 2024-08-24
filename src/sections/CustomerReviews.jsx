import React from "react";
import { reviews } from "../constants";
import Reviewcard from "../Components/Reviewcard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className=" font-palanquin font-bold text-4xl text-center">
        What Our
        <span className=" text-coral-red"> Customer </span>
        Say?
      </h3>
      <p className=" m-auto text-center mt-4 info-text max-w-lg">
        Hear genuine stories from our satisfied customers about there
        exceptional experience with us.
      </p>
      <div className=" flex flex-1 justify-evenly items-center max-lg:flex-col mt-10 gap-14">
        {reviews.map((review) => {
          return <Reviewcard key={review.customerName} {...review} />;
        })}
      </div>
    </section>
  );
};

export default CustomerReviews;
