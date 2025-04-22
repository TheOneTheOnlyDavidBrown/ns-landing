import { Header } from "../components/layout/header"
import { Hero } from "@/components/sections/hero"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>NoteSleuth - Discover, Analyze & Trade Mortgage Notes</title>
        <meta name="description" content="The ultimate platform for discovering, analyzing, and trading seller-financed mortgage notes." />
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  )
}
