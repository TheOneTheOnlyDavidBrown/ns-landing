import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="py-24 px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
        Discover & Trade Mortgage Notes
      </h1>
      <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl">
        Your all-in-one platform for lead generation, deal tracking, and note trading
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Button size="lg">Get Started</Button>
        <Button variant="outline" size="lg">Learn More</Button>
      </div>
    </section>
  )
}
