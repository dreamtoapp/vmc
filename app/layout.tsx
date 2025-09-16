import type { Metadata } from 'next'
import { Inter, Tajawal } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { ThemeProvider, ThemeBackground } from '@/components/ui/theme-toggle'
import Navigation from '@/components/navigation/Navigation'
import Image from 'next/image'

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
            {/* Global Header */}
            <Navigation />

            {children}

            {/* Global Footer */}
            <footer className="bg-gray-900 text-white px-4 py-12 mt-12">
              <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="flex items-center space-x-3 mb-4 md:mb-0">
                    <Image src="/dreamToApp-dark.svg" alt="DreamToApp" width={36} height={36} className="w-9 h-9" />
                    <span className="font-bold text-lg bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 bg-clip-text text-transparent">
                      DreamToApp
                    </span>
                  </div>
                  <div className="text-gray-400 text-sm">
                    © 2024 DreamToApp. All rights reserved.
                  </div>
                </div>
              </div>
            </footer>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}