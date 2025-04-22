import { Button } from "@/components/ui/button"
import  BannerImage  from "@/components/sections/BannerImage"

export function Hero() {
  return (
    <section className="pt-24 pb-8 mx-16 px-4 text-center flex">
      <div className="w-1/2">
      <BannerImage  />
      </div>
      <div className="px-8">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
        Discover & Trade Mortgage Notes
      </h1>
      <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl">
        Your all-in-one platform for lead generation, deal tracking, and note trading
      </p>
      <div className="mt-8 flex justify-center gap-4 w-full">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button size="lg" className="flex-shrink-0">Join Waitlist</Button>
      </div>
      </div>
    </section>
  )
}
