import React from "react";

const KanaBox = (props) => {
  return (
    <li
      className={
        "col-span- box-border transition-all delay-75" +
        props.span +
        (props.data.start ? " col-start-" + props.data.start : "") +
        " rounded-md bg-gray-50 p-2 shadow-md hover:shadow-none lg:p-4"
      }
    >
      <p className="mb-1 text-xl font-black lg:mb-2 lg:text-3xl">
        {props.data.kana}
      </p>
      <p className="text-primary text-sm font-semibold lg:text-base">
        {props.data.romaji}
      </p>
    </li>
  );
};

export default KanaBox;
