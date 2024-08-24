import React from "react";

const Button = ({
  label,
  iconURL,
  bordercolor,
  textcolor,
  backgroundcolor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 border leading-none font-montserrat text-lg  px-7 py-4  rounded-full ${
        backgroundcolor
          ? ` ${backgroundcolor} ${textcolor} ${bordercolor}`
          : " bg-coral-red text-white border-coral-red"
      } ${fullWidth && "w-full"} `}
    >
      {label}
      {iconURL && (
        <img
          className=" ml-2 h-5 w-5  rounded-full"
          src={iconURL}
          alt="arrow right icon"
        />
      )}
    </button>
  );
};

export default Button;
