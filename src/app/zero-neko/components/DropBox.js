import React, { useState, useEffect } from "react";

const DropBox = (props) => {
  const [kana, setKana] = useState();
  useEffect(() => {
    if (props.category === "Hiragana") {
      setKana(props.kana.hiragana);
    } else if (props.category === "Katakana") {
      setKana(props.kana.katakana);
    } else if (props.category === "Romaji") {
      setKana(props.kana.romaji);
    }
  }, [kana, props]);

  return (
    <li
      onClick={() => (props.correct ? false : props.onSetDropItem(props.kana))}
      onDragOver={(e) => (props.correct ? false : e.preventDefault())}
      onDrop={() => (props.correct ? false : props.onSetDropItem(props.kana))}
      className={
        (props.correct ? "border-green-400" : "border-gray-700") +
        " cursor-pointer rounded-md border-2 px-1 py-2 text-center font-bold lg:py-4 lg:text-2xl " +
        (props.kana.start &&
          "col-start-" +
            props.kana.start +
            " lg:row-start- lg:col-start-auto" +
            props.kana.start)
      }
    >
      <span>{kana}</span>
    </li>
  );
};

export default DropBox;
