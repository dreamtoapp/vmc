'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

export default function Logo({
  size = 'md',
  showText = true,
  className = ''
}: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  }

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl'
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <motion.div
        whileHover={{
          scale: 1.1,
          rotate: 5,
          transition: { type: "spring", stiffness: 400, damping: 10 }
        }}
        whileTap={{ scale: 0.95 }}
        className={`${sizeClasses[size]} relative group`}
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 rounded-xl shadow-elevation-2 group-hover:shadow-elevation-3 transition-all duration-300" />

        {/* Animated Ring */}
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-300"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Logo Content */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
          <Image
            src="/dreamToApp-dark.svg"
            alt="DreamToApp Logo"
            width={size === 'sm' ? 28 : size === 'md' ? 36 : 52}
            height={size === 'sm' ? 28 : size === 'md' ? 36 : 52}
            className="w-3/4 h-3/4 object-contain filter brightness-0 invert group-hover:scale-110 transition-transform duration-300"
          />

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </motion.div>

      {showText && (
        <motion.span
          className={`hidden sm:inline font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 bg-clip-text text-transparent ${textSizeClasses[size]} tracking-tight group-hover:scale-105 transition-transform duration-300`}
          whileHover={{ scale: 1.05 }}
        >
          DreamToApp
        </motion.span>
      )}
    </div>
  )
}
