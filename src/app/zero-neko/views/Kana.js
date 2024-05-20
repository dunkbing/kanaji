"use client";

import React, { useState, useEffect, Suspense } from "react";
import { hiragana } from "../data/hiragana";
import { katakana } from "../data/katakana";
import KanaContainer from "../components/KanaContainer";
import H1 from "../components/H1";
import FallbackLoading from "../components/FallbackLoading";

const Kana = (props) => {
  const [kana, setKana] = useState([]);
  useEffect(() => {
    if (props.title === "Hiragana") {
      setKana(hiragana);
    } else if (props.title === "Katakana") {
      setKana(katakana);
    }
    window.scrollTo(0, 0);
  }, [props.title]);

  return (
    <div className="text-center lg:mx-36">
      <H1 span={props.symbol} text={props.title} />
      <div className="grid grid-cols-1 lg:grid-cols-2 px-3 py-4 lg:p-6 mx-1 rounded-lg space-y-4 lg:space-y-0 border-2 border-black bg-white p-5 shadow-base mb-6">
        <Suspense fallback={<FallbackLoading height="96" />}>
          <KanaContainer kana={kana} />
        </Suspense>
      </div>
      {props.title === "Katakana" && (
        <article className="mb-4 mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">
            Mastering Katakana: Essential for Learning Japanese
          </h2>
          <p className="text-lg mb-4">
            Katakana, one of the three Japanese writing systems, is crucial for
            learners as it is used for foreign loanwords, onomatopoeia, and
            emphasis. Our interactive katakana page helps you explore and
            practice this essential script through charts, examples, and
            quizzes.
          </p>
          <p className="text-lg">
            Start your journey to mastering katakana today and unlock a
            significant portion of the Japanese language!
          </p>
        </article>
      )}
      {props.title === "Hiragana" && (
        <article className="mb-4 mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">
            Hiragana: The Foundation of Japanese Writing
          </h2>
          <p className="text-lg mb-4">
            Hiragana is the primary phonetic script in Japanese, used for
            writing native words and grammatical elements. Mastering hiragana is
            essential for building a strong foundation in the language. Our
            hiragana page offers a comprehensive guide to learning and
            practicing this fundamental script.
          </p>
          <p className="text-lg">
            Dive into the world of hiragana with our interactive charts,
            examples, and exercises, and take your first step towards fluency in
            Japanese!
          </p>
        </article>
      )}
    </div>
  );
};

export default Kana;
