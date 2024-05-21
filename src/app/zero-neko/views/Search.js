"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import H1 from "../components/H1";
import WordsContainer from "../components/WordsContainer";

const Search = () => {
  const searchParams = useSearchParams();

  const [words, setWords] = useState();
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [checkData, setCheckData] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setData([]);
      setCheckData(true);
      const wordParams = searchParams.get("words");
      if (words !== wordParams) {
        setPage(1);
        setWords(wordParams);
      }
      const url =
        "http://jisho.org/api/v1/search/words?keyword=" +
        encodeURIComponent(wordParams) +
        (page ? "&page=" + page : "");
      const response = await fetch(url);
      const json = await response.json();
      if (json.data.length === 0) {
        setCheckData(false);
      }
      setData(json.data);
      window.scrollTo(0, 0);
    };
    fetchData();
  }, [page, words, searchParams]);

  return (
    <>
      <div className="mx-[20px] lg:mx-[160px] xl:mx-[200px]">
        <div className="flex flex-col lg:flex-row">
          <div className="flex w-full flex-col">
            <div className=" w-full">
              <H1 span={"語"} text={"Words"}></H1>
              <p className="text-center">
                Searched for{" "}
                <span className="text-primary capitalize">{words}</span>{" "}
                <span className={page === 1 ? "hidden " : ""}>
                  page <span className="text-primary">{page}</span>
                </span>
              </p>
              {/* <p>{!(words[0] === '"' && words[words.length - 1] === '"') ? "You can also try a search for \""+words+'"' : ""}</p> */}
            </div>
            <WordsContainer data={data} checkData={checkData} />
            <button
              onClick={() => {
                setPage(parseInt(page) + 1);
              }}
              className={
                (data.length < 7 ? "hidden " : "") +
                "hover:border-primary hover:text-primary mx-auto mt-12 border-b-2 border-black transition-colors duration-300 hover:cursor-pointer"
              }
            >
              More Words
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
