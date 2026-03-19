import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { apiVersion, dataset, projectId } from '@/sanity/env'

export const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      stega: {
        studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
      },
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

// ── Draft-aware fetch helper ──

function fetchOptions(isDraft: boolean) {
  if (isDraft) {
    return {
      perspective: 'drafts' as const,
      useCdn: false,
      stega: true,
      token: process.env.SANITY_API_READ_TOKEN,
      next: { revalidate: 0 },
    }
  }
  return {}
}

// ── Helper Functions ──

export async function getAllPosts(isDraft = false): Promise<BlogPost[]> {
  if (!client) return []
  return client.fetch<BlogPost[]>(allPostsQuery, {}, { ...fetchOptions(isDraft), next: { tags: ['blogPost'], ...(isDraft ? { revalidate: 0 } : {}) } })
}

export async function getPostBySlug(slug: string, isDraft = false): Promise<BlogPost | null> {
  if (!client) return null
  return client.fetch<BlogPost | null>(postBySlugQuery, { slug }, { ...fetchOptions(isDraft), next: { tags: ['blogPost'], ...(isDraft ? { revalidate: 0 } : {}) } })
}

export async function getLatestPosts(isDraft = false): Promise<BlogPost[]> {
  if (!client) return []
  return client.fetch<BlogPost[]>(latestPostsQuery, {}, { ...fetchOptions(isDraft), next: { tags: ['blogPost'], ...(isDraft ? { revalidate: 0 } : {}) } })
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

export async function getAllProgrammes(isDraft = false): Promise<SanityProgramme[]> {
  if (!client) return []
  return client.fetch<SanityProgramme[]>(allProgrammesQuery, {}, { ...fetchOptions(isDraft), next: { tags: ['programme'], ...(isDraft ? { revalidate: 0 } : {}) } })
}

export async function getProgrammeBySlugFromSanity(slug: string, isDraft = false): Promise<SanityProgramme | null> {
  if (!client) return null
  return client.fetch<SanityProgramme | null>(programmeBySlugQuery, { slug }, { ...fetchOptions(isDraft), next: { tags: ['programme'], ...(isDraft ? { revalidate: 0 } : {}) } })
}

export async function getAllProgrammeSlugs(): Promise<string[]> {
  if (!client) return []
  return client.fetch<string[]>(programmeSlugsQuery, {}, { next: { tags: ['programme'] } })
}

// ── Festival Queries ──

export const allFestivalsQuery = `
  *[_type == "festival"] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    tagline,
    established,
    accentColor,
    accentColorLight,
    heroImage,
    intro,
    sections[] { title, body },
    pullQuote,
    stats[] { value, label },
    externalLink,
    galleryImages[] { asset->, alt },
    order
  }
`

export const festivalBySlugQuery = `
  *[_type == "festival" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    tagline,
    established,
    accentColor,
    accentColorLight,
    heroImage,
    intro,
    sections[] { title, body },
    pullQuote,
    stats[] { value, label },
    externalLink,
    galleryImages[] { asset->, alt },
    order
  }
`

export const festivalSlugsQuery = `
  *[_type == "festival" && defined(slug.current)].slug.current
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface SanityFestival {
  _id: string
  name: string
  slug: string
  tagline: string
  established: number
  accentColor?: { hex: string }
  accentColorLight?: { hex: string }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  heroImage?: any
  intro?: string
  sections?: { title: string; body: string }[]
  pullQuote?: string
  stats?: { value: string; label: string }[]
  externalLink?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  galleryImages?: any[]
  order?: number
}

export async function getAllFestivals(isDraft = false): Promise<SanityFestival[]> {
  if (!client) return []
  return client.fetch<SanityFestival[]>(allFestivalsQuery, {}, { ...fetchOptions(isDraft), next: { tags: ['festival'], ...(isDraft ? { revalidate: 0 } : {}) } })
}

export async function getFestivalBySlugFromSanity(slug: string, isDraft = false): Promise<SanityFestival | null> {
  if (!client) return null
  return client.fetch<SanityFestival | null>(festivalBySlugQuery, { slug }, { ...fetchOptions(isDraft), next: { tags: ['festival'], ...(isDraft ? { revalidate: 0 } : {}) } })
}

export async function getAllFestivalSlugs(): Promise<string[]> {
  if (!client) return []
  return client.fetch<string[]>(festivalSlugsQuery, {}, { next: { tags: ['festival'] } })
}

// ── Event Queries ──

export const eventsByProgrammeSlugQuery = `
  *[_type == "event" && programme->slug.current == $slug] | order(order asc) {
    _id,
    day,
    time,
    title,
    type,
    host,
    panelists[] { name, role },
    bookingRequired,
    eventbriteUrl,
    order
  }
`

export interface SanityEvent {
  _id: string
  day: string
  time: string
  title: string
  type: 'Workshop' | 'Panel' | 'Discussion' | '1-1 Sessions'
  host?: string
  panelists?: { name: string; role: string }[]
  bookingRequired?: boolean
  eventbriteUrl?: string
  order?: number
}

export async function getEventsByProgrammeSlug(slug: string, isDraft = false): Promise<SanityEvent[]> {
  if (!client) return []
  return client.fetch<SanityEvent[]>(eventsByProgrammeSlugQuery, { slug }, { ...fetchOptions(isDraft), useCdn: false, next: { tags: ['event'], revalidate: isDraft ? 0 : 60 } })
}
