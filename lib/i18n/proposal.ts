import { Translations } from './types'

export const proposalTranslations: Record<string, Pick<Translations, 'proposal'>> = {
  en: {
    proposal: {
      hero: {
        title: 'VMS Healthcare Platform Development Proposal',
        description: 'Comprehensive digital platform designed to transform healthcare in Saudi Arabia',
        submittedTo: 'Submitted to:',
        submittedBy: 'Submitted by:',
        proposalNumber: 'Proposal #2024-HC-001',
        date: 'December 2024',
        version: 'Version 1.0'
      },
      executiveSummary: {
        title: 'Executive Summary',
        marketOpportunity: 'Healthcare Market Opportunity',
        globalMarket: 'Global Healthcare Market',
        globalMarketDesc: 'Annual market size with 8.9% growth rate',
        digitalGap: 'Digital Adoption Gap',
        digitalGapDesc: 'Healthcare organizations lacking modern systems',
        costReduction: 'Cost Reduction Potential',
        costReductionDesc: 'Through digital transformation initiatives',
        keyValueProps: 'Key Value Propositions',
        streamlinedManagement: 'Streamlined patient management and care coordination',
        realTimeAnalytics: 'Real-time analytics and predictive insights',
        mobileFirst: 'Mobile-first design for healthcare professionals',
        hipaaCompliant: 'HIPAA-compliant security and data protection'
      },
      problemStatement: {
        title: 'Current Healthcare Challenges',
        legacySystems: 'Legacy Systems',
        legacySystemsDesc: 'Outdated technology hindering efficiency',
        dataSilos: 'Data Silos',
        dataSilosDesc: 'Isolated information systems',
        userExperience: 'User Experience Issues',
        userExperienceDesc: 'Poor interface design and accessibility',
        fragmentedData: 'Fragmented data across systems',
        manualProcesses: 'Manual processes causing delays',
        limitedIntegration: 'Limited integration capabilities',
        highMaintenance: 'High maintenance costs',
        isolatedInfo: 'Isolated information systems',
        poorInteroperability: 'Poor interoperability between systems',
        duplicateData: 'Duplicate data entry and storage',
        inefficientWorkflows: 'Inefficient workflows and processes',
        outdatedInterfaces: 'Outdated user interfaces',
        complexNavigation: 'Complex navigation and usability issues',
        poorAccessibility: 'Poor accessibility for diverse users',
        limitedMobile: 'Limited mobile support and responsiveness'
      },
      solution: {
        title: 'Our Comprehensive Solution',
        description: 'A comprehensive VMS Healthcare Platform that addresses all current challenges',
        comprehensive: 'Comprehensive Platform',
        comprehensiveDesc: 'End-to-end healthcare management solution',
        integrated: 'Fully Integrated',
        integratedDesc: 'Seamless integration with existing systems',
        scalable: 'Highly Scalable',
        scalableDesc: 'Built to grow with your organization',
        patientManagement: 'Patient Management',
        patientManagementDesc: 'Centralized patient information system',
        analyticsDashboard: 'Analytics Dashboard',
        analyticsDashboardDesc: 'Data-driven insights and reporting',
        mobileApplication: 'Mobile Application',
        mobileApplicationDesc: 'Healthcare professionals on-the-go',
        integrationHub: 'Integration Hub',
        integrationHubDesc: 'Seamless system connectivity',
        securityFramework: 'Security Framework',
        securityFrameworkDesc: 'HIPAA-compliant data protection',
        cloudInfrastructure: 'Cloud Infrastructure',
        cloudInfrastructureDesc: 'Scalable and reliable hosting',
        completeProfiles: 'Complete patient profiles',
        medicalHistory: 'Medical history tracking',
        appointmentScheduling: 'Appointment scheduling',
        realTimeUpdates: 'Real-time updates',
        performanceMetrics: 'Performance metrics',
        predictiveAnalytics: 'Predictive analytics',
        customReports: 'Custom reports',
        trendAnalysis: 'Trend analysis',
        touchOptimized: 'Touch-optimized interface',
        offlineCapabilities: 'Offline capabilities',
        pushNotifications: 'Push notifications',
        secureMessaging: 'Secure messaging',
        apiFirst: 'API-first architecture',
        thirdPartyIntegrations: 'Third-party integrations',
        dataSynchronization: 'Data synchronization',
        legacySupport: 'Legacy system support',
        endToEndEncryption: 'End-to-end encryption',
        roleBasedAccess: 'Role-based access',
        auditLogging: 'Audit logging',
        complianceMonitoring: 'Compliance monitoring',
        autoScaling: 'Auto-scaling capabilities',
        uptimeGuarantee: '99.9% uptime guarantee',
        globalCDN: 'Global CDN delivery',
        disasterRecovery: 'Disaster recovery'
      },
      platformComponents: {
        title: 'Core Platform Components',
        patientApp: 'Patient Mobile App',
        patientAppDesc: 'User-friendly mobile application for patients',
        providerApp: 'Provider Web Application',
        providerAppDesc: 'Comprehensive web platform for healthcare providers',
        adminDashboard: 'Administrative Dashboard',
        adminDashboardDesc: 'Advanced analytics and management tools'
      },
      technologyStack: {
        title: 'Modern Technology Stack',
        frontend: 'Frontend Technologies',
        backend: 'Backend Services',
        database: 'Database Systems',
        infrastructure: 'Cloud Infrastructure',
        security: 'Security & Compliance',
        monitoring: 'Monitoring & Analytics'
      },
      healthcareChallenges: {
        title: 'Problem Statement & Healthcare Challenges',
        currentChallenges: 'Current Challenges in Saudi Healthcare',
        healthcareAccess: 'Healthcare Access Difficulties',
        healthcareAccessItems: [
          'Difficulty accessing hospitals (especially elderly & chronic cases)',
          'Long waiting times at hospitals',
          'High transportation and mobility costs'
        ],
        specializedServices: 'Lack of Specialized Services',
        specializedServicesItems: [
          'No unified and reliable platform for home medical services',
          'Difficulty verifying service provider qualifications',
          'Unclear pricing upfront'
        ],
        demographicOpportunities: 'Demographic & Government Opportunities',
        demographicChallenges: 'Demographic Challenges',
        demographicItems: [
          'Rising elderly population (9% - 3.2M people)',
          'Chronic diseases: Diabetes 24%, Heart Disease 28%',
          'Rapid population growth (2.1% annual rate)'
        ],
        governmentSupport: 'Government Support',
        governmentItems: [
          'Vision 2030 digital healthcare transformation',
          'Government investments: 50 billion SAR',
          'Expansion of comprehensive health insurance'
        ]
      },
      proposedSolution: {
        title: 'Proposed Solution',
        businessModel: 'Business Model',
        businessModelDesc: 'Comprehensive digital platform operating as a marketplace model connecting:',
        patients: 'Patients:',
        patientsDesc: 'Individuals, families, elderly, chronic disease patients',
        providers: 'Healthcare Providers:',
        providersDesc: 'Doctors, nurses, physiotherapists, laboratory technicians',
        coreFeatures: 'Core Features',
        coreFeaturesItems: [
          'Instant or scheduled booking for medical services',
          'Verification of all qualifications and licenses',
          'Clear and upfront pricing',
          'Real-time provider tracking',
          'Transparent rating system',
          'Electronic medical records'
        ],
        mainComponents: 'Main Components',
        patientApp: 'Patient App',
        patientAppDesc: 'User-friendly interface for search and booking',
        providerApp: 'Provider App',
        providerAppDesc: 'Comprehensive dashboard for appointment management',
        adminDashboard: 'Admin Dashboard',
        adminDashboardDesc: 'Qualification verification and commission management'
      },
      marketAnalysis: {
        title: 'Market Analysis & Opportunities',
        currentMarket: 'Current Market Value',
        annualGrowth: 'Annual Growth Rate',
        expectedSize: 'Expected Size 2030',
        smartphoneAdoption: 'Smartphone Adoption',
        marketDrivers: 'Market Drivers',
        marketDriversItems: [
          'Vision 2030 support for digital healthcare transformation',
          'Rising elderly population (9% of population - 3.2M people)',
          'Prevalence of chronic diseases (Diabetes 24%, Heart Disease 28%)',
          'Government investments reaching 50 billion SAR'
        ],
        targetCities: 'Target Cities',
        phase1: 'Phase 1: Jeddah',
        phase1Desc: '3.8 million population',
        phase2: 'Phase 2: Riyadh, Dammam',
        phase2Desc: '7.5M + 2.5M population',
        phase3: 'Phase 3: Mecca, Medina',
        phase3Desc: '2.4M + 1.3M population'
      },
      corePlatformComponents: {
        title: 'Core Platform Components',
        patientApplication: 'Patient Application',
        patientAppFeatures: [
          'User-friendly interface for search and booking',
          'Real-time tracking system for service providers',
          'Comprehensive electronic medical record',
          'Multi-payment option system'
        ],
        serviceProviderApp: 'Service Provider Application',
        providerAppFeatures: [
          'Comprehensive appointment management dashboard',
          'Route optimization and scheduling system',
          'Electronic wallet for payments',
          'Detailed performance reports'
        ],
        managementDashboard: 'Management Dashboard',
        adminFeatures: [
          'Qualification and license verification system',
          'Commission and payment management',
          'Comprehensive market and performance analytics',
          'Complaint and review management system'
        ]
      },
      revenueModel: {
        title: 'Revenue Model & Financial Projections',
        revenueSources: 'Revenue Sources',
        commissionModel: 'Commission Model',
        commissionItems: [
          '15-20% commission on bookings',
          'Tiered system based on volume',
          '0-50 bookings: 20% | 200+ bookings: 15%'
        ],
        saasSubscriptions: 'SaaS Subscriptions',
        saasItems: [
          'Basic: 199 SAR/month',
          'Advanced: 399 SAR/month',
          'Premium: 699 SAR/month',
          'Enterprise: 1,299 SAR/month'
        ],
        financialProjections: 'Financial Projections',
        firstYearRevenue: 'Expected First Year Revenue',
        roi: 'ROI within 18 months',
        userGrowth: 'Monthly User Growth'
      },
      uiUxDesign: {
        title: 'UI/UX Design Philosophy',
        designPhilosophy: 'Design Philosophy',
        philosophyItems: [
          { title: 'Simplicity and Clarity', desc: 'Intuitive interface for users of all ages' },
          { title: 'Accessibility', desc: 'Design accessible to people with disabilities' },
          { title: 'Cultural Sensitivity', desc: 'Respecting Saudi values and traditions' },
          { title: 'Trust and Security', desc: 'Design that instills confidence in medical services' },
          { title: 'Responsiveness', desc: 'Adaptive design for all devices and screens' }
        ],
        designSystem: 'Design System',
        colorPalette: 'Color Palette',
        colorDesc: 'Medical blue (#2E86AB), health green (#A23B72), clean white',
        typography: 'Typography',
        typographyDesc: 'Noto Sans Arabic for Arabic text, Inter for English',
        accessibility: 'Accessibility',
        accessibilityDesc: 'WCAG 2.1 AA compliance, screen reader support'
      },
      developmentWorkflow: {
        title: 'Development Workflow',
        phases: [
          {
            phase: 'Phase 1: Planning and Analysis',
            duration: '4-6',
            tasks: ['Requirements analysis and research', 'System design and architecture', 'UI/UX design and prototyping']
          },
          {
            phase: 'Phase 2: Core Development',
            duration: '8-12',
            tasks: ['Environment setup and basic development', 'Core features development', 'Advanced features and integrations']
          },
          {
            phase: 'Phase 3: Testing and Optimization',
            duration: '4-6',
            tasks: ['Comprehensive testing', 'User testing and improvements', 'Production preparation']
          },
          {
            phase: 'Phase 4: Deployment and Launch',
            duration: '2-4',
            tasks: ['Gradual deployment', 'Full launch and monitoring']
          },
          {
            phase: 'Phase 5: Maintenance and Continuous Development',
            duration: 'Ongoing',
            tasks: ['Daily maintenance tasks', 'Continuous feature development']
          }
        ]
      },
      companyQualifications: {
        title: 'Company Qualifications & Experience',
        aboutDreamToApp: 'About DreamToApp',
        vision: 'Vision',
        visionDesc: 'To be the leading company in developing innovative technology solutions across various sectors in the Kingdom of Saudi Arabia and the Middle East region.',
        mission: 'Mission',
        missionDesc: 'Developing and providing innovative and secure technology solutions to enhance efficiency, productivity, and digital transformation across various industries.',
        expertise: 'Expertise',
        expertiseItems: [
          { title: 'Advanced Technical Expertise', desc: 'Team of highly experienced developers and designers' },
          { title: 'Healthcare Sector Experience', desc: 'Deep understanding of Saudi healthcare sector requirements' },
          { title: 'Partner Collaboration', desc: 'Strong partnerships with hospitals and healthcare service providers' },
          { title: 'Standards Compliance', desc: 'Commitment to international security and quality standards' }
        ],
        previousProjects: 'Previous Projects',
        projectItems: [
          'Hospital management systems development',
          'Mobile healthcare applications',
          'Electronic medical records systems',
          'Telemedicine consultation platforms'
        ]
      },
      riskManagement: {
        title: 'Risk Management',
        risks: [
          {
            risk: 'Technical Risks',
            description: 'Technical issues and system failures',
            mitigation: '24/7 specialized technical support team, multiple backup systems'
          },
          {
            risk: 'Financial Risks',
            description: 'Funding shortage or cost increases',
            mitigation: 'Multi-source funding plan, precise budget monitoring'
          },
          {
            risk: 'Market Risks',
            description: 'Intense competition and demand changes',
            mitigation: 'Quality differentiation, market trend monitoring'
          }
        ]
      },
      contactNextSteps: {
        title: 'Contact Information & Next Steps',
        contactInformation: 'Contact Information',
        email: 'dreamtoapp@gmail.com',
        phone: '0502699023',
        website: 'dreamto.app',
        linkedin: 'LinkedIn Profile',
        commitments: 'Our Commitments',
        commitmentItems: [
          'Project Delivery on Time',
          'High Quality Meeting International Standards',
          '3 Months Free Technical Support',
          'Client Team Training on the System',
          'Performance and Stability Guarantee'
        ],
        nextSteps: 'Next Steps',
        step1: 'Detailed Meeting',
        step1Desc: '2-3 hour presentation meeting',
        step2: 'Contract Preparation',
        step2Desc: 'Agreement on terms and legal review',
        step3: 'Project Initiation',
        step3Desc: '50% advance payment to start work'
      },
      implementationTimeline: {
        title: 'Implementation Timeline',
        phases: [
          {
            phase: 'Phase 1: Discovery & Planning',
            duration: 'Weeks 1-2',
            description: 'Requirements analysis, system architecture design, and project planning',
            tasks: ['Stakeholder interviews', 'System analysis', 'Technical specifications', 'Project roadmap']
          },
          {
            phase: 'Phase 2: Core Development',
            duration: 'Weeks 3-8',
            description: 'Backend infrastructure, database design, and core functionality development',
            tasks: ['Database setup', 'API development', 'Authentication system', 'Core modules']
          },
          {
            phase: 'Phase 3: Frontend & Integration',
            duration: 'Weeks 9-12',
            description: 'User interface development and system integrations',
            tasks: ['UI/UX implementation', 'Mobile application', 'Third-party integrations', 'Testing']
          },
          {
            phase: 'Phase 4: Testing & Deployment',
            duration: 'Weeks 13-16',
            description: 'Comprehensive testing, security audits, and production deployment',
            tasks: ['Quality assurance', 'Security testing', 'Performance optimization', 'Go-live support']
          }
        ]
      },
      appendices: {
        title: 'Appendices & Additional Resources',
        appendicesItems: [
          {
            title: 'Appendix A',
            subtitle: 'Comprehensive Technical Details',
            description: 'Detailed technical specifications, architecture diagrams, and system requirements',
            icon: '⚙️'
          },
          {
            title: 'Appendix B',
            subtitle: 'User Interface Designs',
            description: 'Wireframes, mockups, and interactive prototypes for all applications',
            icon: '🎨'
          },
          {
            title: 'Appendix C',
            subtitle: 'Competitor Analysis',
            description: 'Market research and competitive positioning analysis',
            icon: '📊'
          },
          {
            title: 'Appendix D',
            subtitle: 'Detailed Marketing Plan',
            description: 'Go-to-market strategy, user acquisition, and growth plans',
            icon: '📈'
          },
          {
            title: 'Appendix E',
            subtitle: 'Financial Feasibility Study',
            description: 'Detailed financial projections, cost analysis, and ROI calculations',
            icon: '💰'
          },
          {
            title: 'Appendix F',
            subtitle: 'Legal & Compliance Framework',
            description: 'Regulatory requirements, data protection, and healthcare compliance',
            icon: '⚖️'
          }
        ],
        proposalInformation: 'Proposal Information',
        validFor: 'Valid For:',
        validForDesc: '30 days from issue date',
        issueDate: 'Issue Date:',
        issueDateDesc: 'December 2024',
        proposalNumber: 'Proposal Number:',
        proposalNumberDesc: '#2024-HC-001',
        version: 'Version:',
        versionDesc: '1.0'
      },
      callToAction: {
        title: 'Ready to Transform Your Healthcare Organization?',
        description: 'Let\'s schedule a consultation to discuss how our VMS Healthcare Platform can address Al-Elm Medical Company\'s specific needs',
        scheduleConsultation: 'Schedule Consultation',
        downloadPDF: 'Download PDF Proposal'
      },
      nextSteps: {
        title: 'Next Steps & Timeline',
        step1: 'Initial Consultation & Requirements Gathering',
        step2: 'Detailed Project Planning & Architecture Design',
        step3: 'Development Team Assembly & Environment Setup',
        step4: 'Project Kickoff & Development Commencement'
      }
    }
  },
  ar: {
    proposal: {
      hero: {
        title: 'عرض تطوير منصة VMS الصحية',
        description: 'منصة رقمية شاملة مصممة لتحويل الرعاية الصحية في المملكة العربية السعودية',
        submittedTo: 'مقدم إلى:',
        submittedBy: 'مقدم من:',
        proposalNumber: 'عرض رقم #2024-HC-001',
        date: 'ديسمبر 2024',
        version: 'الإصدار 1.0'
      },
      executiveSummary: {
        title: 'الملخص التنفيذي',
        marketOpportunity: 'فرصة السوق الصحي',
        globalMarket: 'السوق الصحي العالمي',
        globalMarketDesc: 'حجم السوق السنوي مع معدل نمو 8.9%',
        digitalGap: 'فجوة التبني الرقمي',
        digitalGapDesc: 'منظمات الرعاية الصحية تفتقر إلى الأنظمة الحديثة',
        costReduction: 'إمكانية تقليل التكاليف',
        costReductionDesc: 'من خلال مبادرات التحول الرقمي',
        keyValueProps: 'القيم الأساسية المقترحة',
        streamlinedManagement: 'إدارة مبسطة للمرضى وتنسيق الرعاية',
        realTimeAnalytics: 'تحليلات فورية ورؤى تنبؤية',
        mobileFirst: 'تصميم يركز على الهواتف المحمولة لمقدمي الرعاية الصحية',
        hipaaCompliant: 'أمان متوافق مع معايير HIPAA وحماية البيانات'
      },
      problemStatement: {
        title: 'التحديات الصحية الحالية',
        legacySystems: 'الأنظمة القديمة',
        legacySystemsDesc: 'التكنولوجيا القديمة تعيق الكفاءة',
        dataSilos: 'جزر البيانات',
        dataSilosDesc: 'أنظمة معلومات معزولة',
        userExperience: 'مشاكل تجربة المستخدم',
        userExperienceDesc: 'تصميم واجهة ضعيف وإمكانية وصول محدودة',
        fragmentedData: 'بيانات مجزأة عبر الأنظمة',
        manualProcesses: 'عمليات يدوية تسبب التأخير',
        limitedIntegration: 'قدرات تكامل محدودة',
        highMaintenance: 'تكاليف صيانة عالية',
        isolatedInfo: 'أنظمة معلومات معزولة',
        poorInteroperability: 'قابلية تشغيل متبادل ضعيفة بين الأنظمة',
        duplicateData: 'إدخال وتخزين بيانات مكررة',
        inefficientWorkflows: 'سير عمل وعمليات غير فعالة',
        outdatedInterfaces: 'واجهات مستخدم قديمة',
        complexNavigation: 'مشاكل تنقل ومعالجة معقدة',
        poorAccessibility: 'إمكانية وصول ضعيفة للمستخدمين المتنوعين',
        limitedMobile: 'دعم محدود للهواتف المحمولة والاستجابة'
      },
      solution: {
        title: 'حلولنا الشاملة',
        description: 'منصة VMS الصحية الشاملة التي تعالج جميع التحديات الحالية',
        comprehensive: 'منصة شاملة',
        comprehensiveDesc: 'حل شامل لإدارة الرعاية الصحية من البداية للنهاية',
        integrated: 'متكامل بالكامل',
        integratedDesc: 'تكامل سلس مع الأنظمة الموجودة',
        scalable: 'قابل للتوسع بشكل كبير',
        scalableDesc: 'مبني لينمو مع منظمتك',
        patientManagement: 'إدارة المرضى',
        patientManagementDesc: 'نظام معلومات المرضى المركزي',
        analyticsDashboard: 'لوحة التحليلات',
        analyticsDashboardDesc: 'رؤى وإعداد تقارير مدفوعة بالبيانات',
        mobileApplication: 'التطبيق المحمول',
        mobileApplicationDesc: 'مقدمو الرعاية الصحية أثناء التنقل',
        integrationHub: 'مركز التكامل',
        integrationHubDesc: 'اتصال سلس بين الأنظمة',
        securityFramework: 'إطار الأمان',
        securityFrameworkDesc: 'حماية البيانات المتوافقة مع معايير HIPAA',
        cloudInfrastructure: 'البنية التحتية السحابية',
        cloudInfrastructureDesc: 'استضافة قابلة للتوسع وموثوقة',
        completeProfiles: 'ملفات مرضى كاملة',
        medicalHistory: 'تتبع التاريخ الطبي',
        appointmentScheduling: 'جدولة المواعيد',
        realTimeUpdates: 'تحديثات فورية',
        performanceMetrics: 'مقاييس الأداء',
        predictiveAnalytics: 'تحليلات تنبؤية',
        customReports: 'تقارير مخصصة',
        trendAnalysis: 'تحليل الاتجاهات',
        touchOptimized: 'واجهة محسنة للمس',
        offlineCapabilities: 'قدرات العمل دون اتصال',
        pushNotifications: 'إشعارات فورية',
        secureMessaging: 'رسائل آمنة',
        apiFirst: 'هندسة معمارية تركز على API',
        thirdPartyIntegrations: 'تكاملات الطرف الثالث',
        dataSynchronization: 'مزامنة البيانات',
        legacySupport: 'دعم الأنظمة القديمة',
        endToEndEncryption: 'تشفير من طرف لطرف',
        roleBasedAccess: 'وصول قائم على الأدوار',
        auditLogging: 'تسجيل التدقيق',
        complianceMonitoring: 'مراقبة الامتثال',
        autoScaling: 'قدرات التوسع التلقائي',
        uptimeGuarantee: 'ضمان وقت التشغيل 99.9%',
        globalCDN: 'توصيل CDN عالمي',
        disasterRecovery: 'استعادة الكوارث'
      },
      platformComponents: {
        title: 'مكونات المنصة الأساسية',
        patientApp: 'تطبيق المرضى المحمول',
        patientAppDesc: 'تطبيق محمول سهل الاستخدام للمرضى',
        providerApp: 'تطبيق مقدمي الخدمة',
        providerAppDesc: 'منصة ويب شاملة لمقدمي الرعاية الصحية',
        adminDashboard: 'لوحة الإدارة',
        adminDashboardDesc: 'أدوات تحليل وإدارة متقدمة'
      },
      technologyStack: {
        title: 'منصة تقنية حديثة',
        frontend: 'تقنيات الواجهة الأمامية',
        backend: 'خدمات الخادم الخلفي',
        database: 'أنظمة قواعد البيانات',
        infrastructure: 'البنية التحتية السحابية',
        security: 'الأمان والامتثال',
        monitoring: 'المراقبة والتحليلات'
      },
      healthcareChallenges: {
        title: 'بيان المشكلة والتحديات الصحية',
        currentChallenges: 'التحديات الحالية في الرعاية الصحية السعودية',
        healthcareAccess: 'صعوبات الوصول للرعاية الصحية',
        healthcareAccessItems: [
          'صعوبة الوصول للمستشفيات (خاصة كبار السن والحالات المزمنة)',
          'أوقات انتظار طويلة في المستشفيات',
          'تكاليف نقل وتنقل عالية'
        ],
        specializedServices: 'نقص الخدمات المتخصصة',
        specializedServicesItems: [
          'لا توجد منصة موحدة وموثوقة للخدمات الطبية المنزلية',
          'صعوبة التحقق من مؤهلات مقدمي الخدمة',
          'أسعار غير واضحة مسبقاً'
        ],
        demographicOpportunities: 'الفرص الديموغرافية والحكومية',
        demographicChallenges: 'التحديات الديموغرافية',
        demographicItems: [
          'تزايد السكان المسنين (9% - 3.2 مليون شخص)',
          'الأمراض المزمنة: السكري 24%، أمراض القلب 28%',
          'النمو السكاني السريع (معدل سنوي 2.1%)'
        ],
        governmentSupport: 'الدعم الحكومي',
        governmentItems: [
          'رؤية 2030 للتحول الرقمي في الرعاية الصحية',
          'استثمارات حكومية: 50 مليار ريال',
          'توسع التأمين الصحي الشامل'
        ]
      },
      proposedSolution: {
        title: 'الحل المقترح',
        businessModel: 'نموذج العمل',
        businessModelDesc: 'منصة رقمية شاملة تعمل كنموذج سوق يربط بين:',
        patients: 'المرضى:',
        patientsDesc: 'أفراد، عائلات، كبار السن، مرضى الأمراض المزمنة',
        providers: 'مقدمو الرعاية الصحية:',
        providersDesc: 'أطباء، ممرضات، أخصائيي العلاج الطبيعي، فنيي المختبرات',
        coreFeatures: 'الميزات الأساسية',
        coreFeaturesItems: [
          'حجز فوري أو مجدول للخدمات الطبية',
          'التحقق من جميع المؤهلات والتراخيص',
          'أسعار واضحة ومسبقة',
          'تتبع مقدمي الخدمة في الوقت الفعلي',
          'نظام تقييم شفاف',
          'السجلات الطبية الإلكترونية'
        ],
        mainComponents: 'المكونات الرئيسية',
        patientApp: 'تطبيق المرضى',
        patientAppDesc: 'واجهة سهلة الاستخدام للبحث والحجز',
        providerApp: 'تطبيق مقدمي الخدمة',
        providerAppDesc: 'لوحة تحكم شاملة لإدارة المواعيد',
        adminDashboard: 'لوحة الإدارة',
        adminDashboardDesc: 'التحقق من المؤهلات وإدارة العمولات'
      },
      marketAnalysis: {
        title: 'تحليل السوق والفرص',
        currentMarket: 'قيمة السوق الحالية',
        annualGrowth: 'معدل النمو السنوي',
        expectedSize: 'الحجم المتوقع 2030',
        smartphoneAdoption: 'اعتماد الهواتف الذكية',
        marketDrivers: 'دافعات السوق',
        marketDriversItems: [
          'دعم رؤية 2030 للتحول الرقمي في الرعاية الصحية',
          'تزايد السكان المسنين (9% من السكان - 3.2 مليون شخص)',
          'انتشار الأمراض المزمنة (السكري 24%، أمراض القلب 28%)',
          'استثمارات حكومية تصل إلى 50 مليار ريال'
        ],
        targetCities: 'المدن المستهدفة',
        phase1: 'المرحلة 1: جدة',
        phase1Desc: '3.8 مليون نسمة',
        phase2: 'المرحلة 2: الرياض، الدمام',
        phase2Desc: '7.5 مليون + 2.5 مليون نسمة',
        phase3: 'المرحلة 3: مكة، المدينة',
        phase3Desc: '2.4 مليون + 1.3 مليون نسمة'
      },
      corePlatformComponents: {
        title: 'مكونات المنصة الأساسية',
        patientApplication: 'تطبيق المرضى',
        patientAppFeatures: [
          'واجهة سهلة الاستخدام للبحث والحجز',
          'نظام تتبع في الوقت الفعلي لمقدمي الخدمة',
          'سجل طبي إلكتروني شامل',
          'نظام خيارات دفع متعددة'
        ],
        serviceProviderApp: 'تطبيق مقدمي الخدمة',
        providerAppFeatures: [
          'لوحة تحكم شاملة لإدارة المواعيد',
          'نظام تحسين المسارات والجدولة',
          'محفظة إلكترونية للمدفوعات',
          'تقارير أداء مفصلة'
        ],
        managementDashboard: 'لوحة الإدارة',
        adminFeatures: [
          'نظام التحقق من المؤهلات والتراخيص',
          'إدارة العمولات والمدفوعات',
          'تحليلات شاملة للسوق والأداء',
          'نظام إدارة الشكاوى والمراجعات'
        ]
      },
      revenueModel: {
        title: 'نموذج الإيرادات والتوقعات المالية',
        revenueSources: 'مصادر الإيرادات',
        commissionModel: 'نموذج العمولة',
        commissionItems: [
          'عمولة 15-20% على الحجوزات',
          'نظام متدرج حسب الحجم',
          '0-50 حجز: 20% | 200+ حجز: 15%'
        ],
        saasSubscriptions: 'اشتراكات SaaS',
        saasItems: [
          'أساسي: 199 ريال/شهر',
          'متقدم: 399 ريال/شهر',
          'مميز: 699 ريال/شهر',
          'مؤسسي: 1,299 ريال/شهر'
        ],
        financialProjections: 'التوقعات المالية',
        firstYearRevenue: 'الإيرادات المتوقعة للسنة الأولى',
        roi: 'عائد الاستثمار خلال 18 شهراً',
        userGrowth: 'نمو المستخدمين الشهري'
      },
      uiUxDesign: {
        title: 'فلسفة تصميم واجهة المستخدم',
        designPhilosophy: 'فلسفة التصميم',
        philosophyItems: [
          { title: 'البساطة والوضوح', desc: 'واجهة بديهية للمستخدمين من جميع الأعمار' },
          { title: 'إمكانية الوصول', desc: 'تصميم متاح للأشخاص ذوي الإعاقة' },
          { title: 'الحساسية الثقافية', desc: 'احترام القيم والتقاليد السعودية' },
          { title: 'الثقة والأمان', desc: 'تصميم يغرس الثقة في الخدمات الطبية' },
          { title: 'الاستجابة', desc: 'تصميم متكيف لجميع الأجهزة والشاشات' }
        ],
        designSystem: 'نظام التصميم',
        colorPalette: 'لوحة الألوان',
        colorDesc: 'أزرق طبي (#2E86AB)، أخضر صحي (#A23B72)، أبيض نظيف',
        typography: 'الطباعة',
        typographyDesc: 'Noto Sans Arabic للنصوص العربية، Inter للإنجليزية',
        accessibility: 'إمكانية الوصول',
        accessibilityDesc: 'امتثال WCAG 2.1 AA، دعم قارئات الشاشة'
      },
      developmentWorkflow: {
        title: 'سير عمل التطوير',
        phases: [
          {
            phase: 'المرحلة 1: التخطيط والتحليل',
            duration: '4-6',
            tasks: ['تحليل المتطلبات والبحث', 'تصميم النظام والهندسة المعمارية', 'تصميم واجهة المستخدم والنماذج الأولية']
          },
          {
            phase: 'المرحلة 2: التطوير الأساسي',
            duration: '8-12',
            tasks: ['إعداد البيئة والتطوير الأساسي', 'تطوير الميزات الأساسية', 'الميزات المتقدمة والتكاملات']
          },
          {
            phase: 'المرحلة 3: الاختبار والتحسين',
            duration: '4-6',
            tasks: ['اختبار شامل', 'اختبار المستخدمين والتحسينات', 'التحضير للإنتاج']
          },
          {
            phase: 'المرحلة 4: النشر والإطلاق',
            duration: '2-4',
            tasks: ['نشر تدريجي', 'إطلاق كامل ومراقبة']
          },
          {
            phase: 'المرحلة 5: الصيانة والتطوير المستمر',
            duration: 'مستمر',
            tasks: ['مهام الصيانة اليومية', 'تطوير الميزات المستمر']
          }
        ]
      },
      companyQualifications: {
        title: 'مؤهلات وخبرة الشركة',
        aboutDreamToApp: 'حول دريم تو آب',
        vision: 'الرؤية',
        visionDesc: 'أن نكون الشركة الرائدة في تطوير الحلول التقنية المبتكرة عبر مختلف القطاعات في المملكة العربية السعودية ومنطقة الشرق الأوسط.',
        mission: 'المهمة',
        missionDesc: 'تطوير وتقديم حلول تقنية مبتكرة وآمنة لتعزيز الكفاءة والإنتاجية والتحول الرقمي عبر مختلف الصناعات.',
        expertise: 'الخبرة',
        expertiseItems: [
          { title: 'خبرة تقنية متقدمة', desc: 'فريق من المطورين والمصممين ذوي الخبرة العالية' },
          { title: 'خبرة قطاع الرعاية الصحية', desc: 'فهم عميق لمتطلبات قطاع الرعاية الصحية السعودي' },
          { title: 'تعاون الشركاء', desc: 'شراكات قوية مع المستشفيات ومقدمي خدمات الرعاية الصحية' },
          { title: 'امتثال المعايير', desc: 'التزام بالمعايير الدولية للأمان والجودة' }
        ],
        previousProjects: 'المشاريع السابقة',
        projectItems: [
          'تطوير أنظمة إدارة المستشفيات',
          'تطبيقات الرعاية الصحية المحمولة',
          'أنظمة السجلات الطبية الإلكترونية',
          'منصات استشارات الطب عن بُعد'
        ]
      },
      riskManagement: {
        title: 'إدارة المخاطر',
        risks: [
          {
            risk: 'المخاطر التقنية',
            description: 'مشاكل تقنية وأعطال النظام',
            mitigation: 'فريق دعم تقني متخصص 24/7، أنظمة نسخ احتياطي متعددة'
          },
          {
            risk: 'المخاطر المالية',
            description: 'نقص التمويل أو زيادة التكاليف',
            mitigation: 'خطة تمويل متعددة المصادر، مراقبة دقيقة للميزانية'
          },
          {
            risk: 'المخاطر السوقية',
            description: 'منافسة شديدة وتغيرات الطلب',
            mitigation: 'تمييز الجودة، مراقبة اتجاهات السوق'
          }
        ]
      },
      contactNextSteps: {
        title: 'معلومات الاتصال والخطوات التالية',
        contactInformation: 'معلومات الاتصال',
        email: 'dreamtoapp@gmail.com',
        phone: '0502699023',
        website: 'dreamto.app',
        linkedin: 'ملف LinkedIn الشخصي',
        commitments: 'التزاماتنا',
        commitmentItems: [
          'تسليم المشروع في الوقت المحدد',
          'جودة عالية تلبي المعايير الدولية',
          'دعم فني مجاني لمدة 3 أشهر',
          'تدريب فريق العميل على النظام',
          'ضمان الأداء والاستقرار'
        ],
        nextSteps: 'الخطوات التالية',
        step1: 'اجتماع مفصل',
        step1Desc: 'اجتماع عرض مدته 2-3 ساعات',
        step2: 'إعداد العقد',
        step2Desc: 'الاتفاق على الشروط والمراجعة القانونية',
        step3: 'بدء المشروع',
        step3Desc: 'دفع 50% مقدماً لبدء العمل'
      },
      implementationTimeline: {
        title: 'الجدول الزمني للتنفيذ',
        phases: [
          {
            phase: 'المرحلة 1: الاكتشاف والتخطيط',
            duration: 'الأسابيع 1-2',
            description: 'تحليل المتطلبات، تصميم هندسة النظام، وتخطيط المشروع',
            tasks: ['مقابلات أصحاب المصلحة', 'تحليل النظام', 'المواصفات التقنية', 'خريطة طريق المشروع']
          },
          {
            phase: 'المرحلة 2: التطوير الأساسي',
            duration: 'الأسابيع 3-8',
            description: 'البنية التحتية للخادم الخلفي، تصميم قاعدة البيانات، وتطوير الوظائف الأساسية',
            tasks: ['إعداد قاعدة البيانات', 'تطوير API', 'نظام المصادقة', 'الوحدات الأساسية']
          },
          {
            phase: 'المرحلة 3: الواجهة الأمامية والتكامل',
            duration: 'الأسابيع 9-12',
            description: 'تطوير واجهة المستخدم وتكاملات النظام',
            tasks: ['تنفيذ UI/UX', 'التطبيق المحمول', 'تكاملات الطرف الثالث', 'الاختبار']
          },
          {
            phase: 'المرحلة 4: الاختبار والنشر',
            duration: 'الأسابيع 13-16',
            description: 'اختبار شامل، مراجعات أمنية، ونشر الإنتاج',
            tasks: ['ضمان الجودة', 'اختبار الأمان', 'تحسين الأداء', 'دعم الإطلاق']
          }
        ]
      },
      appendices: {
        title: 'الملاحق والموارد الإضافية',
        appendicesItems: [
          {
            title: 'الملحق أ',
            subtitle: 'التفاصيل التقنية الشاملة',
            description: 'مواصفات تقنية مفصلة، مخططات الهندسة المعمارية، ومتطلبات النظام',
            icon: '⚙️'
          },
          {
            title: 'الملحق ب',
            subtitle: 'تصاميم واجهة المستخدم',
            description: 'إطارات سلكية، نماذج أولية، ونماذج أولية تفاعلية لجميع التطبيقات',
            icon: '🎨'
          },
          {
            title: 'الملحق ج',
            subtitle: 'تحليل المنافسين',
            description: 'بحث السوق وتحليل الموضع التنافسي',
            icon: '📊'
          },
          {
            title: 'الملحق د',
            subtitle: 'خطة التسويق المفصلة',
            description: 'استراتيجية دخول السوق، اكتساب المستخدمين، وخطط النمو',
            icon: '📈'
          },
          {
            title: 'الملحق هـ',
            subtitle: 'دراسة الجدوى المالية',
            description: 'توقعات مالية مفصلة، تحليل التكاليف، وحسابات عائد الاستثمار',
            icon: '💰'
          },
          {
            title: 'الملحق و',
            subtitle: 'إطار قانوني وامتثالي',
            description: 'المتطلبات التنظيمية، حماية البيانات، والامتثال الصحي',
            icon: '⚖️'
          }
        ],
        proposalInformation: 'معلومات العرض',
        validFor: 'صالح لمدة:',
        validForDesc: '30 يوماً من تاريخ الإصدار',
        issueDate: 'تاريخ الإصدار:',
        issueDateDesc: 'ديسمبر 2024',
        proposalNumber: 'رقم العرض:',
        proposalNumberDesc: '#2024-HC-001',
        version: 'الإصدار:',
        versionDesc: '1.0'
      },
      callToAction: {
        title: 'مستعد لتحويل مؤسستك الصحية؟',
        description: 'دعنا نحدد استشارة لمناقشة كيف يمكن لمنصة VMS الصحية أن تعالج احتياجات شركة العلم الطبية المحددة',
        scheduleConsultation: 'جدولة استشارة',
        downloadPDF: 'تحميل عرض PDF'
      },
      nextSteps: {
        title: 'الخطوات التالية والجدولة الزمنية',
        step1: 'الاستشارة الأولية وجمع المتطلبات',
        step2: 'التخطيط التفصيلي للمشروع وتصميم الهندسة المعمارية',
        step3: 'تجميع فريق التطوير وإعداد البيئة',
        step4: 'بدء المشروع وبدء التطوير'
      }
    }
  }
}
