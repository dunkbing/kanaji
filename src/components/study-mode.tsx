"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { hiraganaData, katakanaData } from "@/data/kana-data";
import translations from "@/translations";

export function StudyMode({ lang }: { lang: string }) {
  const [characters, setCharacters] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const t = translations[lang as "en" | "vi"];

  const characterMap = useMemo(() => {
    const map = new Map<string, string>();
    const allData = [
      ...hiraganaData.single,
      ...hiraganaData.compound,
      ...katakanaData.single,
      ...katakanaData.compound,
    ];
    for (const column of allData) {
      column.characters.forEach((char) => {
        map.set(char.kana, char.romaji);
      });
    }
    return map;
  }, []);

  useEffect(() => {
    const savedChars = sessionStorage.getItem("studyChars");
    if (savedChars) {
      const chars = JSON.parse(savedChars);
      setCharacters(chars);
    }
  }, []);

  const getCurrentRomaji = useCallback(() => {
    const currentChar = characters[currentIndex];
    return characterMap.get(currentChar) || "";
  }, [characters, currentIndex, characterMap]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setInput(value);

    if (value === getCurrentRomaji()) {
      setScore((s) => s + 1);
      setInput("");
      setCurrentIndex((i) => (i + 1) % characters.length);
      setShowAnswer(false);
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  if (!t) return null;

  if (characters.length === 0) {
    return (
      <Card>
        <CardContent className="py-6">
          <p className="text-center">
            Please select some characters to study first.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">
          Study Mode
          <p className="text-sm font-normal text-muted-foreground mt-1">
            {score}/{characters.length} Characters
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <div className="text-8xl mb-4">{characters[currentIndex]}</div>
          <div className="text-sm text-muted-foreground">
            Type the rōmaji equivalent
          </div>
        </div>
        <div className="max-w-xs mx-auto space-y-4">
          <Input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type here..."
            className="text-center text-lg"
            autoComplete="off"
          />
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={handleShowAnswer}
              className="w-full"
            >
              {showAnswer ? getCurrentRomaji() : "Show Answer"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
