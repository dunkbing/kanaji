import React from "react";
import Link from "next/link";

import H1 from "../components/H1";
import WordsContainer from "../components/WordsContainer";
import FallbackLoading from "../components/FallbackLoading";

const Search = async ({ page, words }) => {
  const url = `http://jisho.org/api/v1/search/words?keyword=${encodeURIComponent(words)}&page=${page}`;
  const response = await fetch(url);
  const json = await response.json();
  const data = json.data;

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
            </div>
            {data.length ? (
              <WordsContainer data={data} />
            ) : (
              <FallbackLoading height="96" text="Words not found" />
            )}

            <Link
              href={`/search?words=${words}&page=${page + 1}`}
              className={
                (data.length < 7 ? "hidden " : "") +
                "hover:border-primary hover:text-primary mx-auto mt-12 border-b-2 border-black transition-colors duration-300 hover:cursor-pointer"
              }
            >
              More Words
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
