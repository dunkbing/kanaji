"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { hiragana } from "../data/hiragana";
import { katakana } from "../data/katakana";
import { toRomaji, isKana } from "wanakana";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const StudyKana = ({ type }) => {
  const [word, setWord] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const correctAnswerRef = useRef("");
  const [time, setTime] = useState(60);
  const [game, setGame] = useState(false);
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0);
  const [lastScore, setLastScore] = useState(0);
  let input = useRef(null);

  const getWord = useCallback(() => {
    const kana = type == "hiragana" ? hiragana : katakana;
    const tempWord = kana[Math.floor(Math.random() * kana.length)]; //
    if (!isKana(tempWord.kana)) {
      getWord();
    } else {
      setWord(tempWord.kana);
      correctAnswerRef.current = tempWord.romaji;
    }
  }, [type]);

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
    setCorrectAnswer("");
    const answer = e.target.value.toLowerCase();
    if (toRomaji(word) === answer) {
      getWord();
      setScore(score + word.split("").length * 20);
      e.target.value = "";
    }
  };

  const handleKeyPress = (e) => {
    if (e.key !== "Enter") {
      console.log("enter press here! ");
      return;
    }
    const answer = e.target.value.toLowerCase();
    if (toRomaji(word) !== answer) {
      setCorrectAnswer(correctAnswerRef.current);
    }
    getWord();
    e.target.value = "";
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
        <span className="text-4xl font-bold lg:text-6xl">{word}</span>
      </div>
      <div className="mx-auto flex flex-col space-y-6 lg:flex-row lg:space-x-2 lg:space-y-0">
        <Input
          onChange={handleChange}
          onKeyPress={handleKeyPress}
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
      {!!correctAnswer && (
        <div className="flex items-center justify-center">
          <Label className="flex text-red-400">
            Correct Answer is: {correctAnswer}
          </Label>
        </div>
      )}
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

export default StudyKana;
