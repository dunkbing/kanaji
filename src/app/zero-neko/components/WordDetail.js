"use client";

import React, { useEffect, useState } from "react";
import WordTag from "./WordTag";
import WordReading from "./WordReading";

const WordDetail = (props) => {
  const [wordLength, setWordLength] = useState(0);
  useEffect(() => {
    if (props.data.japanese[0].word) {
      setWordLength(props.data.japanese[0].word.length);
    }
  }, [props]);

  return (
    <div
      className={
        (wordLength > 5 ? "md:pl-8 lg:flex-col lg:pl-10" : "lg:flex-row") +
        " flex flex-col border-b-2 border-gray-300 pb-8 pt-4"
      }
    >
      <div className="mr-4 flex w-full flex-col">
        <div className="flex flex-none flex-col space-y-2">
          <div className="flex flex-col space-y-6">
            <WordReading
              reading={props.data.japanese[0].reading}
              word={props.data.japanese[0].word && props.data.japanese[0].word}
            />
          </div>
          <div
            className={
              (wordLength > 5
                ? "lg:-ml-3 lg:-mt-4 lg:flex-row lg:justify-start lg:space-x-2"
                : "lg:flex-col lg:space-y-3") +
              " flex flex-wrap justify-center gap-y-3 py-2 lg:gap-0"
            }
          >
            <WordTag data={props.data.is_common} color={"green"} />
            {props.data.tags.map((tags, idx) => {
              return <WordTag key={idx} data={tags} color={"gray"} />;
            })}
            {props.data.jlpt.map((tags, idx) => {
              return <WordTag key={idx} data={tags} color={"gray"} />;
            })}
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-none flex-col space-y-2 lg:mt-0 lg:w-9/12">
        <div className="flex flex-col space-y-4">
          {props.data.senses.map((sense, idx) => {
            return (
              <div key={idx} className="flex flex-col space-y-2">
                <p className="text-sm capitalize text-gray-600">
                  {sense.parts_of_speech.join(", ")}
                </p>
                <p className="text-xl">
                  <span className="text-gray-600">{idx + 1}. </span>
                  {sense.english_definitions.join("; ")}
                  <span className="block text-base text-gray-700">
                    {sense.tags}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col">
          <span
            className={
              (props.data.japanese.length > 1 ? "" : "hidden ") +
              "my-2 flex text-sm"
            }
          >
            Other forms
          </span>
          <div className="flex flex-wrap gap-2">
            {props.data.japanese.slice(1).map((jpn, idx) => {
              return (
                <span key={idx}>
                  {jpn.word}『{jpn.reading}』
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordDetail;
