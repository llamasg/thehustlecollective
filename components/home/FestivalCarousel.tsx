"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { festivals } from "@/data/festivals";

export default function FestivalCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="bg-charcoal text-white">
      <div className="max-w-[1500px] mx-auto px-6 py-20 sm:px-12 lg:px-20 lg:py-32">
        {/* Section header */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-mono text-white/40 block mb-4"
        >
          ✱ Our festivals
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-display text-[clamp(2rem,5vw,4rem)] mb-16 lg:mb-20"
        >
          Four festivals.
          <br />
          One collective.
        </motion.h2>

        {/* Festival cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          {festivals.map((festival, i) => (
            <motion.div
              key={festival.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              }}
            >
              <Link
                href={`/festivals/${festival.slug}`}
                className="group block relative overflow-hidden bg-charcoal-light"
              >
                {/* Card image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={festival.heroImage}
                    alt={`${festival.name} festival`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1500px) 50vw, 750px"
                  />
                  {/* Dark overlay that lightens on hover */}
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />

                  {/* Accent color bar at top */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 transition-all duration-500 group-hover:h-1.5"
                    style={{ backgroundColor: festival.accentColor }}
                  />

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                    {/* Year badge */}
                    <span className="text-mono text-white/50 text-[0.6rem] mb-2">
                      Est. {festival.established}
                    </span>

                    {/* Festival name */}
                    <h3 className="text-display text-[clamp(1.5rem,3.5vw,2.8rem)] text-white leading-[0.95] mb-2">
                      {festival.name}
                    </h3>

                    {/* Tagline */}
                    <p className="text-sm sm:text-base font-light text-white/60 italic mb-6 max-w-sm">
                      {festival.tagline}
                    </p>

                    {/* Stats row */}
                    <div className="flex items-center gap-6 mb-4">
                      {festival.stats.slice(0, 2).map((stat) => (
                        <div key={stat.label} className="flex items-baseline gap-2">
                          <span
                            className="text-display text-lg sm:text-xl"
                            style={{ color: festival.accentColor }}
                          >
                            {stat.value}
                          </span>
                          <span className="text-mono text-white/30 text-[0.55rem]">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-white/70 group-hover:text-white transition-colors duration-300">
                      <span className="text-mono text-[0.7rem]">Explore</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path
                          d="M1 7H13M13 7L7 1M13 7L7 13"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
