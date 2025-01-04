import MobileLayout from "@/components/mobile-layout";
import { LanguageProvider } from "@/contexts/language-context";
import { generatePageMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return generatePageMetadata(lang, "Home");
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <LanguageProvider lang={lang}>
      <MobileLayout>{children}</MobileLayout>
    </LanguageProvider>
  );
}
