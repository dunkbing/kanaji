'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const tabs = [
  { name: 'INTRO', href: '/' },
  { name: 'HIRAGANA', href: '/hiragana' },
  { name: 'KATAKANA', href: '/katakana' },
  { name: 'STUDY', href: '/study' },
  { name: 'EXTRA', href: '/extra' },
]

export function NavTabs() {
  const pathname = usePathname()

  return (
    <nav className="border-b">
      <div className="flex h-14 max-w-screen-lg mx-auto">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={cn(
              "flex items-center px-4 font-medium border-b-2 text-sm transition-colors hover:text-primary",
              pathname === tab.href
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground"
            )}
          >
            {tab.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}
