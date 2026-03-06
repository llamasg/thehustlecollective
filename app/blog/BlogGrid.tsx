"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { BlogPost } from "@/lib/sanity";

interface BlogGridProps {
  posts: BlogPost[];
  categoryColors: Record<string, string>;
  imageUrls?: Record<string, { featured: string; thumb: string }>;
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function BlogGrid({
  posts,
  categoryColors,
  imageUrls,
}: BlogGridProps) {
  const [featured, ...rest] = posts;

  return (
    <div>
      {/* ── Featured Post ── */}
      {featured && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={cardVariants}
          custom={0}
          className="mb-16"
        >
          <Link
            href={`/blog/${featured.slug.current}`}
            className="group block"
          >
            <div className="border-b-2 border-black pb-10">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Featured image */}
                {imageUrls?.[featured._id]?.featured && (
                  <div className="relative aspect-[16/10] lg:aspect-auto lg:w-[400px] lg:shrink-0 overflow-hidden bg-black/5">
                    <Image
                      src={imageUrls[featured._id].featured}
                      alt={featured.mainImage?.alt || featured.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 400px"
                    />
                  </div>
                )}

                {/* Featured text */}
                <div className="flex-1">
                  <div className="mb-4 flex items-center gap-4">
                    {featured.category && (
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white ${categoryColors[featured.category] || "bg-black"}`}
                      >
                        {featured.category}
                      </span>
                    )}
                    {featured.publishedAt && (
                      <span className="text-sm tracking-wide uppercase text-black/40">
                        {formatDate(featured.publishedAt)}
                      </span>
                    )}
                  </div>
                  <h2 className="text-display text-3xl text-black transition-colors duration-300 group-hover:text-blue sm:text-4xl md:text-5xl">
                    {featured.title}
                  </h2>
                  {featured.excerpt && (
                    <p className="text-editorial mt-6 max-w-2xl text-black/60 text-base md:text-lg">
                      {featured.excerpt}
                    </p>
                  )}
                  <span className="text-sm tracking-wide uppercase mt-6 inline-flex items-center gap-2 text-blue transition-colors duration-200 group-hover:text-blue">
                    Read article
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      <path
                        d="M1 7H13M13 7L7 1M13 7L7 13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      )}

      {/* ── Remaining Posts ── */}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => {
            const isWide = i % 4 === 2;
            const imageUrl = imageUrls?.[post._id]?.thumb ?? null;

            return (
              <motion.div
                key={post._id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={cardVariants}
                custom={i + 1}
                className={isWide ? "lg:col-span-2" : ""}
              >
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="group block"
                >
                  <article className="border-t border-black/10 pt-6">
                    {/* Thumbnail */}
                    {imageUrl && (
                      <div className="relative aspect-[16/10] mb-4 overflow-hidden bg-black/5">
                        <Image
                          src={imageUrl}
                          alt={post.mainImage?.alt || post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes={isWide ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                        />
                      </div>
                    )}

                    <div className="mb-3 flex items-center gap-3">
                      {post.category && (
                        <span
                          className={`inline-block rounded-full px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-white ${categoryColors[post.category] || "bg-black"}`}
                        >
                          {post.category}
                        </span>
                      )}
                      {post.publishedAt && (
                        <span className="text-sm tracking-wide uppercase text-black/30">
                          {formatDate(post.publishedAt)}
                        </span>
                      )}
                    </div>

                    <h3
                      className={`text-display transition-colors duration-300 group-hover:text-blue ${
                        isWide
                          ? "text-xl sm:text-2xl md:text-3xl"
                          : "text-lg sm:text-xl md:text-2xl"
                      } text-black`}
                    >
                      {post.title}
                    </h3>

                    {post.excerpt && (
                      <p className="text-editorial mt-3 text-black/50 text-sm md:text-base line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}

                    <span className="text-sm tracking-wide uppercase mt-4 inline-flex items-center gap-2 text-blue/70 transition-colors duration-200 group-hover:text-blue">
                      Read more
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      >
                        <path
                          d="M1 7H13M13 7L7 1M13 7L7 13"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </article>
                </Link>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
