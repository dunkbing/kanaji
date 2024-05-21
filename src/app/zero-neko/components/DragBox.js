import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const DropBox = (props) => {
  const [kana, setKana] = useState();
  const [show, setShow] = useState(true);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  useEffect(() => {
    if (props.category === "Hiragana") {
      setKana(props.kana.hiragana);
    } else if (props.category === "Katakana") {
      setKana(props.kana.katakana);
    } else if (props.category === "Romaji") {
      setKana(props.kana.romaji);
    }
  }, [kana, props]);
  const onDragStart = (e) => {
    props.onSetDragItem(props.kana);
    if (!isTabletOrMobile) {
      setTimeout(() => {
        setShow(false);
        e.dataTransfer.setData(props.kana, e.target.id);
      }, 10);
    }
  };
  const onDragEnd = (e) => {
    setShow(true);
  };
  return (
    <li
      draggable
      autoscroll="true"
      onClick={() => props.onSetDragItem(props.kana)}
      onDragStart={(e) => onDragStart(e)}
      onDragEnd={(e) => onDragEnd(e)}
      className="box-border flex h-12 w-12 cursor-pointer text-center text-2xl font-bold hover:text-red-300 lg:h-16 lg:w-16 lg:text-4xl"
    >
      <span
        id={props.kana}
        className={
          (props.dragItem === props.kana ? "text-primary" : "") +
          " m-auto border-b-2 border-current "
        }
      >
        {!props.correct ? (show ? kana : "") : ""}
      </span>
    </li>
  );
};

export default DropBox;
