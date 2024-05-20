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
      <div className="flex flex-col pb-4 px-1 border-2 border-black bg-white p-5 shadow-base">
        <div className="flex flex-col lg:flex-row pt-4">
          {/* Modal */}
          <div className="relative lg:ml-2 my-auto">
            {/* Button */}
            <span className="text-sm pb-3 pl-1 pt-0 text-left capitalize block">
              {'Filter: Searched "' + filter + '"'}
            </span>
            <Button
              onClick={() => {
                setModal(!modal);
              }}
              className="flex bg-gray-50 rounded-lg shadow hover:bg-gray-100 text-lg px-4 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary ring-offset-4"
            >
              <span className="text-base">Grade</span>
              <svg
                className={
                  "transform scale-50 ml-2 my-auto " +
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
                " absolute left-32 top-8 rounded-lg w-32 bg-white shadow-lg flex-col ml-auto px-3 py-3 z-10"
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
      <ul className="mt-2 grid grid-cols-4 lg:grid-cols-6 items-center xl:grid-cols-9 px-3 py-4 lg:p-6 mx-1 gap-2 lg:gap-3 rounded-lg lg:space-y-0 border-2 border-black bg-white p-5 shadow-base">
        <KanjiContainer
          kanjiList={kanjiList}
          filter={filter}
          checkData={checkData}
        />
      </ul>
      <article className="my-8 mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Kanji: Unlocking the Depth of Japanese Language</h2>
        <p className="text-lg mb-4">
          Kanji, the logographic characters adapted from Chinese, form the backbone of the Japanese writing system. Learning kanji is essential for understanding the nuances and complexities of the language. Our kanji page provides a structured approach to mastering these characters based on their grade levels in Japanese schools.
        </p>
        <p className="text-lg">
          Embark on your journey to kanji mastery with our interactive charts, rich examples, and engaging quizzes, and unlock the full potential of your Japanese language skills!
        </p>
      </article>
    </div>
  );
};

export default Kanji;
