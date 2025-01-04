import { KanaGrid } from "@/components/kana-grid";
import { hiraganaData, katakanaData } from "@/data/kana-data";
import { generatePageMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return generatePageMetadata(lang, "Kana");
}

export default function KanaPage() {
  return (
    <div>
      <div className="container max-w-screen-lg mx-auto py-6 space-y-6">
        <KanaGrid type="hiragana" data={hiraganaData} />
        <KanaGrid type="katakana" data={katakanaData} />
      </div>
    </div>
  );
}
