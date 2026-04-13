import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

const WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET

export async function POST(req: NextRequest) {
  try {
    // Verify webhook secret if configured
    if (WEBHOOK_SECRET) {
      const secret = req.headers.get('x-sanity-webhook-secret')
      if (secret !== WEBHOOK_SECRET) {
        return NextResponse.json({ revalidated: false, error: 'Invalid secret' }, { status: 401 })
      }
    }

    const body = await req.json()
    const tag = body?._type
    if (tag) {
      revalidateTag(tag, 'default')
    }
    return NextResponse.json({ revalidated: true, tag })
  } catch {
    return NextResponse.json({ revalidated: false }, { status: 500 })
  }
}
