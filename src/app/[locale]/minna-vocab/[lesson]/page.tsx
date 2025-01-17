import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { type VocabLesson } from "@/types/vocab";
import { getTranslations } from "next-intl/server";
import { Locale } from "@/i18n/routing";

export default async function MinnaVocabLessonPage({
  params,
}: {
  params: Promise<{ locale: Locale; lesson: string }>;
}) {
  const { locale, lesson } = await params;
  const t = await getTranslations({
    locale, namespace: "minna-vocab"
  });

  const lessonData: VocabLesson = await import(`@/data/${lesson}.json`);
  if (!lessonData) {
    notFound();
  }

  return (
    <div className="container max-w-screen-sm mx-auto py-6 space-y-4">
      <Card className="bg-card/50 backdrop-blur">
        <CardHeader>
          <div className="flex items-center justify-between">
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
              {t("lesson")} {lessonData.number}: {lessonData.title[locale]}
            </CardTitle>
            <Button asChild>
              <Link href={`/${locale}/minna-vocab/${lesson}/study`}>
                {t("startStudy")}
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="divide-y">
            {lessonData.words.map((word, index) => (
              <div
                key={index}
                className="py-4 first:pt-0 last:pb-0 flex justify-between items-start"
              >
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
                    {word.meaning[locale]}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {word.partOfSpeech}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {word.romaji}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
