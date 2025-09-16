'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/navigation/Navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Code,
  Palette,
  Smartphone,
  Database,
  Shield,
  Users,
  Award,
  Target,
  Zap,
  Globe
} from 'lucide-react'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiAmazon,
  SiDocker,
  SiRedis,
  SiGraphql,
  SiJest,
  SiOpenai,
  SiPrisma,
  SiSocketdotio
} from 'react-icons/si'
import { MdAnimation } from 'react-icons/md'
import { MdSecurity } from 'react-icons/md'

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const services = [
    {
      icon: Code,
      title: "Healthcare Platform Development",
      description: "Complete healthcare management systems with patient records, appointment scheduling, and analytics",
      color: "text-blue-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Healthcare Apps",
      description: "Cross-platform mobile applications for patients and healthcare providers",
      color: "text-green-500"
    },
    {
      icon: Database,
      title: "Electronic Medical Records",
      description: "Secure, HIPAA-compliant EMR systems with advanced data management",
      color: "text-purple-500"
    },
    {
      icon: Shield,
      title: "Healthcare Security",
      description: "HIPAA, GDPR, and Saudi healthcare compliance with enterprise-grade security",
      color: "text-red-500"
    },
    {
      icon: Users,
      title: "Telemedicine Solutions",
      description: "Video consultation platforms with real-time communication features",
      color: "text-pink-500"
    },
    {
      icon: Zap,
      title: "AI/ML Integration",
      description: "AI-powered diagnostics, predictive analytics, and intelligent automation",
      color: "text-yellow-500"
    }
  ]

  const values = [
    {
      icon: Target,
      title: "Quality First",
      description: "We prioritize code quality, performance, and user experience in every project"
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "Working closely with clients to understand their needs and deliver solutions"
    },
    {
      icon: Award,
      title: "Innovation Focus",
      description: "Leveraging cutting-edge technologies to create modern, scalable solutions"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Building solutions that work across different markets and user bases"
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
              About <span className="text-primary-500">DreamToApp</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            >
              We are a modern development company specializing in healthcare technology solutions,
              combining technical expertise with deep industry understanding.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="px-4 py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  DreamToApp was founded with a vision to bridge the gap between healthcare innovation
                  and technology implementation. We understand that healthcare organizations need more
                  than just software – they need partners who can navigate the complex landscape of
                  regulations, compliance, and user needs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our team combines years of experience in healthcare technology, user experience design,
                  and modern development practices to deliver solutions that truly make a difference
                  in patient care and operational efficiency.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  To empower healthcare organizations with cutting-edge technology solutions
                  that improve patient outcomes, streamline operations, and drive innovation
                  in the healthcare industry.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-primary-500 mb-1">50+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-primary-500 mb-1">3+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            >
              Our Expertise
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Icon className={`w-6 h-6 ${service.color}`} />
                          </div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                        </div>
                        <CardDescription className="text-gray-600">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            >
              Our Values
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl"
                  >
                    <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Services */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
            >
              Healthcare Services We Offer
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Basic Services</h3>
                <div className="space-y-4">
                  {[
                    { service: "General Practitioner", desc: "Home visits, examinations, prescriptions" },
                    { service: "Home Nursing", desc: "Wound care, injections, vital signs monitoring" },
                    { service: "Physiotherapy", desc: "Rehabilitation exercises, pain management" },
                    { service: "Laboratory Tests", desc: "Home sample collection, blood tests" },
                    { service: "Elderly Care", desc: "Specialized care, daily assistance" },
                    { service: "Vaccinations", desc: "Children, adult, travel vaccines" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">{item.service}</div>
                        <div className="text-sm text-gray-600">{item.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Specialized Services</h3>
                <div className="space-y-4">
                  {[
                    { service: "Cardiology Specialist", desc: "Heart examinations, ECG, blood pressure" },
                    { service: "Pediatrician", desc: "Child examinations, vaccinations, growth monitoring" },
                    { service: "Dentist", desc: "Dental examinations, cleaning, fillings" },
                    { service: "Ophthalmologist", desc: "Vision tests, eye pressure, retina examination" },
                    { service: "Psychologist", desc: "Therapy sessions, depression treatment" },
                    { service: "Post-Surgical Care", desc: "Wound follow-up, dressing changes" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm"
                    >
                      <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">{item.service}</div>
                        <div className="text-sm text-gray-600">{item.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="px-4 py-16 bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
            >
              Technology Stack
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'React 19', category: 'Frontend', color: 'bg-blue-500', icon: SiReact },
                { name: 'Next.js 15', category: 'Framework', color: 'bg-gray-700', icon: SiNextdotjs },
                { name: 'TypeScript', category: 'Language', color: 'bg-blue-600', icon: SiTypescript },
                { name: 'Tailwind CSS', category: 'Styling', color: 'bg-cyan-500', icon: SiTailwindcss },
                { name: 'Node.js', category: 'Backend', color: 'bg-green-500', icon: SiNodedotjs },
                { name: 'PostgreSQL', category: 'Database', color: 'bg-blue-700', icon: SiPostgresql },
                { name: 'AWS', category: 'Cloud', color: 'bg-orange-500', icon: SiAmazon },
                { name: 'Docker', category: 'DevOps', color: 'bg-blue-400', icon: SiDocker },
                { name: 'Redis', category: 'Cache', color: 'bg-red-500', icon: SiRedis },
                { name: 'GraphQL', category: 'API', color: 'bg-pink-500', icon: SiGraphql },
                { name: 'Jest', category: 'Testing', color: 'bg-red-600', icon: SiJest },
                { name: 'Framer Motion', category: 'Animation', color: 'bg-purple-500', icon: MdAnimation },
                { name: 'OpenAI GPT-4', category: 'AI', color: 'bg-green-600', icon: SiOpenai },
                { name: 'Prisma', category: 'ORM', color: 'bg-indigo-500', icon: SiPrisma },
                { name: 'JWT', category: 'Auth', color: 'bg-yellow-500', icon: MdSecurity },
                { name: 'Socket.io', category: 'Real-time', color: 'bg-pink-600', icon: SiSocketdotio },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <div className={`w-12 h-12 ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <tech.icon className="text-white text-xl" />
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">
                    {tech.name}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {tech.category}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-16 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Ready to Work Together?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 mb-8"
            >
              Let's discuss how we can help transform your healthcare organization with technology
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/contact"
                className="bg-white text-primary-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Our Work
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
