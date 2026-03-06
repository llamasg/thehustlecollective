import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getAllPosts, type BlogPost } from "@/lib/sanity";
import { urlFor } from "@/sanity/lib/image";
import BlogGrid from "./BlogGrid";

export const metadata: Metadata = {
  title: "Blog — The Hustle Collective",
  description:
    "Opportunities, news, recaps, and announcements from The Hustle Collective. Stay up to date with Nottingham's community festival network.",
  keywords: [
    "Hustle Collective blog",
    "Nottingham events news",
    "festival opportunities",
    "community events updates",
  ],
};

// ── Placeholder data for when Sanity has no posts yet ──
const placeholderPosts: BlogPost[] = [
  {
    _id: "placeholder-1",
    title: "Hockley Hustle 2026 — Call for Artists",
    slug: { current: "hockley-hustle-2026-call-for-artists" },
    publishedAt: "2026-02-15T10:00:00Z",
    category: "Opportunity",
    excerpt:
      "We're looking for talented artists, musicians, and performers to join our 2026 lineup. Applications are now open for all stages and venues.",
    author: "The Hustle Collective",
  },
  {
    _id: "placeholder-2",
    title: "Green Hustle Partners with Nottingham City Council",
    slug: { current: "green-hustle-partners-city-council" },
    publishedAt: "2026-02-01T09:00:00Z",
    category: "News",
    excerpt:
      "A new partnership to bring sustainable practices to every corner of the festival. Together, we're building a greener future for live events.",
    author: "The Hustle Collective",
  },
  {
    _id: "placeholder-3",
    title: "Young Hustlers 2025 — What a Night",
    slug: { current: "young-hustlers-2025-recap" },
    publishedAt: "2026-01-20T12:00:00Z",
    category: "Recap",
    excerpt:
      "Over 800 young creatives came together for a night of music, spoken word, and visual art. Here's everything that went down.",
    author: "The Hustle Collective",
  },
  {
    _id: "placeholder-4",
    title: "Hustle Cinematic Launch Event Announced",
    slug: { current: "hustle-cinematic-launch-event" },
    publishedAt: "2026-01-10T14:00:00Z",
    category: "Announcement",
    excerpt:
      "Mark your calendars. Our brand-new film and visual storytelling festival arrives in Nottingham this spring.",
    author: "The Hustle Collective",
  },
  {
    _id: "placeholder-5",
    title: "Volunteer with The Hustle Collective",
    slug: { current: "volunteer-with-hustle-collective" },
    publishedAt: "2025-12-15T10:00:00Z",
    category: "Opportunity",
    excerpt:
      "Join our team of dedicated volunteers and help make Nottingham's biggest community festivals happen. No experience needed — just enthusiasm.",
    author: "The Hustle Collective",
  },
  {
    _id: "placeholder-6",
    title: "Hockley Hustle Wins Community Impact Award",
    slug: { current: "hockley-hustle-community-impact-award" },
    publishedAt: "2025-12-01T11:00:00Z",
    category: "News",
    excerpt:
      "We're proud to announce that Hockley Hustle has been recognised for its outstanding contribution to community wellbeing in Nottingham.",
    author: "The Hustle Collective",
  },
];

// ── Category color map ──
const categoryColors: Record<string, string> = {
  Opportunity: "bg-blue",
  News: "bg-blue",
  Recap: "bg-black",
  Announcement: "bg-blue",
};

export default async function BlogPage() {
  let posts: BlogPost[] = [];

  try {
    posts = await getAllPosts();
  } catch {
    // Sanity fetch failed — fall through to placeholder
  }

  // Use placeholder data if no posts exist in Sanity
  if (!posts || posts.length === 0) {
    posts = placeholderPosts;
  }

  // Resolve image URLs server-side (can't pass urlFor function to client component)
  const imageUrls: Record<string, { featured: string; thumb: string }> = {};
  for (const post of posts) {
    if (post.mainImage?.asset) {
      try {
        imageUrls[post._id] = {
          featured: urlFor(post.mainImage).width(800).height(500).url(),
          thumb: urlFor(post.mainImage).width(600).height(400).url(),
        };
      } catch {
        // skip if image URL generation fails
      }
    }
  }

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative bg-black pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          {/* Decorative brace */}
          <div
            className="pointer-events-none absolute -right-16 -top-8 hidden select-none text-blue opacity-[0.06] lg:block"
            aria-hidden="true"
            style={{
              fontFamily: "var(--font-display), Helvetica, sans-serif",
              fontWeight: 100,
              fontSize: "28rem",
              lineHeight: 0.8,
            }}
          >
            {"{"}
          </div>

          <div className="relative mx-auto max-w-[1500px] px-6 md:px-12 lg:px-20">
            <span className="text-sm tracking-wide uppercase mb-6 block text-blue">
              &#x2731; Blog
            </span>
            <h1
              className="text-display text-4xl text-white sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl"
            >
              OPPORTUNITIES
              <br />
              <span className="text-blue">&amp;</span> NEWS
            </h1>
            <p className="text-editorial mt-8 max-w-lg text-white/50 text-base md:text-lg">
              Stay in the loop with festival announcements, creative
              opportunities, event recaps, and everything happening across The
              Hustle Collective network.
            </p>
          </div>
        </section>

        {/* ── Blog Grid ── */}
        <section className="bg-grey py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-6 md:px-12 lg:px-20">
            {/* Section label */}
            <div className="mb-16 flex items-center gap-4">
              <span className="text-sm tracking-wide uppercase text-black/40">All Posts</span>
              <span className="h-px flex-1 bg-black/10" />
              <span className="text-sm tracking-wide uppercase text-black/30">
                {posts.length} {posts.length === 1 ? "article" : "articles"}
              </span>
            </div>

            <BlogGrid
              posts={posts}
              categoryColors={categoryColors}
              imageUrls={imageUrls}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
