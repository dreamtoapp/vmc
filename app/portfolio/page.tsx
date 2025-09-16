'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/navigation/Navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  ExternalLink,
  Github,
  Smartphone,
  Globe,
  Database,
  Shield,
  Zap,
  Users
} from 'lucide-react'

export default function PortfolioPage() {
  const [mounted, setMounted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    setMounted(true)
  }, [])

  const projects = [
    {
      id: 1,
      title: "VMS Healthcare Platform",
      description: "Comprehensive healthcare management system with patient records, appointment scheduling, and analytics dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js 15", "React 19", "TypeScript", "PostgreSQL", "AWS"],
      category: "Healthcare",
      status: "Proposal",
      features: ["Patient Management", "Analytics Dashboard", "Mobile App", "HIPAA Compliance"],
      link: "/proposal"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced inventory management, payment processing, and customer analytics.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Docker"],
      category: "E-Commerce",
      status: "Completed",
      features: ["Product Catalog", "Payment Gateway", "Order Management", "Analytics"],
      link: "#"
    },
    {
      id: 3,
      title: "Educational Management System",
      description: "Comprehensive learning management system with course creation, student tracking, and progress analytics.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "AWS"],
      category: "Education",
      status: "In Development",
      features: ["Course Creation", "Student Tracking", "Progress Analytics", "Mobile App"],
      link: "#"
    },
    {
      id: 4,
      title: "Real Estate Portal",
      description: "Property listing platform with advanced search, virtual tours, and agent management system.",
      technologies: ["React", "Next.js", "PostgreSQL", "Mapbox", "Cloudinary"],
      category: "Real Estate",
      status: "Completed",
      features: ["Property Listings", "Advanced Search", "Virtual Tours", "Agent Portal"],
      link: "#"
    },
    {
      id: 5,
      title: "Financial Dashboard",
      description: "Investment tracking and portfolio management platform with real-time market data integration.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "WebSocket"],
      category: "Finance",
      status: "Completed",
      features: ["Portfolio Tracking", "Market Data", "Risk Analysis", "Reports"],
      link: "#"
    },
    {
      id: 6,
      title: "IoT Monitoring System",
      description: "Real-time monitoring solution for IoT devices with data visualization and alert management.",
      technologies: ["React", "Node.js", "InfluxDB", "MQTT", "Docker"],
      category: "IoT",
      status: "In Development",
      features: ["Device Monitoring", "Data Visualization", "Alerts", "Analytics"],
      link: "#"
    }
  ]

  const categories = ["All", "Healthcare", "Telemedicine", "EMR Systems", "IoT Health", "Pharmacy", "Analytics"]

  if (!mounted) {
    return null
  }

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory)

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
              Our <span className="text-primary-500">Portfolio</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            >
              Explore our diverse range of projects showcasing modern web development,
              mobile applications, and innovative solutions across various industries.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 py-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-colors ${selectedCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                    }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            <motion.div
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow">
                    <div className="relative">
                      <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-t-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-primary-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <Globe className="w-8 h-8 text-white" />
                          </div>
                          <span className="text-sm font-medium text-gray-600">{project.category}</span>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === 'Completed'
                          ? 'bg-green-100 text-green-700'
                          : project.status === 'In Development'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-blue-100 text-blue-700'
                          }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Features */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-md font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-4">
                        <Button
                          asChild
                          size="sm"
                          className="flex-1"
                        >
                          <a href={project.link}>
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Project
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="px-3"
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
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
              Our Development Services
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Web Applications",
                  description: "Modern, responsive web applications with cutting-edge technologies"
                },
                {
                  icon: Smartphone,
                  title: "Mobile Apps",
                  description: "Native and cross-platform mobile applications for iOS and Android"
                },
                {
                  icon: Database,
                  title: "Backend Systems",
                  description: "Scalable backend infrastructure and API development"
                },
                {
                  icon: Shield,
                  title: "Security & Compliance",
                  description: "Enterprise-grade security and regulatory compliance implementation"
                }
              ].map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="text-center p-6"
                  >
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </motion.div>
                )
              })}
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
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 mb-8"
            >
              Let's discuss your project requirements and create something amazing together
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-primary-500 hover:bg-gray-100"
              >
                <a href="/contact">
                  Start a Project
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <a href="/proposal">
                  View Healthcare Proposal
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
