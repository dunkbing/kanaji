import { NavTabs } from "@/components/nav-tabs"
import { KanaGrid } from "@/components/kana-grid"
import { hiraganaData } from "@/data/kana-data"

export default function HiraganaPage() {
  return (
    <div>
      <NavTabs />
      <div className="container max-w-screen-lg mx-auto py-6">
        <KanaGrid type="hiragana" data={hiraganaData} />
      </div>
    </div>
  )
}
