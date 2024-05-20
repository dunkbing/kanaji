"use client";

import React from "react";

import ButtonInstalPWA from "../components/ButtonInstalPWA";
import Faq from "../../../components/faq";
import Game from "./Game";

const illus = "/images/illus.svg";

const Home = () => {
  return (
    <div className="mx-1 lg:mx-32 lg:mr-52">
        <section className="flex flex-col lg:flex-row lg:mt-12 p-2 lg:p-8 rounded-lg">
          <div className="flex mx-auto mb-6 lg:mb-0 lg:order-last w-11/12 lg:w-2/5">
            <img
              className="mx-auto"
              src={illus}
              alt="illustration"
              width="400"
            />
          </div>
          <div className="flex flex-col content-start text-center lg:text-left w-11/12 lg:w-3/5 mx-auto">
            <h1 className="text-3xl lg:text-4xl xl:text-7xl leading-relaxed xl:leading-snug uppercase font-black">
              Learn{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-red-800">
                Japanese
              </span>{" "}
            </h1>
            <p className="text-base lg:text-2xl mt-4 mb-6 lg:mt-8 w-10/12 lg:leading-normal mx-auto lg:mx-0">
              Kanaji is an online platform that helps learners master Japanese
              through its comprehensive dictionary and engaging interactive
              games.
            </p>
            <ButtonInstalPWA />
          </div>
        </section>
        <section className="flex flex-col justify-center m-8">
          <Game />
          <hr className="h-1 w-48 bg-primary border-none mx-auto mb-9 lg:mb-12 " />
          <Faq />
          <hr className="h-1 w-48 bg-primary border-none mx-auto mb-9 lg:mb-12 " />
        </section>
    </div>
  );
};

export default Home;
