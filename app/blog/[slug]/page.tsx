import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getAllPostSlugs, getPostBySlug, type BlogPost } from "@/lib/sanity";
import { urlFor } from "@/sanity/lib/image";

const categoryColors: Record<string, string> = {
  Opportunity: "bg-blue",
  News: "bg-blue",
  Recap: "bg-black",
  Announcement: "bg-blue",
};

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-display text-2xl sm:text-3xl text-black mt-12 mb-6">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-display text-xl sm:text-2xl text-black mt-10 mb-4">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-display text-lg sm:text-xl text-black mt-8 mb-3">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-editorial text-black/75 text-lg leading-[1.85] mb-6">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-10 border-l-[3px] border-blue py-2 pl-8">
        <p className="text-editorial text-xl italic leading-[1.6] text-blue">
          {children}
        </p>
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-black/90">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.href?.startsWith("http") ? "_blank" : undefined}
        rel={value?.href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="text-blue underline decoration-blue/30 underline-offset-4 transition-colors duration-200 hover:decoration-blue"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-6 space-y-2 pl-6 list-disc text-editorial text-black/70 text-lg leading-[1.85]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-6 space-y-2 pl-6 list-decimal text-editorial text-black/70 text-lg leading-[1.85]">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const imageUrl = urlFor(value).width(1200).url();
      return (
        <figure className="my-10">
          <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
            <Image
              src={imageUrl}
              alt={value.alt || ""}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-black/40">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

// ── Generate static params ──
export async function generateStaticParams() {
  try {
    const slugs = await getAllPostSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
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
      return { title: "Post Not Found - The Hustle Collective" };
    }

    const ogImage = post.mainImage?.asset
      ? urlFor(post.mainImage).width(1200).height(630).url()
      : undefined;

    return {
      title: `${post.title} - The Hustle Collective`,
      description: post.excerpt || `Read ${post.title} on The Hustle Collective blog.`,
      openGraph: {
        title: `${post.title} - The Hustle Collective`,
        description: post.excerpt,
        images: ogImage ? [ogImage] : undefined,
      },
    };
  } catch {
    return { title: "Blog - The Hustle Collective" };
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

  const heroImageUrl = post.mainImage?.asset
    ? urlFor(post.mainImage).width(1400).height(700).url()
    : null;

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero / Header ── */}
        <section className="relative bg-black pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          <div
            className="pointer-events-none absolute -left-20 top-8 hidden select-none text-blue opacity-[0.05] lg:block"
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
            <Link
              href="/blog"
              className="text-sm tracking-wide uppercase mb-8 inline-flex items-center gap-2 text-white/40 transition-colors duration-200 hover:text-blue"
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

            <div className="mb-6 flex flex-wrap items-center gap-4">
              {post.category && (
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white ${categoryColors[post.category] || "bg-black"}`}
                >
                  {post.category}
                </span>
              )}
              {post.publishedAt && (
                <span className="text-sm tracking-wide uppercase text-white/40">
                  {formatDate(post.publishedAt)}
                </span>
              )}
              {post.author && (
                <>
                  <span className="text-white/20" aria-hidden="true">
                    /
                  </span>
                  <span className="text-sm tracking-wide uppercase text-white/40">{post.author}</span>
                </>
              )}
            </div>

            <h1 className="text-display text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-editorial mt-8 text-white/50 text-base md:text-lg">
                {post.excerpt}
              </p>
            )}
          </div>
        </section>

        {/* ── Hero Image ── */}
        {heroImageUrl && (
          <section className="bg-grey">
            <div className="mx-auto max-w-[1100px]">
              <div className="relative aspect-[2/1] overflow-hidden">
                <Image
                  src={heroImageUrl}
                  alt={post.mainImage?.alt || post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1100px) 100vw, 1100px"
                  priority
                />
              </div>
            </div>
          </section>
        )}

        {/* ── Body ── */}
        <section className="bg-grey py-16 md:py-24">
          <div className="mx-auto max-w-[720px] px-6 md:px-12">
            <div className="mb-12 flex items-center gap-4" aria-hidden="true">
              <span className="text-blue text-xl">&#x2731;</span>
              <span className="h-px flex-1 bg-black/10" />
              <span className="text-blue text-xl">&#x2731;</span>
            </div>

            {/* Portable Text body */}
            {post.body && post.body.length > 0 ? (
              <div className="portable-text">
                <PortableText
                  value={post.body}
                  components={portableTextComponents}
                />
              </div>
            ) : (
              <div className="text-editorial text-black/70 text-base md:text-lg leading-relaxed">
                <p className="text-black/40 text-sm italic">
                  Content coming soon.
                </p>
              </div>
            )}

            <div className="mt-16 flex items-center gap-4" aria-hidden="true">
              <span className="h-px flex-1 bg-black/10" />
              <span className="text-blue text-xl">&#x2731;</span>
              <span className="h-px flex-1 bg-black/10" />
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="text-sm tracking-wide uppercase inline-flex items-center gap-2 text-blue transition-colors duration-200 hover:text-blue"
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
