'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Home, FileText } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { cn } from '@/lib/utils'

export default function CenterNavigation() {
  const pathname = usePathname()
  const { t, isRTL } = useLanguage()

  const navigationItems = [
    { name: t.nav.home, href: '/', icon: Home },
    { name: t.nav.proposal, href: '/proposal', icon: FileText },
    { name: isRTL ? 'عرض سعر' : 'Quote', href: '/quote', icon: FileText },
  ]

  return (
    <nav className="flex items-center space-x-1">
      {navigationItems.map((item) => {
        const isActive = pathname === item.href
        const IconComponent = item.icon

        return (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href={item.href}
              className={cn(
                "group relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive
                  ? 'text-primary-600 bg-primary-50 shadow-sm border border-primary-100'
                  : 'text-foreground/80 hover:text-primary-600 hover:bg-primary-50/50 hover:shadow-sm'
              )}
            >
              {/* Icon with animation */}
              <motion.div
                whileHover={{ rotate: isActive ? 0 : 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <IconComponent className="h-4 w-4" />
              </motion.div>

              {/* Text */}
              <span className="relative">
                {item.name}

                {/* Animated underline for active state */}
                {isActive && (
                  <motion.div
                    layoutId="centerActiveTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500 rounded-full"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  />
                )}
              </span>

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-100/0 via-primary-100/50 to-primary-100/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            </Link>
          </motion.div>
        )
      })}
    </nav>
  )
}
