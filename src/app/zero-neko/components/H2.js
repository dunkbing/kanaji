import React from "react";

const H2 = (props) => {
  return (
    <h1 className="mb-4 border-b-2 border-gray-700 pb-4 text-center text-lg lg:text-2xl">
      <span className="mr-0 block rounded-full font-black lg:mr-3 lg:inline">
        {props.span}
      </span>
      {props.text}
    </h1>
  );
};

export default H2;
