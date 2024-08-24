import React, { useState } from "react";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import Shoecard from "../Components/Shoecard";
const Hero = () => {
  const [bigshoeimg, setbigshoe] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="flex xl:flex-row flex-col justify-centre w-full gap-10  p-2  min-h-screen max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col  justify-center  items-start  w-full max-xl: padding-x pt-28">
        <p className=" font-montserrat text-xl text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="   mt-10 max-sm: text-[72px]  text-palanquin text-8xl  font-bold">
          <span className=" xl:bg-white   xl: whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className=" inline-block text-coral-red mt-3">Nike</span> Shoes
        </h1>
        <p className=" font-montserrat text-slate-gray text-lg leading-8  max-sm:mt-3  mt-6  mb-14 sm:max-w-sm">
          Discover Stylish Nike arrivals, quality comfort, and innovation for
          your active life .
        </p>
        <Button label="Show now" iconURL={arrowRight} />
        <div className=" flex justify-start items-start flex-wrap mt-5 w-full gap-12">
          {statistics.map((data) => {
            const { value, label } = data;
            return (
              <div key={label}>
                <p className="  font-palanquin text-4xl font-bold">{value} </p>
                <p className=" font-montserrat text-slate-gray leading-7">
                  {label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" relative flex justify-center items-center flex-1 xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigshoeimg}
          alt="shoe "
          height={500}
          width={610}
          className="relative  object-contain z-10"
        />
        <div className=" flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => {
            return (
              <div key={index}>
                <Shoecard
                  imageUrl={shoe}
                  changebigshoeimage={(shoe) => {
                    setbigshoe(shoe);
                  }}
                  bigShoeimg={bigshoeimg}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
