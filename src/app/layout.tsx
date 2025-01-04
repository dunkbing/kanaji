import { Inter } from 'next/font/google'
import './globals.css'
import { NavTabs } from '@/components/nav-tabs'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'vi' }]
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <NavTabs lang={lang} />
        {children}
      </body>
    </html>
  )
}
