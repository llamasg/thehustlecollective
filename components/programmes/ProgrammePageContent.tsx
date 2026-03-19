"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { type Programme, programmes } from "@/data/programmes";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import ScheduleSection from "@/components/programmes/ScheduleSection";
import type { SanityEvent } from "@/lib/sanity";

// ── Animation config ──
const ease = [0.25, 0.46, 0.45, 0.94] as const;

// ── Hero Section ──
function HeroSection({ programme, hasEvents = false }: { programme: Programme; hasEvents?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative bg-black pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
    >
      {/* Decorative brace */}
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
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease }}
          className="mb-8 flex flex-wrap items-center gap-1.5 text-sm tracking-wide uppercase"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="text-white/30 transition-colors duration-200 hover:text-blue"
          >
            Home
          </Link>
          <span className="text-white/20">/</span>
          {programme.slug === "future-hustlers" ? (
            <span className="text-white/60">Future Hustlers</span>
          ) : (
            <>
              <Link
                href="/programmes/future-hustlers"
                className="text-white/30 transition-colors duration-200 hover:text-blue"
              >
                Future Hustlers
              </Link>
              <span className="text-white/20">/</span>
              <span className="text-white/60">{programme.name}</span>
            </>
          )}
        </motion.nav>

        {/* Label & descriptor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="mb-6 flex flex-wrap items-center gap-4"
        >
          <span className="inline-block rounded-full bg-blue px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            {programme.label}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="text-display text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {programme.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35, ease }}
          className="text-editorial mt-8 text-white/50 text-base md:text-lg max-w-xl"
        >
          {programme.tagline}
        </motion.p>

        {hasEvents && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5, ease }}
          >
            <a
              href="#lineup"
              className="group mt-10 inline-flex items-center gap-3 border-2 border-blue px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all duration-500 hover:gap-5 hover:bg-blue"
            >
              View Lineup
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-y-1"
                aria-hidden="true"
              >
                <path d="M8 3v10M4 9l4 4 4-4" />
              </svg>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}

// ── Hero Image Section ──
function HeroImage({ programme }: { programme: Programme }) {
  return (
    <section className="bg-grey">
      <div className="mx-auto max-w-[1100px]">
        <div className="relative aspect-[2/1] overflow-hidden">
          <Image
            src={programme.heroImage}
            alt={programme.name}
            fill
            className="object-cover"
            sizes="(max-width: 1100px) 100vw, 1100px"
            priority
          />
        </div>
      </div>
    </section>
  );
}

// ── Editorial Content (full-page mode) ──
function EditorialContent({ programme }: { programme: Programme }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  const pullQuoteAfter =
    programme.sections && programme.sections.length >= 3 ? 1 : 0;

  return (
    <section ref={ref} className="relative bg-grey overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-12 lg:px-20 lg:py-40">
        {/* Intro */}
        {programme.intro && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            className="mb-20 max-w-3xl"
          >
            <p
              className="text-editorial text-black/90 leading-[1.4] tracking-[-0.01em]"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 400,
              }}
            >
              {programme.intro}
            </p>
          </motion.div>
        )}

        {/* Divider */}
        <div className="mb-20 flex items-center gap-4" aria-hidden="true">
          <span className="text-blue text-xl">*</span>
          <span className="h-px flex-1 bg-black/10" />
        </div>

        {/* Editorial sections */}
        <div className="max-w-3xl mx-auto">
          {programme.sections?.map((section, i) => (
            <div key={section.title}>
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
              {programme.pullQuote && i === pullQuoteAfter && (
                <motion.blockquote
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease }}
                  className="relative my-20 py-8 pl-8 border-l-[3px] border-blue"
                >
                  <p className="text-editorial text-xl italic leading-[1.6] text-blue sm:text-2xl">
                    &ldquo;{programme.pullQuote}&rdquo;
                  </p>
                </motion.blockquote>
              )}

              {/* Full-bleed image break between sections */}
              {i < (programme.sections?.length ?? 0) - 1 &&
                programme.galleryImages[i] && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.8, ease }}
                    className="relative my-20 aspect-[21/9] overflow-hidden rounded-sm"
                    style={{
                      marginLeft: "calc(-50vw + 50%)",
                      marginRight: "calc(-50vw + 50%)",
                      maxWidth: "100vw",
                    }}
                  >
                    <Image
                      src={programme.galleryImages[i]}
                      alt={programme.name}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </motion.div>
                )}
            </div>
          ))}
        </div>

        {/* Speakers / Guests */}
        {programme.speakers && programme.speakers.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-3xl mx-auto mt-8"
          >
            <div className="mb-10 flex items-center gap-4" aria-hidden="true">
              <span className="h-px flex-1 bg-black/10" />
              <span className="text-blue text-xl">*</span>
              <span className="h-px flex-1 bg-black/10" />
            </div>

            <span className="text-mono mb-8 block text-black/40">
              * {programme.slug === "promoter-mentorship"
                ? "2022 Promoter Mentors"
                : "Guest Speakers"}
            </span>
            <ul className="space-y-4">
              {programme.speakers.map((speaker) => (
                <li key={speaker.name} className="flex items-baseline gap-3">
                  <span className="text-editorial text-lg font-semibold text-black/80 sm:text-xl">
                    {speaker.name}
                  </span>
                  {speaker.role && (
                    <>
                      <span className="text-black/20" aria-hidden="true">
                        -
                      </span>
                      <span className="text-editorial text-base text-black/50 sm:text-lg">
                        {speaker.role}
                      </span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Gallery */}
        {programme.galleryImages.length > 0 && (
          <div className="mt-24">
            <div className="mb-10 flex items-center gap-4" aria-hidden="true">
              <span className="h-px flex-1 bg-black/10" />
              <span className="text-blue text-xl">*</span>
              <span className="h-px flex-1 bg-black/10" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {programme.galleryImages.map((img, i) => (
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
                    alt={`${programme.name} gallery`}
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

// ── Gallery-only Content ──
function GalleryOnlyContent({ programme }: { programme: Programme }) {
  return (
    <section className="relative bg-grey overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-12 lg:px-20 lg:py-40">
        {/* Pull quote if present */}
        {programme.pullQuote && (
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="relative mb-20 max-w-3xl mx-auto py-8 pl-8 border-l-[3px] border-blue"
          >
            <p className="text-editorial text-xl italic leading-[1.6] text-blue sm:text-2xl">
              &ldquo;{programme.pullQuote}&rdquo;
            </p>
          </motion.blockquote>
        )}

        {/* Gallery */}
        {programme.galleryImages.length > 0 ? (
          <div>
            <div className="mb-10 flex items-center gap-4" aria-hidden="true">
              <span className="h-px flex-1 bg-black/10" />
              <span className="text-blue text-xl">*</span>
              <span className="h-px flex-1 bg-black/10" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {programme.galleryImages.map((img, i) => (
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
                    alt={`${programme.name} gallery`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <ImagePlaceholder aspectRatio="16/9" label="Gallery coming soon" />
          </div>
        )}
      </div>
    </section>
  );
}

// ── CTA Section ──
function CTASection({ programme }: { programme: Programme }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const otherProgrammes = programmes.filter(
    (p) => p.slug !== programme.slug && !p.featured
  );

  return (
    <section ref={ref} className="relative bg-black overflow-hidden">
      <span
        className="pointer-events-none absolute right-8 top-8 hidden select-none text-[20rem] font-thin leading-none text-blue opacity-[0.03] lg:block"
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
            * Explore more
          </span>

          <h2 className="text-display max-w-3xl text-[clamp(2rem,5vw,4.5rem)] text-white leading-[0.95]">
            More from{" "}
            <span className="text-blue">Future Hustlers</span>
          </h2>

          <p className="text-editorial mt-6 max-w-xl text-lg text-white/50 sm:text-xl">
            Developing the next generation of Midlands creatives through
            mentorship, industry events, and year-round support.
          </p>

          {programme.slug !== "future-hustlers" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease }}
            >
              <Link
                href="/programmes/future-hustlers"
                className="group mt-10 inline-flex items-center gap-4 border-2 border-blue px-8 py-5 text-lg font-bold uppercase tracking-wide text-white transition-all duration-500 hover:gap-6 hover:bg-blue"
              >
                About Future Hustlers
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M3 10h14M13 6l4 4-4 4" />
                </svg>
              </Link>
            </motion.div>
          )}
        </motion.div>

        {/* Separator */}
        <div className="mb-16 flex items-center gap-4" aria-hidden="true">
          <span className="text-blue text-xl">*</span>
          <span className="h-px flex-1 bg-white/10" />
          <span className="text-blue text-xl">*</span>
        </div>

        {/* Other programmes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease }}
        >
          <span className="text-mono mb-10 block text-white/30">
            * Other programmes
          </span>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherProgrammes.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.1, ease }}
              >
                <Link
                  href={`/programmes/${p.slug}`}
                  className="group relative block border border-white/10 p-6 transition-all duration-500 hover:border-white/25 sm:p-8"
                >
                  <div className="absolute left-0 top-0 h-full w-0 bg-blue transition-all duration-500 group-hover:w-1" />

                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-display text-xl text-blue transition-colors duration-300 sm:text-2xl">
                        {p.name}
                      </h3>
                      <p className="text-editorial mt-2 text-sm text-white/40 sm:text-base">
                        {p.tagline}
                      </p>
                    </div>
                    <span className="text-mono text-white/20">{p.label}</span>
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
      </div>
    </section>
  );
}

// ── Main Page Content Component ──
export default function ProgrammePageContent({
  programme,
  events = [],
  eventbriteUrl,
}: {
  programme: Programme;
  events?: SanityEvent[];
  eventbriteUrl?: string;
}) {
  return (
    <>
      <HeroSection programme={programme} hasEvents={events.length > 0} />
      <HeroImage programme={programme} />
      {programme.hasContent ? (
        <EditorialContent programme={programme} />
      ) : (
        <GalleryOnlyContent programme={programme} />
      )}
      {events.length > 0 && <ScheduleSection events={events} eventbriteUrl={eventbriteUrl} />}
      <CTASection programme={programme} />
    </>
  );
}
