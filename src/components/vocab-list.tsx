"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { VocabWord, VocabLesson } from "@/types/vocab";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

interface VocabListProps {
  lessonData: VocabLesson;
}

export function VocabList({ lessonData }: VocabListProps) {
  const t = useTranslations("minna-vocab");
  const { locale } = useParams<{ locale: string }>();
  const [selectedWords, setSelectedWords] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(`selectedWords_${lessonData.id}`);
    if (saved) {
      setSelectedWords(JSON.parse(saved));
    }
  }, [lessonData.id]);

  const toggleWord = (word: VocabWord) => {
    setSelectedWords((prev) => {
      const wordKey = `${word.kanji}_${word.kana}`;
      const newSelected = prev.includes(wordKey)
        ? prev.filter((w) => w !== wordKey)
        : [...prev, wordKey];
      localStorage.setItem(
        `selectedWords_${lessonData.id}`,
        JSON.stringify(newSelected)
      );
      return newSelected;
    });
  };

  const toggleAll = () => {
    setSelectedWords((prev) => {
      const allWordKeys = lessonData.words.map((w) => `${w.kanji}_${w.kana}`);
      const newSelected = prev.length === allWordKeys.length ? [] : allWordKeys;
      localStorage.setItem(
        `selectedWords_${lessonData.id}`,
        JSON.stringify(newSelected)
      );
      return newSelected;
    });
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="h-8 w-8"
          >
            <Link href={`/${locale}/minna-vocab`}>
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          {t("lesson")} {lessonData.number}: {lessonData.title[locale as "en" | "vi"]}
        </CardTitle>
        <div className="flex gap-2">
          <Button variant="outline" onClick={toggleAll}>
            {selectedWords.length === lessonData.words.length ? "Unselect All" : "Select All"}
          </Button>
          <Button asChild disabled={selectedWords.length === 0}>
            <Link href={`/${locale}/minna-vocab/${lessonData.id}/study`}>
              {t("startStudy")}
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="divide-y">
          {lessonData.words.map((word, index) => {
            const wordKey = `${word.kanji}_${word.kana}`;
            return (
              <div
                key={index}
                className="py-4 first:pt-0 last:pb-0 flex justify-between items-start"
              >
                <div className="flex items-start gap-4">
                  <Checkbox
                    id={`word-${index}`}
                    checked={selectedWords.includes(wordKey)}
                    onCheckedChange={() => toggleWord(word)}
                  />
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold">
                        {word.kanji}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {word.kana}
                      </span>
                    </div>
                    <div className="text-sm">
                      {word.meaning[locale as "en" | "vi"]}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {word.partOfSpeech}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {word.romaji}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
