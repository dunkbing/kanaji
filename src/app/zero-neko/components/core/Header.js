import React from "react";
import Image from "next/image";

import { navLinks } from "../../data/navLinks";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <nav className="border-b-2 bg-gray-50 bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:40px_40px] py-6 text-gray-700 lg:py-0">
      <div className="mx-4 flex flex-row content-center items-center lg:mx-32">
        <a className="hidden content-center xl:flex" href="/">
          <Image
            src="/images/logo.png"
            alt="logo-full"
            width={200}
            height={53}
          />
        </a>
        <div className="m-auto hidden h-1/2 justify-center px-8 lg:flex" />
        <ul className="my-5 mr-10 hidden flex-row space-x-5 lg:flex lg:py-3">
          {navLinks.map((nav, idx) => {
            return <NavLinks key={idx} nav={nav} />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
