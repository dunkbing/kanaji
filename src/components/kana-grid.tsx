"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useParams, useRouter } from "next/navigation";
import { KanaType } from "@/types/kana";
import { KanaSet } from "@/data/kana-data";
import { useTranslations } from "next-intl";

interface KanaGridProps {
  type: KanaType;
  data: KanaSet;
}

export function KanaGrid({ type, data }: KanaGridProps) {
  const { locale } = useParams<{ locale: string }>();
  const router = useRouter();
  const [selectedColumns, setSelectedColumns] = useState<number[]>([]);
  const [showCompound, setShowCompound] = useState(false);
  const t = useTranslations("kana");

  // Load selected columns and compound state from localStorage
  useEffect(() => {
    const storedColumns = localStorage.getItem(`selected${type}Columns`);
    const storedShowCompound = localStorage.getItem(`show${type}Compound`);

    if (storedColumns) {
      try {
        const parsed = JSON.parse(storedColumns);
        if (Array.isArray(parsed)) {
          setSelectedColumns(parsed);
        }
      } catch (e) {
        console.error("Error parsing stored columns:", e);
      }
    }

    if (storedShowCompound) {
      try {
        setShowCompound(JSON.parse(storedShowCompound));
      } catch (e) {
        console.error("Error parsing stored compound state:", e);
      }
    }
  }, [type]);

  const handleColumnToggle = (columnIndex: number) => {
    setSelectedColumns((prev) => {
      const newSelected = prev.includes(columnIndex)
        ? prev.filter((col) => col !== columnIndex)
        : [...prev, columnIndex];
      localStorage.setItem(
        `selected${type}Columns`,
        JSON.stringify(newSelected),
      );
      saveSelectedChars(newSelected);
      return newSelected;
    });
  };

  const handleUncheckAll = () => {
    setSelectedColumns([]);
    localStorage.setItem(`selected${type}Columns`, JSON.stringify([]));
  };

  const saveSelectedChars = (selectedColumns: number[]) => {
    const selectedChars = selectedColumns.flatMap((colIndex) =>
      data[showCompound ? "compound" : "single"][colIndex].characters.map(
        (char) => char.kana,
      ),
    );
    localStorage.setItem("studyChars", JSON.stringify(selectedChars));
  };

  const handleStudy = () => {
    saveSelectedChars(selectedColumns);
    router.push(`/${locale}/kana/study`);
  };

  const toggleCompound = () => {
    setShowCompound(!showCompound);
    localStorage.setItem(`show${type}Compound`, JSON.stringify(showCompound));
    setSelectedColumns([]);
  };

  const currentColumns = data[showCompound ? "compound" : "single"];

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="capitalize">{type}</CardTitle>
        <Button
          onClick={handleStudy}
          disabled={selectedColumns.length === 0}
          className="w-auto"
        >
          {t("startStudy")}
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-5 gap-2 md:gap-4 mb-4">
          {currentColumns.map((column, columnIndex) => (
            <div key={column.name} className="flex flex-col items-center">
              <Checkbox
                id={`${type}-${column.name}`}
                checked={selectedColumns.includes(columnIndex)}
                onCheckedChange={() => handleColumnToggle(columnIndex)}
                className="mb-2"
              />
              <label
                htmlFor={`${type}-${column.name}`}
                className="text-sm font-medium mb-2 text-center"
              >
                {column.name}
              </label>
              <div className="grid gap-2">
                {column.characters.map((char) => (
                  <div key={char.kana} className="text-center">
                    <div className="text-2xl">{char.kana}</div>
                    <div className="text-xs text-muted-foreground">
                      {char.romaji}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            onClick={handleUncheckAll}
            className="w-full"
          >
            {t("uncheckAll")}
          </Button>
          <Button variant="outline" onClick={toggleCompound} className="w-full">
            {showCompound ? t("switchToSingle") : t("switchToCompound")}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
