'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/navigation/Navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Mail,
  Phone,
  Globe
} from 'lucide-react'
import Image from 'next/image'

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["dreamtoapp@gmail.com"],
      description: "Send us an email anytime",
      color: "text-blue-500",
      link: "mailto:dreamtoapp@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["0502699023"],
      description: "Call us during business hours",
      color: "text-green-500",
      link: "tel:0502699023"
    },
    {
      icon: Globe,
      title: "Website",
      details: ["dreamto.app"],
      description: "Visit our main website",
      color: "text-purple-500",
      link: "https://dreamto.app"
    },
  ]


  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Get in <span className="text-primary-500">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            >
              Ready to discuss the VMS Healthcare Platform for Al-Elm Medical Company?
              <br />
              <span className="text-primary-600 font-semibold">Let's start the conversation today.</span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-xl text-gray-600">
                Multiple ways to reach us for your project needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader className="text-center pb-4">
                        <div className={`w-12 h-12 ${item.color.replace('text-', 'bg-').replace('-500', '-100')} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                          <Icon className={`w-6 h-6 ${item.color}`} />
                        </div>
                        <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        {item.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-foreground font-medium mb-1">
                            {item.link ? (
                              <a href={item.link} target={item.title === 'Website' ? '_blank' : undefined} rel={item.title === 'Website' ? 'noopener noreferrer' : undefined} className="underline decoration-primary-500/40 underline-offset-4 hover:decoration-primary-500">
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>




      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image src="/dreamToApp-dark.svg" alt="DreamToApp" width={36} height={36} className="w-9 h-9" />
              <span className="font-bold text-lg bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 bg-clip-text text-transparent">
                DreamToApp
              </span>
            </div>
            <div className="text-gray-400">
              © 2024 DreamToApp. Healthcare Innovation Delivered for Al-Elm Medical Company.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}