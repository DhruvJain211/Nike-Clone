import React from "react";
import { products } from "../constants/index";
import Popularproductcard from "../Components/Popularproductcard";

const Popularproducts = () => {
  return (
    <section id="products" className=" max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className=" font-palanquin text-4xl font-bold">
          Our <span className=" text-coral-red">Popular </span> Products
        </h2>
        <p className=" lg:max-w-lg text-slate-gray mt-2  font-montserrat">
          Experience top notch quality and style with our sought-after
          selections. Discover a world of comfort, design and value
        </p>
      </div>
      <div className=" mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => {
          return <Popularproductcard key={product.name} {...product} />;
        })}
      </div>
    </section>
  );
};

export default Popularproducts;
