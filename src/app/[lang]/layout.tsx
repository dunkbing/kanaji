import MobileLayout from "@/components/mobile-layout";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return <MobileLayout lang={lang}>{children}</MobileLayout>;
}
