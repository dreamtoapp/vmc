import type { Metadata } from 'next'
import { Inter, Tajawal } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { ThemeProvider, ThemeBackground } from '@/components/ui/theme-toggle'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['200', '300', '400', '500', '700', '800', '900'],
  display: 'swap',
  variable: '--font-tajawal'
})

export const metadata: Metadata = {
  title: 'VMS Healthcare Platform Proposal - DreamToApp',
  description: 'Interactive showcase of the VMS Healthcare Platform proposal by DreamToApp for Al-Elm Medical Company',
  keywords: 'healthcare, platform, proposal, vms, al-elm, medical, dreamtoapp',
  authors: [{ name: 'DreamToApp' }],
  creator: 'DreamToApp',
  publisher: 'DreamToApp',
  robots: 'index, follow',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2E86AB' },
    { media: '(prefers-color-scheme: dark)', color: '#2E86AB' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${inter.variable} ${tajawal.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <ThemeBackground />
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}