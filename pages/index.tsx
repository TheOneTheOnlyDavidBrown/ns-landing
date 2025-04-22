import { Header } from "../components/layout/header"
import { Hero } from "@/components/sections/hero"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>NoteSleuth - Revolutionizing Mortgage Note Investing</title>
        <meta name="description" content="Discover, analyze, and trade seller-financed mortgage notes with NoteSleuth. Empowering investors with cutting-edge tools for sourcing, due diligence, and seamless transactions." />
        <meta name="keywords" content="mortgage notes, note investing, seller financing, real estate investment, due diligence, note trading" />
        <meta property="og:title" content="NoteSleuth - Revolutionizing Mortgage Note Investing" />
        <meta property="og:description" content="Discover, analyze, and trade seller-financed mortgage notes with NoteSleuth. Empowering investors with cutting-edge tools for sourcing, due diligence, and seamless transactions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://notesleuth.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NoteSleuth - Revolutionizing Mortgage Note Investing" />
        <meta name="twitter:description" content="Discover, analyze, and trade seller-financed mortgage notes with NoteSleuth. Leading platform for note investors." />
        {/* Canonical tag */}
        <link rel="canonical" href="https://notesleuth.com/" />
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
              "description": "Discover, analyze, and trade seller-financed mortgage notes with NoteSleuth. Empowering investors with cutting-edge tools for sourcing, due diligence, and seamless transactions.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://notesleuth.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </Head>
      <main className="mb-8">
        <Hero />
        <section className="container mx-auto py-16 px-4 bg-white rounded-lg shadow-md">
          {/* Use h1 for main heading */}
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Empowering Mortgage Note Investors
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            At NoteSleuth, our mission is to streamline the secondary market for mortgage note investing. Our platform integrates advanced tools like public record mining, direct mail campaigns, and white-labeled intake websites to help you source, analyze, and trade mortgage notes with ease.
          </p>
          <p className="mt-4 text-lg text-gray-500">
            From lead generation to deal tracking and trade execution, NoteSleuth provides a comprehensive solution for investors. With features like skip tracing, engagement analytics, and funding assistance, we ensure a seamless experience from sourcing to closing.
          </p>
        </section>
      </main>
    </>
  )
}
