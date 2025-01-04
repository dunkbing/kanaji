import { NavTabs } from "@/components/nav-tabs"
import { KanaGrid } from "@/components/kana-grid"
import { katakanaData } from "@/data/kana-data"

export default async function KatakanaPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params;

  return (
    <div>
      <NavTabs lang={lang} />
      <div className="container max-w-screen-lg mx-auto py-6">
        <KanaGrid lang={lang} type="katakana" data={katakanaData} />
      </div>
    </div>
  )
}
