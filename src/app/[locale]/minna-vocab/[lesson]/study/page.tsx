import { VocabStudy } from "@/components/vocab-study";
import { type VocabLesson } from "@/types/vocab";

interface PageParams {
  params: Promise<{
    lesson: string;
  }>;
}

export default async function MinnaVocabStudyPage({ params }: PageParams) {
  const { lesson } = await params;

  const lessonModule = await import(`@/data/${lesson}.json`);

  const lessonData: VocabLesson = lessonModule.default;

  return (
    <div className="container max-w-screen-sm mx-auto py-6">
      <VocabStudy lessonData={lessonData} />
    </div>
  );
}
