import { Translations } from './types'

export const homeTranslations: Record<string, Pick<Translations, 'home'>> = {
  en: {
    home: {
      hero: {
        title: 'VMS Healthcare Platform Development Proposal',
        subtitle: 'Development Proposal',
        description: 'Comprehensive digital platform designed to transform healthcare in Saudi Arabia.',
        metrics: '450M+ SAR Market • 23% Annual Growth • 2.3M SAR Projected Revenue',
        presentedTo: 'Presented to:',
        viewProposal: 'View Proposal',
        getInTouch: 'Get in Touch'
      },
      overview: {
        title: 'Healthcare Innovation at Scale',
        description: 'Transforming healthcare delivery through cutting-edge technology solutions',
        marketOpportunity: 'Market Opportunity',
        marketDescription: '450M+ SAR market with 23% annual growth rate',
        modernTech: 'Modern Technology Stack',
        techDescription: 'Next.js 15 • React 19 • TypeScript • AI/ML Integration',
        roiProjection: 'ROI Projection',
        roiDescription: '2.3M SAR expected revenue with 180% ROI in 18 months'
      },
      technology: {
        title: 'Built with Modern Technology',
        subtitle: 'Cutting-edge technologies for superior performance'
      },
      cta: {
        title: 'Ready to Transform Healthcare?',
        description: 'Let\'s discuss how our VMS Healthcare Platform can revolutionize Al-Elm Medical Company',
        button: 'Start the Conversation'
      }
    }
  },
  ar: {
    home: {
      hero: {
        title: 'عرض تطوير منصة VMS الصحية',
        subtitle: 'عرض التطوير',
        description: 'منصة رقمية شاملة مصممة لتحويل الرعاية الصحية في المملكة العربية السعودية.',
        metrics: '450+ مليون ريال سوق • 23% نمو سنوي • 2.3 مليون ريال إيرادات متوقعة',
        presentedTo: 'مقدم لـ:',
        viewProposal: 'عرض العرض',
        getInTouch: 'تواصل معنا'
      },
      overview: {
        title: 'الابتكار الصحي على نطاق واسع',
        description: 'تحويل تقديم الرعاية الصحية من خلال حلول تقنية متطورة',
        marketOpportunity: 'فرصة السوق',
        marketDescription: 'سوق بقيمة 450+ مليون ريال مع معدل نمو سنوي 23%',
        modernTech: 'منصة تقنية حديثة',
        techDescription: 'Next.js 15 • React 19 • TypeScript • تكامل الذكاء الاصطناعي',
        roiProjection: 'توقعات العائد على الاستثمار',
        roiDescription: 'إيرادات متوقعة 2.3 مليون ريال مع عائد استثمار 180% في 18 شهراً'
      },
      technology: {
        title: 'مبني بتقنيات حديثة',
        subtitle: 'تقنيات متطورة لأداء متفوق'
      },
      cta: {
        title: 'مستعد لتحويل الرعاية الصحية؟',
        description: 'دعنا نناقش كيف يمكن لمنصة VMS الصحية أن تحدث ثورة في شركة العلم الطبية',
        button: 'ابدأ المحادثة'
      }
    }
  }
}
