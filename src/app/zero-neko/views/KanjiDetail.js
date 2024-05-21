"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { isKanji } from "nihongo/src/analysers";

import KanjiListDetail from "../components/KanjiListDetail";
import KanjiWordContainer from "../components/KanjiWordContainer";
import { Button } from "../../../components/ui/button";

const KanjiDetail = (props) => {
  const kanji = props.kanji;
  console.log(kanji);
  const [kanjiDetail, setKanjiDetail] = useState([]);
  const [wordsLimit, setWordsLimit] = useState(5);
  const [wordsLength, setWordsLength] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setKanjiDetail([]);
      axios.get("https://kanjiapi.dev/v1/kanji/" + kanji).then((response) => {
        setKanjiDetail(response.data);
        window.scrollTo(0, 0);
      });
    };
    if (isKanji(kanji)) {
      fetchData();
    }
  }, [kanji]);

  // if (!isKanji(kanji)) {
  //   return <Redirect to="/404" />;
  // }

  return (
    <>
      <div className="mx-[20px] flex flex-col lg:mx-[160px] xl:mx-[240px]">
        <div className="flex flex-col lg:mb-0 lg:flex-row lg:space-x-20">
          <div className="mx-auto mb-8 mr-auto flex flex-col text-center">
            <h1 className="mb-6 text-center text-7xl font-semibold lg:mb-12 lg:mt-8 lg:text-9xl">
              {kanjiDetail.kanji ? kanjiDetail.kanji : "-"}
            </h1>
            <span>
              Heisig Keyword
              <a
                href="https://en.wikipedia.org/wiki/Remembering_the_Kanji_and_Remembering_the_Hanzi"
                className="hover:text-primary inline-block hover:cursor-pointer"
              >
                <sup>?</sup>
              </a>
            </span>
            <p className="mb-4 py-3 text-xl font-black capitalize lg:text-4xl">
              {kanjiDetail ? kanjiDetail.heisig_en : "One"}
            </p>
            <table className="table-auto text-left">
              <thead>
                <tr>
                  <th>Grade</th>
                  <th>:</th>
                  <th className="font-normal">
                    {kanjiDetail.grade ? kanjiDetail.grade : "-"}
                  </th>
                </tr>
                <tr>
                  <th>JLPT</th>
                  <th>:</th>
                  <th className="font-normal">
                    {kanjiDetail.jlpt ? kanjiDetail.jlpt : "-"}
                  </th>
                </tr>
                <tr>
                  <th>Stroke</th>
                  <th>:</th>
                  <th className="font-normal">
                    {kanjiDetail.stroke_count ? kanjiDetail.stroke_count : "-"}
                  </th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="flex w-full flex-col text-center text-2xl lg:ml-10 lg:p-8 lg:text-left">
            <div className="mb-12 flex flex-col space-y-6">
              <KanjiListDetail
                text="Kun - Reading"
                datas={kanjiDetail.kun_readings}
              />
              <KanjiListDetail
                text="On - Reading"
                datas={kanjiDetail.on_readings}
              />
              <KanjiListDetail text="Meaning" datas={kanjiDetail.meanings} />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="mb-2 text-center text-3xl font-bold">Words</h2>
          <KanjiWordContainer
            kanji={kanji}
            wordsLimit={wordsLimit}
            sendWordsLength={(wordsLength) => setWordsLength(wordsLength)}
          />
        </div>
        <Button
          className={
            (wordsLimit > wordsLength || wordsLength === 0 ? "hidden " : "") +
            "hover:border-primary hover:text-primary mx-auto mt-12 border-b-2 border-black transition-colors duration-300 hover:cursor-pointer"
          }
          onClick={() => {
            setWordsLimit(wordsLimit + 5);
          }}
        >
          More Words
        </Button>
      </div>
    </>
  );
};

export default KanjiDetail;
