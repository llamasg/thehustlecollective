import { client } from '@/sanity/lib/client'

// Re-export the Sanity client for convenience
export { client }

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
    body,
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
  body?: unknown[]
  author?: string
}

// ── Helper Functions ──

export async function getAllPosts(): Promise<BlogPost[]> {
  return client.fetch<BlogPost[]>(allPostsQuery)
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return client.fetch<BlogPost | null>(postBySlugQuery, { slug })
}

export async function getLatestPosts(): Promise<BlogPost[]> {
  return client.fetch<BlogPost[]>(latestPostsQuery)
}
