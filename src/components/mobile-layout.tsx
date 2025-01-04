"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Home, Book, GraduationCap } from 'lucide-react';
import { Button } from './ui/button';

type Tab = {
  name: string;
  href: string;
  icon: React.ElementType;
};

interface TabContentProps {
  className?: string;
  tabs: Tab[];
  lang: string;
  pathname: string;
}

interface MobileLayoutProps {
  children: React.ReactNode;
  lang: string;
}

const TabContent = ({ className, tabs, lang, pathname }: TabContentProps) => (
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
          <span className="text-xs md:text-sm capitalize">{tab.name}</span>
        </Link>
      );
    })}
  </div>
);

const MobileLayout = ({ children, lang }: MobileLayoutProps) => {
  const pathname = usePathname();

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
          <TabContent className="justify-start gap-4" tabs={tabs} lang={lang} pathname={pathname} />
          <Button
            variant="outline"
            size="sm"
            asChild
          >
            <Link href={`/${alternativeLang}${pathname.substring(3)}`}>
              {langLabel}
            </Link>
          </Button>
        </div>
      </nav>

      <main className="flex-1 pb-16 md:pb-0">
        <div className="container max-w-screen-lg mx-auto">
          {children}
        </div>
      </main>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t md:hidden">
        <div className="h-16 grid grid-cols-5 items-center px-4">
          <TabContent className="col-span-4" tabs={tabs} lang={lang} pathname={pathname} />
          <Button
            variant="outline"
            size="sm"
            asChild
            className="col-span-1"
          >
            <Link href={`/${alternativeLang}${pathname.substring(3)}`}>
              {langLabel}
            </Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default MobileLayout;
