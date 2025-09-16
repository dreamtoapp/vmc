'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, Translations } from '@/lib/i18n'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en')

  // Load language from localStorage on mount and set initial direction
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    const initialLanguage = (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) ? savedLanguage : 'en'

    setLanguage(initialLanguage)

    // Set initial document direction and language
    document.documentElement.dir = initialLanguage === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = initialLanguage

    // Apply initial font class to body
    document.body.classList.remove('font-sans', 'font-arabic')
    document.body.classList.add(initialLanguage === 'ar' ? 'font-arabic' : 'font-sans')

    console.log(`Initial language loaded: ${initialLanguage}, Direction: ${initialLanguage === 'ar' ? 'rtl' : 'ltr'}`)
  }, [])

  // Save language to localStorage when changed and update direction
  useEffect(() => {
    localStorage.setItem('language', language)

    // Set document direction and language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = language

    // Apply font class to body
    document.body.classList.remove('font-sans', 'font-arabic')
    document.body.classList.add(language === 'ar' ? 'font-arabic' : 'font-sans')

    // Force reflow to ensure direction change takes effect
    document.documentElement.offsetHeight

    // Debug logging
    console.log(`Language changed to: ${language}, Direction: ${language === 'ar' ? 'rtl' : 'ltr'}`)
  }, [language])

  const t = require('@/lib/i18n').default[language]
  const isRTL = language === 'ar'

  const value = {
    language,
    setLanguage,
    t,
    isRTL
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
