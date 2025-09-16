export type Language = 'en' | 'ar'

export interface Translations {
  // Navigation
  nav: {
    home: string
    proposal: string
    contact: string
  }

  // Common
  common: {
    company: string
    platform: string
    client: string
    learnMore: string
    getStarted: string
    contactUs: string
  }

  // Homepage
  home: {
    hero: {
      title: string
      subtitle: string
      description: string
      metrics: string
      presentedTo: string
      viewProposal: string
      getInTouch: string
    }
    overview: {
      title: string
      description: string
      marketOpportunity: string
      marketDescription: string
      modernTech: string
      techDescription: string
      roiProjection: string
      roiDescription: string
    }
    technology: {
      title: string
      subtitle: string
    }
    cta: {
      title: string
      description: string
      button: string
    }
  }

  // Proposal
  proposal: {
    hero: {
      title: string
      description: string
      submittedTo: string
      submittedBy: string
      proposalNumber: string
      date: string
      version: string
    }
    executiveSummary: {
      title: string
      marketOpportunity: string
      globalMarket: string
      globalMarketDesc: string
      digitalGap: string
      digitalGapDesc: string
      costReduction: string
      costReductionDesc: string
      keyValueProps: string
      streamlinedManagement: string
      realTimeAnalytics: string
      mobileFirst: string
      hipaaCompliant: string
    }
    problemStatement: {
      title: string
      legacySystems: string
      legacySystemsDesc: string
      dataSilos: string
      dataSilosDesc: string
      userExperience: string
      userExperienceDesc: string
      fragmentedData: string
      manualProcesses: string
      limitedIntegration: string
      highMaintenance: string
      isolatedInfo: string
      poorInteroperability: string
      duplicateData: string
      inefficientWorkflows: string
      outdatedInterfaces: string
      complexNavigation: string
      poorAccessibility: string
      limitedMobile: string
    }
    solution: {
      title: string
      description: string
      comprehensive: string
      comprehensiveDesc: string
      integrated: string
      integratedDesc: string
      scalable: string
      scalableDesc: string
      patientManagement: string
      patientManagementDesc: string
      analyticsDashboard: string
      analyticsDashboardDesc: string
      mobileApplication: string
      mobileApplicationDesc: string
      integrationHub: string
      integrationHubDesc: string
      securityFramework: string
      securityFrameworkDesc: string
      cloudInfrastructure: string
      cloudInfrastructureDesc: string
      completeProfiles: string
      medicalHistory: string
      appointmentScheduling: string
      realTimeUpdates: string
      performanceMetrics: string
      predictiveAnalytics: string
      customReports: string
      trendAnalysis: string
      touchOptimized: string
      offlineCapabilities: string
      pushNotifications: string
      secureMessaging: string
      apiFirst: string
      thirdPartyIntegrations: string
      dataSynchronization: string
      legacySupport: string
      endToEndEncryption: string
      roleBasedAccess: string
      auditLogging: string
      complianceMonitoring: string
      autoScaling: string
      uptimeGuarantee: string
      globalCDN: string
      disasterRecovery: string
    }
    platformComponents: {
      title: string
      patientApp: string
      patientAppDesc: string
      providerApp: string
      providerAppDesc: string
      adminDashboard: string
      adminDashboardDesc: string
    }
    technologyStack: {
      title: string
      frontend: string
      backend: string
      database: string
      infrastructure: string
      security: string
      monitoring: string
    }
    healthcareChallenges: {
      title: string
      currentChallenges: string
      healthcareAccess: string
      healthcareAccessItems: string[]
      specializedServices: string
      specializedServicesItems: string[]
      demographicOpportunities: string
      demographicChallenges: string
      demographicItems: string[]
      governmentSupport: string
      governmentItems: string[]
    }
    proposedSolution: {
      title: string
      businessModel: string
      businessModelDesc: string
      patients: string
      patientsDesc: string
      providers: string
      providersDesc: string
      coreFeatures: string
      coreFeaturesItems: string[]
      mainComponents: string
      patientApp: string
      patientAppDesc: string
      providerApp: string
      providerAppDesc: string
      adminDashboard: string
      adminDashboardDesc: string
    }
    marketAnalysis: {
      title: string
      currentMarket: string
      annualGrowth: string
      expectedSize: string
      smartphoneAdoption: string
      marketDrivers: string
      marketDriversItems: string[]
      targetCities: string
      phase1: string
      phase1Desc: string
      phase2: string
      phase2Desc: string
      phase3: string
      phase3Desc: string
    }
    corePlatformComponents: {
      title: string
      patientApplication: string
      patientAppFeatures: string[]
      serviceProviderApp: string
      providerAppFeatures: string[]
      managementDashboard: string
      adminFeatures: string[]
    }
    revenueModel: {
      title: string
      revenueSources: string
      commissionModel: string
      commissionItems: string[]
      saasSubscriptions: string
      saasItems: string[]
      financialProjections: string
      firstYearRevenue: string
      roi: string
      userGrowth: string
    }
    uiUxDesign: {
      title: string
      designPhilosophy: string
      philosophyItems: Array<{ title: string; desc: string }>
      designSystem: string
      colorPalette: string
      colorDesc: string
      typography: string
      typographyDesc: string
      accessibility: string
      accessibilityDesc: string
    }
    developmentWorkflow: {
      title: string
      phases: Array<{
        phase: string
        duration: string
        tasks: string[]
      }>
    }
    companyQualifications: {
      title: string
      aboutDreamToApp: string
      vision: string
      visionDesc: string
      mission: string
      missionDesc: string
      expertise: string
      expertiseItems: Array<{ title: string; desc: string }>
      previousProjects: string
      projectItems: string[]
    }
    riskManagement: {
      title: string
      risks: Array<{
        risk: string
        description: string
        mitigation: string
      }>
    }
    contactNextSteps: {
      title: string
      contactInformation: string
      email: string
      phone: string
      website: string
      linkedin: string
      commitments: string
      commitmentItems: string[]
      nextSteps: string
      step1: string
      step1Desc: string
      step2: string
      step2Desc: string
      step3: string
      step3Desc: string
    }
    implementationTimeline: {
      title: string
      phases: Array<{
        phase: string
        duration: string
        description: string
        tasks: string[]
      }>
    }
    appendices: {
      title: string
      appendicesItems: Array<{
        title: string
        subtitle: string
        description: string
        icon: string
      }>
      proposalInformation: string
      validFor: string
      validForDesc: string
      issueDate: string
      issueDateDesc: string
      proposalNumber: string
      proposalNumberDesc: string
      version: string
      versionDesc: string
    }
    callToAction: {
      title: string
      description: string
      scheduleConsultation: string
      downloadPDF: string
    }
    nextSteps: {
      title: string
      step1: string
      step2: string
      step3: string
      step4: string
    }
  }

  // About
  about: {
    hero: {
      title: string
      subtitle: string
      description: string
    }
  }

  // Contact
  contact: {
    hero: {
      title: string
      subtitle: string
      description: string
    }
    info: {
      title: string
      description: string
    }
    cta: {
      title: string
      description: string
      email: string
      call: string
    }
    details: {
      email: string
      phone: string
      website: string
      location: string
      hours: string
      company: string
      emailDesc: string
      phoneDesc: string
      websiteDesc: string
      locationDesc: string
      hoursDesc: string
      companyDesc: string
    }
  }

  // Footer
  footer: {
    copyright: string
  }
}
