"use client";

import React, { useState, useEffect, Suspense } from "react";
import { hiragana } from "../data/hiragana";
import { katakana } from "../data/katakana";
import KanaContainer from "../components/KanaContainer";
import H1 from "../components/H1";
import FallbackLoading from "../components/FallbackLoading";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Kana = (props) => {
  const [kana, setKana] = useState([]);
  const router = useRouter();

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
      <div className="flex flex-row items-center justify-between">
        <H1 span={props.symbol} text={props.title} />
        <Button
          onClick={() => router.push(`/${props.title.toLowerCase()}/study`)}
        >
          Study this set
        </Button>
      </div>
      <div className="mx-1 mb-6 grid grid-cols-1 space-y-4 rounded-lg border-2 border-black bg-white p-5 px-3 py-4 shadow-base lg:grid-cols-2 lg:space-y-0 lg:p-6">
        <Suspense fallback={<FallbackLoading height="96" />}>
          <KanaContainer kana={kana} />
        </Suspense>
      </div>
      {props.title === "Katakana" && (
        <article className="mx-auto mb-4 max-w-2xl">
          <h2 className="mb-4 text-2xl font-bold">
            Mastering Katakana: Essential for Learning Japanese
          </h2>
          <p className="mb-4 text-lg">
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
        <article className="mx-auto mb-4 max-w-2xl">
          <h2 className="mb-4 text-2xl font-bold">
            Hiragana: The Foundation of Japanese Writing
          </h2>
          <p className="mb-4 text-lg">
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
