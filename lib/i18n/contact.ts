import { Translations } from './types'

export const contactTranslations: Record<string, Pick<Translations, 'contact'>> = {
  en: {
    contact: {
      hero: {
        title: 'Get in Touch',
        subtitle: 'Touch',
        description: 'Ready to discuss the VMS Healthcare Platform for Al-Elm Medical Company? Let\'s start the conversation today.'
      },
      info: {
        title: 'Contact Information',
        description: 'Multiple ways to reach us for your project needs'
      },
      cta: {
        title: 'Ready to Start Your Project?',
        description: 'Contact us today to discuss your healthcare technology needs',
        email: 'Send Email',
        call: 'Call Now'
      },
      details: {
        email: 'Email',
        phone: 'Phone',
        website: 'Website',
        location: 'Location',
        hours: 'Business Hours',
        company: 'Company',
        emailDesc: 'Send us an email anytime',
        phoneDesc: 'Call us during business hours',
        websiteDesc: 'Visit our main website',
        locationDesc: 'Serving clients nationwide',
        hoursDesc: 'Saudi Arabia timezone',
        companyDesc: 'Healthcare Technology Solutions'
      }
    }
  },
  ar: {
    contact: {
      hero: {
        title: 'تواصل معنا',
        subtitle: 'تواصل',
        description: 'مستعد لمناقشة منصة VMS الصحية لشركة العلم الطبية؟ دعنا نبدأ المحادثة اليوم.'
      },
      info: {
        title: 'معلومات الاتصال',
        description: 'طرق متعددة للوصول إلينا لاحتياجات مشروعك'
      },
      cta: {
        title: 'مستعد لبدء مشروعك؟',
        description: 'تواصل معنا اليوم لمناقشة احتياجاتك التقنية الصحية',
        email: 'إرسال بريد إلكتروني',
        call: 'اتصل الآن'
      },
      details: {
        email: 'البريد الإلكتروني',
        phone: 'الهاتف',
        website: 'الموقع الإلكتروني',
        location: 'الموقع',
        hours: 'ساعات العمل',
        company: 'الشركة',
        emailDesc: 'أرسل لنا بريد إلكتروني في أي وقت',
        phoneDesc: 'اتصل بنا خلال ساعات العمل',
        websiteDesc: 'زر موقعنا الرئيسي',
        locationDesc: 'نخدم العملاء على مستوى البلاد',
        hoursDesc: 'التوقيت السعودي',
        companyDesc: 'حلول تقنية الرعاية الصحية'
      }
    }
  }
}
