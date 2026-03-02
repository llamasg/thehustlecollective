"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "£250k+", label: "Raised for Nottinghamshire charities since 2006" },
  { value: "19", label: "Years of community festivals" },
  { value: "50+", label: "Venues activated across Nottingham" },
  { value: "450+", label: "Performers at each Hockley Hustle" },
  { value: "10,000", label: "Trees planted through Green Hustle" },
  { value: "20+", label: "Local charities supported" },
];

function AnimatedStat({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      }}
      className={`group relative ${
        index % 3 === 1 ? "lg:mt-16" : index % 3 === 2 ? "lg:mt-32" : ""
      }`}
    >
      {index === 0 && (
        <span className="absolute -left-8 -top-4 text-8xl font-thin text-teal/10 hidden lg:block select-none">
          &#123;
        </span>
      )}

      <div className="border-l-2 border-charcoal/10 pl-6 py-4 transition-colors group-hover:border-orange">
        <span className="text-display block text-[clamp(2.5rem,5vw,5rem)] text-charcoal leading-none">
          {value}
        </span>
        <span className="text-mono mt-3 block text-charcoal/60">{label}</span>
      </div>
    </motion.div>
  );
}

export default function ImpactStats() {
  return (
    <section className="relative bg-off-white overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 py-24 sm:px-12 lg:px-20 lg:py-40">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-mono text-charcoal/40 mb-12 block"
        >
          ✱ Impact in numbers
        </motion.span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <AnimatedStat key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>

      <span className="absolute right-12 bottom-20 text-[12rem] font-thin text-teal/5 hidden lg:block select-none leading-none">
        &#125;
      </span>
    </section>
  );
}
