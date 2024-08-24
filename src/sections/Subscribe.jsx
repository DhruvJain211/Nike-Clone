import React from "react";
import Button from "../Components/Button";

const Subscribe = () => {
  return (
    <section className=" flex flex-1 max-lg:flex-col justify-between">
      <div className=" max-w-lg">
        <h3 className=" font-montserrat font-bold text-4xl">
          Sign Up for
          <span className=" text-coral-red"> Updates </span>& Newsletter
        </h3>
      </div>
      <div className=" lg:max-w-xl max-lg:mt-8 w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          className="input"
          placeholder="Subscribe@nike"
          type="email"
          name="nike"
        />
        <div className=" flex max-sm: justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
