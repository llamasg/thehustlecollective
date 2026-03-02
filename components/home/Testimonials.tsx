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
    <section
      ref={ref}
      className="relative bg-cream overflow-hidden"
    >
      <span className="absolute top-12 left-6 sm:left-12 lg:left-20 text-[15rem] leading-none font-black text-charcoal/[0.03] select-none">
        &ldquo;
      </span>

      <div className="max-w-[1500px] mx-auto px-6 py-24 sm:px-12 lg:px-20 lg:py-40">
        <div className="relative max-w-4xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-mono text-charcoal/40 block mb-12"
          >
            ✱ Voices
          </motion.span>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            >
              <blockquote>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-light italic leading-snug text-charcoal/90 tracking-tight">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-8 flex items-center gap-3">
                  <span className="w-8 h-px bg-orange" />
                  <cite className="not-italic">
                    <span className="font-bold text-charcoal text-base">
                      {testimonial.author}
                    </span>
                    {testimonial.role && (
                      <span className="text-mono text-charcoal/50 block mt-1">
                        {testimonial.role}
                      </span>
                    )}
                  </cite>
                </footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-2 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === current
                    ? "w-8 bg-orange"
                    : "w-1.5 bg-charcoal/20 hover:bg-charcoal/40"
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
