"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import translations from "@/translations";
import { cn } from "@/lib/utils";
import { ArrowLeft, Book } from "lucide-react";
import Link from "next/link";
import { VocabWord, VocabLesson } from "@/types/vocab";

interface VocabStudyProps {
  lessonData: VocabLesson;
  lang: string;
}

export function VocabStudy({ lessonData, lang }: VocabStudyProps) {
  const t = translations[lang as "en" | "vi"];
  const [words, setWords] = useState<VocabWord[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const shuffled = [...lessonData.words].sort(() => Math.random() - 0.5);
    setWords(shuffled);
  }, [lessonData.words]);

  const currentWord = words[currentIndex];

  const isCorrect = (input: string): boolean => {
    if (!currentWord || !input) return false;

    const normalizedInput = input.toLowerCase().trim();
    return (
      normalizedInput === currentWord.romaji.toLowerCase() || // Match romaji
      normalizedInput === currentWord.kana || // Match hiragana/katakana
      (!!currentWord.kanji && normalizedInput === currentWord.kanji) // Match kanji if exists
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    if (isCorrect(value)) {
      setScore((prev) => prev + 1);

      if (currentIndex + 1 >= words.length) {
        setWords([...words].sort(() => Math.random() - 0.5));
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prev) => prev + 1);
      }

      setInput("");
      setShowAnswer(false);
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  if (!currentWord) return null;

  return (
    <Card className="w-full">
      <CardHeader className="flex-row justify-between items-center">
        <CardTitle className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild className="h-8 w-8">
            <Link href={`/${lang}/minna-vocab/${lessonData.id}`}>
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <Book className="h-5 w-5" />
            <span>
              {t.lesson} {lessonData.number}
            </span>
          </div>
        </CardTitle>
        <div className="text-sm text-muted-foreground">
          {t.score}: {score}/{words.length}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="text-center space-y-4">
          <div className="text-xl font-medium">
            {currentWord.meaning[lang as "en" | "vi"]}
          </div>
          <div className="text-sm text-muted-foreground">{t.typeAnyForm}</div>
        </div>

        <div className="space-y-4">
          <Input
            type="text"
            placeholder={t.enterJapanese}
            value={input}
            onChange={handleInputChange}
            className={cn(shake && "animate-shake", "font-japanese")}
            autoComplete="off"
            lang="ja"
          />

          <div className="flex justify-between items-center">
            <Button variant="outline" onClick={handleShowAnswer}>
              {t.showAnswer}
            </Button>
          </div>

          {showAnswer && (
            <div className="space-y-2 text-center p-4 bg-muted/50 rounded-lg">
              {currentWord.kanji && (
                <div className="text-xl font-bold">{currentWord.kanji}</div>
              )}
              <div className="text-lg">{currentWord.kana}</div>
              <div className="text-sm text-muted-foreground">
                {currentWord.romaji}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
