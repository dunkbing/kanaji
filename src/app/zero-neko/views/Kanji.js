"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import H1 from "../components/H1";
import CategoryFilterButton from "../components/CategoryFilterButton";
import KanjiContainer from "../components/KanjiContainer";
import { Button } from "@/components/ui/button";

const Kanji = () => {
  const [kanjiList, setKanjiList] = useState([]);
  const [filter, setFilter] = useState("grade-1");
  const [modal, setModal] = useState(false);
  const [checkData, setCheckData] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      axios.get("https://kanjiapi.dev/v1/kanji/" + filter).then((response) => {
        if (response.data.length === 0) {
          setCheckData(false);
        }
        setKanjiList(response.data);
        window.scrollTo(0, 0);
      });
    };
    fetchData();
  }, [filter]);

  const changeFilter = (newFilter) => {
    setKanjiList([]);
    setFilter(newFilter);
    setModal(false);
  };

  return (
    <div className="relative text-center lg:mx-36">
      <H1 span={"漢字"} text={"Kanji"} />
      <div className="flex flex-col border-2 border-black bg-white p-5 px-1 pb-4 shadow-base">
        <div className="flex flex-col pt-4 lg:flex-row">
          {/* Modal */}
          <div className="relative my-auto lg:ml-2">
            {/* Button */}
            <span className="block pb-3 pl-1 pt-0 text-left text-sm capitalize">
              {'Filter: Searched "' + filter + '"'}
            </span>
            <Button
              onClick={() => {
                setModal(!modal);
              }}
              className="focus:ring-primary flex cursor-pointer rounded-lg bg-gray-50 px-4 py-2 text-lg shadow ring-offset-4 hover:bg-gray-100 focus:outline-none focus:ring-2"
            >
              <span className="text-base">Grade</span>
              <svg
                className={
                  "my-auto ml-2 scale-50 transform " +
                  (!modal ? "rotate-0" : "-rotate-90")
                }
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  stroke="currentColor"
                  d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
                />
              </svg>
            </Button>
            {/* Modal */}
            <div
              className={
                (modal ? "flex" : "hidden") +
                " absolute left-32 top-8 z-10 ml-auto w-32 flex-col rounded-lg bg-white px-3 py-3 shadow-lg"
              }
            >
              <div className="flex flex-col space-y-2">
                <CategoryFilterButton
                  category="grade-1"
                  checked={filter}
                  onSend={(theFilter) => changeFilter(theFilter)}
                />
                <CategoryFilterButton
                  category="grade-2"
                  checked={filter}
                  onSend={(theFilter) => changeFilter(theFilter)}
                />
                <CategoryFilterButton
                  category="grade-3"
                  checked={filter}
                  onSend={(theFilter) => changeFilter(theFilter)}
                />
                <CategoryFilterButton
                  category="grade-4"
                  checked={filter}
                  onSend={(theFilter) => changeFilter(theFilter)}
                />
                <CategoryFilterButton
                  category="grade-5"
                  checked={filter}
                  onSend={(theFilter) => changeFilter(theFilter)}
                />
                <CategoryFilterButton
                  category="grade-6"
                  checked={filter}
                  onSend={(theFilter) => changeFilter(theFilter)}
                />
                <CategoryFilterButton
                  category="grade-8"
                  checked={filter}
                  onSend={(theFilter) => changeFilter(theFilter)}
                />
              </div>
            </div>
          </div>
          {/* Modal End */}
        </div>
      </div>
      <ul className="mx-1 mt-2 grid grid-cols-4 items-center gap-2 rounded-lg border-2 border-black bg-white p-5 px-3 py-4 shadow-base lg:grid-cols-6 lg:gap-3 lg:space-y-0 lg:p-6 xl:grid-cols-9">
        <KanjiContainer
          kanjiList={kanjiList}
          filter={filter}
          checkData={checkData}
        />
      </ul>
      <article className="mx-auto my-8 max-w-2xl">
        <h2 className="mb-4 text-2xl font-bold">
          Kanji: Unlocking the Depth of Japanese Language
        </h2>
        <p className="mb-4 text-lg">
          Kanji, the logographic characters adapted from Chinese, form the
          backbone of the Japanese writing system. Learning kanji is essential
          for understanding the nuances and complexities of the language. Our
          kanji page provides a structured approach to mastering these
          characters based on their grade levels in Japanese schools.
        </p>
        <p className="text-lg">
          Embark on your journey to kanji mastery with our interactive charts,
          rich examples, and engaging quizzes, and unlock the full potential of
          your Japanese language skills!
        </p>
      </article>
    </div>
  );
};

export default Kanji;
