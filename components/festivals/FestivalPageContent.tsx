"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { type Festival, festivals } from "@/data/festivals";

// ── Animation config ──
const ease = [0.25, 0.46, 0.45, 0.94] as const;

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease },
  },
};

const slideUp = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.9, ease },
  },
};

// ── Hero Section ──
function HeroSection({ festival }: { festival: Festival }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.5, 0.8]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src={festival.heroImage}
          alt={`${festival.name} festival`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      <div
        className="absolute inset-0 mix-blend-multiply opacity-15"
        style={{ backgroundColor: festival.accentColor }}
      />

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.7, ease }}
        className="absolute top-24 right-6 z-10 text-right sm:top-28 sm:right-10 lg:top-32 lg:right-16"
      >
        <span className="text-mono text-white/50">Est.</span>
        <span className="text-display mt-1 block text-5xl text-white/90 sm:text-6xl lg:text-7xl">
          {festival.established}
        </span>
      </motion.div>

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 sm:px-12 lg:px-20 lg:pb-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={fadeIn}
            className="mb-6 block text-2xl"
            style={{ color: festival.accentColor }}
          >
            *
          </motion.span>

          <div className="overflow-hidden">
            <motion.h1
              variants={slideUp}
              className="text-display text-white text-[clamp(3.5rem,14vw,12rem)] leading-[0.85]"
            >
              {festival.name.split(" ")[0]}
            </motion.h1>
          </div>
          {festival.name.split(" ").length > 1 && (
            <div className="overflow-hidden">
              <motion.h1
                variants={slideUp}
                className="text-display text-white text-[clamp(3.5rem,14vw,12rem)] leading-[0.85]"
              >
                {festival.name.split(" ").slice(1).join(" ")}
              </motion.h1>
            </div>
          )}

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg font-light tracking-wide text-white/70 sm:text-xl lg:text-2xl"
          >
            {festival.tagline}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 right-8 hidden flex-col items-center gap-2 lg:flex"
        >
          <span className="text-mono text-white/40 text-[0.65rem]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-grey to-transparent" />
    </section>
  );
}

