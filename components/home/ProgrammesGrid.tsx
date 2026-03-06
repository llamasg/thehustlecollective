"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { programmes } from "@/data/programmes";

export default function ProgrammesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const featured = programmes.find((p) => p.featured);
  const rest = programmes.filter((p) => !p.featured);

  return (
    <section ref={ref} className="bg-white border-t border-black/10">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        <div className="flex items-baseline justify-between mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-[11px] uppercase tracking-[0.2em] text-black/40"
          >
            Our Programmes
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="text-[11px] uppercase tracking-[0.2em] text-black/40"
          >
            {String(rest.length).padStart(2, "0")} Projects
          </motion.p>
        </div>

        {/* Featured hub card */}
        {featured && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
            className="mb-6"
          >
            <Link
              href={`/programmes/${featured.slug}`}
              className="group block relative"
            >
              <div className="relative aspect-[21/9] overflow-hidden">
                <Image
                  src={featured.heroImage}
                  alt={featured.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-white/60 mb-2">
                    {featured.label}
                  </span>
                  <span
                    className="block text-white text-2xl sm:text-3xl lg:text-4xl transition-colors duration-200 group-hover:text-blue"
                    style={{ fontWeight: 700 }}
                  >
                    {featured.name}
                  </span>
                  <span className="block mt-2 text-[11px] uppercase tracking-[0.15em] text-white/60 max-w-xl">
                    {featured.tagline}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Programme cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {rest.map((programme, i) => (
            <motion.div
              key={programme.slug}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.25 + i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              }}
            >
              <Link
                href={`/programmes/${programme.slug}`}
                className="group block relative"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={programme.heroImage}
                    alt={programme.name}
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
                    {programme.name}
                  </span>
                  <span className="block mt-1 text-[11px] uppercase tracking-[0.15em] text-black/40">
                    {programme.label} — {programme.tagline}
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
