// src/app/[lang]/minna-vocab/[lesson]/study/page.tsx
import { VocabStudy } from "@/components/vocab-study";
import { vocabLessons } from "@/data/vocab-data";
import { notFound } from "next/navigation";

interface PageParams {
  params: Promise<{
    lang: string;
    lesson: string;
  }>;
}

export default async function MinnaVocabStudyPage({ params }: PageParams) {
  const { lang, lesson } = await params;

  const lessonData = vocabLessons.find((l) => l.id === lesson);
  if (!lessonData) {
    notFound();
  }

  return (
    <div className="container max-w-screen-sm mx-auto py-6">
      <VocabStudy lessonData={lessonData} lang={lang} />
    </div>
  );
}
