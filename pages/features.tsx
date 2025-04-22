import Head from 'next/head'

export default function Features() {
  return (
    <>
      <Head>
        <title>Features - NoteSleuth | Mortgage Note Investment Tools</title>
        <meta name="description" content="Explore NoteSleuth's comprehensive features for mortgage note investing. Lead generation, due diligence, deal tracking, and trading tools all in one platform." />
        <meta name="keywords" content="mortgage note software, lead generation, due diligence tools, note trading platform, deal tracking" />
        <meta property="og:title" content="Features - NoteSleuth | Mortgage Note Investment Tools" />
        <meta property="og:description" content="Explore NoteSleuth's comprehensive features for mortgage note investing. Lead generation, due diligence, deal tracking, and trading tools all in one platform." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://notesleuth.com/features" />
      </Head>
      <main>
        <article className="container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Features
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Explore the powerful features of NoteSleuth, designed to help you discover, analyze, and trade mortgage notes efficiently.
          </p>
          <section className="mt-8 bg-gray-100 p-8 rounded-lg">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Key Features
            </h2>
            <ul className="mt-6 space-y-4 text-lg text-gray-500">
              <li><strong>LeadScout:</strong> Discover and enrich leads with data mining, skip tracing, and lead enrichment tools.</li>
              <li><strong>EngagementManager:</strong> Manage communications with direct mail, SMS campaigns, and engagement analytics.</li>
              <li><strong>DealTracker:</strong> Oversee deals with pipeline tracking, task management, and progress monitoring.</li>
              <li><strong>TradeMerchant:</strong> Facilitate trading with market analysis, transaction management, and deal exchanges.</li>
              <li><strong>Funding Assistance:</strong> Secure funding with tailored solutions and capital connections (coming soon).</li>
            </ul>
          </section>
        </article>
      </main>
    </>
  )
}
