'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Home, FileText, Info, MessageCircle, ArrowRight } from 'lucide-react'
import LanguageToggle from '@/components/ui/LanguageToggle'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { cn } from '@/lib/utils'

export default function DesktopNavigation() {
  const { t, isRTL } = useLanguage()

  return (
    <div className={cn(
      "hidden lg:flex items-center gap-3",
      isRTL ? 'flex-row-reverse' : ''
    )}>
      {/* Quote Button - Icon Only */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          asChild
          variant="outline"
          size="icon"
          className="group relative overflow-hidden shadow-elevation-1 hover:shadow-elevation-2"
          title={isRTL ? 'عرض سعر' : 'Quote'}
        >
          <Link href="/quote">
            <motion.div
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <FileText className="h-5 w-5" />
            </motion.div>

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </Link>
        </Button>
      </motion.div>

      {/* Contact Button - Icon Only */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          asChild
          variant="gradient"
          size="icon"
          className="group relative overflow-hidden shadow-elevation-2 hover:shadow-elevation-3"
          title={t.nav.contact}
        >
          <Link href="/contact">
            <motion.div
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <MessageCircle className="h-5 w-5" />
            </motion.div>

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </Link>
        </Button>
      </motion.div>

      {/* Language Toggle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <LanguageToggle />
      </motion.div>
    </div>
  )
}
