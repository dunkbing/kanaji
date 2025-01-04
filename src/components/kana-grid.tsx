"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { KanaType } from "@/types/kana";
import { KanaSet } from "@/data/kana-data";
import translations from "@/translations";
import { useLanguage } from "@/contexts/language-context";

interface KanaGridProps {
  type: KanaType;
  data: KanaSet;
}

export function KanaGrid({ type, data }: KanaGridProps) {
  const { lang } = useLanguage();
  const router = useRouter();
  const [selectedColumns, setSelectedColumns] = useState<number[]>([]);
  const [showCompound, setShowCompound] = useState(false);
  const t = translations[lang as "en" | "vi"];

  useEffect(() => {
    const storedColumns = sessionStorage.getItem(`selected${type}Columns`);
    if (storedColumns) {
      setSelectedColumns(JSON.parse(storedColumns));
    }
  }, [type]);

  useEffect(() => {
    sessionStorage.setItem(
      `selected${type}Columns`,
      JSON.stringify(selectedColumns),
    );
  }, [selectedColumns, type]);

  const handleColumnToggle = (columnIndex: number) => {
    setSelectedColumns((prev) =>
      prev.includes(columnIndex)
        ? prev.filter((col) => col !== columnIndex)
        : [...prev, columnIndex],
    );
  };

  const handleUncheckAll = () => {
    setSelectedColumns([]);
  };

  const handleStudy = () => {
    const selectedChars = selectedColumns.flatMap((colIndex) =>
      data[showCompound ? "compound" : "single"][colIndex].characters.map(
        (char) => char.kana,
      ),
    );
    sessionStorage.setItem("studyChars", JSON.stringify(selectedChars));
    router.push(`/${lang}/study`);
  };

  const toggleCompound = () => {
    setShowCompound(!showCompound);
    setSelectedColumns([]);
  };

  const currentColumns = data[showCompound ? "compound" : "single"];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{t[type]}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-5 gap-4 mb-4">
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
        <div className="flex justify-between mt-4">
          <Button variant="outline" onClick={handleUncheckAll}>
            {t.uncheckAll}
          </Button>
          <Button variant="outline" onClick={toggleCompound}>
            {showCompound ? t.switchToSingle : t.switchToCompound}
          </Button>
          <Button onClick={handleStudy} disabled={selectedColumns.length === 0}>
            {t.startStudy}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
