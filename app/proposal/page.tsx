'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '@/contexts/LanguageContext'
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
  SiSocketdotio,
  SiFramer,
  SiRadixui,
  SiReacthookform,
  SiVercel,
  SiPnpm,
  SiAndroid,
  SiIos
} from 'react-icons/si'
import { MdSecurity } from 'react-icons/md'
import { FaReact, FaNodeJs, FaAws, FaDocker } from 'react-icons/fa'
import { Layers, ShieldCheck } from 'lucide-react'

export default function ProposalPage() {
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
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="text-center mb-8">
              <div className={`inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <span>📋</span>
                <span>{t.proposal.hero.proposalNumber}</span>
                <span>•</span>
                <span>{t.proposal.hero.date}</span>
                <span>•</span>
                <span>{t.proposal.hero.version}</span>
              </div>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.proposal.hero.title}
            </h1>
            <p className={`text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.proposal.hero.description}
              <br />
              <span className={`text-lg text-gray-500 mt-2 block ${isRTL ? 'text-right' : 'text-left'}`}>
                <strong>{t.proposal.hero.submittedTo}</strong> {t.common.client} | <strong>{t.proposal.hero.submittedBy}</strong> {t.common.company}
              </span>
              <span className={`text-base text-gray-700 mt-2 block ${isRTL ? 'text-right' : 'text-left'}`}>
                Prepared by <strong>Eng. Khalid Ali</strong> — DreamToApp
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="px-4 py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.proposal.executiveSummary.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className={`text-2xl font-semibold text-gray-900 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.proposal.executiveSummary.marketOpportunity}
                </h3>
                <div className="space-y-4">
                  <div className={`flex items-center space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-500 font-bold text-lg">$4.5T</span>
                    </div>
                    <div className={isRTL ? 'text-right' : 'text-left'}>
                      <p className="font-semibold text-gray-900">{t.proposal.executiveSummary.globalMarket}</p>
                      <p className="text-gray-600">{t.proposal.executiveSummary.globalMarketDesc}</p>
                    </div>
                  </div>
                  <div className={`flex items-center space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                      <span className="text-secondary-500 font-bold text-lg">73%</span>
                    </div>
                    <div className={isRTL ? 'text-right' : 'text-left'}>
                      <p className="font-semibold text-gray-900">{t.proposal.executiveSummary.digitalGap}</p>
                      <p className="text-gray-600">{t.proposal.executiveSummary.digitalGapDesc}</p>
                    </div>
                  </div>
                  <div className={`flex items-center space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-500 font-bold text-lg">35%</span>
                    </div>
                    <div className={isRTL ? 'text-right' : 'text-left'}>
                      <p className="font-semibold text-gray-900">{t.proposal.executiveSummary.costReduction}</p>
                      <p className="text-gray-600">{t.proposal.executiveSummary.costReductionDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
                <h4 className={`text-xl font-semibold text-gray-900 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.proposal.executiveSummary.keyValueProps}
                </h4>
                <ul className="space-y-3">
                  {[
                    'Streamlined management: Unified platform for patients, providers, and operations',
                    'Real-time analytics: Live KPIs for utilization, outcomes, and costs',
                    'Mobile-first care: React Native apps for patients and providers (online/offline)',
                    'HIPAA/PDPL ready: End-to-end encryption, audit logs, least-privilege access',
                    'Fast integrations: EMR/LIS/PACS and e-claims with API-first design',
                    'Local readiness: Arabic/RTL, KSA payments, in-region hosting'
                  ].map((text, index) => (
                    <li key={index} className={`flex items-start space-x-3 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                      <span className={`text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>{text}</span>
                    </li>
                  ))}
                </ul>
                <p className={`mt-3 text-xs text-gray-500 ${isRTL ? 'text-right' : 'text-left'}`}>
                  HIPAA: Health Insurance Portability and Accountability Act (U.S.). PDPL: Personal Data Protection Law (Saudi Arabia).
                </p>
                <p className={`mt-1 text-xs text-gray-500 ${isRTL ? 'text-right' : 'text-left'}`}>
                  EMR: Electronic Medical Record. LIS: Laboratory Information System. PACS: Picture Archiving and Communication System.
                </p>
                <p className={`mt-1 text-xs text-gray-500 ${isRTL ? 'text-right' : 'text-left'}`}>
                  FHIR: Fast Healthcare Interoperability Resources. HL7: Health Level Seven interoperability standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Challenges */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.proposal.healthcareChallenges.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Legacy Systems Card */}
              <Card className="group relative overflow-hidden bg-gradient-to-br from-red-50 to-red-100/50 border-red-200 hover:border-red-300 hover:shadow-xl transition-all duration-300">
                {/* Header with Icon */}
                <CardHeader className="pb-6 text-center">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-red-200 rounded-xl flex items-center justify-center">
                      <span className="text-red-600 text-2xl">⚙️</span>
                    </div>
                    <div className="space-y-2">
                      <CardTitle className={`text-xl font-bold text-red-800 ${isRTL ? 'text-center' : 'text-center'}`}>
                        {t.proposal.problemStatement.legacySystems}
                      </CardTitle>
                      <CardDescription className={`text-red-600 text-sm leading-relaxed ${isRTL ? 'text-center' : 'text-center'}`}>
                        {t.proposal.problemStatement.legacySystemsDesc}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                {/* Content */}
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {[
                      t.proposal.problemStatement.fragmentedData,
                      t.proposal.problemStatement.manualProcesses,
                      t.proposal.problemStatement.limitedIntegration,
                      t.proposal.problemStatement.highMaintenance,
                      'Security gaps from outdated servers and unpatched software',
                      'Vendor lock-in raises costs and slows change'
                    ].map((item, index) => (
                      <div key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className={`text-sm text-red-700 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </Card>

              {/* Data Silos Card */}
              <Card className="group relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
                {/* Header with Icon */}
                <CardHeader className="pb-6 text-center">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-orange-200 rounded-xl flex items-center justify-center">
                      <span className="text-orange-600 text-2xl">🏝️</span>
                    </div>
                    <div className="space-y-2">
                      <CardTitle className={`text-xl font-bold text-orange-800 ${isRTL ? 'text-center' : 'text-center'}`}>
                        {t.proposal.problemStatement.dataSilos}
                      </CardTitle>
                      <CardDescription className={`text-orange-600 text-sm leading-relaxed ${isRTL ? 'text-center' : 'text-center'}`}>
                        {t.proposal.problemStatement.dataSilosDesc}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                {/* Content */}
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {[
                      t.proposal.problemStatement.isolatedInfo,
                      t.proposal.problemStatement.poorInteroperability,
                      t.proposal.problemStatement.duplicateData,
                      t.proposal.problemStatement.inefficientWorkflows,
                      'No single longitudinal patient view across departments',
                      'Manual CSV/email data transfers cause errors and delays'
                    ].map((item, index) => (
                      <div key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className={`text-sm text-orange-700 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </Card>

              {/* User Experience Card */}
              <Card className="group relative overflow-hidden bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-yellow-200 hover:border-yellow-300 hover:shadow-xl transition-all duration-300">
                {/* Header with Icon */}
                <CardHeader className="pb-6 text-center">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-yellow-200 rounded-xl flex items-center justify-center">
                      <span className="text-yellow-600 text-2xl">👥</span>
                    </div>
                    <div className="space-y-2">
                      <CardTitle className={`text-xl font-bold text-yellow-800 ${isRTL ? 'text-center' : 'text-center'}`}>
                        {t.proposal.problemStatement.userExperience}
                      </CardTitle>
                      <CardDescription className={`text-yellow-600 text-sm leading-relaxed ${isRTL ? 'text-center' : 'text-center'}`}>
                        {t.proposal.problemStatement.userExperienceDesc}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                {/* Content */}
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {[
                      t.proposal.problemStatement.complexNavigation,
                      t.proposal.problemStatement.poorAccessibility,
                      t.proposal.problemStatement.outdatedInterfaces,
                      t.proposal.problemStatement.limitedMobile,
                      'Slow page loads on low-end devices and poor networks',
                      'Inconsistent Arabic/RTL experience across screens',
                      'Low contrast and small touch targets reduce usability',
                      'No offline fallback for critical patient workflows',
                      'Confusing forms with unclear validation messages'
                    ].map((item, index) => (
                      <div key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className={`text-sm text-yellow-700 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Proposed Solution */}
      <section className="px-4 py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.proposal.solution.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-6 text-center">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-2xl">👤</span>
                    </div>
                    <div className="space-y-2">
                      <CardTitle className={`text-xl font-bold text-blue-700 ${isRTL ? 'text-center' : 'text-center'}`}>
                        {t.proposal.solution.patientManagement}
                      </CardTitle>
                      <CardDescription className={`text-blue-600 text-sm leading-relaxed ${isRTL ? 'text-center' : 'text-center'}`}>
                        {t.proposal.solution.patientManagementDesc}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {[
                      t.proposal.solution.completeProfiles,
                      t.proposal.solution.medicalHistory,
                      t.proposal.solution.appointmentScheduling,
                      t.proposal.solution.realTimeUpdates,
                      'Self-service onboarding and digital consent',
                      'Automated reminders to reduce no-shows',
                      'Smart triage and prioritization for urgent cases',
                      'Personalized care plans with task reminders',
                      'Family/caregiver access with granular permissions'
                    ].map((item, index) => (
                      <div key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className={`text-sm text-blue-700 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-6 text-center">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-2xl">📊</span>
                    </div>
                    <div className="space-y-2">
                      <CardTitle className={`text-xl font-bold text-green-700 ${isRTL ? 'text-center' : 'text-center'}`}>
                        {t.proposal.solution.analyticsDashboard}
                      </CardTitle>
                      <CardDescription className={`text-green-600 text-sm leading-relaxed ${isRTL ? 'text-center' : 'text-center'}`}>
                        {t.proposal.solution.analyticsDashboardDesc}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {[
                      t.proposal.solution.performanceMetrics,
                      t.proposal.solution.predictiveAnalytics,
                      t.proposal.solution.customReports,
                      t.proposal.solution.trendAnalysis,
                      'Executive snapshots tailored for MOH reporting',
                      'Cost-to-care and ROI tracking',
                      'Cohort and funnel analysis for patient journeys',
                      'Anomaly detection with proactive alerting',
                      'Operational SLA dashboards for clinics and teams'
                    ].map((item, index) => (
                      <div key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className={`text-sm text-green-700 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-6 text-center">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-2xl">📱</span>
                    </div>
                    <div className="space-y-2">
                      <CardTitle className={`text-xl font-bold text-purple-700 ${isRTL ? 'text-center' : 'text-center'}`}>
                        {t.proposal.solution.mobileApplication}
                      </CardTitle>
                      <CardDescription className={`text-purple-600 text-sm leading-relaxed ${isRTL ? 'text-center' : 'text-center'}`}>
                        {t.proposal.solution.mobileApplicationDesc}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {[
                      t.proposal.solution.touchOptimized,
                      t.proposal.solution.offlineCapabilities,
                      t.proposal.solution.pushNotifications,
                      t.proposal.solution.secureMessaging,
                      'One-tap rebook and secure in-app payments',
                      'Biometric login and device-level encryption',
                      'Telemedicine: HD video consultations and e-prescriptions',
                      'QR check-in at clinics and digital queue tickets',
                      'Multilingual UI with automatic RTL support'
                    ].map((item, index) => (
                      <div key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className={`text-sm text-purple-700 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-indigo-50 border-indigo-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-6 text-center">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-indigo-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-2xl">🔗</span>
                    </div>
                    <div className="space-y-2">
                      <CardTitle className={`text-xl font-bold text-indigo-700 ${isRTL ? 'text-center' : 'text-center'}`}>
                        {t.proposal.solution.integrationHub}
                      </CardTitle>
                      <CardDescription className={`text-indigo-600 text-sm leading-relaxed ${isRTL ? 'text-center' : 'text-center'}`}>
                        {t.proposal.solution.integrationHubDesc}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {[
                      t.proposal.solution.apiFirst,
                      t.proposal.solution.thirdPartyIntegrations,
                      t.proposal.solution.dataSynchronization,
                      t.proposal.solution.legacySupport,
                      'E-claims and insurance clearinghouse ready',
                      'FHIR/HL7 adapters with validation',
                      'Event-driven webhooks for real-time partner updates',
                      'Partner sandbox with API keys and rate limiting',
                      'Observability: retries, DLQs, and integration monitoring'
                    ].map((item, index) => (
                      <div key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className={`text-sm text-indigo-700 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-pink-50 border-pink-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-6 text-center">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-pink-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-2xl">🔒</span>
                    </div>
                    <div className="space-y-2">
                      <CardTitle className={`text-xl font-bold text-pink-700 ${isRTL ? 'text-center' : 'text-center'}`}>
                        {t.proposal.solution.securityFramework}
                      </CardTitle>
                      <CardDescription className={`text-pink-600 text-sm leading-relaxed ${isRTL ? 'text-center' : 'text-center'}`}>
                        {t.proposal.solution.securityFrameworkDesc}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {[
                      t.proposal.solution.endToEndEncryption,
                      t.proposal.solution.roleBasedAccess,
                      t.proposal.solution.auditLogging,
                      t.proposal.solution.complianceMonitoring,
                      'MFA and SSO (SAML/OIDC)',
                      'Data loss prevention and field-level encryption'
                    ].map((item, index) => (
                      <div key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className={`text-sm text-pink-700 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-cyan-50 border-cyan-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-6 text-center">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-cyan-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-2xl">☁️</span>
                    </div>
                    <div className="space-y-2">
                      <CardTitle className={`text-xl font-bold text-cyan-700 ${isRTL ? 'text-center' : 'text-center'}`}>
                        {t.proposal.solution.cloudInfrastructure}
                      </CardTitle>
                      <CardDescription className={`text-cyan-600 text-sm leading-relaxed ${isRTL ? 'text-center' : 'text-center'}`}>
                        {t.proposal.solution.cloudInfrastructureDesc}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {[
                      t.proposal.solution.autoScaling,
                      t.proposal.solution.uptimeGuarantee,
                      t.proposal.solution.globalCDN,
                      t.proposal.solution.disasterRecovery,
                      'In-region data residency options (KSA/Bahrain)',
                      'Blue/green and zero-downtime deploys'
                    ].map((item, index) => (
                      <div key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className={`text-sm text-cyan-700 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>



      {/* Healthcare Challenges */}
      <section className="px-4 py-16 bg-red-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.proposal.healthcareChallenges.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className={`text-2xl font-semibold text-red-700 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.proposal.healthcareChallenges.currentChallenges}
                </h3>
                <div className="space-y-4">
                  <div className={`p-4 bg-white rounded-lg shadow-sm ${isRTL ? 'border-r-4 border-red-500' : 'border-l-4 border-red-500'}`}>
                    <h4 className={`font-semibold text-gray-900 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t.proposal.healthcareChallenges.healthcareAccess}
                    </h4>
                    <div className="space-y-3">
                      {t.proposal.healthcareChallenges.healthcareAccessItems.map((item, index) => (
                        <div key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className={`text-sm text-gray-600 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`p-4 bg-white rounded-lg shadow-sm ${isRTL ? 'border-r-4 border-orange-500' : 'border-l-4 border-orange-500'}`}>
                    <h4 className={`font-semibold text-gray-900 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t.proposal.healthcareChallenges.specializedServices}
                    </h4>
                    <div className="space-y-3">
                      {t.proposal.healthcareChallenges.specializedServicesItems.map((item, index) => (
                        <div key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className={`text-sm text-gray-600 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className={`text-2xl font-semibold text-blue-700 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.proposal.healthcareChallenges.demographicOpportunities}
                </h3>
                <div className="space-y-4">
                  <div className={`p-4 bg-white rounded-lg shadow-sm ${isRTL ? 'border-r-4 border-blue-500' : 'border-l-4 border-blue-500'}`}>
                    <h4 className={`font-semibold text-gray-900 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t.proposal.healthcareChallenges.demographicChallenges}
                    </h4>
                    <div className="space-y-3">
                      {t.proposal.healthcareChallenges.demographicItems.map((item, index) => (
                        <div key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className={`text-sm text-gray-600 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`p-4 bg-white rounded-lg shadow-sm ${isRTL ? 'border-r-4 border-green-500' : 'border-l-4 border-green-500'}`}>
                    <h4 className={`font-semibold text-gray-900 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t.proposal.healthcareChallenges.governmentSupport}
                    </h4>
                    <div className="space-y-3">
                      {t.proposal.healthcareChallenges.governmentItems.map((item, index) => (
                        <div key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className={`text-sm text-gray-600 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proposed Solution */}
      <section className="px-4 py-16 bg-green-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.proposal.proposedSolution.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className={`text-2xl font-semibold text-green-700 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.proposal.proposedSolution.businessModel}
                </h3>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <p className={`text-gray-700 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t.proposal.proposedSolution.businessModelDesc}
                  </p>
                  <div className="space-y-3">
                    <div className={`flex items-center space-x-3 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className={`text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>
                        <strong>{t.proposal.proposedSolution.patients}</strong> {t.proposal.proposedSolution.patientsDesc}
                      </span>
                    </div>
                    <div className={`flex items-center space-x-3 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className={`text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>
                        <strong>{t.proposal.proposedSolution.providers}</strong> {t.proposal.proposedSolution.providersDesc}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className={`text-2xl font-semibold text-green-700 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.proposal.proposedSolution.coreFeatures}
                </h3>
                <div className="space-y-3">
                  {t.proposal.proposedSolution.coreFeaturesItems.map((feature, index) => (
                    <div key={index} className={`flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className={`text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className={`text-2xl font-semibold text-gray-900 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t.proposal.proposedSolution.mainComponents}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-center">
                    {t.proposal.proposedSolution.patientApp}
                  </h4>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    {t.proposal.proposedSolution.patientAppDesc}
                  </p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-center">
                    {t.proposal.proposedSolution.providerApp}
                  </h4>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    {t.proposal.proposedSolution.providerAppDesc}
                  </p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-center">
                    {t.proposal.proposedSolution.adminDashboard}
                  </h4>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    {t.proposal.proposedSolution.adminDashboardDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.proposal.marketAnalysis.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-primary-500 mb-2">450M+ SAR</div>
                <div className="text-gray-600 text-center leading-relaxed">
                  {t.proposal.marketAnalysis.currentMarket}
                </div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-secondary-500 mb-2">23%</div>
                <div className="text-gray-600 text-center leading-relaxed">
                  {t.proposal.marketAnalysis.annualGrowth}
                </div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-green-500 mb-2">1.8B SAR</div>
                <div className="text-gray-600 text-center leading-relaxed">
                  {t.proposal.marketAnalysis.expectedSize}
                </div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-purple-500 mb-2">95%</div>
                <div className="text-gray-600 text-center leading-relaxed">
                  {t.proposal.marketAnalysis.smartphoneAdoption}
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className={`text-2xl font-semibold text-gray-900 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.proposal.marketAnalysis.marketDrivers}
                </h3>
                <ul className="space-y-3">
                  {t.proposal.marketAnalysis.marketDriversItems.map((item, index) => (
                    <li key={index} className={`flex items-start space-x-3 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                      <span className={`text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className={`text-2xl font-semibold text-gray-900 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.proposal.marketAnalysis.targetCities}
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-primary-50 rounded-lg">
                    <div className={`font-semibold text-primary-700 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t.proposal.marketAnalysis.phase1}
                    </div>
                    <div className={`text-sm text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t.proposal.marketAnalysis.phase1Desc}
                    </div>
                  </div>
                  <div className="p-4 bg-secondary-50 rounded-lg">
                    <div className={`font-semibold text-secondary-700 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t.proposal.marketAnalysis.phase2}
                    </div>
                    <div className={`text-sm text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t.proposal.marketAnalysis.phase2Desc}
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className={`font-semibold text-green-700 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t.proposal.marketAnalysis.phase3}
                    </div>
                    <div className={`text-sm text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t.proposal.marketAnalysis.phase3Desc}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform Components */}
      <section className="px-4 py-16 bg-blue-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.proposal.corePlatformComponents.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">📱</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                    {t.proposal.corePlatformComponents.patientApplication}
                  </h3>
                </div>
                <div className="space-y-3">
                  {t.proposal.corePlatformComponents.patientAppFeatures.map((feature, index) => (
                    <div key={index} className={`flex items-start space-x-3 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className={`text-gray-700 text-sm ${isRTL ? 'text-right' : 'text-left'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">👨‍⚕️</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                    {t.proposal.corePlatformComponents.serviceProviderApp}
                  </h3>
                </div>
                <div className="space-y-3">
                  {t.proposal.corePlatformComponents.providerAppFeatures.map((feature, index) => (
                    <div key={index} className={`flex items-start space-x-3 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className={`text-gray-700 text-sm ${isRTL ? 'text-right' : 'text-left'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">⚙️</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                    {t.proposal.corePlatformComponents.managementDashboard}
                  </h3>
                </div>
                <div className="space-y-3">
                  {t.proposal.corePlatformComponents.adminFeatures.map((feature, index) => (
                    <div key={index} className={`flex items-start space-x-3 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className={`text-gray-700 text-sm ${isRTL ? 'text-right' : 'text-left'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Technology Stack (identical to home page) */}
      <section className="px-4 py-16 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Modern Technology Stack</h2>
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
                { name: 'Expo', color: 'text-gray-900', Icon: SiNextdotjs },
                { name: 'Android', color: 'text-green-600', Icon: SiAndroid },
                { name: 'iOS', color: 'text-gray-900', Icon: SiIos },
              ].map((tech, index) => (
                <div key={index} className="text-center p-4 bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className={`flex flex-col items-center gap-2 ${tech.color}`}>
                    <tech.Icon className="text-3xl" aria-hidden />
                    <div className="text-sm font-semibold text-white">{tech.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="px-4 py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              {t.proposal.revenueModel.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className={`text-2xl font-semibold text-gray-900 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.proposal.revenueModel.revenueSources}
                </h3>
                <div className="space-y-4">
                  <Card className="bg-blue-50 border-blue-200">
                    <CardHeader>
                      <CardTitle className={`text-blue-700 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {t.proposal.revenueModel.commissionModel}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {t.proposal.revenueModel.commissionItems.map((item, index) => (
                          <div key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className={`text-sm text-blue-700 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-green-50 border-green-200">
                    <CardHeader>
                      <CardTitle className={`text-green-700 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {t.proposal.revenueModel.saasSubscriptions}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {t.proposal.revenueModel.saasItems.map((item, index) => (
                          <div key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className={`text-sm text-green-700 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div>
                <h3 className={`text-2xl font-semibold text-gray-900 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.proposal.revenueModel.financialProjections}
                </h3>
                <div className="space-y-4">
                  <div className="p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">2.3M SAR</div>
                    <div className="text-gray-600 text-center leading-relaxed">
                      {t.proposal.revenueModel.firstYearRevenue}
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">180%</div>
                    <div className="text-gray-600 text-center leading-relaxed">
                      {t.proposal.revenueModel.roi}
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">25%+</div>
                    <div className="text-gray-600 text-center leading-relaxed">
                      {t.proposal.revenueModel.userGrowth}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI/UX Design */}
      <section className="px-4 py-16 bg-purple-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.proposal.uiUxDesign.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className={`text-2xl font-semibold text-purple-700 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.proposal.uiUxDesign.designPhilosophy}
                </h3>
                <div className="space-y-4">
                  {t.proposal.uiUxDesign.philosophyItems.map((item, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
                      <h4 className={`font-semibold text-gray-900 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {item.title}
                      </h4>
                      <p className={`text-sm text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className={`text-2xl font-semibold text-purple-700 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.proposal.uiUxDesign.designSystem}
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className={`font-semibold text-gray-900 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t.proposal.uiUxDesign.colorPalette}
                    </h4>
                    <div className={`flex space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className="w-8 h-8 bg-blue-600 rounded"></div>
                      <div className="w-8 h-8 bg-pink-600 rounded"></div>
                      <div className="w-8 h-8 bg-white border rounded"></div>
                    </div>
                    <p className={`text-sm text-gray-600 mt-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t.proposal.uiUxDesign.colorDesc}
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className={`font-semibold text-gray-900 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t.proposal.uiUxDesign.typography}
                    </h4>
                    <p className={`text-sm text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t.proposal.uiUxDesign.typographyDesc}
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h4 className={`font-semibold text-gray-900 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t.proposal.uiUxDesign.accessibility}
                    </h4>
                    <p className={`text-sm text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t.proposal.uiUxDesign.accessibilityDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Workflow */}
      <section className="px-4 py-16 bg-indigo-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              {t.proposal.developmentWorkflow.title}
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-indigo-200"></div>
              <div className="space-y-12">
                {t.proposal.developmentWorkflow.phases.map((phase, index) => (
                  <div key={index} className="relative flex items-center">
                    <div className={`w-12 h-12 ${index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-green-500' : index === 2 ? 'bg-yellow-500' : index === 3 ? 'bg-purple-500' : 'bg-gray-500'} rounded-full flex items-center justify-center z-10`}>
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div className="ml-8 flex-1">
                      <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="mb-4">
                          <h3 className={`text-xl font-semibold text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`}>
                            {phase.phase}
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {phase.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className={`flex items-start space-x-2 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className={`text-gray-700 text-sm ${isRTL ? 'text-right' : 'text-left'}`}>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Information and Next Steps */}
      <section className="px-4 py-16 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t.proposal.contactNextSteps.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className={`text-2xl font-semibold mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.proposal.contactNextSteps.contactInformation}
                </h3>
                <div className="space-y-4">
                  <div className={`flex items-center space-x-3 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <span className="text-blue-400">📧</span>
                    <span>{t.proposal.contactNextSteps.email}</span>
                  </div>
                  <div className={`flex items-center space-x-3 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <span className="text-green-400">📱</span>
                    <span>{t.proposal.contactNextSteps.phone}</span>
                  </div>
                  <div className={`flex items-center space-x-3 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <span className="text-purple-400">🌐</span>
                    <span>{t.proposal.contactNextSteps.website}</span>
                  </div>
                  <div className={`flex items-center space-x-3 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <span className="text-yellow-400">💼</span>
                    <span>{t.proposal.contactNextSteps.linkedin}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className={`text-2xl font-semibold mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t.proposal.contactNextSteps.commitments}
                </h3>
                <div className="space-y-3">
                  {t.proposal.contactNextSteps.commitmentItems.map((commitment, index) => (
                    <div key={index} className={`flex items-center space-x-3 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className={`text-gray-300 ${isRTL ? 'text-right' : 'text-left'}`}>{commitment}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className={`text-2xl font-semibold mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t.proposal.contactNextSteps.nextSteps}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-center">
                    {t.proposal.contactNextSteps.step1}
                  </h4>
                  <p className="text-sm text-gray-400 text-center leading-relaxed">
                    {t.proposal.contactNextSteps.step1Desc}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-center">
                    {t.proposal.contactNextSteps.step2}
                  </h4>
                  <p className="text-sm text-gray-400 text-center leading-relaxed">
                    {t.proposal.contactNextSteps.step2Desc}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-center">
                    {t.proposal.contactNextSteps.step3}
                  </h4>
                  <p className="text-sm text-gray-400 text-center leading-relaxed">
                    {t.proposal.contactNextSteps.step3Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              {t.proposal.implementationTimeline.title}
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>
              <div className="space-y-12">
                {t.proposal.implementationTimeline.phases.map((phase, index) => (
                  <div key={index} className={`flex ${index % 2 === 0 ? (isRTL ? 'justify-end' : 'justify-start') : (isRTL ? 'justify-start' : 'justify-end')}`}>
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? (isRTL ? 'pl-8' : 'pr-8') : (isRTL ? 'pr-8' : 'pl-8')}`}>
                      <Card className="relative">
                        <div className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-primary-500 rounded-full ${index % 2 === 0 ? (isRTL ? '-left-2' : '-right-2') : (isRTL ? '-right-2' : '-left-2')}`}></div>
                        <CardHeader>
                          <div>
                            <CardTitle className={`text-primary-700 ${isRTL ? 'text-right' : 'text-left'}`}>
                              {phase.phase}
                            </CardTitle>
                          </div>
                          <CardDescription className={isRTL ? 'text-right' : 'text-left'}>
                            {phase.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-1">
                            {phase.tasks.map((task, taskIndex) => (
                              <li key={taskIndex} className={`text-sm text-gray-300 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                                <div className={`w-1.5 h-1.5 bg-primary-400 rounded-full ${isRTL ? 'ml-2' : 'mr-2'}`}></div>
                                <span className={isRTL ? 'text-right' : 'text-left'}>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="px-4 py-16 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold text-white mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.proposal.callToAction.title}
            </h2>
            <p className={`text-xl text-white/90 mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.proposal.callToAction.description}
            </p>
            {/* Buttons removed per request */}
          </div>
        </div>
      </section>


    </main>
  )
}