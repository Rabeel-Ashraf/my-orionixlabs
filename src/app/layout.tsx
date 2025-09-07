import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { AnimationProvider } from '@/components/providers/AnimationProvider';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import AnimatedBackground from '@/components/ui/AnimatedBackground';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: {
    default: 'Orionixlabs - Automation and Self Hosting Solutions',
    template: '%s | Orionixlabs',
  },
  description: 'Orionixlabs helps startups and enterprises in the UAE and globally migrate to secure, AI-driven and self-hosted platforms — faster, cheaper, safer.',
  keywords: ['AI Tools', 'Automation', 'Self-Hosting', 'SHaaS', 'Dubai', 'UAE', 'Enterprise Solutions'],
  authors: [{ name: 'Rabeel Ashraf', url: 'https://github.com/Rabeel-Ashraf' }],
  creator: 'Orionixlabs',
  publisher: 'Orionixlabs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://orionixlabs.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://orionixlabs.com',
    siteName: 'Orionixlabs',
    title: 'Orionixlabs - Automation and Self Hosting Solutions',
    description: 'Build systems that think, adapt, and protect. The future isn\'t coded… it\'s engineered.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Orionixlabs - Automation and Self Hosting Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orionixlabs - Automation and Self Hosting Solutions',
    description: 'Build systems that think, adapt, and protect. The future isn\'t coded… it\'s engineered.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Orionixlabs Automation and Self Hosting Solutions',
              url: 'https://orionixlabs.com',
              logo: 'https://orionixlabs.com/logo.png',
              description: 'Orionixlabs helps startups and enterprises in the UAE and globally migrate to secure, AI-driven and self-hosted platforms.',
              founder: {
                '@type': 'Person',
                name: 'Rabeel Ashraf',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Dubai',
                addressCountry: 'AE',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'orionixlabs@gmail.com',
                contactType: 'Customer Service',
              },
              sameAs: [
                'https://github.com/Rabeel-Ashraf',
                'https://www.linkedin.com/company/orionixlabs/',
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased`}>
        <ThemeProvider>
          <AnimationProvider>
            <div className="relative min-h-screen bg-white dark:bg-bg-dark text-neutral-900 dark:text-white">
              <AnimatedBackground />
              <Navigation />
              <main>{children}</main>
              <Footer />
            </div>
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
