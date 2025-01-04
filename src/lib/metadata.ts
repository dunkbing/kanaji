import { Metadata } from 'next'
import translations from '@/translations'

export function generatePageMetadata(lang: string, pageName: string): Metadata {
  const t = translations[lang as keyof typeof translations]

  return {
    title: `${t[`metadata${pageName}Title` as keyof typeof t]} | Kanaji`,
    description: t[`metadata${pageName}Description` as keyof typeof t],
    openGraph: {
      title: t[`metadata${pageName}Title` as keyof typeof t],
      description: t[`metadata${pageName}Description` as keyof typeof t],
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: t.metadataOgImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t[`metadata${pageName}Title` as keyof typeof t],
      description: t[`metadata${pageName}Description` as keyof typeof t],
      images: ['/og-image.png'],
    },
  }
}
