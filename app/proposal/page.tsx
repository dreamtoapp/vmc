'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navigation from '@/components/navigation/Navigation'
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
  SiSocketdotio
} from 'react-icons/si'
import { MdSecurity } from 'react-icons/md'

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
      {/* Navigation */}
      <Navigation />

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
                  <li className={`flex items-start space-x-3 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                    <span className={`text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t.proposal.executiveSummary.streamlinedManagement}
                    </span>
                  </li>
                  <li className={`flex items-start space-x-3 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                    <span className={`text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t.proposal.executiveSummary.realTimeAnalytics}
                    </span>
                  </li>
                  <li className={`flex items-start space-x-3 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                    <span className={`text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t.proposal.executiveSummary.mobileFirst}
                    </span>
                  </li>
                  <li className={`flex items-start space-x-3 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                    <span className={`text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t.proposal.executiveSummary.hipaaCompliant}
                    </span>
                  </li>
                </ul>
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
                      t.proposal.problemStatement.highMaintenance
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
                      t.proposal.problemStatement.inefficientWorkflows
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
                      t.proposal.problemStatement.limitedMobile
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
                      t.proposal.solution.realTimeUpdates
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
                      t.proposal.solution.trendAnalysis
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
                      t.proposal.solution.secureMessaging
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
                      t.proposal.solution.legacySupport
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
                      t.proposal.solution.complianceMonitoring
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
                      t.proposal.solution.disasterRecovery
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

      {/* Technology Stack */}
      <section className="px-4 py-16 bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold text-center text-white mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.proposal.technologyStack.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'React 19', category: 'Frontend', color: 'bg-blue-500' },
                { name: 'Next.js 15', category: 'Framework', color: 'bg-gray-700' },
                { name: 'TypeScript', category: 'Language', color: 'bg-blue-600' },
                { name: 'Tailwind CSS', category: 'Styling', color: 'bg-cyan-500' },
                { name: 'Node.js', category: 'Backend', color: 'bg-green-500' },
                { name: 'PostgreSQL', category: 'Database', color: 'bg-blue-700' },
                { name: 'AWS', category: 'Cloud', color: 'bg-orange-500' },
                { name: 'Docker', category: 'DevOps', color: 'bg-blue-400' },
                { name: 'Redis', category: 'Cache', color: 'bg-red-500' },
                { name: 'Nginx', category: 'Server', color: 'bg-green-600' },
                { name: 'GraphQL', category: 'API', color: 'bg-pink-500' },
                { name: 'Jest', category: 'Testing', color: 'bg-red-600' },
              ].map((tech, index) => (
                <div key={index} className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <div className={`w-12 h-12 ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <span className="text-white font-bold text-sm">
                      {tech.name.substring(0, 2)}
                    </span>
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">
                    {tech.name}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {tech.category}
                  </div>
                </div>
              ))}
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

      {/* Technology Stack */}
      <section className="px-4 py-16 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Modern Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className={`flex items-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center ${isRTL ? 'ml-3' : 'mr-3'}`}>
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-semibold text-blue-400 ${isRTL ? 'text-right' : 'text-left'}`}>Frontend Technologies</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Next.js 15+", desc: "App Router & Server Components", icon: SiNextdotjs },
                    { name: "TypeScript", desc: "Type-safe development", icon: SiTypescript },
                    { name: "Tailwind CSS", desc: "Utility-first styling", icon: SiTailwindcss },
                    { name: "Shadcn/ui", desc: "Component library", icon: SiReact },
                    { name: "React Query", desc: "Server state management", icon: SiReact },
                    { name: "React 19", desc: "Concurrent features", icon: SiReact }
                  ].map((tech, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <tech.icon className="text-lg text-blue-400" />
                      <div>
                        <div className="text-sm font-medium">{tech.name}</div>
                        <div className="text-xs text-gray-400">{tech.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className={`flex items-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center ${isRTL ? 'ml-3' : 'mr-3'}`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-semibold text-green-400 ${isRTL ? 'text-right' : 'text-left'}`}>Mobile Development</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "React Native", desc: "Cross-platform apps", icon: SiReact },
                    { name: "Expo", desc: "Development platform", icon: SiReact },
                    { name: "PWA", desc: "Progressive Web App", icon: SiNextdotjs },
                    { name: "Native Modules", desc: "Advanced functionality", icon: SiNodedotjs },
                    { name: "Push Notifications", desc: "Real-time alerts", icon: SiSocketdotio },
                    { name: "Offline Support", desc: "Cache & sync", icon: SiRedis }
                  ].map((tech, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <tech.icon className="text-lg text-green-400" />
                      <div>
                        <div className="text-sm font-medium">{tech.name}</div>
                        <div className="text-xs text-gray-400">{tech.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className={`flex items-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center ${isRTL ? 'ml-3' : 'mr-3'}`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-semibold text-purple-400 ${isRTL ? 'text-right' : 'text-left'}`}>Backend Infrastructure</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Node.js + Express", desc: "Server runtime", icon: SiNodedotjs },
                    { name: "PostgreSQL", desc: "Relational database", icon: SiPostgresql },
                    { name: "Prisma ORM", desc: "Database toolkit", icon: SiPrisma },
                    { name: "Redis", desc: "In-memory cache", icon: SiRedis },
                    { name: "JWT Auth", desc: "Secure authentication", icon: MdSecurity },
                    { name: "Microservices", desc: "Scalable architecture", icon: SiDocker }
                  ].map((tech, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <tech.icon className="text-lg text-purple-400" />
                      <div>
                        <div className="text-sm font-medium">{tech.name}</div>
                        <div className="text-xs text-gray-400">{tech.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className={`flex items-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center ${isRTL ? 'ml-3' : 'mr-3'}`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-semibold text-yellow-400 ${isRTL ? 'text-right' : 'text-left'}`}>AI & Machine Learning</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "OpenAI GPT-4", desc: "Intelligent consultations", icon: SiOpenai },
                    { name: "IBM Watson", desc: "Medical data analysis", icon: SiAmazon },
                    { name: "Azure AI", desc: "Predictive analytics", icon: SiAmazon },
                    { name: "Computer Vision", desc: "Image analysis", icon: SiOpenai },
                    { name: "NLP", desc: "Arabic text processing", icon: SiOpenai },
                    { name: "ML Models", desc: "Predictive healthcare", icon: SiGraphql }
                  ].map((tech, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <tech.icon className="text-lg text-yellow-400" />
                      <div>
                        <div className="text-sm font-medium">{tech.name}</div>
                        <div className="text-xs text-gray-400">{tech.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className={`flex items-center mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center ${isRTL ? 'ml-3' : 'mr-3'}`}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h3 className={`text-xl font-semibold text-red-400 ${isRTL ? 'text-right' : 'text-left'}`}>External Services & Integrations</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold mb-3 text-red-300 flex items-center">
                    <span className="mr-2">🗺️</span>
                    Location & Maps
                  </h4>
                  <div className="space-y-2">
                    <div className="text-sm">Google Maps API</div>
                    <div className="text-xs text-gray-400">Real-time location services</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-red-300 flex items-center">
                    <span className="mr-2">💳</span>
                    Payment Gateways
                  </h4>
                  <div className="space-y-2">
                    <div className="text-sm">Moyasar • PayTabs • STC Pay • Tamara</div>
                    <div className="text-xs text-gray-400">Multi-payment options</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-red-300 flex items-center">
                    <span className="mr-2">📞</span>
                    Communication
                  </h4>
                  <div className="space-y-2">
                    <div className="text-sm">Twilio • SendGrid • Socket.io</div>
                    <div className="text-xs text-gray-400">SMS, email, real-time chat</div>
                  </div>
                </div>
              </div>
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
                              <li key={taskIndex} className={`text-sm text-gray-600 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t.proposal.callToAction.scheduleConsultation}
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors">
                {t.proposal.callToAction.downloadPDF}
              </button>
            </div>
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