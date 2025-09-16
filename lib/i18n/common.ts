import { Translations } from './types'

export const commonTranslations: Record<string, Pick<Translations, 'nav' | 'common' | 'footer'>> = {
  en: {
    nav: {
      home: 'Home',
      proposal: 'Proposal',
      contact: 'Contact'
    },
    common: {
      company: 'DreamToApp',
      platform: 'VMS Healthcare Platform',
      client: 'Al-Elm Medical Company',
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      contactUs: 'Contact Us'
    },
    footer: {
      copyright: '© 2024 DreamToApp. Healthcare Innovation Delivered for Al-Elm Medical Company.'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      proposal: 'العرض',
      contact: 'اتصل بنا'
    },
    common: {
      company: 'دريم تو آب',
      platform: 'منصة VMS الصحية',
      client: 'شركة العلم الطبية',
      learnMore: 'اعرف المزيد',
      getStarted: 'ابدأ الآن',
      contactUs: 'تواصل معنا'
    },
    footer: {
      copyright: '© 2024 دريم تو آب. ابتكار صحي مُقدم لشركة العلم الطبية.'
    }
  }
}
