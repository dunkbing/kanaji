"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

type LanguageContextType = {
  lang: string;
  setLang: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ lang: string, children: React.ReactNode }> = ({ lang: lang_, children }) => {
  const [lang, setLang] = useState(lang_);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const currentLang = pathname.split('/')[1];
    if (currentLang === 'en' || currentLang === 'vi') {
      setLang(currentLang);
    }
  }, [pathname]);

  const handleSetLang = (newLang: string) => {
    setLang(newLang);
    const newPathname = '/' + newLang + pathname.substring(3);
    router.push(newPathname);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
