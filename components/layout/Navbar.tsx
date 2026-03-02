"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// ── Festival data ──
const festivals = [
  {
    name: "Hockley Hustle",
    slug: "hockley-hustle",
    color: "#e85d26",
    tagline: "Nottingham's original multi-venue festival",
  },
  {
    name: "Young Hustlers",
    slug: "young-hustlers",
    color: "#1a8a8a",
    tagline: "The next generation of creative talent",
  },
  {
    name: "Green Hustle",
    slug: "green-hustle",
    color: "#0d6b6b",
    tagline: "Sustainability meets celebration",
  },
  {
    name: "Hustle Cinematic",
    slug: "hustle-cinematic",
    color: "#1a1a1a",
    accentColor: "#e85d26",
    tagline: "Film, sound & visual storytelling",
  },
];

// ── Nav links ──
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Festivals", href: "/festivals", hasMega: true },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Get In Touch", href: "/contact" },
];

// ── Animation variants ──
const megaMenuVariants = {
  hidden: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const mobileMenuVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const mobileNavItemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 + i * 0.07,
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    x: -24,
    transition: {
      delay: i * 0.03,
      duration: 0.2,
    },
  }),
};

const mobileFestivalVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 + i * 0.06,
      duration: 0.35,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
  exit: { opacity: 0, x: -16, transition: { duration: 0.15 } },
};

