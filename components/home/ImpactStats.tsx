"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "\u00a3250k+", label: "Raised for charity" },
  { value: "19", label: "Years running" },
  { value: "50+", label: "Venues activated" },
  { value: "450+", label: "Performers" },
  { value: "10,000", label: "Trees planted" },
  { value: "20+", label: "Charities supported" },
];

export default function ImpactStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-white border-t border-black/10">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-12"
        >
          Impact
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              }}
            >
              <span
                className="block text-black leading-none tracking-[-0.03em]"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  fontWeight: 300,
                }}
              >
                {stat.value}
              </span>
              <span className="mt-2 block text-[11px] uppercase tracking-[0.15em] text-black/40">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
