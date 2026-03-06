import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
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
