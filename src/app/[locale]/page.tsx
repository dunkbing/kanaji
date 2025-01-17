import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type Locale } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("home");

  return (
    <div>
      <div className="container max-w-screen-lg mx-auto py-6">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl text-primary-foreground">あ</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Kanaji</h1>
                <p className="text-sm text-muted-foreground">
                  {t("learnHiraganaKatakana")}
                </p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>{t("introDescription")}</p>
            <p>
              <Button variant="default" size="sm" asChild>
                <Link href={`/${locale}/study`}>STUDY</Link>
              </Button>{" "}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
