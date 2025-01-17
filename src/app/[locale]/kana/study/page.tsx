import { KanaStudyMode } from "@/components/kana-study";
import { generatePageMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return generatePageMetadata(lang, "kana.study");
}

export default async function StudyPage() {
  return (
    <div>
      <div className="container max-w-screen-lg mx-auto py-6">
        <KanaStudyMode />
      </div>
    </div>
  );
}
