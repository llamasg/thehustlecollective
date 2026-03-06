"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// ── Animation variants ──
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

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: {
      delay,
      duration: 0.6,
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

// ── Social link data ──
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

// ── Component ──
export default function GetInTouchPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSending(true);

    // Simulate a network request
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    }, 1200);
  }

  return (
    <>
      <Navbar />
      <main className="bg-grey min-h-screen">
        {/* ── Hero Section ── */}
        <section className="relative overflow-hidden bg-black pt-32 pb-20 md:pt-40 md:pb-28">
          {/* Decorative background asterisks */}
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
          <motion.span
            className="pointer-events-none absolute bottom-8 left-8 select-none text-blue/[0.08]"
            style={{ fontSize: "10rem", lineHeight: 1 }}
            aria-hidden="true"
            initial={{ opacity: 0, rotate: 20 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
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
              We want to hear from you. Whether you&rsquo;re an artist, a venue,
              a brand, a charity, or just someone who loves Nottingham
              &mdash;&nbsp;let&rsquo;s talk.
            </motion.p>
          </div>
        </section>

        {/* ── Contact Content ── */}
        <section className="relative py-20 md:py-28">
          {/* Subtle decorative asterisk */}
          <motion.span
            className="pointer-events-none absolute top-12 right-20 hidden select-none text-blue/[0.06] lg:block"
            style={{ fontSize: "8rem", lineHeight: 1 }}
            aria-hidden="true"
            custom={0.5}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            &#x2731;
          </motion.span>

          <div className="mx-auto max-w-[1500px] px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
              {/* ── Left: Contact Details ── */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.span
                  className="text-sm tracking-wide uppercase mb-6 block text-black/40"
                  variants={staggerItem}
                >
                  Contact Details
                </motion.span>

                {/* Email */}
                <motion.div className="mb-10" variants={staggerItem}>
                  <p className="text-sm tracking-wide uppercase mb-2 text-black/50">Email</p>
                  <a
                    href="mailto:hello@hockleyhustle.co.uk"
                    className="text-xl font-medium text-black transition-colors duration-200 hover:text-blue md:text-2xl"
                    style={{ fontWeight: 500 }}
                  >
                    hello@hockleyhustle.co.uk
                  </a>
                </motion.div>

                {/* Address */}
                <motion.div className="mb-10" variants={staggerItem}>
                  <p className="text-sm tracking-wide uppercase mb-2 text-black/50">Address</p>
                  <address
                    className="text-lg not-italic leading-relaxed text-black/80 md:text-xl"
                    style={{ fontWeight: 300 }}
                  >
                    Fisher Gate Point
                    <br />
                    Nottingham
                    <br />
                    NG1 1GD
                  </address>
                </motion.div>

                {/* Social */}
                <motion.div className="mb-10" variants={staggerItem}>
                  <p className="text-sm tracking-wide uppercase mb-4 text-black/50">Follow Us</p>
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
                        <span
                          className="text-sm"
                          style={{ fontWeight: 500 }}
                        >
                          {social.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </motion.div>

                {/* Decorative divider */}
                <motion.div
                  className="flex items-center gap-3 pt-4"
                  variants={staggerItem}
                  aria-hidden="true"
                >
                  <span className="text-blue text-sm">&#x2731;</span>
                  <span className="h-px w-24 bg-black/10" />
                  <span className="text-blue text-sm">&#x2731;</span>
                </motion.div>

                {/* Warm aside */}
                <motion.div
                  className="mt-8 border-l-2 border-blue/30 pl-5"
                  variants={staggerItem}
                >
                  <p
                    className="text-editorial text-black/50 text-sm leading-relaxed md:text-base"
                  >
                    We&rsquo;re a small team with big ideas. We read every
                    message and do our best to reply within a few working days.
                    <span className="text-blue" aria-hidden="true">
                      {" "}
                      &#x2731;
                    </span>
                  </p>
                </motion.div>
              </motion.div>

              {/* ── Right: Contact Form ── */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94] as const,
                }}
              >
                <span className="text-sm tracking-wide uppercase mb-6 block text-black/40">
                  Send a Message
                </span>

                {submitted ? (
                  /* ── Success state ── */
                  <motion.div
                    className="flex flex-col items-start rounded-2xl bg-grey/60 px-8 py-12 md:px-10 md:py-16"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                  >
                    <motion.span
                      className="mb-4 text-4xl text-blue"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      &#x2731;
                    </motion.span>
                    <h2
                      className="text-display mb-3 text-2xl text-black md:text-3xl"
                    >
                      MESSAGE SENT
                    </h2>
                    <p className="text-editorial mb-8 max-w-md text-black/60">
                      Thanks for reaching out! We&rsquo;ll get back to you as
                      soon as we can. In the meantime, follow us on social media
                      for the latest updates.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-sm tracking-wide uppercase cursor-pointer text-blue transition-colors duration-200 hover:text-blue"
                    >
                      Send another message &rarr;
                    </button>
                  </motion.div>
                ) : (
                  /* ── Form ── */
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="text-sm tracking-wide uppercase mb-3 block text-black/50"
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="e.g. Robin Hood"
                        className="w-full border-0 border-b-2 border-black/15 bg-transparent py-3 text-black placeholder:text-black/25 transition-colors duration-200 outline-none focus:border-blue"
                        style={{ fontSize: "1.05rem", fontWeight: 400 }}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="text-sm tracking-wide uppercase mb-3 block text-black/50"
                      >
                        Your Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="robin@sherwood.co.uk"
                        className="w-full border-0 border-b-2 border-black/15 bg-transparent py-3 text-black placeholder:text-black/25 transition-colors duration-200 outline-none focus:border-blue"
                        style={{ fontSize: "1.05rem", fontWeight: 400 }}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="text-sm tracking-wide uppercase mb-3 block text-black/50"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Tell us what you're thinking..."
                        className="w-full resize-none border-0 border-b-2 border-black/15 bg-transparent py-3 text-black placeholder:text-black/25 transition-colors duration-200 outline-none focus:border-blue"
                        style={{ fontSize: "1.05rem", fontWeight: 400 }}
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={sending}
                      className="group relative w-full cursor-pointer overflow-hidden rounded-md bg-blue px-8 py-4 text-white transition-all duration-300 hover:bg-blue disabled:opacity-70 sm:w-auto"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span
                        className="relative z-10 flex items-center justify-center gap-2 sm:justify-start"
                        style={{
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {sending ? (
                          <>
                            <motion.span
                              className="inline-block text-lg"
                              animate={{ rotate: 360 }}
                              transition={{
                                repeat: Infinity,
                                duration: 1,
                                ease: "linear",
                              }}
                            >
                              &#x2731;
                            </motion.span>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <span
                              className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                            >
                              &rarr;
                            </span>
                          </>
                        )}
                      </span>
                    </motion.button>

                    {/* Privacy note */}
                    <p className="text-sm tracking-wide uppercase mt-2 text-black/30">
                      <span className="text-blue" aria-hidden="true">
                        &#x2731;
                      </span>{" "}
                      We&rsquo;ll never share your details with third parties.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
