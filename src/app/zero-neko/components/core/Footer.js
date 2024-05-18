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
    <footer className="flex flex-col bg-white pt-8 pb-4">
      <div className="flex flex-row justify-center mx-8 lg:mx-32">
        <div className="flex flex-col mb-4 lg:mb-8">
          <Image
            src="/images/logo.png"
            alt="logo-full"
            width={200}
            height={53}
          />
          <p className="text-center text-base lg:text-medium lg:text-left w-60 lg:w-52 mx-auto">
            Kanaji is website platform for everyone to learn Japanese.
          </p>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-3 col-span-12 lg:col-span-9 space-x-8 space-y-0 mt-5 lg:mt-0 lg:ml-20 text-center lg:text-left">
          <FooterChild title={"Navigation"} data={navLinks} />
          <FooterChild targetBlank title={"Social"} data={socialMedia} />
          <FooterChild targetBlank title={"Developer"} data={me} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row text-center lg:text-left text-sm space-y-4 lg:space-y-0 mb-32 mt-6 mx-8 lg:mb-0 lg:mx-44">
        <span className="">
          <span>Made with 🧡 by </span>
          <a
            className="hover:text-primary border-dashed border-b-2 border-gray-900 hover:border-primary"
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
            className="hover:text-primary border-dashed border-b-2 border-gray-900 hover:border-primary"
            href="https://kanjiapi.dev/"
            target="_blank"
            rel="noreferrer"
          >
            kanjiapi.dev
          </a>
          <span> and </span>
          <a
            className="hover:text-primary border-dashed border-b-2 border-gray-900 hover:border-primary"
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
