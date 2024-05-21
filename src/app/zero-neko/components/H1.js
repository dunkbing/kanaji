import React from "react";

const H1 = (props) => {
  return (
    <h1 className="mb-8 flex animate-bounce flex-col text-center font-bold lg:mb-8 lg:mt-8 lg:flex-row lg:text-left">
      <span className="mx-auto rounded-full text-5xl font-black lg:ml-0 lg:mr-4 lg:text-7xl ">
        {props.span}
      </span>
      <span className="text-4xl">{props.text}</span>
    </h1>
  );
};

export default H1;
