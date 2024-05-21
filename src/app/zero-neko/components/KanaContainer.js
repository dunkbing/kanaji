import React from "react";
import BoxKana from "./KanaBox";

const KanaContainer = (props) => {
  return (
    <>
      <ul className="grid-span-1 grid auto-rows-min grid-cols-5 gap-2 lg:gap-4 lg:p-4">
        {props.kana.map((hira, index) => {
          if (index >= 46) {
            return true;
          }
          return <BoxKana data={hira} key={index} span={1} />;
        })}
      </ul>
      <div className="col-span-1 flex flex-col space-y-4 lg:space-y-0">
        <ul className="grid auto-rows-min grid-cols-5 gap-2 lg:gap-4 lg:p-4">
          {props.kana.map((hira, index) => {
            if (index < 46 || index >= 71) {
              return true;
            }
            return <BoxKana data={hira} key={index} span={1} />;
          })}
        </ul>
        <ul className="grid auto-rows-min grid-cols-6 gap-2 pb-4 lg:gap-4 lg:px-4">
          {props.kana.map((hira, index) => {
            if (index < 71) {
              return true;
            }
            return <BoxKana data={hira} key={index} span={2} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default KanaContainer;
