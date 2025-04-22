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
          <section className="mt-8">

            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Discover and Enrich Leads */}
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Discover and Enrich Leads</h3>
                <p className="mt-4 text-gray-500">
                  Identify and enrich potential leads with advanced data mining, skip tracing, and lead enrichment tools to ensure you have the most accurate and actionable information.
                </p>
              </div>
              {/* Streamline Communication */}
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Streamline Communication</h3>
                <p className="mt-4 text-gray-500">
                  Manage outreach with tools for direct mail, SMS campaigns, and engagement analytics, ensuring effective communication with leads and prospects.
                </p>
              </div>
              {/* Track Deals Seamlessly */}
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Track Deals Seamlessly</h3>
                <p className="mt-4 text-gray-500">
                  Monitor deal progress, manage tasks, and generate reports to keep your transactions on track from start to finish.
                </p>
              </div>
              {/* Facilitate Note Trading */}
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Facilitate Note Trading</h3>
                <p className="mt-4 text-gray-500">
                  Execute trades, analyze market trends, and manage transactions with a platform designed for efficient note trading.
                </p>
              </div>
              {/* Secure Funding */}
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Secure Funding</h3>
                <p className="mt-4 text-gray-500">
                  Access tailored funding solutions, connect with investors, and receive strategic advice to finance your deals effectively (coming soon).
                </p>
              </div>
              {/* Ensure Deal Viability */}
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold">Ensure Deal Viability</h3>
                <p className="mt-4 text-gray-500">
                  Perform due diligence, verify documents, assess risks, and ensure compliance to make informed investment decisions.
                </p>
              </div>
            </div>
            {/* Full-width blurb */}
            <div className="mt-12 bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-lg text-gray-600">
                Missing a feature you need? <a href="/contact" className="text-blue-600 font-bold hover:underline">Contact us</a> and we'll work to add it for you!
              </p>
            </div>
          </section>
        </article>
      </main>
    </>
  )
}
