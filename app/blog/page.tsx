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

            {posts.length > 0 ? (
              <BlogGrid
                posts={posts}
                categoryColors={categoryColors}
                imageUrls={imageUrls}
              />
            ) : (
              <div className="py-20 text-center">
                <span className="text-blue text-4xl block mb-6" aria-hidden="true">&#x2731;</span>
                <p className="text-display text-2xl text-black/80 mb-4">No posts yet</p>
                <p className="text-editorial text-black/40 max-w-md mx-auto">
                  Blog posts will appear here once they&rsquo;re published in the CMS.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
