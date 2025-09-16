'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageToggle() {
  const { language, setLanguage, isRTL } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en')
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all duration-200 group"
      title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <motion.div
        animate={{ rotate: language === 'en' ? 0 : 180 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="text-lg opacity-70 group-hover:opacity-100"
      >
        🌐
      </motion.div>
    </motion.button>
  )
}
