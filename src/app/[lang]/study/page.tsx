import { NavTabs } from "@/components/nav-tabs";
import { StudyMode } from "@/components/study-mode";

export default function StudyPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <div>
      <NavTabs lang={lang} />
      <div className="container max-w-screen-lg mx-auto py-6">
        <StudyMode lang={lang} />
      </div>
    </div>
  );
}
