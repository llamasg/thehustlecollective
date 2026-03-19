"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const festivals = [
  { name: "Hockley Hustle", slug: "hockley-hustle", tagline: "Nottingham's music & arts festival" },
  { name: "Young Hustlers", slug: "young-hustlers", tagline: "The next generation festival" },
  { name: "Green Hustle", slug: "green-hustle", tagline: "Sustainability meets culture" },
  { name: "Hustle Cinematic", slug: "hustle-cinematic", tagline: "Film, sound & storytelling" },
];

const programmeItems = [
  { name: "Future Hustlers", slug: "future-hustlers", tagline: "Talent development hub" },
  { name: "Promoter Mentorship", slug: "promoter-mentorship", tagline: "Supporting emerging promoters" },
  { name: "Industry Day 2023", slug: "industry-day-2023", tagline: "Panels, talks & networking" },
  { name: "Industry Day 2024", slug: "industry-day-2024", tagline: "Panels, talks & networking" },
  { name: "Industry Weekend 2026", slug: "industry-weekend-2026", tagline: "Two days of industry insight" },
  { name: "Artist Development 2026", slug: "artist-development-2026", tagline: "Nurturing creative talent" },
];

type NavLink = {
  label: string;
  href: string;
  mega?: "festivals" | "programmes";
};

