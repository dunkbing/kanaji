import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Book } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { type Locale } from "@/i18n/routing";
import { VocabLesson } from "@/types/vocab";

const pageName = "minna-vocab";

export default async function MinnaVocabPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: pageName,
  });
  const vocabLessons = await Promise.all(
    Array.from({ length: 2 }, (_, i) => i + 1).map(async (i) => {
      const lesson: VocabLesson = (await import(`@/data/lesson_${i}.json`))
        .default;
      return lesson;
    }),
  );

  return (
    <div className="container max-w-screen-sm mx-auto py-6 space-y-4">
      <Card className="bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Book className="h-5 w-5" />
            {t("title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            {t("description")}
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {vocabLessons.map((lesson) => (
          <Card key={lesson.id} className="bg-card/50">
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold">
                    {t("lesson")} {lesson.number}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {lesson.title[locale]}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {lesson.words.length} {t("words")}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/${locale}/minna-vocab/${lesson.id}`}>
                      {t("viewDetails")}
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={`/${locale}/minna-vocab/${lesson.id}/study`}>
                      {t("startStudy")}
                    </Link>
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
