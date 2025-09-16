# Internationalization (i18n) Structure

This directory contains the modular internationalization system for the healthcare proposal website.

## File Structure

```
lib/i18n/
├── types.ts          # TypeScript interfaces and types
├── index.ts          # Main export file that combines all modules
├── common.ts         # Common translations (nav, footer, etc.)
├── home.ts           # Homepage translations
├── proposal.ts       # Proposal page translations
├── about.ts          # About page translations
├── contact.ts        # Contact page translations
└── README.md         # This documentation
```

## Usage

### Importing Translations
```typescript
import { useLanguage } from '@/contexts/LanguageContext'

function MyComponent() {
  const { t, language, isRTL } = useLanguage()
  
  return (
    <h1 className={isRTL ? 'text-right' : 'text-left'}>
      {t.home.hero.title}
    </h1>
  )
}
```

### Adding New Translations

1. **Add types** to `types.ts`:
```typescript
export interface Translations {
  // ... existing interfaces
  newPage: {
    title: string
    description: string
  }
}
```

2. **Create translation file** (e.g., `lib/i18n/newPage.ts`):
```typescript
import { Translations } from './types'

export const newPageTranslations: Record<string, Pick<Translations, 'newPage'>> = {
  en: {
    newPage: {
      title: 'English Title',
      description: 'English description'
    }
  },
  ar: {
    newPage: {
      title: 'العنوان بالعربية',
      description: 'الوصف بالعربية'
    }
  }
}
```

3. **Update main index.ts**:
```typescript
import { newPageTranslations } from './newPage'

const translations: Record<Language, Translations> = {
  en: {
    ...commonTranslations.en,
    ...homeTranslations.en,
    ...newPageTranslations.en, // Add this line
    // ... other modules
  },
  ar: {
    ...commonTranslations.ar,
    ...homeTranslations.ar,
    ...newPageTranslations.ar, // Add this line
    // ... other modules
  }
}
```

## Benefits of Modular Structure

- ✅ **Maintainability**: Each page/section has its own translation file
- ✅ **Scalability**: Easy to add new pages without affecting existing ones
- ✅ **Team Collaboration**: Multiple developers can work on different translation files
- ✅ **Performance**: Only load translations needed for specific pages
- ✅ **Type Safety**: Full TypeScript support with proper interfaces
- ✅ **RTL Support**: Built-in right-to-left layout support for Arabic

## Language Support

- **English (en)**: Default language with LTR layout
- **Arabic (ar)**: Full RTL support with Tajawal font

## RTL Layout Implementation

The system automatically handles RTL layout:

```typescript
// In components
const { isRTL } = useLanguage()

// Conditional styling
className={`${isRTL ? 'text-right' : 'text-left'}`}
className={`${isRTL ? 'flex-row-reverse' : 'flex-row'}`}
```

## Best Practices

1. **Consistent Naming**: Use descriptive, hierarchical keys
2. **Group Related Content**: Keep related translations together
3. **Avoid Deep Nesting**: Keep translation structure flat when possible
4. **Use Semantic Keys**: Use meaningful names instead of generic ones
5. **Test Both Languages**: Always verify both English and Arabic versions
