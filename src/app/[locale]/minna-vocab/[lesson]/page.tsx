import { VocabList } from "@/components/vocab-list";
import { notFound } from "next/navigation";
import { type VocabLesson } from "@/types/vocab";
import { Locale } from "@/i18n/routing";

export default async function MinnaVocabLessonPage({
  params,
}: {
  params: Promise<{ locale: Locale; lesson: string }>;
}) {
  const { lesson } = await params;

  const lessonDataModule = await import(`@/data/${lesson}.json`);
  const lessonData: VocabLesson = lessonDataModule.default;
  if (!lessonData) {
    notFound();
  }

  return (
    <div className="container max-w-screen-sm mx-auto py-6">
      <VocabList lessonData={lessonData} />
    </div>
  );
}
