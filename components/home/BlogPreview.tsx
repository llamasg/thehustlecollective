"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const placeholderPosts = [
  {
    title: "Hockley Hustle 2025 \u2014 Band Applications Open",
    date: "2025-03-15",
    category: "Opportunity",
    slug: "hockley-hustle-2025-applications",
  },
  {
    title: "Future Hustlers Mentorship \u2014 Applications Now Open",
    date: "2025-02-28",
    category: "Opportunity",
    slug: "future-hustlers-2025",
  },
  {
    title: "Green Hustle Plants Its 10,000th Tree",
    date: "2025-01-20",
    category: "News",
    slug: "green-hustle-10000-trees",
  },
];

export default function BlogPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-white border-t border-black/10">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        <div className="flex items-baseline justify-between mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-[11px] uppercase tracking-[0.2em] text-black/40"
          >
            News + Opportunities
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/blog"
              className="text-[11px] uppercase tracking-[0.2em] text-blue hover:text-black transition-colors"
            >
              View all &rarr;
            </Link>
          </motion.div>
        </div>

        <div className="divide-y divide-black/10">
          {placeholderPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1 + i * 0.08,
                duration: 0.5,
              }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-3 gap-x-6 py-6"
              >
                <span className="text-[11px] uppercase tracking-[0.15em] text-black/40 self-center">
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                  {" \u2014 "}
                  {post.category}
                </span>
                <span
                  className="lg:col-span-2 text-black group-hover:text-blue transition-colors duration-200 tracking-[-0.01em]"
                  style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)", fontWeight: 400 }}
                >
                  {post.title}
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
