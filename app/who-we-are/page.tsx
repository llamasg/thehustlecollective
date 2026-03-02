"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { team, festivalDirectors } from "@/data/team";

// ── Brand colors for placeholders ──
const brandColors = [
  { bg: "bg-orange", text: "text-cream", hex: "#e85d26" },
  { bg: "bg-teal", text: "text-cream", hex: "#1a8a8a" },
  { bg: "bg-teal-deep", text: "text-cream", hex: "#0d6b6b" },
  { bg: "bg-cream", text: "text-charcoal", hex: "#f5f0e8" },
];

// ── Layout configs for staggered editorial grid ──
// Each config defines unique sizing, rotation, and positioning
// to avoid a corporate uniform grid feel.
const layoutConfigs = [
  { colSpan: "md:col-span-5", aspect: "aspect-[3/4]", rotate: -2, nudge: "md:mt-0" },
  { colSpan: "md:col-span-4", aspect: "aspect-[4/5]", rotate: 1.5, nudge: "md:mt-16" },
  { colSpan: "md:col-span-3", aspect: "aspect-[3/4]", rotate: -1, nudge: "md:mt-8" },
  { colSpan: "md:col-span-4", aspect: "aspect-[5/6]", rotate: 2, nudge: "md:-mt-12" },
  { colSpan: "md:col-span-5", aspect: "aspect-[4/5]", rotate: -1.5, nudge: "md:mt-24" },
  { colSpan: "md:col-span-3", aspect: "aspect-[3/4]", rotate: 0.5, nudge: "md:mt-4" },
  { colSpan: "md:col-span-4", aspect: "aspect-[5/6]", rotate: -2.5, nudge: "md:mt-20" },
  { colSpan: "md:col-span-5", aspect: "aspect-[3/4]", rotate: 1, nudge: "md:-mt-8" },
];

