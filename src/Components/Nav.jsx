import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className=" padding-x py-8 absolute z-10 w-full">
      <nav className=" flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="LOgo" width={130} height={29} />
        </a>
        <ul className=" flex-1 flex justify-center gap-16 items-center max-lg:hidden">
          {navLinks.map((items) => {
            const { href, label } = items;
            return (
              <li key={label}>
                <a
                  href={href}
                  className=" font-montserrat  leading-normal text-lg  text-slate-gray"
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="hidden max-lg:block cursor-pointer">
          <img src={hamburger} height={25} width={25} alt="hamburger " />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
