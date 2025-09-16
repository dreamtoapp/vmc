import { Language, Translations } from './types'
import { commonTranslations } from './common'
import { homeTranslations } from './home'
import { proposalTranslations } from './proposal'
import { aboutTranslations } from './about'
import { contactTranslations } from './contact'

// Combine all translation modules
const translations: Record<Language, Translations> = {
  en: {
    ...commonTranslations.en,
    ...homeTranslations.en,
    ...proposalTranslations.en,
    ...aboutTranslations.en,
    ...contactTranslations.en
  },
  ar: {
    ...commonTranslations.ar,
    ...homeTranslations.ar,
    ...proposalTranslations.ar,
    ...aboutTranslations.ar,
    ...contactTranslations.ar
  }
}

export type { Language, Translations }
export default translations
