"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { KanaType } from "@/types/kana";
import { KanaSet } from "@/data/kana-data";
import translations from "@/translations";

interface KanaGridProps {
  type: KanaType;
  data: KanaSet;
  lang: string;
}

export function KanaGrid({ type, data, lang }: KanaGridProps) {
  const router = useRouter();
  const [isCompound, setIsCompound] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState<Set<number>>(
    new Set(),
  );
  const t = translations[lang as "en" | "vi"];

  // Load saved selection from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`${type}-selected-columns`);
    if (saved) {
      setSelectedColumns(new Set(JSON.parse(saved)));
    }
  }, [type]);

  // Save selection to localStorage
  useEffect(() => {
    localStorage.setItem(
      `${type}-selected-columns`,
      JSON.stringify(Array.from(selectedColumns)),
    );
  }, [selectedColumns, type]);

  const currentColumns = isCompound ? data.compound : data.single;

  const handleColumnSelect = (columnIndex: number) => {
    const newSelected = new Set(selectedColumns);
    if (newSelected.has(columnIndex)) {
      newSelected.delete(columnIndex);
    } else {
      newSelected.add(columnIndex);
    }
    setSelectedColumns(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedColumns.size === currentColumns.length) {
      setSelectedColumns(new Set());
    } else {
      setSelectedColumns(
        new Set(Array.from({ length: currentColumns.length }, (_, i) => i)),
      );
    }
  };

  const handleStudy = () => {
    if (selectedColumns.size > 0) {
      const selectedChars = Array.from(selectedColumns).flatMap((index) =>
        currentColumns[index].characters.map((char) => char.kana),
      );
      sessionStorage.setItem("studyChars", JSON.stringify(selectedChars));
      router.push(`/${lang}/study`);
    }
  };

  const handlePrevious = () => {
    setIsCompound(false);
    setSelectedColumns(new Set());
  };

  const handleNext = () => {
    setIsCompound(true);
    setSelectedColumns(new Set());
  };

  if (!t) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-2xl text-primary-foreground">
                {type === "hiragana" ? "あ" : "ア"}
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold capitalize">{type}</h1>
              <p className="text-sm text-muted-foreground">
                {isCompound ? "Compound" : "Single"} Characters
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={!isCompound}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              onClick={handleNext}
              disabled={isCompound}
            >
              Next
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="overflow-x-auto">
            <div className="inline-flex gap-4 min-w-full pb-4">
              {currentColumns.map((column, columnIndex) => (
                <div key={columnIndex} className="space-y-4">
                  <div className="flex justify-center">
                    <Checkbox
                      id={`col-${columnIndex}`}
                      checked={selectedColumns.has(columnIndex)}
                      onCheckedChange={() => handleColumnSelect(columnIndex)}
                    />
                  </div>
                  {column.characters.map(({ kana, romaji }) => (
                    <div
                      key={kana}
                      className="text-center space-y-1 cursor-pointer"
                      onClick={() => handleColumnSelect(columnIndex)}
                    >
                      <div className="text-2xl">{kana}</div>
                      <div className="text-xs text-muted-foreground">
                        {romaji}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="space-x-2">
              <Button
                variant="outline"
                onClick={() => setSelectedColumns(new Set())}
              >
                UNCHECK ALL
              </Button>
              <Button variant="outline" onClick={handleSelectAll}>
                SELECT ALL
              </Button>
            </div>
            <Button onClick={handleStudy} disabled={selectedColumns.size === 0}>
              STUDY
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
