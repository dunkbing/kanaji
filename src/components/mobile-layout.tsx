"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Book, GraduationCap, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/language-context";
import translations from "@/translations";
import Footer from "./footer";

type Tab = {
  name: string;
  href: string;
  icon: React.ElementType;
};

interface TabContentProps {
  className?: string;
  tabs: Tab[];
  pathname: string;
}

interface MobileLayoutProps {
  children: React.ReactNode;
}

const TabContent = ({ className, tabs, pathname }: TabContentProps) => {
  const { lang } = useLanguage();
  const t = translations[lang as "en" | "vi"];

  return (
    <div className={cn("flex justify-around w-full", className)}>
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = pathname === `/${lang}${tab.href}`;

        return (
          <Link
            key={tab.href}
            href={`/${lang}${tab.href}`}
            className={cn(
              "flex flex-col items-center gap-1 p-2 rounded-lg transition-colors",
              "md:px-4 md:py-2 md:flex-row md:gap-2",
              isActive
                ? "text-primary-foreground bg-primary"
                : "text-muted-foreground hover:text-primary hover:bg-primary/10",
            )}
          >
            <Icon className="h-5 w-5" />
            <span className="text-xs md:text-sm capitalize">{t[tab.name]}</span>
          </Link>
        );
      })}
    </div>
  );
};

const MobileLayout = ({ children }: MobileLayoutProps) => {
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();

  const tabs: Tab[] = [
    { name: "intro", href: "/", icon: Home },
    { name: "kana", href: "/kana", icon: Book },
    { name: "study", href: "/study", icon: GraduationCap },
    { name: "minnaVocab", href: "/minna-vocab", icon: BookOpen },
  ];

  const alternativeLang = lang === "en" ? "vi" : "en";
  const langLabel = lang === "en" ? "Tiếng Việt" : "English";

  return (
    <div className="min-h-screen flex flex-col bg-background japanese-pattern">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex h-16 border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container max-w-screen-lg mx-auto px-4 flex items-center justify-between">
          <TabContent
            className="justify-start gap-4"
            tabs={tabs}
            pathname={pathname}
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLang(alternativeLang)}
            className="font-japanese"
          >
            {langLabel}
          </Button>
        </div>
      </nav>

      <main className="flex-1 overflow-y-auto h-[calc(100vh-8rem)] md:h-auto md:overflow-visible">
        {children}
      </main>

      <Footer />

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50 border-t md:hidden z-50 h-16">
        <div className="grid grid-cols-5 items-center h-full px-4">
          <TabContent className="col-span-4" tabs={tabs} pathname={pathname} />
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLang(alternativeLang)}
            className="col-span-1 font-japanese"
          >
            {langLabel}
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default MobileLayout;