// ── Animation variants ──
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30, rotate: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function WhoWeArePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        {/* ── Hero ── */}
        <section className="relative bg-charcoal pt-32 pb-20 md:pt-44 md:pb-32">
          {/* Decorative background asterisks */}
          <div
            className="pointer-events-none absolute inset-0 select-none overflow-hidden"
            aria-hidden="true"
          >
            <span className="absolute top-20 right-[15%] text-[12rem] leading-none text-orange opacity-[0.06]">
              ✱
            </span>
            <span className="absolute bottom-10 left-[8%] text-[8rem] leading-none text-teal opacity-[0.08]">
              ✱
            </span>
          </div>

          <div className="relative mx-auto max-w-[1500px] px-6 md:px-12 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            >
              <span className="text-mono mb-6 block text-orange">
                ✱ The People
              </span>
            </motion.div>

            <motion.h1
              className="text-display text-[clamp(3rem,10vw,9rem)] text-cream"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              }}
            >
              WHO
              <br />
              WE ARE
            </motion.h1>

            <motion.p
              className="text-editorial mt-8 max-w-xl text-lg text-cream/60 md:text-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              }}
            >
              A crew of artists, producers, dreamers, and community builders.
              We make festivals happen in Nottingham — and we have a brilliant
              time doing it.
            </motion.p>
          </div>

          {/* Angled bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-off-white [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
        </section>

        {/* ── Team Grid — editorial stagger ── */}
        <section className="relative bg-off-white py-20 md:py-32">
          {/* Section label */}
          <div className="mx-auto max-w-[1500px] px-6 md:px-12 lg:px-20">
            <motion.div
              className="mb-16 flex items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-mono text-charcoal/40">The Collective</span>
              <span className="h-px flex-1 bg-charcoal/10" aria-hidden="true" />
              <span className="text-orange text-xl" aria-hidden="true">
                ✱
              </span>
            </motion.div>
          </div>

          <motion.div
            className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 px-6 md:grid-cols-12 md:gap-6 md:px-12 lg:gap-8 lg:px-20"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {team.map((member, i) => {
              const config = layoutConfigs[i % layoutConfigs.length];
              const color = brandColors[i % brandColors.length];

              return (
                <motion.div
                  key={member.name}
                  className={`${config.colSpan} ${config.nudge}`}
                  variants={staggerItem}
                >
                  <div
                    className="group"
                    style={{ transform: `rotate(${config.rotate}deg)` }}
                  >
                    {/* Photo placeholder */}
                    <div
                      className={`${config.aspect} ${color.bg} relative mb-4 overflow-hidden rounded-sm`}
                    >
                      {/* Inner content for placeholder */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                        <span
                          className={`${color.text} mb-2 text-[2.5rem] leading-none opacity-30`}
                          aria-hidden="true"
                        >
                          ✱
                        </span>
                        <span
                          className={`${color.text} text-mono opacity-40`}
                        >
                          {member.name}
                        </span>
                        <span
                          className={`${color.text} mt-1 text-[0.65rem] font-light tracking-wider uppercase opacity-25`}
                        >
                          candid photo
                        </span>
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/10" />
                    </div>

                    {/* Name + Role */}
                    <div className="px-1">
                      <h3 className="text-lg font-bold text-charcoal">
                        {member.name}
                      </h3>
                      {member.role && (
                        <p className="text-mono mt-1 text-charcoal/50">
                          {member.role}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* ── Festival Directors ── */}
        <section className="relative bg-charcoal py-20 md:py-32">
          {/* Decorative element */}
          <div
            className="pointer-events-none absolute top-12 left-[5%] select-none text-teal opacity-[0.06] hidden lg:block"
            aria-hidden="true"
            style={{
              fontFamily: "var(--font-display), Helvetica, sans-serif",
              fontWeight: 100,
              fontSize: "18rem",
              lineHeight: 0.8,
            }}
          >
            {"{"}
          </div>

          <div className="relative mx-auto max-w-[1500px] px-6 md:px-12 lg:px-20">
            {/* Section header */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-mono mb-4 block text-orange">
                ✱ Festival Directors
              </span>
              <h2 className="text-display text-[clamp(2rem,5vw,4rem)] text-cream">
                LEADING THE
                <br />
                CHARGE
              </h2>
              <p className="text-editorial mt-6 max-w-md text-cream/50 text-base md:text-lg">
                Each festival has its own voice, its own energy.
                These are the people shaping them.
              </p>
            </motion.div>

            {/* Directors grid */}
            <motion.div
              className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {festivalDirectors.map((director, i) => {
                const color = brandColors[i % brandColors.length];

                return (
                  <motion.div
                    key={director.name}
                    className="group"
                    variants={staggerItem}
                    custom={i}
                  >
                    <div
                      className="flex flex-col sm:flex-row sm:items-start gap-6"
                      style={{
                        transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)`,
                      }}
                    >
                      {/* Photo placeholder */}
                      <div
                        className={`${color.bg} relative aspect-square w-full shrink-0 overflow-hidden rounded-sm sm:w-48`}
                      >
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                          <span
                            className={`${color.text} mb-2 text-[2rem] leading-none opacity-30`}
                            aria-hidden="true"
                          >
                            ✱
                          </span>
                          <span className={`${color.text} text-mono opacity-40`}>
                            {director.name.length > 20
                              ? director.name.split("&")[0].trim()
                              : director.name}
                          </span>
                          <span
                            className={`${color.text} mt-1 text-[0.65rem] font-light tracking-wider uppercase opacity-25`}
                          >
                            candid photo
                          </span>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex flex-col justify-center">
                        <p className="text-mono mb-3 text-teal">
                          {director.festival}
                        </p>
                        <h3 className="text-2xl font-bold text-cream md:text-3xl">
                          {director.name}
                        </h3>
                        <span
                          className="mt-4 text-orange text-xl"
                          aria-hidden="true"
                        >
                          ✱
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ── Join Us CTA ── */}
        <section className="relative bg-cream py-20 md:py-32">
          <div className="mx-auto max-w-[1500px] px-6 text-center md:px-12 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-orange text-4xl" aria-hidden="true">
                ✱
              </span>
              <h2 className="text-display mt-4 text-[clamp(2rem,6vw,5rem)] text-charcoal">
                WANT TO BE
                <br />
                PART OF IT?
              </h2>
              <p className="text-editorial mx-auto mt-6 max-w-lg text-charcoal/60 text-base md:text-lg">
                We are always looking for passionate people to join the
                collective — volunteers, artists, collaborators, and anyone who
                believes festivals can change communities.
              </p>
              <a
                href="/contact"
                className="mt-10 inline-block rounded-sm bg-charcoal px-10 py-4 text-sm font-bold uppercase tracking-wider text-cream transition-colors duration-300 hover:bg-orange"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
