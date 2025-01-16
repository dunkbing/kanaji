// src/app/[lang]/minna-vocab/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { vocabLessons } from "@/data/vocab-data";
import translations from "@/translations";
import Link from "next/link";
import { Book } from "lucide-react";

export default async function MinnaVocabPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = translations[lang as "en" | "vi"];

  return (
    <div className="container max-w-screen-sm mx-auto py-6 space-y-4">
      <Card className="bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Book className="h-5 w-5" />
            {t.minnaVocabTitle}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            {t.minnaVocabDescription}
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
                    {t.lesson} {lesson.number}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {lesson.title[lang as "en" | "vi"]}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {lesson.words.length} {t.words}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/${lang}/minna-vocab/${lesson.id}`}>
                      {t.viewDetails}
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={`/${lang}/minna-vocab/${lesson.id}/study`}>
                      {t.study}
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
