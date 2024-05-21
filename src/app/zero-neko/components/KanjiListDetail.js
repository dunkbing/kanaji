import React from "react";
import KanjiListDetailChild from "./KanjiListDetailChild";
const KanjiListDetail = (props) => {
  if (props.datas === undefined) {
    return <></>;
  }
  return (
    <div
      className={(props.datas.length === 0 ? "hidden " : "") + "flex flex-col"}
    >
      <h2 className="mb-3 font-bold">{props.text ? props.text : ""}</h2>
      <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
        {props.datas.map((data, index) => {
          return <KanjiListDetailChild key={index} data={data} />;
        })}
      </div>
    </div>
  );
};

export default KanjiListDetail;
