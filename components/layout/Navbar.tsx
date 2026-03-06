"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const festivals = [
  { name: "Hockley Hustle", slug: "hockley-hustle" },
  { name: "Young Hustlers", slug: "young-hustlers" },
  { name: "Green Hustle", slug: "green-hustle" },
  { name: "Hustle Cinematic", slug: "hustle-cinematic" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Festivals", href: "/festivals", hasMega: true },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Get In Touch", href: "/contact" },
];

function HamburgerIcon({
  isOpen,
  scrolled,
}: {
  isOpen: boolean;
  scrolled: boolean;
}) {
  const barColor = isOpen ? "bg-white" : scrolled ? "bg-black" : "bg-black";

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
  const [megaOpen, setMegaOpen] = useState(false);
  const megaTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const openMega = useCallback(() => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    setMegaOpen(true);
  }, []);

  const closeMega = useCallback(() => {
    megaTimeoutRef.current = setTimeout(() => setMegaOpen(false), 150);
  }, []);

  return (
    <>
      <motion.nav
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
              className="text-[13px] sm:text-[14px] uppercase tracking-[0.15em] text-black leading-none"
              style={{ fontWeight: 400 }}
            >
              The Hustle Collective
            </span>
          </Link>

          <div className="hidden items-center gap-0 lg:flex">
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
                    className="px-4 py-2 text-[13px] text-black/60 hover:text-black transition-colors duration-200"
                    style={{ fontWeight: 400 }}
                  >
                    {link.label}
                  </Link>

                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 z-50 mt-1 w-[240px]"
                      >
                        <div className="bg-white border border-black/10 p-4">
                          <div className="flex flex-col gap-0.5">
                            {festivals.map((fest) => (
                              <Link
                                key={fest.slug}
                                href={`/festivals/${fest.slug}`}
                                className="py-1.5 text-[13px] text-black/60 hover:text-blue transition-colors duration-200"
                                style={{ fontWeight: 400 }}
                              >
                                {fest.name}
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
                  className="px-4 py-2 text-[13px] text-black/60 hover:text-black transition-colors duration-200"
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
            <HamburgerIcon isOpen={mobileOpen} scrolled={scrolled} />
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
                      <Link
                        href={link.href}
                        onClick={closeMobile}
                        className="inline-block py-1.5 text-[1.8rem] uppercase tracking-[-0.02em] text-white hover:text-blue transition-colors duration-200"
                        style={{ fontWeight: 300 }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>

                    {link.hasMega && (
                      <div className="ml-0 flex flex-col gap-0.5 pt-1 pb-2">
                        {festivals.map((fest, fi) => (
                          <motion.div
                            key={fest.slug}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{
                              opacity: 1,
                              x: 0,
                              transition: {
                                delay: 0.25 + fi * 0.05,
                                duration: 0.3,
                              },
                            }}
                            exit={{ opacity: 0 }}
                          >
                            <Link
                              href={`/festivals/${fest.slug}`}
                              onClick={closeMobile}
                              className="py-1 text-sm text-white/40 hover:text-white transition-colors duration-200"
                              style={{ fontWeight: 400 }}
                            >
                              {fest.name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    )}
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
