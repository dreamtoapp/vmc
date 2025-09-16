import { useLanguage } from '@/contexts/LanguageContext'

export function useFontClass() {
  const { language } = useLanguage()

  return language === 'ar' ? 'font-arabic' : 'font-sans'
}
