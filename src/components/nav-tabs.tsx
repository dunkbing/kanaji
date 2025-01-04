"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import translations from "@/translations";

const tabs = [
  { name: "intro", href: "/" },
  { name: "kana", href: "/kana" },
  { name: "study", href: "/study" },
];

export function NavTabs({ lang }: { lang: string }) {
  const pathname = usePathname();
  const t = translations[lang as "en" | "vi"];

  if (!t) return null;

  return (
    <nav className="border-b">
      <div className="flex h-14 max-w-screen-lg mx-auto items-center justify-between px-4">
        <div className="flex">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={`/${lang}${tab.href}`}
              className={cn(
                "flex items-center px-4 font-medium border-b-2 text-sm transition-colors hover:text-primary",
                pathname === `/${lang}${tab.href}`
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground",
              )}
            >
              {t[tab.name]}
            </Link>
          ))}
        </div>
        <Link
          href={`/${lang === "en" ? "vi" : "en"}${pathname.substring(3)}`}
          className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90"
        >
          {lang === "en" ? "Tiếng Việt" : "English"}
        </Link>
      </div>
    </nav>
  );
}
