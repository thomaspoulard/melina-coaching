import '../utils/css/tailwind.css'
import '../utils/css/global.css'

import localFont from 'next/font/local'
import Header from '@/components/layout/Header'
import SectionContainer from '@/components/layout/SectionContainer'
import Footer from '@/components/layout/Footer'
import siteMetadata from 'src/utils/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'
import HeroBanner from '@/components/layout/HeroBanner'

const helveticaNeue = localFont({
  src: [
    {
      path: '../utils/fonts/HelveticaNeueLight.otf',
      weight: '300',
    },
    {
      path: '../utils/fonts/HelveticaNeueRegular.otf',
      weight: '400',
    },
    {
      path: '../utils/fonts/HelveticaNeueBold.otf',
      weight: '700',
    },
  ],
  variable: '--font-helvetica-neue',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
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
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.BASE_PATH || ''

  return (
    <html
      lang={siteMetadata.language}
      className={`${helveticaNeue.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link rel="apple-touch-icon" sizes="76x76" href={`${basePath}/static/favicons/logo.svg`} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${basePath}/static/favicons/logo.svg`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${basePath}/static/favicons/logo.svg`}
      />
      <link rel="manifest" href={`${basePath}/static/favicons/site.webmanifest`} />
      <link rel="icon" type="image/png" href={`${basePath}/static/favicons/logo.svg`} />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />
      <link
        rel="preload"
        fetchPriority="high"
        as="image"
        href={`${basePath}/static/hero_banner.jpg`}
        type="image/jpg"
      />
      <body className="text-black-950 bg-white antialiased">
        <ThemeProviders>
          <Header />
          <HeroBanner />
          <SectionContainer>
            <main className="mb-auto">{children}</main>
          </SectionContainer>
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  )
}
