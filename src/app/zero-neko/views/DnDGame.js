"use client";

import React, { useState, useEffect } from "react";

import { kana } from "../data/kana";
import H2 from "../components/H2";
import CategoryRadioButton from "../components/CategoryRadioButton";
import DropsContainer from "../components/DropsContainer";
import DragsContainer from "../components/DragsContainer";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";

const DnDGame = () => {
  const [dragItem, setDragItem] = useState(null);
  const [from, setFrom] = useState("Hiragana");
  const [to, setTo] = useState("Romaji");
  const [game, setGame] = useState(false);
  const [correct, setCorrect] = useState([]);
  const [time, setTime] = useState(0);
  const [timeCount, setTimeCount] = useState(false);
  const [isStartDisabled, setIsStartDisabled] = useState(false);
  //audio
  const correctAudio = useMemo(() => {
    if (typeof Audio !== "undefined") return new Audio("/sfx/correct.wav");
    return null;
  }, []);
  const wrongAudio = useMemo(() => {
    if (typeof Audio !== "undefined") return new Audio("/sfx/wrong.wav");
    return null;
  }, []);
  const winAudio = useMemo(() => {
    if (typeof Audio !== "undefined") return new Audio("/sfx/win.wav");
    return null;
  }, []);

  const onDrop = (item) => {
    if (item === dragItem) {
      correctAudio.play();
      correctAudio.currentTime = 0;
      setCorrect(correct.concat([dragItem]));
    } else {
      wrongAudio.play();
      wrongAudio.currentTime = 0;
      setDragItem(null);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      timeCount && setTime((t) => t + 1);
    }, 1000);
    if (kana.length === correct.length) {
      winAudio.play();
      winAudio.currentTime = 0;
      setTimeCount(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timeCount, correct, winAudio]);

  // disable the button if `from` and `to` are the same
  useEffect(() => {
    setIsStartDisabled(from === to);
  }, [from, to]);

  const convertTime = (num) => {
    let res = "";
    let minutes = Math.floor(num / 60);
    let sec = num % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    sec = sec < 10 ? "0" + sec : sec;
    res = minutes + " : " + sec;
    return res;
  };
  const handleStart = () => {
    setGame(true);
    setCorrect([]);
    setTimeCount(true);
  };
  const handleBack = () => {
    setGame(false);
    setTime(0);
  };
  const handleReset = () => {
    setTime(0);
    setCorrect([]);
    setTimeCount(true);
  };
  return (
    <div className="flex flex-col py-4 lg:mx-20 lg:p-4">
      <h1 className="text-center text-3xl font-bold lg:text-4xl">
        Pairing Kana
      </h1>
      <div
        className={
          (game ? "hidden" : "flex") +
          " mx-auto flex-col rounded-xl border-gray-800 py-12"
        }
      >
        <span className="mb-3 text-center text-xl font-black lg:text-3xl">
          Setting
        </span>
        <div className="flex space-x-8 py-3 lg:p-8">
          <div className="flex flex-col space-y-4">
            <H2 text="From" />
            <CategoryRadioButton
              name={"from"}
              value={"Romaji"}
              checked={from}
              onSend={(x) => setFrom(x)}
            />
            <CategoryRadioButton
              name={"from"}
              value={"Hiragana"}
              checked={from}
              onSend={(x) => setFrom(x)}
            />
            <CategoryRadioButton
              name={"from"}
              value={"Katakana"}
              checked={from}
              onSend={(x) => setFrom(x)}
            />
          </div>
          <div className="flex flex-col space-y-4">
            <H2 text="To" />
            <CategoryRadioButton
              name={"to"}
              value={"Romaji"}
              checked={to}
              onSend={(x) => setTo(x)}
            />
            <CategoryRadioButton
              name={"to"}
              value={"Hiragana"}
              checked={to}
              onSend={(x) => setTo(x)}
            />
            <CategoryRadioButton
              name={"to"}
              value={"Katakana"}
              checked={to}
              onSend={(x) => setTo(x)}
            />
          </div>
        </div>
        <div className="flex">
          <Button
            onClick={() => handleStart()}
            className={`mx-auto mt-4 flex rounded-lg bg-gray-200 px-6 text-lg transition-all delay-75 lg:px-8 lg:text-3xl ${
              isStartDisabled ? "text-gray-400" : "text-gray-600"
            } ${
              !isStartDisabled && "hover:bg-primary"
            } focus:ring-primary ring-offset-4 focus:outline-none focus:ring-2 ${
              isStartDisabled && "cursor-not-allowed"
            }`}
            disabled={isStartDisabled}
          >
            <span className="mr-2">Start Game</span>
            <div className=" my-auto">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  d="M13.75 6.75L19.25 12L13.75 17.25"
                ></path>
                <path stroke="currentColor" d="M19 12H4.75"></path>
              </svg>
            </div>
          </Button>
        </div>
      </div>
      <div
        className={
          (game ? "flex" : "hidden") +
          " mt-4 select-none flex-col space-y-8 rounded-md px-4 py-8"
        }
      >
        <div className="flex lg:mx-6">
          <Button
            onClick={() => handleBack()}
            className="transtion hover:bg-primary focus:ring-primary mr-auto flex space-x-2 rounded-lg bg-gray-200 px-5 py-2 text-base ring-offset-2 duration-150 hover:text-white focus:outline-none focus:ring-2 md:mr-2 lg:px-7 lg:py-3"
          >
            <div className="my-auto">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  d="M10.25 6.75L4.75 12L10.25 17.25"
                ></path>
                <path stroke="currentColor" d="M19.25 12H5"></path>
              </svg>
            </div>
            <span className="my-auto">Back</span>
          </Button>
          <Button
            onClick={() => handleReset()}
            className="transtion active:ring-primary flex space-x-2 rounded-lg bg-gray-200 bg-opacity-80 px-5 py-2 text-base ring-offset-2 duration-150 hover:bg-opacity-70 focus:outline-none active:ring-2 lg:px-7 lg:py-3"
          >
            <span className="my-auto">Reset</span>
          </Button>
          <div className="ml-auto flex space-x-2 rounded-lg bg-green-200 px-5 py-2 lg:px-7  lg:py-3 lg:text-lg">
            <div className="my-auto">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="7.25" stroke="currentColor"></circle>
                <path stroke="currentColor" d="M12 8V12L14 14"></path>
              </svg>
            </div>
            <span className="my-auto whitespace-nowrap">
              {convertTime(time)}
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-8 lg:mx-6">
          <DropsContainer
            data={kana}
            category={to}
            correct={correct}
            onSetDropItem={(item) => onDrop(item)}
          />
          <DragsContainer
            data={kana}
            category={from}
            correct={correct}
            dragItem={dragItem}
            onSetDragItem={(item) => setDragItem(item)}
          />
        </div>
      </div>
    </div>
  );
};

export default DnDGame;
