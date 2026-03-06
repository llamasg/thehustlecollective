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

        {/* Featured hub card — large */}
        {featured && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
            className="mb-8"
          >
            <Link
              href={`/programmes/${featured.slug}`}
              className="group block relative"
            >
              <div className="relative aspect-[3/4] sm:aspect-[21/9] overflow-hidden">
                <Image
                  src={featured.heroImage}
                  alt={featured.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-14">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-white/60 mb-3">
                    {featured.label}
                  </span>
                  <span
                    className="block text-white transition-colors duration-200 group-hover:text-blue"
                    style={{
                      fontWeight: 700,
                      fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
                    }}
                  >
                    {featured.name}
                  </span>
                  <span className="block mt-3 text-sm sm:text-base text-white/60 max-w-xl leading-relaxed">
                    {featured.tagline}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Programme cards grid — compact */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {rest.map((programme, i) => (
            <motion.div
              key={programme.slug}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.25 + i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              }}
            >
              <Link
                href={`/programmes/${programme.slug}`}
                className="group block relative"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={programme.heroImage}
                    alt={programme.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>
                <div className="pt-3">
                  <span
                    className="block text-black group-hover:text-blue transition-colors duration-200 text-sm"
                    style={{ fontWeight: 600 }}
                  >
                    {programme.name}
                  </span>
                  <span className="block mt-0.5 text-[10px] uppercase tracking-[0.12em] text-black/35">
                    {programme.label}
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
