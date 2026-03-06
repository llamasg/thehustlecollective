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
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16 pt-20 pb-8 lg:pt-28">
        {/* Top: Large wordmark */}
        <div className="mb-16 lg:mb-24">
          <Link href="/" className="group inline-block">
            <h2
              className="uppercase text-white group-hover:text-blue transition-colors duration-300 leading-[0.88] tracking-[-0.04em]"
              style={{
                fontSize: "clamp(2rem, 6vw, 5rem)",
                fontWeight: 300,
              }}
            >
              The Hustle
              <br />
              Collective
            </h2>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {/* Col 1: Navigate */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/30 mb-5">
              Navigate
            </p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-white transition-colors duration-200 text-sm"
                      style={{ fontWeight: 400 }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 2: Festivals */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/30 mb-5">
              Festivals
            </p>
            <ul className="space-y-2">
              {festivalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white transition-colors duration-200 text-sm"
                    style={{ fontWeight: 400 }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/30 mb-5">
              Contact
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:hello@hockleyhustle.co.uk"
                className="block text-white/50 hover:text-blue transition-colors duration-200"
              >
                hello@hockleyhustle.co.uk
              </a>
              <address className="not-italic text-white/30 leading-relaxed">
                Fisher Gate Point
                <br />
                Nottingham NG1 1GD
              </address>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 lg:mt-24 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-[11px] uppercase tracking-[0.15em] text-white/20">
            &copy; {currentYear} The Hustle Collective
          </p>
          <p className="text-[11px] uppercase tracking-[0.15em] text-white/20">
            Nottingham, UK
          </p>
        </div>
      </div>
    </footer>
  );
}
