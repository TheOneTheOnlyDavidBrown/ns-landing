import { Button } from "@/components/ui/button"
import BannerImage from "@/components/sections/BannerImage"
import { useState } from "react"

export function Hero() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Submission failed')
      }

      setStatus('success')
      setEmail('')
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <section className="pt-24 pb-8 mx-16 px-4 text-center flex">
      <div className="w-1/2">
        <BannerImage />
      </div>
      <div className="px-8">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Discover & Trade Mortgage Notes
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl">
          Your all-in-one platform for lead generation, deal tracking, and note trading
        </p>
        <form onSubmit={handleSubmit} className="mt-8 flex justify-center gap-4 w-full">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button 
            type="submit" 
            size="lg" 
            className="flex-shrink-0"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Submitting...' : 'Join Waitlist'}
          </Button>
        </form>
        {status === 'success' && (
          <p className="mt-2 text-green-600">Thanks for joining the waitlist!</p>
        )}
        {status === 'error' && (
          <p className="mt-2 text-red-600">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  )
}
