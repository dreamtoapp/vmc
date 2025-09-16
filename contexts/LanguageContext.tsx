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
  // Force English only
  const language: Language = 'en'
  const setLanguage = (_lang: Language) => { /* no-op: English only */ }

  // Initialize document attributes for English LTR once
  useEffect(() => {
    document.documentElement.dir = 'ltr'
    document.documentElement.lang = 'en'
    document.body.classList.remove('font-sans', 'font-arabic')
    document.body.classList.add('font-sans')
  }, [])

  const t = require('@/lib/i18n').default['en']
  const isRTL = false

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
