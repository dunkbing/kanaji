import React from "react";
import DropBox from "./DropBox";

const DropsContainer = (props) => {
  const containsObject = (obj, list) => {
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i] === obj) {
        return true;
      }
    }
    return false;
  };
  return (
    <ul className="grid grid-cols-5 gap-2 rounded-md shadow-md lg:grid-flow-col lg:grid-cols-none lg:grid-rows-5">
      {props.data.map((kana, idx) => {
        return (
          <DropBox
            key={idx}
            kana={kana}
            category={props.category}
            correct={containsObject(kana, props.correct)}
            onSetDropItem={(a) => props.onSetDropItem(a)}
          />
        );
      })}
    </ul>
  );
};

export default DropsContainer;
