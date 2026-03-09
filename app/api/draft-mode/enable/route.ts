import { createClient } from 'next-sanity'
import { defineEnableDraftMode } from 'next-sanity/draft-mode'
import { apiVersion, dataset, projectId } from '@/sanity/env'

const token = process.env.SANITY_API_READ_TOKEN

const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
  stega: {
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  },
})

export const { GET } = defineEnableDraftMode({
  client: previewClient,
})
