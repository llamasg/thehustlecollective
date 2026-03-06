"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { festivals } from "@/data/festivals";

export default function FestivalCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="bg-white border-t border-black/10">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        <div className="flex items-baseline justify-between mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-[11px] uppercase tracking-[0.2em] text-black/40"
          >
            Our Festivals
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="text-[11px] uppercase tracking-[0.2em] text-black/40"
          >
            04 Projects
          </motion.p>
        </div>

        {/* Cargo-style 2x2 portfolio grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {festivals.map((festival, i) => (
            <motion.div
              key={festival.slug}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              }}
            >
              <Link
                href={`/festivals/${festival.slug}`}
                className="group block relative"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={festival.heroImage}
                    alt={`${festival.name} festival`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="pt-4">
                  <span
                    className="block text-black group-hover:text-blue transition-colors duration-200"
                    style={{ fontWeight: 700, fontSize: "1rem" }}
                  >
                    {festival.name}
                  </span>
                  <span className="block mt-1 text-[11px] uppercase tracking-[0.15em] text-black/40">
                    {festival.tagline}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
