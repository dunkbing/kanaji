import { NavTabs } from "@/components/nav-tabs";
import { StudyMode } from "@/components/study-mode";
import { generatePageMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return generatePageMetadata(lang, "Study");
}

export default async function StudyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div>
      <NavTabs lang={lang} />
      <div className="container max-w-screen-lg mx-auto py-6">
        <StudyMode lang={lang} />
      </div>
    </div>
  );
}
