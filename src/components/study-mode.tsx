"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { hiraganaData, katakanaData } from "@/data/kana-data";
import translations from "@/translations";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/language-context";

export function StudyMode() {
  const { lang } = useLanguage();
  const [characters, setCharacters] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [shake, setShake] = useState(false);

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
      setScore((prevScore) => prevScore + 1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % characters.length);
      setInput("");
      setShowAnswer(false);
    } else if (value.length === getCurrentRomaji().length) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{t.study}</CardTitle>
      </CardHeader>
      <CardContent>
        {characters.length > 0 ? (
          <>
            <div className="text-center mb-4">
              <span className="text-6xl font-bold">
                {characters[currentIndex]}
              </span>
            </div>
            <div className="mb-4">
              <Input
                type="text"
                placeholder={t.enterRomaji}
                value={input}
                onChange={handleInputChange}
                className={cn(shake && "animate-shake")}
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <Button variant="outline" onClick={handleShowAnswer}>
                {t.showAnswer}
              </Button>
              <div>
                {t.score}: {score}/{characters.length}
              </div>
            </div>
            {showAnswer && (
              <div className="text-center">
                <span className="font-bold">{getCurrentRomaji()}</span>
              </div>
            )}
          </>
        ) : (
          <div className="text-center">{t.noCharactersSelected}</div>
        )}
      </CardContent>
    </Card>
  );
}
