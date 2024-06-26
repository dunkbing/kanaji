import React from "react";
import FallbackLoading from "./FallbackLoading";
const WordDetail = React.lazy(() => import("./WordDetail"));

const WordsContainer = (props) => {
  if (props.data.length === 0) {
    if (props.checkData) {
      return <FallbackLoading height="96" span="Loading for words" />;
    } else {
      return <FallbackLoading height="96" text="Words not found" />;
    }
  }
  return (
    <div className="flex flex-col justify-center space-y-5">
      {props.data.map((data, idx) => {
        return <WordDetail key={idx} data={data} />;
      })}
    </div>
  );
};

export default WordsContainer;
