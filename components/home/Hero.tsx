"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-charcoal">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/542473743_18394665373187915_4817825130762034475_n.jpg"
          alt="Live performer at Hockley Hustle"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:px-20">
        {/* Diagonal label */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-mono absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-white/60 hidden lg:block"
        >
          Events built for Nottingham
        </motion.span>

        {/* Main heading */}
        <div className="max-w-[90vw]">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
                delay: 0.2,
              }}
              className="text-display text-white text-[clamp(3rem,12vw,10rem)] leading-[0.85]"
            >
              The Hustle
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
                delay: 0.35,
              }}
              className="text-display text-white text-[clamp(3rem,12vw,10rem)] leading-[0.85]"
            >
              Collective
            </motion.h1>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-6 text-lg sm:text-xl font-light text-white/80 max-w-xl tracking-wide"
          >
            Art + Music + Good Times
          </motion.p>

          {/* Asterisk accent */}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.5, type: "spring" }}
            className="inline-block mt-4 text-orange text-3xl"
          >
            ✱
          </motion.span>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
        >
          <span className="text-mono text-white/50 text-[0.65rem]">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"
          />
        </motion.div>
      </div>

      {/* Bottom gradient edge */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-off-white to-transparent" />
    </section>
  );
}
