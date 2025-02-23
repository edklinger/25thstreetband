import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '25th Street Band',
  description: 'Jazz Funk • Jazz Soul • West Coast Jazz - Global crossover jazz collaboration project based in London UK, featuring guest artists from around the world.',
  metadataBase: new URL('https://25thstreetband.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#0A192F'
      }
    ]
  },
  openGraph: {
    type: 'website',
    title: '25th Street Band',
    description: 'Jazz Funk • Jazz Soul • West Coast Jazz - Global crossover jazz collaboration project based in London UK, featuring guest artists from around the world.',
    url: 'https://25thstreetband.com',
    siteName: '25th Street Band',
    locale: 'en_US',
    images: [
      {
        url: '/25th-long-logo-1@2x.jpg',
        width: 1200,
        height: 630,
        alt: '25th Street Band Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '25th Street Band',
    description: 'Jazz Funk • Jazz Soul • West Coast Jazz - Global crossover jazz collaboration project based in London UK, featuring guest artists from around the world.',
    images: ['/25th-long-logo-1@2x.jpg'],
    creator: '@25thstreetband',
  },
  other: {
    'og:image:alt': '25th Street Band Logo',
    'og:site_name': '25th Street Band',
    'apple-mobile-web-app-title': '25th Street Band',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  )
}
