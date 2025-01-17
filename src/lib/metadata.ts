import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server';

export async function generatePageMetadata(locale: string, pageName: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: pageName});

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: t('ogImageAlt'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/og-image.png'],
    },
  }
}
