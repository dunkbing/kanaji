import React from "react";
import Image from "next/image";

import { navLinks } from "../../data/navLinks";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <nav className="bg-gray-50 bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:40px_40px] text-gray-700 py-6 lg:py-0 border-b-2">
      <div className="flex flex-row mx-4 lg:mx-32 content-center items-center">
        <a className="content-center hidden xl:flex" href="/">
          <Image
            src="/images/logo.png"
            alt="logo-full"
            width={200}
            height={53}
          />
        </a>
        <div className="hidden lg:flex justify-center m-auto h-1/2 px-8" />
        <ul className="flex-row hidden lg:flex space-x-5 my-5 lg:py-3 mr-10">
          {navLinks.map((nav, idx) => {
            return <NavLinks key={idx} nav={nav} />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
