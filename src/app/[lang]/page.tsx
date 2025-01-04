"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import translations from "@/translations";

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang as "en" | "vi"];

  return (
    <div>
      <div className="container max-w-screen-lg mx-auto py-6">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl text-primary-foreground">あ</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Kanaji</h1>
                <p className="text-sm text-muted-foreground">
                  {t.learnHiraganaKatakana}
                </p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              {t.introDescription}
            </p>
            <p>
              {t.introDescription2}{" "}
              <Button variant="default" size="sm" asChild>
                <Link href={`/${lang}/study`}>STUDY</Link>
              </Button>{" "}
              {t.introDescription3}
            </p>
            <p className="font-medium">{t.thatsIt}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
