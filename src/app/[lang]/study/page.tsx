import { NavTabs } from "@/components/nav-tabs";
import { StudyMode } from "@/components/study-mode";

export default async function StudyPage({
  params,
}: {
  params: Promise<{ lang: string }>
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
