import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <section className=" max-container">
      <div className=" flex justify-between items-center gap-20 flex-wrap max-lg:flex-col">
        <div className=" flex flex-col items-start">
          {" "}
          <a href="/">
            <img src={footerLogo} alt="" width={150} height={46} />
          </a>
          <p className=" mt-6 text-base font-montserrat leading-7 text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store . Find
            your perfect Size in Store.Get rewards
          </p>
          <div className=" flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => {
              return (
                <div className=" flex justify-center items-center w-12 h-12 bg-white rounded-full">
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
              );
            })}
          </div>
        </div>
        <div className=" flex justify-between gap-20 flex-wrap">
          {footerLinks.map((section) => {
            return (
              <div key={section}>
                <h4 className=" text-white font-montserrat text-2xl leading-normal mb-6 font-medium">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => {
                    return (
                      <li
                        key={link.name}
                        className=" font-montserrat text-base leading-normal hover: text-slate-gray cursor-pointer text-white-400 mt-3"
                      >
                        <a href={link.link}>{link.name} </a>;
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" flex justify-between text-white-400s mt-24 max-sm:flex-col max-sm:items-center">
        <div className=" flex flex-1 font-montserrat cursor-pointer justify-start  items-center gap-2 text-white-400">
          <img
            src={copyrightSign}
            width={20}
            height={20}
            className=" rounded-s-full"
          />
          <p>Copyright. All right reserved.</p>
        </div>
        <p className=" font-montserrat cursor-pointer text-white-400">
          Terms and Condition
        </p>
      </div>
    </section>
  );
};

export default Footer;
