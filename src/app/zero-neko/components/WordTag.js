import React, { useState, useEffect } from "react";

const WordTag = (props) => {
  const [data, setData] = useState("");
  useEffect(() => {
    if (props.data === true) {
      setData("Common Word");
    } else {
      if (props.data ? props.data.slice(0, 5) === "jlpt-" : "") {
        setData("JLPT N" + props.data.slice(6, 7));
      } else if (props.data ? props.data.slice(0, 8) === "wanikani" : "") {
        setData("Wanikani Level " + props.data.slice(8, 9));
      } else {
        setData(props.data);
      }
    }
  }, [props.data]);
  return (
    <p
      className={
        (data === "" || !data ? "hidden " : "") +
        "mx-2 rounded-lg px-3 py-1 text-center text-xs lg:mx-auto lg:py-2 " +
        (props.color === "gray" ? "bg-gray-300" : "bg-green-300")
      }
    >
      {data}
    </p>
  );
};

export default WordTag;
