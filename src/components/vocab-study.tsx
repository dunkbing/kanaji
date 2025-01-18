"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ArrowLeft, Book } from "lucide-react";
import Link from "next/link";
import { VocabWord, VocabLesson } from "@/types/vocab";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

interface VocabStudyProps {
  lessonData: VocabLesson;
}

export function VocabStudy({ lessonData }: VocabStudyProps) {
  const t = useTranslations("minna-vocab");
  const t2 = useTranslations("minna-vocab.study");
  const [words, setWords] = useState<VocabWord[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [shake, setShake] = useState(false);
  const { locale } = useParams<{ locale: string }>();

  useEffect(() => {
    const shuffled = [...lessonData.words].sort(() => Math.random() - 0.5);
    setWords(shuffled);
  }, [lessonData.words]);

  const currentWord = words[currentIndex];

  const isCorrect = (input: string): boolean => {
    if (!currentWord || !input) return false;

    const normalizedInput = input.toLowerCase().trim();
    return (
      normalizedInput === currentWord.romaji.toLowerCase() ||
      normalizedInput === currentWord.kana ||
      (!!currentWord.kanji && normalizedInput === currentWord.kanji)
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
            <Link href={`/${locale}/minna-vocab/${lessonData.id}`}>
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <Book className="h-5 w-5" />
            <span>
              {t("lesson")} {lessonData.number}
            </span>
          </div>
        </CardTitle>
        <div className="text-sm text-muted-foreground">
          {t("score")}: {score}/{words.length}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="text-center space-y-3">
          <div className="text-xl font-medium">
            {currentWord.meaning[locale as "en" | "vi"]}
          </div>
          <div className="text-xl">{currentWord.emoji}</div>
          <div className="text-sm text-muted-foreground">
            {t2("typeAnyForm")}
          </div>
        </div>

        <div className="space-y-4">
          <Input
            type="text"
            placeholder={t2("enterJapanese")}
            value={input}
            onChange={handleInputChange}
            className={cn(shake && "animate-shake", "font-japanese")}
            autoComplete="off"
            lang="ja"
          />

          <div className="flex justify-between items-center">
            <Button variant="outline" onClick={handleShowAnswer}>
              {t2("showAnswer")}
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
