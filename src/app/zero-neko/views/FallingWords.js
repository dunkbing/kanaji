"use client";

import React, { useState, useEffect, useRef } from "react";
import { toRomaji } from "wanakana";
import { Stage, Text, Graphics } from "@pixi/react";
import { TextStyle } from "pixi.js";
import { difficulties } from "@/app/zero-neko/data/constants";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const FallingWords = () => {
  const [words, setWords] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const [selectedDifficulty, setDifficulty] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [inputColor, changeInputColor] = useState("");
  const [score, setScore] = useState(0);
  const [chosenAlphabet, setChosenAlphabet] = useState("hiragana");

  const [game, setGame] = useState();

  //#TODO: Add more interactivity, maybe spawn new words randomly, or also provide the world translation
  //needs polishing overall
  function handleDifficultyChange(id) {
    setDifficulty(id);
    loadGame(id);
    setCurrentText("");
    changeInputColor("");
    setIsStarted(true);
    setScore(0);
  }

  useEffect(() => {
    function handleResize() {
      loadGame();
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function loadGame(difficultyId, alphabet) {
    difficultyId = Number.isFinite(difficultyId)
      ? difficultyId
      : selectedDifficulty;
    alphabet = alphabet ? alphabet : chosenAlphabet;
    if (typeof window === "undefined") return;

    const game = new Game(difficulties[difficultyId], alphabet);
    let words = [game.getRandomWord()];
    setGame(game);
    setWords(words);
    setDifficulty(difficultyId);
  }

  const tick = () => {
    if (!isStarted) return;
    let w = words.map((word) => {
      word.y += game.tick * game.speed;
      return word;
    });
    words.forEach((word) => {
      if (word.y < game.height - 5) return;
      setCurrentText("You lost!, set difficulty to start game again..");
      changeInputColor("#dc2626");
      setIsStarted(false);
    });
    setWords(w);
  };
  function handleAlphabetChange(alphabet) {
    setChosenAlphabet(alphabet);
    loadGame(selectedDifficulty, alphabet);
  }
  function handleInput(e) {
    let value = e.target.value;
    setCurrentText(value);
    if (!value.endsWith(" ") || words.length === 0) return;
    value = value.trim();
    let correctWord = words.findIndex(
      (word) => word.text === value || word.romanization === value
    );
    if (correctWord > -1) {
      setCurrentText("");
      changeInputColor("white");
      setScore(score + words[correctWord].text.length);
      words.splice(correctWord, 1, game.getRandomWord()); //removes word and adds a new one
      setWords(words);
    } else {
      changeInputColor("#dc2626");
      console.log("wrong word");
    }
  }
  useInterval(tick, 50);

  return (
    <div className="flex flex-col items-center space-y-2">
      <h1 className="text-lg font-semibold">Select a level</h1>
      <div className="flex flex-row gap-2 p-2">
        {difficulties.map((difficulty) => (
          <Button
            key={difficulty.id}
            className={`${
              difficulty.id === selectedDifficulty
                ? "bg-primary"
                : "bg-gray-200"
            } cursor-pointer rounded-lg bg-opacity-80 p-2 px-4 hover:bg-opacity-70`}
            onClick={() => handleDifficultyChange(difficulty.id)}
          >
            {difficulty.name}
          </Button>
        ))}
        <Select defaultValue="hiragana" onValueChange={handleAlphabetChange}>
          <SelectTrigger className="w-fit">
            <SelectValue placeholder="Select kana" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hiragana">Hiragana</SelectItem>
            <SelectItem value="katakana">Katakana</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex-col space-y-2 ">
        {!!game && typeof document !== "undefined" && (
          <div className="" style={{ overflow: "hidden" }}>
            <Stage
              width={game.width}
              height={game.height}
              options={{
                autoDensity: true,
                transparent: true,
                background: 0x1099bb,
              }}
            >
              <Text
                text={`Score: ${score}`}
                x={10}
                y={10}
                style={
                  new TextStyle({
                    align: "center",
                    fill: 0x73c96b,
                    fontSize: 20,
                  })
                }
              />

              {words.map((word) => (
                <Text
                  key={word.id}
                  text={word.text}
                  x={word.x}
                  y={word.y}
                  style={
                    new TextStyle({
                      align: "center",
                      fill: 0xf76d70,
                    })
                  }
                />
              ))}

              <Graphics
                x={10}
                y={game.height - 10}
                draw={(g) => {
                  g.beginFill(0xdc2626);
                  g.drawRect(0, 0, game.width - 20, 4);
                  g.endFill();
                }}
              />
            </Stage>

            <Input
              placeholder="Type here, space to check"
              className="w-full"
              style={{ backgroundColor: inputColor }}
              onChange={(e) => handleInput(e)}
              value={currentText}
            />
          </div>
        )}
      </div>
    </div>
  );
};

class Game {
  constructor(difficulty, alphabet) {
    debugger;
    this.width = window.innerWidth / 2;
    this.height = window.innerWidth / 4;
    if (window.innerHeight > window.innerWidth) {
      this.height = window.innerHeight / 2;
      this.width = window.innerWidth / 1.1;
    }
    this.tick = 0.2;
    this.speed = difficulty.speed;
    this.words = difficulty.words[alphabet].map((word) => {
      return new Word(word, this.width);
    });
  }

  getRandomWord() {
    let word = this.words[Math.floor(Math.random() * this.words.length)];
    word.id = Math.floor(Math.random() * 1000000);
    return JSON.parse(JSON.stringify(word)); //lose reference
  }
}

class Word {
  constructor(wordData, width) {
    this.text = wordData.expression;
    this.romanization = toRomaji(wordData.expression);
    this.meaning = wordData.meaning;
    this.x = (Math.random() * width) / 2 - width / 4 + width / 3;
    this.y = 0;
  }
}

function useInterval(callback, delay) {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    if (delay === null) {
      return;
    }

    const id = setInterval(() => savedCallback.current(), delay);

    return () => clearInterval(id);
  }, [delay]);
}

export default FallingWords;
