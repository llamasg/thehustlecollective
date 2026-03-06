"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const contacts = [
  {
    department: "General Enquiries",
    email: "hello@thehustlecollective.com",
    description: "For general questions, partnerships, and collaborations",
  },
  {
    department: "Hockley Hustle",
    email: "tommy@hockleyhustle.co.uk",
    description: "Festival bookings, venues, and event enquiries",
  },
  {
    department: "Young Hustlers",
    email: "ben@hockleyhustle.co.uk",
    description: "Youth programmes and education partnerships",
  },
  {
    department: "Green Hustle",
    email: "adam@greenhustle.co.uk",
    description: "Sustainability initiatives and environmental projects",
  },
  {
    department: "Hustle Cinematic",
    email: "christine@thehustlecollective.com",
    description: "Film, screenings, and cinematic events",
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/hockleyhustle",
    icon: (
      <svg
        width="22"
        height="22"
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
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />
      </svg>
    ),
  },
];

export default function GetInTouchPage() {
  return (
    <>
      <Navbar />
      <main className="bg-grey min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden bg-black pt-32 pb-20 md:pt-40 md:pb-28">
          <motion.span
            className="pointer-events-none absolute top-16 right-12 select-none text-blue/[0.07]"
            style={{ fontSize: "18rem", lineHeight: 1 }}
            aria-hidden="true"
            initial={{ opacity: 0, rotate: -20 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          >
            &#x2731;
          </motion.span>

          <div className="relative mx-auto max-w-[1500px] px-6 md:px-12 lg:px-20">
            <motion.h1
              className="text-display text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl"
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              GET IN
              <br />
              TOUCH
            </motion.h1>

            <motion.div
              className="mt-8 flex items-center gap-3"
              custom={0.2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <span className="text-blue text-xl" aria-hidden="true">
                &#x2731;
              </span>
              <span className="h-px w-16 bg-white/20" />
            </motion.div>

            <motion.p
              className="text-editorial mt-6 max-w-2xl text-white/70 text-lg md:text-xl"
              custom={0.35}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              Reach out to the right team directly. Whether you&rsquo;re an
              artist, a venue, a brand, or a charity &mdash; we&rsquo;d love to
              hear from you.
            </motion.p>
          </div>
        </section>

        {/* Contact Blocks */}
        <section className="relative py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-6 md:px-12 lg:px-20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {contacts.map((contact) => (
                <motion.a
                  key={contact.email}
                  href={`mailto:${contact.email}`}
                  variants={staggerItem}
                  className="group block border border-black/10 bg-white p-8 sm:p-10 transition-all duration-300 hover:border-blue/30 hover:shadow-lg"
                >
                  <span className="text-[11px] uppercase tracking-[0.2em] text-black/40 block mb-4">
                    {contact.department}
                  </span>
                  <span
                    className="block text-lg sm:text-xl text-black group-hover:text-blue transition-colors duration-200 break-all"
                    style={{ fontWeight: 500 }}
                  >
                    {contact.email}
                  </span>
                  <span className="mt-3 block text-sm text-black/40 leading-relaxed">
                    {contact.description}
                  </span>
                </motion.a>
              ))}
            </motion.div>

            {/* Address + Social */}
            <motion.div
              className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-black/10 pt-16"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            >
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-black/40 block mb-4">
                  Address
                </span>
                <address
                  className="text-lg not-italic leading-relaxed text-black/80"
                  style={{ fontWeight: 300 }}
                >
                  Fisher Gate Point
                  <br />
                  Nottingham
                  <br />
                  NG1 1GD
                </address>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-black/40 block mb-4">
                  Follow Us
                </span>
                <div className="flex items-center gap-5">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2.5 text-black/70 transition-colors duration-200 hover:text-blue"
                      aria-label={`Follow us on ${social.label}`}
                    >
                      <span className="transition-transform duration-200 group-hover:scale-110">
                        {social.icon}
                      </span>
                      <span className="text-sm" style={{ fontWeight: 500 }}>
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Warm aside */}
            <motion.div
              className="mt-12 border-l-2 border-blue/30 pl-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-editorial text-black/50 text-sm leading-relaxed md:text-base">
                We&rsquo;re a small team with big ideas. We read every message
                and do our best to reply within a few working days.
                <span className="text-blue" aria-hidden="true">
                  {" "}
                  &#x2731;
                </span>
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
