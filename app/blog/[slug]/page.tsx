import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getAllPosts, getPostBySlug, type BlogPost } from "@/lib/sanity";

// ── Category color map ──
const categoryColors: Record<string, string> = {
  Opportunity: "bg-orange",
  News: "bg-teal",
  Recap: "bg-charcoal",
  Announcement: "bg-teal-deep",
};

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ── Generate static params ──
export async function generateStaticParams() {
  try {
    const posts = await getAllPosts();
    return posts.map((post) => ({
      slug: post.slug.current,
    }));
  } catch {
    // Sanity not configured or no posts yet — return empty
    return [];
  }
}

// ── Generate metadata ──
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);

    if (!post) {
      return { title: "Post Not Found — The Hustle Collective" };
    }

    return {
      title: `${post.title} — The Hustle Collective`,
      description: post.excerpt || `Read ${post.title} on The Hustle Collective blog.`,
      openGraph: {
        title: `${post.title} — The Hustle Collective`,
        description: post.excerpt,
      },
    };
  } catch {
    return { title: "Blog — The Hustle Collective" };
  }
}

// ── Page component ──
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post: BlogPost | null = null;

  try {
    post = await getPostBySlug(slug);
  } catch {
    // Sanity fetch failed
  }

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero / Header ── */}
        <section className="relative bg-charcoal pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          {/* Decorative brace */}
          <div
            className="pointer-events-none absolute -left-20 top-8 hidden select-none text-teal opacity-[0.05] lg:block"
            aria-hidden="true"
            style={{
              fontFamily: "var(--font-display), Helvetica, sans-serif",
              fontWeight: 100,
              fontSize: "20rem",
              lineHeight: 0.8,
            }}
          >
            {"}"}
          </div>

          <div className="relative mx-auto max-w-[900px] px-6 md:px-12">
            {/* Back link */}
            <Link
              href="/blog"
              className="text-mono mb-8 inline-flex items-center gap-2 text-white/40 transition-colors duration-200 hover:text-orange"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="transition-transform duration-200 hover:-translate-x-1"
              >
                <path
                  d="M13 7H1M1 7L7 1M1 7L7 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to blog
            </Link>

            {/* Meta row */}
            <div className="mb-6 flex flex-wrap items-center gap-4">
              {post.category && (
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white ${categoryColors[post.category] || "bg-charcoal-light"}`}
                >
                  {post.category}
                </span>
              )}
              {post.publishedAt && (
                <span className="text-mono text-white/40">
                  {formatDate(post.publishedAt)}
                </span>
              )}
              {post.author && (
                <>
                  <span className="text-white/20" aria-hidden="true">
                    /
                  </span>
                  <span className="text-mono text-white/40">{post.author}</span>
                </>
              )}
            </div>

            {/* Title */}
            <h1 className="text-display text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-editorial mt-8 text-white/50 text-base md:text-lg">
                {post.excerpt}
              </p>
            )}
          </div>
        </section>

        {/* ── Body ── */}
        <section className="bg-off-white py-16 md:py-24">
          <div className="mx-auto max-w-[720px] px-6 md:px-12">
            {/* Asterisk separator */}
            <div className="mb-12 flex items-center gap-4" aria-hidden="true">
              <span className="text-orange text-xl">&#x2731;</span>
              <span className="h-px flex-1 bg-charcoal/10" />
              <span className="text-orange text-xl">&#x2731;</span>
            </div>

            {/* Body content placeholder */}
            <div className="text-editorial text-charcoal/70 text-base md:text-lg leading-relaxed">
              <p className="mb-6">
                Content from Sanity CMS will appear here.
              </p>
              <p className="text-charcoal/40 text-sm italic">
                This post&apos;s rich text body will be rendered using Portable
                Text once the full renderer is configured. For now, manage
                content in the{" "}
                <Link
                  href="/admin"
                  className="text-teal underline decoration-teal/30 underline-offset-4 transition-colors duration-200 hover:text-orange"
                >
                  Sanity Studio
                </Link>
                .
              </p>
            </div>

            {/* Bottom separator */}
            <div className="mt-16 flex items-center gap-4" aria-hidden="true">
              <span className="h-px flex-1 bg-charcoal/10" />
              <span className="text-orange text-xl">&#x2731;</span>
              <span className="h-px flex-1 bg-charcoal/10" />
            </div>

            {/* Back to blog */}
            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="text-mono inline-flex items-center gap-2 text-teal transition-colors duration-200 hover:text-orange"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform duration-200 group-hover:-translate-x-1"
                >
                  <path
                    d="M13 7H1M1 7L7 1M1 7L7 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back to all posts
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