// ── Editorial Article Section ──
function EditorialArticle({ festival }: { festival: Festival }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  const getImageForIndex = (index: number): string | undefined => {
    if (festival.galleryImages.length === 0) return undefined;
    if (index >= festival.galleryImages.length) return undefined;
    return festival.galleryImages[index];
  };

  // Insert pull quote after first section if 2 sections, after second if 3+
  const pullQuoteAfter = festival.sections.length >= 3 ? 1 : 0;

  return (
    <section ref={ref} className="relative bg-grey overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-12 lg:px-20 lg:py-40">
        {/* Intro line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="mb-20 max-w-3xl"
        >
          <p
            className="text-editorial text-black/90 leading-[1.4] tracking-[-0.01em]"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400 }}
          >
            {festival.intro}
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="mb-24"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-12 gap-x-10 sm:gap-x-16 max-w-3xl mx-auto">
            {festival.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.06, ease }}
                className="group text-center"
              >
                <span
                  className="text-display block text-[clamp(2rem,4vw,3rem)] leading-none"
                  style={{ color: festival.accentColor }}
                >
                  {stat.value}
                </span>
                <span className="text-mono mt-2 block text-black/50">
                  {stat.label}
                </span>
                <div
                  className="mx-auto mt-3 h-px w-12 transition-all duration-500 group-hover:w-20"
                  style={{ backgroundColor: festival.accentColor, opacity: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="mb-20 flex items-center gap-4" aria-hidden="true">
          <span style={{ color: festival.accentColor }} className="text-xl">*</span>
          <span className="h-px flex-1 bg-black/10" />
        </div>

        {/* Editorial sections with interspersed images */}
        <div className="max-w-3xl mx-auto">
          {festival.sections.map((section, i) => (
            <div key={section.title}>
              {/* Section content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease }}
                className="mb-16"
              >
                <span className="text-mono mb-6 block text-black/40">
                  * {section.title}
                </span>
                <div className="space-y-6">
                  {section.body.split("\n\n").map((paragraph, pi) => (
                    <p
                      key={pi}
                      className="text-editorial text-black/75 text-lg leading-[1.85] sm:text-xl sm:leading-[1.85]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Pull quote after designated section */}
              {festival.pullQuote && i === pullQuoteAfter && (
                <motion.blockquote
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease }}
                  className="relative my-20 py-8 pl-8 border-l-[3px]"
                  style={{ borderColor: festival.accentColor }}
                >
                  <p
                    className="text-editorial text-xl italic leading-[1.6] sm:text-2xl"
                    style={{ color: festival.accentColor }}
                  >
                    &ldquo;{festival.pullQuote}&rdquo;
                  </p>
                </motion.blockquote>
              )}

              {/* Full-bleed image break between sections */}
              {i < festival.sections.length - 1 && getImageForIndex(i) && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, ease }}
                  className="relative my-20 aspect-[21/9] overflow-hidden rounded-sm"
                  style={{ marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", maxWidth: "100vw" }}
                >
                  <Image
                    src={getImageForIndex(i)!}
                    alt={`${festival.name}`}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Remaining gallery images */}
        {festival.galleryImages.length > 0 && (
          <div className="mt-24">
            <div className="mb-10 flex items-center gap-4" aria-hidden="true">
              <span className="h-px flex-1 bg-black/10" />
              <span style={{ color: festival.accentColor }} className="text-xl">*</span>
              <span className="h-px flex-1 bg-black/10" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {festival.galleryImages.map((img, i) => (
                <motion.div
                  key={img}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease }}
                  className="relative aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={`${festival.name} gallery`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ── Call to Action Section ──
function CTASection({ festival }: { festival: Festival }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const otherFestivals = festivals.filter((f) => f.slug !== festival.slug);

  return (
    <section ref={ref} className="relative bg-black overflow-hidden">
      <span
        className="pointer-events-none absolute right-8 top-8 hidden select-none text-[20rem] font-thin leading-none opacity-[0.03] lg:block"
        style={{ color: festival.accentColor }}
        aria-hidden="true"
      >
        &#125;
      </span>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-12 lg:px-20 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="mb-24 lg:mb-32"
        >
          <span className="text-mono mb-8 block text-white/30">
            * Get involved
          </span>

          {festival.externalLink ? (
            <>
              <h2 className="text-display max-w-3xl text-[clamp(2rem,5vw,4.5rem)] text-white leading-[0.95]">
                Experience{" "}
                <span style={{ color: festival.accentColor }}>
                  {festival.name}
                </span>
              </h2>

              <p className="text-editorial mt-6 max-w-xl text-lg text-white/50 sm:text-xl">
                {festival.tagline}
              </p>

              <motion.a
                href={festival.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3, ease }}
                className="group mt-10 inline-flex items-center gap-4 border-2 px-8 py-5 text-lg font-bold uppercase tracking-wide text-white transition-all duration-500 hover:gap-6 sm:text-xl"
                style={{ borderColor: festival.accentColor }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = festival.accentColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                Visit {festival.name}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                >
                  <path d="M5 15L15 5M15 5H7M15 5v8" />
                </svg>
              </motion.a>
            </>
          ) : (
            <>
              <h2 className="text-display max-w-3xl text-[clamp(2rem,5vw,4.5rem)] text-white leading-[0.95]">
                Stay tuned for{" "}
                <span style={{ color: festival.accentColor }}>
                  {festival.name}
                </span>
              </h2>

              <p className="text-editorial mt-6 max-w-xl text-lg text-white/50 sm:text-xl">
                More details coming soon. Follow us for updates.
              </p>
            </>
          )}
        </motion.div>

        {/* Separator */}
        <div className="mb-16 flex items-center gap-4" aria-hidden="true">
          <span style={{ color: festival.accentColor }} className="text-xl">*</span>
          <span className="h-px flex-1 bg-white/10" />
          <span style={{ color: festival.accentColor }} className="text-xl">*</span>
        </div>

        {/* Other festivals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease }}
        >
          <span className="text-mono mb-10 block text-white/30">
            * More from the collective
          </span>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherFestivals.map((f, i) => (
              <motion.div
                key={f.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.1, ease }}
              >
                <Link
                  href={`/festivals/${f.slug}`}
                  className="group relative block border border-white/10 p-6 transition-all duration-500 hover:border-white/25 sm:p-8"
                >
                  <div
                    className="absolute left-0 top-0 h-full w-0 transition-all duration-500 group-hover:w-1"
                    style={{ backgroundColor: f.accentColor }}
                  />

                  <div className="flex items-start justify-between">
                    <div>
                      <h3
                        className="text-display text-xl transition-colors duration-300 sm:text-2xl"
                        style={{ color: f.accentColor }}
                      >
                        {f.name}
                      </h3>
                      <p className="text-editorial mt-2 text-sm text-white/40 sm:text-base">
                        {f.tagline}
                      </p>
                    </div>
                    <span className="text-mono text-white/20">
                      {f.established}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-white/30 transition-all duration-300 group-hover:gap-4 group-hover:text-white/70">
                    <span className="text-mono text-[0.65rem]">Explore</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6, ease }}
          className="mt-12 text-center"
        >
          <Link
            href="/festivals"
            className="text-mono inline-flex items-center gap-2 text-white/30 transition-colors duration-300 hover:text-white/70"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M11 7H3M7 3L3 7l4 4" />
            </svg>
            View all festivals
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ── Main Page Content Component ──
export default function FestivalPageContent({ festival }: { festival: Festival }) {
  return (
    <>
      <HeroSection festival={festival} />
      <EditorialArticle festival={festival} />
      <CTASection festival={festival} />
    </>
  );
}
