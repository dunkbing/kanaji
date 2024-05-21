import React from "react";
import Link from "next/link";
import { isKanji, toRomaji } from "wanakana";

import KanjiWordMeanings from "./KanjiWordMeanings";

const KanjiWordsList = (props) => {
  return (
    <div className="flex flex-col space-y-4 border-b border-gray-400 py-4 lg:flex-row lg:space-y-0">
      <p className="my-auto mr-auto text-2xl font-semibold lg:text-4xl">
        <span className="flex flex-wrap gap-2">
          {props.datas.variants[0].written.split("").map((kana, idx) => {
            if (isKanji(kana)) {
              return (
                <Link
                  key={idx}
                  href={"/kanji/" + kana}
                  className={
                    isKanji(kana)
                      ? "hover:border-primary hover:text-primary border-b-2 border-dashed border-current transition-all duration-150 hover:text-3xl lg:hover:text-5xl"
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
      <div className="w-36 lg:w-96 lg:text-right">
        <div className="mb-3">
          <p className="text-primary mb-2 text-xs lg:text-sm">
            {props.datas.variants[0].pronounced
              ? toRomaji(props.datas.variants[0].pronounced)
              : ""}
          </p>
          <p className="text-base font-semibold lg:text-2xl">
            {props.datas.variants[0].pronounced
              ? props.datas.variants[0].pronounced
              : ""}
          </p>
        </div>
        <div className="flex flex-col">
          {props.datas.meanings.map((meaning, index) => {
            return (
              <KanjiWordMeanings
                key={index}
                num={props.datas.meanings.length > 1 ? index : -1}
                datas={meaning}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KanjiWordsList;