// ── Hamburger icon ──
function HamburgerIcon({ isOpen, scrolled }: { isOpen: boolean; scrolled: boolean }) {
  const barColor = isOpen ? "bg-white" : scrolled ? "bg-charcoal" : "bg-white";

  return (
    <div className="relative flex h-5 w-6 flex-col items-center justify-center">
      <motion.span
        className={`absolute h-[2px] w-6 rounded-full ${barColor}`}
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 0 : -6,
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      />
      <motion.span
        className={`absolute h-[2px] w-6 rounded-full ${barColor}`}
        animate={{
          opacity: isOpen ? 0 : 1,
          scaleX: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className={`absolute h-[2px] w-6 rounded-full ${barColor}`}
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? 0 : 6,
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      />
    </div>
  );
}

// ── Navbar ──
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // Mega menu hover handlers with delay to prevent flicker
  const openMega = useCallback(() => {
    if (megaTimeoutRef.current) {
      clearTimeout(megaTimeoutRef.current);
      megaTimeoutRef.current = null;
    }
    setMegaOpen(true);
  }, []);

  const closeMega = useCallback(() => {
    megaTimeoutRef.current = setTimeout(() => {
      setMegaOpen(false);
    }, 150);
  }, []);

  // Text color based on state
  const textColor = scrolled ? "text-charcoal" : "text-white";
  const textColorHover = scrolled
    ? "hover:text-orange"
    : "hover:text-orange-light";

  return (
    <>
      <motion.nav
        className="fixed top-0 right-0 left-0 z-50"
        initial={false}
        animate={{
          backgroundColor: scrolled
            ? "rgba(250, 250, 247, 0.97)"
            : "rgba(0, 0, 0, 0)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      >
        {/* Subtle bottom border when scrolled */}
        <motion.div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-charcoal/10"
          initial={false}
          animate={{ opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="mx-auto flex h-18 max-w-[1500px] items-center justify-between px-6 lg:px-10">
          {/* ── Logo ── */}
          <Link
            href="/"
            className="relative z-10"
            onClick={closeMobile}
          >
            <span
              className={`text-display text-[15px] leading-none tracking-tight ${textColor} transition-colors duration-300 sm:text-[17px]`}
              style={{ fontWeight: 900 }}
            >
              THE HUSTLE COLLECTIVE
            </span>
          </Link>

          {/* ── Desktop nav ── */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.hasMega ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={openMega}
                  onMouseLeave={closeMega}
                >
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium ${textColor} ${textColorHover} transition-colors duration-200`}
                    style={{ fontWeight: 500 }}
                  >
                    {link.label}
                    {/* Arrow indicator */}
                    <motion.svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      className="ml-1.5 inline-block"
                      animate={{ rotate: megaOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </Link>

                  {/* ── Mega menu ── */}
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        variants={megaMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full left-1/2 z-50 mt-2 w-[420px] -translate-x-1/2"
                      >
                        <div className="rounded-xl border border-charcoal/5 bg-off-white p-6 shadow-xl shadow-charcoal/5">
                          <span className="text-mono mb-4 block text-charcoal/40">
                            Our Festivals
                          </span>
                          <div className="flex flex-col gap-1">
                            {festivals.map((fest) => (
                              <Link
                                key={fest.slug}
                                href={`/festivals/${fest.slug}`}
                                className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors duration-200 hover:bg-charcoal/[0.04]"
                              >
                                {/* Color dot */}
                                <span
                                  className="relative flex h-3 w-3 shrink-0 items-center justify-center"
                                >
                                  <span
                                    className="absolute h-3 w-3 rounded-full transition-transform duration-200 group-hover:scale-125"
                                    style={{ backgroundColor: fest.color }}
                                  />
                                  {/* Orange accent ring for Hustle Cinematic */}
                                  {fest.accentColor && (
                                    <span
                                      className="absolute h-[18px] w-[18px] rounded-full border-[1.5px] opacity-50 transition-opacity duration-200 group-hover:opacity-100"
                                      style={{ borderColor: fest.accentColor }}
                                    />
                                  )}
                                </span>

                                <div className="flex flex-col">
                                  <span
                                    className="text-sm text-charcoal transition-colors duration-200 group-hover:text-charcoal"
                                    style={{ fontWeight: 700 }}
                                  >
                                    {fest.name}
                                  </span>
                                  <span className="text-xs text-charcoal/40 transition-colors duration-200 group-hover:text-charcoal/60">
                                    {fest.tagline}
                                  </span>
                                </div>

                                {/* Arrow on hover */}
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                  className="ml-auto opacity-0 transition-opacity duration-200 group-hover:opacity-60"
                                >
                                  <path
                                    d="M5 3L9 7L5 11"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </Link>
                            ))}
                          </div>

                          {/* View all link */}
                          <div className="mt-4 border-t border-charcoal/5 pt-3">
                            <Link
                              href="/festivals"
                              className="text-mono text-teal transition-colors duration-200 hover:text-orange"
                            >
                              View all festivals &rarr;
                            </Link>
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
                  className={`px-4 py-2 text-sm font-medium ${textColor} ${textColorHover} transition-colors duration-200`}
                  style={{ fontWeight: 500 }}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative z-10 flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <HamburgerIcon isOpen={mobileOpen} scrolled={scrolled} />
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-charcoal lg:hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Scrollable content area */}
            <div className="flex flex-1 flex-col justify-center overflow-y-auto px-8 pt-24 pb-12">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <div key={link.label}>
                    <motion.div
                      custom={i}
                      variants={mobileNavItemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <Link
                        href={link.href}
                        onClick={closeMobile}
                        className="group inline-block py-2 text-[2rem] font-bold uppercase leading-tight tracking-tight text-white transition-colors duration-200 hover:text-orange sm:text-[2.5rem]"
                        style={{ fontWeight: 700 }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>

                    {/* Inline festival list for mobile */}
                    {link.hasMega && (
                      <div className="mb-2 ml-1 flex flex-col gap-1 pt-1">
                        {festivals.map((fest, fi) => (
                          <motion.div
                            key={fest.slug}
                            custom={fi}
                            variants={mobileFestivalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                          >
                            <Link
                              href={`/festivals/${fest.slug}`}
                              onClick={closeMobile}
                              className="group flex items-center gap-3 py-1.5"
                            >
                              <span
                                className="relative flex h-2.5 w-2.5 items-center justify-center"
                              >
                                <span
                                  className="h-2.5 w-2.5 rounded-full transition-transform duration-200 group-hover:scale-125"
                                  style={{ backgroundColor: fest.color }}
                                />
                                {fest.accentColor && (
                                  <span
                                    className="absolute h-4 w-4 rounded-full border border-orange/50"
                                  />
                                )}
                              </span>
                              <span
                                className="text-base text-white/60 transition-colors duration-200 group-hover:text-white"
                                style={{ fontWeight: 500 }}
                              >
                                {fest.name}
                              </span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Bottom info */}
              <motion.div
                className="mt-auto pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                exit={{ opacity: 0 }}
              >
                <span className="text-mono text-white/30">
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
