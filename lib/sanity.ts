import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { apiVersion, dataset, projectId } from '@/sanity/env'

export const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const builder = client ? imageUrlBuilder(client) : null
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function sanityImageUrl(source: any): string {
  if (!builder || !source) return ''
  return builder.image(source).auto('format').url()
}

// ── GROQ Queries ──

export const allPostsQuery = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    category,
    excerpt,
    mainImage,
    author
  }
`

export const postBySlugQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    category,
    excerpt,
    mainImage,
    body[] {
      ...,
      _type == "image" => {
        ...,
        asset->
      }
    },
    author
  }
`

export const latestPostsQuery = `
  *[_type == "blogPost"] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    publishedAt,
    category,
    excerpt,
    mainImage,
    author
  }
`

export const postSlugsQuery = `
  *[_type == "blogPost" && defined(slug.current)].slug.current
`

// ── Helper Types ──

export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  category: 'Opportunity' | 'News' | 'Recap' | 'Announcement'
  excerpt: string
  mainImage?: {
    asset: { _ref: string }
    alt?: string
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any[]
  author?: string
}

// ── Helper Functions ──

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!client) return []
  return client.fetch<BlogPost[]>(allPostsQuery, {}, { next: { tags: ['blogPost'] } })
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!client) return null
  return client.fetch<BlogPost | null>(postBySlugQuery, { slug }, { next: { tags: ['blogPost'] } })
}

export async function getLatestPosts(): Promise<BlogPost[]> {
  if (!client) return []
  return client.fetch<BlogPost[]>(latestPostsQuery, {}, { next: { tags: ['blogPost'] } })
}

export async function getAllPostSlugs(): Promise<string[]> {
  if (!client) return []
  return client.fetch<string[]>(postSlugsQuery, {}, { next: { tags: ['blogPost'] } })
}

// ── Programme Queries ──

export const allProgrammesQuery = `
  *[_type == "programme"] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    tagline,
    descriptor,
    label,
    featured,
    hasContent,
    heroImage,
    intro,
    sections[] { title, body },
    pullQuote,
    speakers[] { name, role },
    galleryImages[] { asset->, alt },
    order
  }
`

export const programmeBySlugQuery = `
  *[_type == "programme" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    tagline,
    descriptor,
    label,
    featured,
    hasContent,
    heroImage,
    intro,
    sections[] { title, body },
    pullQuote,
    speakers[] { name, role },
    galleryImages[] { asset->, alt },
    order
  }
`

export const programmeSlugsQuery = `
  *[_type == "programme" && defined(slug.current)].slug.current
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface SanityProgramme {
  _id: string
  name: string
  slug: string
  tagline: string
  descriptor: string
  label: string
  featured: boolean
  hasContent: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  heroImage?: any
  intro?: string
  sections?: { title: string; body: string }[]
  pullQuote?: string
  speakers?: { name: string; role: string }[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  galleryImages?: any[]
  order?: number
}

export async function getAllProgrammes(): Promise<SanityProgramme[]> {
  if (!client) return []
  return client.fetch<SanityProgramme[]>(allProgrammesQuery, {}, { next: { tags: ['programme'] } })
}

export async function getProgrammeBySlugFromSanity(slug: string): Promise<SanityProgramme | null> {
  if (!client) return null
  return client.fetch<SanityProgramme | null>(programmeBySlugQuery, { slug }, { next: { tags: ['programme'] } })
}

export async function getAllProgrammeSlugs(): Promise<string[]> {
  if (!client) return []
  return client.fetch<string[]>(programmeSlugsQuery, {}, { next: { tags: ['programme'] } })
}
