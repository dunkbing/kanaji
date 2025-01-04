import { Inter } from 'next/font/google'
import './globals.css'
import { NavTabs } from '@/components/nav-tabs'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'vi' }]
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <NavTabs lang={params.lang} />
        {children}
      </body>
    </html>
  )
}
