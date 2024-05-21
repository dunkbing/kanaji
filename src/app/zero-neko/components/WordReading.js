import React, { useState, useEffect } from "react";
import Link from "next/link";
import { isKanji, toRomaji } from "wanakana";

const WordReading = (props) => {
  const [word, setWord] = useState("");
  useEffect(() => {
    if (props.word) {
      setWord(props.word);
    }
  }, [props]);
  return (
    <>
      <p
        className={
          (props.word ? "text-xl" : "text-4xl font-semibold") +
          " my-auto text-center" +
          (word.length > 5 ? " lg:text-left" : "")
        }
      >
        {props.reading}
      </p>
      <p
        className={
          (props.word ? "" : "hidden ") + "my-auto text-center font-semibold"
        }
      >
        <span
          className={
            "flex flex-wrap justify-center gap-x-2 gap-y-6 text-3xl lg:flex-nowrap lg:text-4xl" +
            (word.length > 5 ? " lg:justify-start" : "")
          }
        >
          {word.split("").map((kana, idx) => {
            if (isKanji(kana)) {
              return (
                <Link
                  key={idx}
                  href={"/kanji/" + kana}
                  className={
                    isKanji(kana)
                      ? "hover:border-primary hover:text-primary border-b-2 border-dashed border-current   transition-all duration-150 hover:text-4xl lg:hover:text-5xl"
                      : ""
                  }
                >
                  {kana}
                </Link>
              );
            }
            return <span key={idx}>{kana}</span>;
          })}
        </span>
      </p>
      <p
        className={
          "my-auto text-center text-lg capitalize" +
          (word.length > 5 ? " lg:text-left" : "")
        }
      >
        {toRomaji(props.reading)}
      </p>
    </>
  );
};

export default WordReading;
