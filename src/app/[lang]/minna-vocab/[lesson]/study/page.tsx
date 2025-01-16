import { VocabStudy } from "@/components/vocab-study";
import { type VocabLesson } from "@/types/vocab";

interface PageParams {
  params: Promise<{
    lang: string;
    lesson: string;
  }>;
}

export default async function MinnaVocabStudyPage({ params }: PageParams) {
  const { lang, lesson } = await params;

  const lessonModule = await import(`@/data/${lesson}.json`);

  const lessonData: VocabLesson = {
    id: lessonModule.id,
    number: lessonModule.number,
    title: lessonModule.title,
    words: lessonModule.words,
  };

  return (
    <div className="container max-w-screen-sm mx-auto py-6">
      <VocabStudy lessonData={lessonData} lang={lang} />
    </div>
  );
}
