import React from "react";
import { isRomaji, toRomaji } from "wanakana";
const KanjiListDetailChild = (props) => {
  return (
    <div className="flex flex-col whitespace-nowrap rounded-lg border border-gray-600 bg-opacity-20 px-4 py-2 text-center font-black capitalize">
      <p className="text-sm lg:text-lg">{props.data ? props.data : "-"}</p>
      <span className="text-primary text-xs">
        {!isRomaji(props.data) ? toRomaji(props.data) : ""}
      </span>
    </div>
  );
};

export default KanjiListDetailChild;
