"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { testimonials } from "@/data/partners";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  // Auto-advance timer
  useEffect(() => {
    timerRef.current = setInterval(next, 7000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 7000);
  }, [next]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      const dy = e.changedTouches[0].clientY - touchStartY.current;

      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) next();
        else prev();
        resetTimer();
      }
    },
    [next, prev, resetTimer]
  );

  const testimonial = testimonials[current];

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 30 : -30 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -30 : 30 }),
  };

  return (
    <section
      ref={ref}
      className="bg-black text-white"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
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
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
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
                  onClick={() => {
                    goTo(i);
                    resetTimer();
                  }}
                  className={`h-px transition-all duration-500 cursor-pointer ${
                    i === current
                      ? "w-8 bg-white"
                      : "w-4 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>

            <p className="mt-4 text-[10px] uppercase tracking-[0.15em] text-white/15 lg:hidden">
              Swipe to browse
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
