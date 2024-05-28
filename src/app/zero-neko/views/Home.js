import React from "react";

import ButtonInstalPWA from "../components/ButtonInstalPWA";
import Faq from "../../../components/faq";
import Game from "./Game";

const illus = "/images/illus.svg";

const Home = () => {
  return (
    <div className="mx-1 lg:mx-32 lg:mr-52">
      <section className="flex flex-col rounded-lg p-2 lg:mt-12 lg:flex-row lg:p-8">
        <div className="mx-auto mb-6 flex w-11/12 lg:order-last lg:mb-0 lg:w-2/5">
          <img className="mx-auto" src={illus} alt="illustration" width="400" />
        </div>
        <div className="mx-auto flex w-11/12 flex-col content-start text-center lg:w-3/5 lg:text-left">
          <h1 className="text-3xl font-black uppercase leading-relaxed lg:text-4xl xl:text-7xl xl:leading-snug">
            Learn{" "}
            <span className="bg-gradient-to-br from-red-500 to-red-800 bg-clip-text text-transparent">
              Japanese
            </span>{" "}
          </h1>
          <p className="mx-auto mb-6 mt-4 w-10/12 text-base lg:mx-0 lg:mt-8 lg:text-2xl lg:leading-normal">
            Kanaji is an online platform that helps learners master Japanese
            through its comprehensive dictionary and engaging interactive games.
          </p>
          <ButtonInstalPWA />
        </div>
      </section>
      <section className="m-8 flex flex-col justify-center">
        <Game />
        <hr className="bg-primary mx-auto mb-9 h-1 w-48 border-none lg:mb-12 " />
        <Faq />
        <hr className="bg-primary mx-auto mb-9 h-1 w-48 border-none lg:mb-12 " />
      </section>
    </div>
  );
};

export default Home;
