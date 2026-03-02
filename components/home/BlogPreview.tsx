"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const placeholderPosts = [
  {
    title: "Hockley Hustle 2025 — Band Applications Open",
    date: "2025-03-15",
    category: "Opportunity",
    excerpt:
      "We're looking for bands, DJs, poets, and performers of all kinds for Hockley Hustle 2025. Apply now.",
    slug: "hockley-hustle-2025-applications",
  },
  {
    title: "Future Hustlers Mentorship — Applications Now Open",
    date: "2025-02-28",
    category: "Opportunity",
    excerpt:
      "Our promoter mentorship programme is back. 16 places. Learn from industry professionals.",
    slug: "future-hustlers-2025",
  },
  {
    title: "Green Hustle Plants Its 10,000th Tree",
    date: "2025-01-20",
    category: "News",
    excerpt:
      "A milestone for Nottingham's community-powered climate festival. Here's the story so far.",
    slug: "green-hustle-10000-trees",
  },
];

const categoryColors: Record<string, string> = {
  Opportunity: "bg-orange text-white",
  News: "bg-teal text-white",
  Recap: "bg-charcoal text-white",
  Announcement: "bg-teal-deep text-white",
};

export default function BlogPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-white">
      <div className="max-w-[1500px] mx-auto px-6 py-24 sm:px-12 lg:px-20 lg:py-32">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="text-mono text-charcoal/40 block mb-4"
            >
              ✱ What&apos;s happening
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-display text-[clamp(1.5rem,3vw,2.5rem)] text-charcoal"
            >
              Opportunities & News
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/blog"
              className="text-mono text-charcoal/60 hover:text-orange transition-colors inline-flex items-center gap-2"
            >
              View all <span>→</span>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-7 group"
          >
            <Link href={`/blog/${placeholderPosts[0].slug}`} className="block">
              <div className="relative aspect-[16/10] bg-orange/10 overflow-hidden mb-5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-mono text-orange/40 text-center px-4">
                    Featured image — {placeholderPosts[0].title}
                  </span>
                </div>
                <div className="absolute inset-0 bg-orange/0 group-hover:bg-orange/5 transition-colors duration-500" />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`text-mono px-3 py-1 text-[0.65rem] ${categoryColors[placeholderPosts[0].category] || "bg-charcoal/10"}`}
                >
                  {placeholderPosts[0].category}
                </span>
                <span className="text-mono text-charcoal/40">
                  {new Date(placeholderPosts[0].date).toLocaleDateString(
                    "en-GB",
                    { day: "numeric", month: "short", year: "numeric" }
                  )}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-charcoal group-hover:text-orange transition-colors tracking-tight leading-tight">
                {placeholderPosts[0].title}
              </h3>
              <p className="mt-3 text-charcoal/60 font-light text-base leading-relaxed max-w-xl">
                {placeholderPosts[0].excerpt}
              </p>
            </Link>
          </motion.article>

          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            {placeholderPosts.slice(1).map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                className="group border-t border-charcoal/10 pt-6"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-mono px-3 py-1 text-[0.65rem] ${categoryColors[post.category] || "bg-charcoal/10"}`}
                    >
                      {post.category}
                    </span>
                    <span className="text-mono text-charcoal/40">
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-charcoal group-hover:text-orange transition-colors tracking-tight leading-tight">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-charcoal/60 font-light text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
