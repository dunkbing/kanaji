import { NavTabs } from "@/components/nav-tabs"
import { StudyMode } from "@/components/study-mode"

export default function StudyPage() {
  return (
    <div>
      <NavTabs />
      <div className="container max-w-screen-lg mx-auto py-6">
        <StudyMode />
      </div>
    </div>
  )
}
