"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Home, Book, GraduationCap } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '@/contexts/language-context';
import translations from '@/translations';

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
              'flex items-center gap-2',
              'md:px-4 md:py-2 md:hover:bg-accent md:rounded-md',
              isActive
                ? 'text-primary'
                : 'text-muted-foreground hover:text-primary'
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
    { name: 'intro', href: '/', icon: Home },
    { name: 'kana', href: '/kana', icon: Book },
    { name: 'study', href: '/study', icon: GraduationCap }
  ];

  const alternativeLang = lang === 'en' ? 'vi' : 'en';
  const langLabel = lang === 'en' ? 'Tiếng Việt' : 'English';

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex h-14 border-b">
        <div className="container max-w-screen-lg mx-auto px-4 flex items-center justify-between">
          <TabContent className="justify-start gap-4" tabs={tabs} pathname={pathname} />
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLang(alternativeLang)}
          >
            {langLabel}
          </Button>
        </div>
      </nav>

      <main className="flex-1 overflow-y-auto h-[calc(100vh-4rem)] md:h-auto md:overflow-visible">
        <div className="container max-w-screen-lg mx-auto py-6">
          {children}
        </div>
      </main>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t md:hidden z-50 h-16">
        <div className="grid grid-cols-5 items-center h-full px-4">
          <TabContent className="col-span-4" tabs={tabs} pathname={pathname} />
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLang(alternativeLang)}
            className="col-span-1"
          >
            {langLabel}
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default MobileLayout;
