import { NavTabs } from "@/components/nav-tabs"
import { KanaGrid } from "@/components/kana-grid"
import { katakanaData } from "@/data/kana-data"

export default function KatakanaPage() {
  return (
    <div>
      <NavTabs />
      <div className="container max-w-screen-lg mx-auto py-6">
        <KanaGrid type="katakana" data={katakanaData} />
      </div>
    </div>
  )
}
