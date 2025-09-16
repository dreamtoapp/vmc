'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/navigation/Navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Globe,
  MessageCircle,
  Building2,
  User
} from 'lucide-react'

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
      color: "text-blue-500"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+966 50 269 9023"],
      description: "Call us during business hours",
      color: "text-green-500"
    },
    {
      icon: Globe,
      title: "Website",
      details: ["dreamto.app"],
      description: "Visit our main website",
      color: "text-purple-500"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Saudi Arabia"],
      description: "Serving clients nationwide",
      color: "text-red-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Sunday - Thursday", "9:00 AM - 6:00 PM"],
      description: "Saudi Arabia timezone",
      color: "text-orange-500"
    },
    {
      icon: Building2,
      title: "Company",
      details: ["DreamToApp"],
      description: "Healthcare Technology Solutions",
      color: "text-indigo-500"
    }
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
                          <p key={detailIndex} className="text-gray-900 font-medium mb-1">
                            {detail}
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


      {/* Call to Action */}
      <section className="px-4 py-16 bg-primary-500">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-primary-100 mb-8"
            >
              Contact us today to discuss your healthcare technology needs
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="mailto:dreamtoapp@gmail.com"
                className="bg-white text-primary-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
              <a
                href="tel:+966502699023"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DA</span>
              </div>
              <span className="font-semibold">DreamToApp</span>
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