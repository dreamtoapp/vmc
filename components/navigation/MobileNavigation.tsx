'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  FileText,
  MessageCircle,
  Menu,
  X,
  ArrowRight
} from 'lucide-react'
import Logo from '@/components/ui/Logo'
import LanguageToggle from '@/components/ui/LanguageToggle'
import { useLanguage } from '@/contexts/LanguageContext'
import { cn } from '@/lib/utils'

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  const navigationItems = [
    { name: t.nav.home, href: '/', icon: Home },
    { name: t.nav.proposal, href: '/proposal', icon: FileText },
    { name: t.nav.contact, href: '/contact', icon: MessageCircle },
  ]

  return (
    <>
      {/* Mobile Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-t border-border/50 shadow-elevation-4 md:hidden safe-area-pb">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/98 to-background/95" />

        <div className="relative flex justify-around items-center py-2 px-2">
          {navigationItems.map((item, index) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
                className="relative"
              >
                <Link
                  href={item.href}
                  className={cn(
                    "group relative flex flex-col items-center justify-center py-2.5 px-3 min-w-[52px] min-h-[52px] rounded-2xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-95",
                    isActive
                      ? 'text-primary-600 bg-gradient-to-b from-primary-50 to-primary-100 shadow-elevation-2 border border-primary-200'
                      : 'text-muted-foreground hover:text-primary-600 hover:bg-accent hover:shadow-elevation-1'
                  )}
                >
                  {/* Icon Container */}
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1, y: -1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <Icon
                      size={22}
                      className={cn(
                        "transition-colors duration-200",
                        isActive ? 'text-primary-600' : 'group-hover:text-primary-600'
                      )}
                    />

                    {/* Glow effect for active state */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.6, scale: 1.2 }}
                        className="absolute inset-0 bg-primary-400 rounded-full blur-lg -z-10"
                      />
                    )}
                  </motion.div>

                  {/* Label */}
                  <motion.span
                    className="text-xs font-medium mt-1 leading-tight text-center max-w-[60px] truncate"
                    animate={isActive ? { y: 0 } : { y: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {item.name}
                  </motion.span>

                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="mobileActiveTab"
                      className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    />
                  )}

                  {/* Ripple Effect */}
                  <motion.div
                    className="absolute inset-0 bg-primary-500/20 rounded-2xl opacity-0 group-active:opacity-100"
                    initial={{ scale: 0 }}
                    whileTap={{ scale: 1.2, opacity: 0.3 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>

                {/* Badge for notifications (example) */}
                {item.href === '/contact' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 400 }}
                    className="absolute -top-1 -right-1 w-3 h-3 bg-secondary-500 rounded-full border-2 border-background"
                  />
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Home indicator (iOS style) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-muted-foreground/30 rounded-full"
        />
      </nav>

      {/* Mobile Menu Button for Extra Small Screens */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-4 right-4 z-50 md:hidden bg-background/90 backdrop-blur-md border border-border rounded-xl p-3 shadow-elevation-3 hover:shadow-elevation-4 transition-all duration-200"
        aria-label="Toggle navigation menu"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -180, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 180, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 400, damping: 25 }}
            >
              <X size={18} className="text-foreground" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 180, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -180, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 400, damping: 25 }}
            >
              <Menu size={18} className="text-foreground" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute -top-1 -right-1 w-3 h-3 bg-secondary-500 rounded-full border-2 border-background"
        />
      </motion.button>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%', opacity: 0, scale: 0.95 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: '100%', opacity: 0, scale: 0.95 }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 200,
                duration: 0.4
              }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background/95 backdrop-blur-xl shadow-elevation-5 z-50 md:hidden border-l border-border/50"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-background/95" />

              <div className="relative p-6 h-full flex flex-col">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center justify-between mb-8"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Logo size="md" showText={true} />
                  </motion.div>
                  <div className="flex items-center space-x-3">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <LanguageToggle />
                    </motion.div>
                    <motion.button
                      onClick={() => setIsOpen(false)}
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-xl hover:bg-accent transition-colors"
                      aria-label="Close menu"
                    >
                      <X size={18} className="text-muted-foreground" />
                    </motion.button>
                  </div>
                </motion.div>

                {/* Navigation Items */}
                <nav className="flex-1 space-y-3">
                  {navigationItems.map((item, index) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "group flex items-center space-x-4 px-4 py-4 rounded-2xl transition-all duration-300 relative overflow-hidden",
                            isActive
                              ? 'bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-600 border border-primary-200 shadow-elevation-1'
                              : 'text-muted-foreground hover:bg-accent hover:text-primary-600 hover:shadow-elevation-1'
                          )}
                        >
                          {/* Icon */}
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                            className="relative"
                          >
                            <Icon size={22} />
                            {isActive && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 0.4, scale: 1.2 }}
                                className="absolute inset-0 bg-primary-400 rounded-full blur-md -z-10"
                              />
                            )}
                          </motion.div>

                          {/* Text */}
                          <span className="font-semibold text-base">{item.name}</span>

                          {/* Arrow indicator */}
                          <motion.div
                            className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                            whileHover={{ x: 3 }}
                          >
                            <ArrowRight size={16} />
                          </motion.div>

                          {/* Active indicator */}
                          {isActive && (
                            <motion.div
                              layoutId="mobileMenuActive"
                              className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 via-primary-500 to-primary-400 rounded-r-full"
                              initial={false}
                              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                            />
                          )}

                          {/* Hover effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary-50/0 via-primary-50/30 to-primary-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.6 }}
                          />
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                {/* Contact CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6 border-t border-border/50"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="group relative flex items-center justify-center gap-3 w-full bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-600 text-white py-4 px-6 rounded-2xl font-semibold shadow-elevation-3 hover:shadow-elevation-4 transition-all duration-300 overflow-hidden"
                    >
                      <MessageCircle size={20} />
                      <span>Get in Touch</span>
                      <motion.div
                        whileHover={{ x: 3, rotate: 15 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowRight size={16} />
                      </motion.div>

                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Version info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ delay: 0.6 }}
                  className="text-xs text-muted-foreground text-center mt-4"
                >
                  v2.0 • DreamToApp
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bottom padding for mobile navigation */}
      <div className="h-20 md:hidden" />
    </>
  )
}
