import { NextResponse } from 'next/server'
import Airtable from 'airtable'

const AIRTABLE_API_KEY = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY
const AIRTABLE_BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID
const AIRTABLE_TABLE_NAME = 'waitlist'

// Initialize Airtable
const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID!)
console.log()

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }
debugger
    // Submit to Airtable
    await base(AIRTABLE_TABLE_NAME!).create([{
        fields: {
            email
        }  
    }])

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to submit' }, { status: 500 })
  }
}
