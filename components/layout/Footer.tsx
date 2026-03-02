import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Festivals", href: "/festivals" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Blog", href: "/blog" },
  { label: "Get In Touch", href: "/get-in-touch" },
];

const festivalLinks = [
  { label: "Hockley Hustle", href: "https://hockleyhustle.co.uk" },
  { label: "Young Hustlers", href: "https://younghustlers.co.uk" },
  { label: "Green Hustle", href: "https://greenhustle.co.uk" },
  { label: "The Hustle Collective", href: "https://thehustlecollective.com" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/hockleyhustle",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/hockleyhustle",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream relative overflow-hidden">
      {/* ── Decorative curly brace ── */}
      <div
        className="pointer-events-none absolute right-8 top-12 select-none text-teal opacity-[0.07] hidden lg:block"
        aria-hidden="true"
        style={{
          fontFamily: "var(--font-display), Helvetica, sans-serif",
          fontWeight: 100,
          fontSize: "24rem",
          lineHeight: 0.8,
        }}
      >
        {"{"}
      </div>

      {/* ── Main footer content ── */}
      <div className="relative mx-auto max-w-[1500px] px-6 pt-24 pb-8 md:px-12 lg:px-20">
        {/* ── Top: Wordmark ── */}
        <div className="mb-20">
          <Link href="/" className="group inline-block">
            <h2
              className="text-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white transition-colors duration-300 group-hover:text-orange"
              style={{ letterSpacing: "-0.03em", lineHeight: 0.9 }}
            >
              THE HUSTLE
              <br />
              COLLECTIVE
            </h2>
          </Link>
          <p className="text-editorial mt-6 max-w-md text-cream/60 text-base md:text-lg">
            Events built for Nottingham — since 2006
          </p>
        </div>

        {/* ── Asterisk separator ── */}
        <div className="mb-16 flex items-center gap-4" aria-hidden="true">
          <span className="text-orange text-xl">&#x2731;</span>
          <span className="h-px flex-1 bg-cream/10" />
          <span className="text-orange text-xl">&#x2731;</span>
          <span className="h-px flex-1 bg-cream/10" />
          <span className="text-orange text-xl">&#x2731;</span>
        </div>

        {/* ── Multi-column grid ── */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1: Navigation */}
          <div>
            <p className="text-mono mb-6 text-cream/40">Navigate</p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-cream/70 transition-colors duration-200 hover:text-orange text-[0.95rem] font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 2: Festival websites */}
          <div>
            <p className="text-mono mb-6 text-cream/40">Our Festivals</p>
            <ul className="space-y-3">
              {festivalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-cream/70 transition-colors duration-200 hover:text-teal text-[0.95rem] font-light"
                  >
                    {link.label}
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                      aria-hidden="true"
                    >
                      <path d="M1 11L11 1M11 1H3M11 1v8" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <p className="text-mono mb-6 text-cream/40">Contact</p>
            <div className="space-y-4 text-[0.95rem] font-light">
              <a
                href="mailto:hello@hockleyhustle.co.uk"
                className="block text-cream/70 transition-colors duration-200 hover:text-orange"
              >
                hello@hockleyhustle.co.uk
              </a>
              <address className="not-italic text-cream/50 leading-relaxed">
                Fisher Gate Point
                <br />
                Nottingham
                <br />
                NG1 1GD
              </address>
            </div>
          </div>

          {/* Column 4: Social + tagline */}
          <div>
            <p className="text-mono mb-6 text-cream/40">Follow Us</p>
            <div className="flex items-center gap-5 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/60 transition-all duration-200 hover:text-orange hover:scale-110"
                  aria-label={`Follow us on ${social.label}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="border-l-2 border-teal/30 pl-4">
              <p className="text-editorial text-cream/40 text-sm leading-relaxed">
                A network of community festivals celebrating art, music, and
                good times in Nottingham.
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-mono text-cream/30">
            &copy; {currentYear} The Hustle Collective. All rights reserved.
          </p>
          <p className="text-mono text-cream/30">
            <span className="text-orange" aria-hidden="true">
              &#x2731;
            </span>{" "}
            Nottingham, UK
          </p>
        </div>
      </div>
    </footer>
  );
}
