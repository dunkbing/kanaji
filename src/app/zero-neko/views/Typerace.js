"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { all } from "../data/words/all";
import { isKana, toRomaji } from "wanakana";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

const Typerace = () => {
  const [expression, setExpression] = useState("");
  const [useKanji, setUseKanji] = useState(false);
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const [time, setTime] = useState(60);
  const [game, setGame] = useState(false);
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0);
  const [lastScore, setLastScore] = useState(0);
  let input = useRef(null);

  const getWord = useCallback(() => {
    const tempWord = all[Math.floor(Math.random() * all.length)]; //
    if (!isKana(tempWord.reading)) {
      getWord();
    } else {
      setMeaning(tempWord.meaning);
      setWord(tempWord.reading);
      setExpression(tempWord.expression);
    }
  }, []);

  useEffect(() => {
    const get = () => {
      getWord();
    };
    get();
  }, [getWord]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (game) {
        if (time > 0) {
          setTime((t) => t - 1);
        } else {
          setResult(true);
          if (score > 0) {
            setLastScore(score);
          }
          setScore(0);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [game, time, score]);

  const convertTime = (num) => {
    let minutes = Math.floor(num / 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let sec = num % 60;
    sec = sec < 10 ? "0" + sec : sec;
    const res = minutes + " : " + sec;
    return res;
  };

  const handleChange = (e) => {
    setGame(true);
    if (toRomaji(word) === e.target.value.toLowerCase()) {
      getWord();
      setScore(score + word.split("").length * 20);
      e.target.value = "";
    }
  };

  const handleReset = () => {
    setGame(false);
    setTime(60);
    setResult(false);
    input.value = "";
  };

  const handlePass = () => {
    getWord();
    input.value = "";
  };
  const handleUseKanji = (use) => {
    setUseKanji(use);
  };

  return (
    <div className="mx-4 flex flex-col space-y-6 py-4 lg:mx-96 lg:space-y-8 lg:p-8">
      <div className="flex justify-between">
        <div className="flex flex-col rounded-lg bg-yellow-100 px-3 py-2 text-center text-base lg:px-5">
          <span className="my-auto">Score: {score}</span>
        </div>
        <div className="flex space-x-2 rounded-lg bg-green-200 px-3 py-2 text-base lg:px-5">
          <div className="my-auto">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="7.25" stroke="currentColor"></circle>
              <path stroke="currentColor" d="M12 8V12L14 14"></path>
            </svg>
          </div>
          <span className="my-auto">{convertTime(time)}</span>
        </div>
      </div>
      <div className="mx-auto flex flex-col items-center space-y-2 text-center lg:space-y-8">
        <span className="text-4xl font-bold lg:text-6xl">
          {useKanji ? expression : word}
        </span>
        <div className="flex items-center space-x-2">
          <Label htmlFor="useKanji">Kanji</Label>
          <Switch id="useKanji" onCheckedChange={handleUseKanji} />
        </div>
        <span className="text-primary text-base capitalize">{meaning}</span>
      </div>
      <div className="mx-auto flex flex-col space-y-6 lg:flex-row lg:space-x-2 lg:space-y-0">
        <Input
          onChange={(e) => handleChange(e)}
          ref={(node) => (input = node)}
          autoComplete="off"
          disabled={result === true ? true : false}
          type="text"
          name="inputWord"
          id="inputWord"
          placeholder={result ? "Please Reset" : "Type the answer"}
        />
        <Button onClick={handlePass}>Pass</Button>
      </div>
      <div className="mx-auto flex space-x-2">
        <Button className="bg-gray-200" onClick={handleReset}>
          Reset
        </Button>
      </div>
      <span className={(!result ? "hidden " : "") + "text-center"}>
        Congratulations, your score is {lastScore}
      </span>
    </div>
  );
};

export default Typerace;
