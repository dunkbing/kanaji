'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const language = navigator.language.split('-')[0]
    const supportedLanguages = ['en', 'vi']
    const defaultLanguage = 'en'

    const redirectLang = supportedLanguages.includes(language) ? language : defaultLanguage
    router.replace(`/${redirectLang}`)
  }, [router])

  return null
}
