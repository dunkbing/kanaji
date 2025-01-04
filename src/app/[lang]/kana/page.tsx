import { KanaGrid } from "@/components/kana-grid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { hiraganaData, katakanaData } from "@/data/kana-data";
import { generatePageMetadata } from "@/lib/metadata";
import translations from "@/translations";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return generatePageMetadata(lang, "Kana");
}

export default async function KanaPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = translations[lang];

  return (
    <div className="container max-w-screen-sm mx-auto py-6 space-y-6">
      <Card className="bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-lg">{t.howToStudy}</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li>{t.checkboxInstruction}</li>
            <li>{t.switchModeInstruction}</li>
            <li>{t.startStudyInstruction}</li>
          </ol>
        </CardContent>
      </Card>
      <KanaGrid type="hiragana" data={hiraganaData} />
      <KanaGrid type="katakana" data={katakanaData} />
    </div>
  );
}
