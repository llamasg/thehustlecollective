"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { testimonials } from "@/data/partners";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[current];

  return (
    <section ref={ref} className="bg-black text-white">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6">
          <motion.div
            className="mb-8 lg:mb-0"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/30">
              Voices
            </p>
          </motion.div>

          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94] as const,
                }}
              >
                <blockquote>
                  <p
                    className="text-white/90 leading-[1.3] tracking-[-0.01em] max-w-[32ch]"
                    style={{
                      fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
                      fontWeight: 300,
                    }}
                  >
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <footer className="mt-8">
                    <span className="text-[11px] uppercase tracking-[0.15em] text-white/50">
                      {testimonial.author}
                      {testimonial.role && ` \u2014 ${testimonial.role}`}
                    </span>
                  </footer>
                </blockquote>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-1.5 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-px transition-all duration-500 ${
                    i === current
                      ? "w-8 bg-white"
                      : "w-4 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