const navLinks: NavLink[] = [
  { label: "Festivals", href: "/festivals/hockley-hustle", mega: "festivals" },
  { label: "Programmes", href: "/programmes/future-hustlers", mega: "programmes" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Get In Touch", href: "/get-in-touch" },
];

function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function parseColor(color: string): [number, number, number] | null {
  if (color.startsWith("rgb")) {
    const m = color.match(/[\d.]+/g);
    if (!m || m.length < 3) return null;
    // Skip fully transparent backgrounds — they'd read as black
    if (m.length >= 4 && parseFloat(m[3]) === 0) return null;
    return [+m[0], +m[1], +m[2]];
  }
  return null;
}

function HamburgerIcon({ isOpen, dark }: { isOpen: boolean; dark: boolean }) {
  const barColor = isOpen ? "bg-white" : dark ? "bg-white" : "bg-black";

  return (
    <div className="relative flex h-5 w-6 flex-col items-center justify-center">
      <motion.span
        className={`absolute h-[1px] w-6 ${barColor}`}
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 0 : -5 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      />
      <motion.span
        className={`absolute h-[1px] w-6 ${barColor}`}
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className={`absolute h-[1px] w-6 ${barColor}`}
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 0 : 5 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      />
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<"festivals" | "programmes" | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const megaTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Detect background luminance behind the navbar
  useEffect(() => {
    if (mobileOpen) return;

    function detectBackground() {
      if (typeof document === "undefined" || !navRef.current) return;
      const navHeight = navRef.current.offsetHeight ?? 56;
      const sampleY = navHeight / 2;
      const samplePoints = [
        window.innerWidth * 0.25,
        window.innerWidth * 0.5,
        window.innerWidth * 0.75,
      ];

      let totalLuminance = 0;
      let samples = 0;

      // Hide nav so elementFromPoint can see through it
      navRef.current.style.visibility = "hidden";

      for (const x of samplePoints) {
        const el = document.elementFromPoint(x, sampleY);

        if (el) {
          const bg = window.getComputedStyle(el).backgroundColor;
          const rgb = parseColor(bg);
          if (rgb) {
            totalLuminance += getLuminance(...rgb);
            samples++;
          }
        }
      }

      navRef.current.style.visibility = "";

      if (samples > 0) {
        setIsDark(totalLuminance / samples < 0.35);
      }
    }

    // Run after a short delay on mount to let page render
    const initialTimer = setTimeout(detectBackground, 100);
    detectBackground();
    const onScroll = () => detectBackground();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(initialTimer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, []);

  const openMega = useCallback((which: "festivals" | "programmes") => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    setActiveMega(which);
  }, []);

  const closeMega = useCallback(() => {
    megaTimeoutRef.current = setTimeout(() => setActiveMega(null), 150);
  }, []);

  // When scrolled, always use dark text on light bg. When not scrolled, detect.
  const useLight = !scrolled && isDark && !activeMega;
  const textColor = useLight ? "text-white" : "text-black";
  const textMuted = useLight ? "text-white/60" : "text-black/60";
  const textHover = useLight ? "hover:text-white" : "hover:text-black";

  const megaItems = activeMega === "festivals" ? festivals : programmeItems;
  const megaBase = activeMega === "festivals" ? "/festivals" : "/programmes";

  return (
    <>
      <motion.nav
        ref={navRef}
        className="fixed top-0 right-0 left-0 z-50"
        initial={false}
        animate={{
          backgroundColor: scrolled
            ? "rgba(233, 234, 233, 0.97)"
            : "rgba(233, 234, 233, 0)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-black/10"
          initial={false}
          animate={{ opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="mx-auto flex h-14 max-w-[1500px] items-center justify-between px-6 sm:px-10 lg:px-16">
          <Link href="/" className="relative z-10" onClick={closeMobile}>
            <span
              className={`text-[13px] sm:text-[14px] uppercase tracking-[0.15em] leading-none transition-colors duration-300 ${textColor}`}
              style={{ fontWeight: 400 }}
            >
              The Hustle Collective
            </span>
          </Link>

          <div className="hidden items-center gap-0 lg:flex">
            {navLinks.map((link) =>
              link.mega ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => openMega(link.mega!)}
                  onMouseLeave={closeMega}
                >
                  <span
                    className={`cursor-pointer px-4 py-2 text-[13px] ${textMuted} ${textHover} transition-colors duration-200`}
                    style={{ fontWeight: 400 }}
                  >
                    {link.label}
                  </span>

                  <AnimatePresence>
                    {activeMega === link.mega && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 z-50 mt-1 w-[280px]"
                      >
                        <div className="bg-white border border-black/10 p-5">
                          <div className="flex flex-col gap-1">
                            {(link.mega === "festivals" ? festivals : programmeItems).map((item) => (
                              <Link
                                key={item.slug}
                                href={`${link.mega === "festivals" ? "/festivals" : "/programmes"}/${item.slug}`}
                                className="group py-1.5"
                              >
                                <span className="block text-[13px] text-black/80 group-hover:text-blue transition-colors duration-200" style={{ fontWeight: 500 }}>
                                  {item.name}
                                </span>
                                <span className="block text-[11px] text-black/35 group-hover:text-black/50 transition-colors duration-200">
                                  {item.tagline}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 text-[13px] ${textMuted} ${textHover} transition-colors duration-200`}
                  style={{ fontWeight: 400 }}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative z-10 flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <HamburgerIcon isOpen={mobileOpen} dark={useLight} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-black lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-1 flex-col justify-center px-8 pt-20 pb-12">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <div key={link.label}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: 0.1 + i * 0.06, duration: 0.4 },
                      }}
                      exit={{ opacity: 0 }}
                    >
                      {link.mega ? (
                        <button
                          onClick={() =>
                            setMobileExpanded(
                              mobileExpanded === link.mega ? null : link.mega!
                            )
                          }
                          className="inline-flex items-center gap-3 py-1.5 text-[1.8rem] uppercase tracking-[-0.02em] text-white hover:text-blue transition-colors duration-200 cursor-pointer"
                          style={{ fontWeight: 300 }}
                        >
                          {link.label}
                          <motion.span
                            className="text-[0.8rem] text-white/30"
                            animate={{ rotate: mobileExpanded === link.mega ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            &#9660;
                          </motion.span>
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={closeMobile}
                          className="inline-block py-1.5 text-[1.8rem] uppercase tracking-[-0.02em] text-white hover:text-blue transition-colors duration-200"
                          style={{ fontWeight: 300 }}
                        >
                          {link.label}
                        </Link>
                      )}
                    </motion.div>

                    <AnimatePresence>
                      {link.mega && mobileExpanded === link.mega && (
                        <motion.div
                          className="ml-0 flex flex-col gap-0.5 pt-1 pb-2 overflow-hidden"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {(link.mega === "festivals" ? festivals : programmeItems).map((item, fi) => (
                            <motion.div
                              key={item.slug}
                              initial={{ opacity: 0, x: -12 }}
                              animate={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                  delay: 0.05 + fi * 0.04,
                                  duration: 0.3,
                                },
                              }}
                              exit={{ opacity: 0 }}
                            >
                              <Link
                                href={`${link.mega === "festivals" ? "/festivals" : "/programmes"}/${item.slug}`}
                                onClick={closeMobile}
                                className="py-1 text-sm text-white/40 hover:text-white transition-colors duration-200"
                                style={{ fontWeight: 400 }}
                              >
                                {item.name}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              <motion.div
                className="mt-auto pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                exit={{ opacity: 0 }}
              >
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/30">
                  Nottingham, UK &mdash; Since 2006
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
