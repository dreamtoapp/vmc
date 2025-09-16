'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import DesktopNavigation from './DesktopNavigation'
import CenterNavigation from './CenterNavigation'
import MobileNavigation from './MobileNavigation'
import Logo from '@/components/ui/Logo'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { useLanguage } from '@/contexts/LanguageContext'
import { cn } from '@/lib/utils'

export default function Navigation() {
  const { isRTL } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  // Transform values for scroll animations
  const headerY = useTransform(scrollY, [0, 100], [0, -10])
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95])
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0.95, 0.98])

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50)
    })
    return unsubscribe
  }, [scrollY])

  return (
    <>
      {/* Main Navigation Header */}
      <motion.header
        style={{
          y: headerY,
          opacity: headerOpacity,
        }}
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 border-b",
          isScrolled
            ? "bg-background/98 backdrop-blur-xl border-border shadow-elevation-2"
            : "bg-background/95 backdrop-blur-lg border-border/50 shadow-elevation-1"
        )}
      >
        {/* Background with scroll effect */}
        <motion.div
          style={{ opacity: backgroundOpacity }}
          className="absolute inset-0 bg-background"
        />

        <div className="container mx-auto relative">
          <div className={cn(
            "grid grid-cols-3 items-center transition-all duration-300",
            isScrolled ? "py-3 px-4" : "py-4 px-4"
          )}>

            {/* Left Column - Action Buttons */}
            <div className={cn(
              "flex items-center",
              isRTL ? 'justify-end' : 'justify-start'
            )}>
              <DesktopNavigation />

              {/* Theme Toggle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="ml-3"
              >
                <ThemeToggle className="hidden sm:flex" />
              </motion.div>

              {/* Mobile Navigation Trigger */}
              <div className="lg:hidden ml-3">
                <MobileNavigation />
              </div>
            </div>

            {/* Center Column - Navigation Links */}
            <div className="flex items-center justify-center">
              <div className="hidden lg:flex">
                <CenterNavigation />
              </div>
            </div>

            {/* Right Column - Logo */}
            <div className={cn(
              "flex items-center",
              isRTL ? 'justify-start' : 'justify-end'
            )}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Link
                  href="/"
                  className={cn(
                    "flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg p-1 -m-1",
                    isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'
                  )}
                >
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Logo size={isScrolled ? "sm" : "md"} showText={true} />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-primary/50 via-primary to-primary/50 origin-left"
        />
      </motion.header>

      {/* Progress indicator */}
      <motion.div
        style={{
          scaleX: useTransform(scrollY, [0, 1000], [0, 1])
        }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary origin-left z-50"
      />
    </>
  )
}
