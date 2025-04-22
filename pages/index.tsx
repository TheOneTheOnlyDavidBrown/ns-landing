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
        <meta name="twitter:description" content="Discover, analyze, and trade seller-financed mortgage notes with NoteSleuth. Leading platform for note investors." />
        <link rel="canonical" href="https://notesleuth.com/" />
        <link rel="icon" href="/favicon.ico" />
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
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            An all in one platform for note investors, by note investors
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            At NoteSleuth, our mission is to streamline the secondary market for mortgage note investing. Our platform integrates advanced tools like public record mining, direct mail campaigns, and white-labeled intake websites to help you source, analyze, and trade mortgage notes with ease.
          </p>
          <p className="mt-4 text-lg text-gray-500">
            From lead generation to deal tracking and trade execution, NoteSleuth provides a comprehensive solution for investors. With features like skip tracing, engagement analytics, and funding assistance, we ensure a seamless experience from sourcing to closing.
          </p>
        </section>

        <section className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center">
            How NoteSleuth Solves Your Challenges
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Discover and Enrich Leads</h3>
              <p className="mt-4 text-gray-500">
                Identify and enrich potential leads with advanced data mining, skip tracing, and lead enrichment tools to ensure you have the most accurate and actionable information.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Streamline Communication</h3>
              <p className="mt-4 text-gray-500">
                Manage outreach with tools for direct mail, SMS campaigns, and engagement analytics, ensuring effective communication with leads and prospects.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Track Deals Seamlessly</h3>
              <p className="mt-4 text-gray-500">
                Monitor deal progress, manage tasks, and generate reports to keep your transactions on track from start to finish.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Facilitate Note Trading</h3>
              <p className="mt-4 text-gray-500">
                Execute trades, analyze market trends, and manage transactions with a platform designed for efficient note trading.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Secure Funding</h3>
              <p className="mt-4 text-gray-500">
                Access tailored funding solutions, connect with investors, and receive strategic advice to finance your deals effectively.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold">Ensure Deal Viability</h3>
              <p className="mt-4 text-gray-500">
                Perform due diligence, verify documents, assess risks, and ensure compliance to make informed investment decisions.
              </p>
            </div>
          </div>
          <div className="mt-12 bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-lg  text-gray-600">
              Missing a feature you need? <a href="/contact" className="text-blue-600 font-bold hover:underline">Contact us</a> and we'll work to add it for you!
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
