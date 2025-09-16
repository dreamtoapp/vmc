import { Translations } from './types'

export const aboutTranslations: Record<string, Pick<Translations, 'about'>> = {
  en: {
    about: {
      hero: {
        title: 'About DreamToApp',
        subtitle: 'DreamToApp',
        description: 'We are a modern development company specializing in healthcare technology solutions, combining technical expertise with deep industry understanding.'
      }
    }
  },
  ar: {
    about: {
      hero: {
        title: 'عن دريم تو آب',
        subtitle: 'دريم تو آب',
        description: 'نحن شركة تطوير حديثة متخصصة في حلول تقنية الرعاية الصحية، نجمع بين الخبرة التقنية والفهم العميق للصناعة.'
      }
    }
  }
}
