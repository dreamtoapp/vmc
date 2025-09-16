'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaReact, FaNodeJs, FaAws, FaDocker } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiFramer, SiRadixui, SiReacthookform, SiVercel, SiPnpm, SiExpo, SiAndroid, SiIos } from 'react-icons/si'
import { Layers, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { t, isRTL } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 to-white">

      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(46, 134, 171, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(162, 59, 114, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 40% 40%, rgba(46, 134, 171, 0.1) 0%, transparent 50%)",
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0"
          />
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full opacity-60 blur-sm"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-secondary-200 to-secondary-300 rounded-full opacity-40 blur-sm"
        />
        <motion.div
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-50 blur-sm"
        />

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 text-sm font-medium mb-8 border border-primary-200"
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-2 h-2 bg-primary-500 rounded-full"
              />
              Innovative Healthcare Solutions
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-xs"
              >
                ✨
              </motion.span>
            </motion.div>

            {/* Main Title with Gradient Text */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${isRTL ? 'text-right' : 'text-left'}`}
            >
              <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 bg-clip-text text-transparent">
                {t.home.hero.title}
              </span>
            </motion.h1>

            {/* Enhanced Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`text-lg md:text-xl lg:text-2xl text-foreground mb-8 leading-relaxed max-w-4xl mx-auto ${isRTL ? 'text-right' : 'text-left'}`}
            >
              <p className="mb-4">
                {t.home.hero.description}
              </p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"
              >
                {t.home.hero.metrics}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-base mt-4 text-muted-foreground"
              >
                <span className="font-medium">{t.home.hero.presentedTo}</span>{" "}
                <span className="font-semibold text-primary-600">{t.common.client}</span>
              </motion.p>
            </motion.div>

            {/* Enhanced CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/proposal"
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-elevation-3 hover:shadow-elevation-4 transition-all duration-300 overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">{t.home.hero.viewProposal}</span>
                  <motion.span
                    className="relative z-10"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-50 transition-all duration-300 backdrop-blur-sm"
                >
                  <span>{t.home.hero.getInTouch}</span>
                  <motion.span
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    ✉️
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats Preview */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            >
              {[
                { label: "Market Size", value: "$4.5T", icon: "📈" },
                { label: "Cost Reduction", value: "35%", icon: "💰" },
                { label: "Digital Gap", value: "73%", icon: "🎯" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="group p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-elevation-1 hover:shadow-elevation-3 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-3xl mb-2"
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.1, type: "spring", stiffness: 200 }}
                    className="text-2xl font-bold text-primary-600 mb-1"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary-500 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Overview Section */}
      <section className="px-4 py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 ${isRTL ? 'text-right' : 'text-left'}`}
            >
              {t.home.overview.title}
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  bgColor: "bg-primary-100",
                  title: t.home.overview.marketOpportunity,
                  description: t.home.overview.marketDescription
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  bgColor: "bg-secondary-100",
                  title: t.home.overview.modernTech,
                  description: t.home.overview.techDescription
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  ),
                  bgColor: "bg-green-100",
                  title: t.home.overview.roiProjection,
                  description: t.home.overview.roiDescription
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="text-center p-6"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className={`text-xl font-semibold text-gray-900 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{item.title}</h3>
                  <p className={`text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.home.technology.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'React', color: 'text-blue-500', Icon: FaReact },
                { name: 'Next.js', color: 'text-gray-900', Icon: SiNextdotjs },
                { name: 'TypeScript', color: 'text-blue-600', Icon: SiTypescript },
                { name: 'Tailwind', color: 'text-cyan-500', Icon: SiTailwindcss },
                { name: 'Node.js', color: 'text-green-500', Icon: FaNodeJs },
                { name: 'PostgreSQL', color: 'text-blue-700', Icon: SiPostgresql },
                { name: 'AWS', color: 'text-orange-500', Icon: FaAws },
                { name: 'Docker', color: 'text-blue-400', Icon: FaDocker },
                { name: 'Framer Motion', color: 'text-pink-600', Icon: SiFramer },
                { name: 'Radix UI', color: 'text-gray-800', Icon: SiRadixui },
                { name: 'React Hook Form', color: 'text-rose-600', Icon: SiReacthookform },
                { name: 'Zustand', color: 'text-emerald-600', Icon: Layers },
                { name: 'Zod', color: 'text-indigo-600', Icon: ShieldCheck },
                { name: 'pnpm', color: 'text-yellow-600', Icon: SiPnpm },
                { name: 'Vercel', color: 'text-gray-900', Icon: SiVercel },
                { name: 'React Native', color: 'text-blue-500', Icon: FaReact },
                { name: 'Expo', color: 'text-gray-900', Icon: SiExpo },
                { name: 'Android', color: 'text-green-600', Icon: SiAndroid },
                { name: 'iOS', color: 'text-gray-900', Icon: SiIos },
              ].map((tech, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className={`flex flex-col items-center gap-2 ${tech.color}`}>
                    <tech.Icon className="text-3xl" aria-hidden />
                    <div className="text-sm font-semibold text-gray-900">{tech.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-16 bg-primary-500">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold text-white mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.home.cta.title}
            </h2>
            <p className={`text-xl text-primary-foreground mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.home.cta.description}
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              {t.home.cta.button}
            </Link>
          </div>
        </div>
      </section>


    </main>
  )
}