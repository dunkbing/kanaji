import axios from "axios";
import { isKanji } from "nihongo/src/analysers";
import React, { useEffect, useState } from "react";
import KanjiWordsList from "./KanjiWordsList";

const KanjiWordContainer = (props) => {
  const [kanjiWords, setKanjiWords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("https://kanjiapi.dev/v1/words/" + props.kanji)
        .then((response) => {
          props.sendWordsLength(response.data.length);
          setKanjiWords(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (isKanji(props.kanji)) {
      fetchData();
    }
  }, [props]);
  if (kanjiWords.length === 0) {
    return (
      <div className="space-y-4">
        <div className="h-12 animate-pulse rounded-lg bg-gray-300"></div>
        <div className="h-12 animate-pulse rounded-lg bg-gray-300"></div>
        <div className="h-12 animate-pulse rounded-lg bg-gray-300"></div>
        <div className="h-12 animate-pulse rounded-lg bg-gray-300"></div>
        <div className="h-12 animate-pulse rounded-lg bg-gray-300"></div>
      </div>
    );
  }
  return (
    <div className="flex flex-col flex-wrap justify-center gap-2 lg:justify-start">
      {kanjiWords.slice(0, props.wordsLimit).map((datas, index) => {
        return <KanjiWordsList key={index} datas={datas} />;
      })}
    </div>
  );
};

export default KanjiWordContainer;
