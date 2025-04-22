import '../styles/globals.css';
import type { AppProps } from 'next/app'
import { Header } from '@/components/layout/header'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>NoteSleuth - Discover & Trade Mortgage Notes</title>
        <meta name="description" content="Your all-in-one platform for lead generation, deal tracking, and note trading." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="mortgage notes, lead generation, deal tracking, note trading, seller financing, real estate investment, due diligence, note trading platform, mortgage note software" />
        <meta name="author" content="NoteSleuth" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta httpEquiv="Content-Language" content="en" />
        <link rel="canonical" href="https://notesleuth.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="NoteSleuth - Discover & Trade Mortgage Notes" />
        <meta property="og:description" content="Your all-in-one platform for lead generation, deal tracking, and note trading." />
        <meta property="og:image" content="/path-to-social-image.jpg" />
        <meta property="og:url" content="https://notesleuth.com" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NoteSleuth - Discover & Trade Mortgage Notes" />
        <meta name="twitter:description" content="Your all-in-one platform for lead generation, deal tracking, and note trading." />
        <meta name="twitter:image" content="/path-to-social-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "NoteSleuth",
              "url": "https://notesleuth.com",
              "description": "Your all-in-one platform for lead generation, deal tracking, and note trading.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://notesleuth.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
