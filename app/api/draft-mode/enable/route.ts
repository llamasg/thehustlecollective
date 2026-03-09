import { createClient } from 'next-sanity'
import { defineEnableDraftMode } from 'next-sanity/draft-mode'
import { apiVersion, dataset, projectId } from '@/sanity/env'

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  stega: {
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  },
})

const { GET: enableDraftMode } = defineEnableDraftMode({
  client: client.withConfig({
    token: process.env.SANITY_API_READ_TOKEN,
  }),
})

export async function GET(request: Request) {
  try {
    return await enableDraftMode(request)
  } catch (error) {
    console.error('Draft mode enable error:', error)
    const message = error instanceof Error ? error.message : 'Unknown error'
    return new Response(
      JSON.stringify({
        error: message,
        hasToken: !!process.env.SANITY_API_READ_TOKEN,
        projectId,
        dataset,
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
