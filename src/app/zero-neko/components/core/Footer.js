import React from "react";
import Image from "next/image";

//Data
import { navLinks } from "../../data/navLinks";
import { socialMedia } from "../../data/socialMedia";
import { me } from "../../data/me";

//Pict
import FooterChild from "./FooterChild";

const logoIcon = "/images/logo-icon.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-main pb-4 pt-8">
      <div className="mx-8 flex flex-row   justify-center lg:mx-32">
        <div className="mb-4 flex flex-col lg:mb-8">
          <Image
            src="/images/logo.png"
            alt="logo-full"
            width={200}
            height={53}
          />
          <p className="lg:text-medium mx-auto w-60 text-center text-base lg:w-52 lg:text-left">
            Kanaji is website platform for everyone to learn Japanese.
          </p>
        </div>
        <div className="col-span-12 mt-5 grid grid-cols-3 space-x-8 space-y-0 text-center lg:col-span-9 lg:ml-20 lg:mt-0 lg:grid-cols-3 lg:text-left">
          <FooterChild title={"Navigation"} data={navLinks} />
          <FooterChild targetBlank title={"Social"} data={socialMedia} />
          <FooterChild targetBlank title={"Developer"} data={me} />
        </div>
      </div>
      <div className="mx-8 mb-32 mt-6 flex flex-col space-y-4 text-center text-sm lg:mx-44 lg:mb-0 lg:flex-row lg:space-y-0 lg:text-left">
        <span className="">
          <span>Made with 🧡 by </span>
          <a
            className="hover:text-primary hover:border-primary border-b-2 border-dashed border-gray-900"
            href="https://db99.dev"
            target="_blank"
            rel="noreferrer"
          >
            dunkbing{" "}
          </a>
        </span>
        <span className="lg:ml-auto">
          <span>Powered by </span>
          <a
            className="hover:text-primary hover:border-primary border-b-2 border-dashed border-gray-900"
            href="https://kanjiapi.dev/"
            target="_blank"
            rel="noreferrer"
          >
            kanjiapi.dev
          </a>
          <span> and </span>
          <a
            className="hover:text-primary hover:border-primary border-b-2 border-dashed border-gray-900"
            href="https://jisho.org/forum/54fefc1f6e73340b1f160000-is-there-any-kind-of-search-api"
            target="_blank"
            rel="noreferrer"
          >
            Jisho API
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
