"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { partners } from "@/data/partners";

export default function PartnersGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const funders = partners.filter((p) => p.tier === "funder");
  const partnersList = partners.filter((p) => p.tier === "partner");

  return (
    <section ref={ref} className="bg-off-white">
      <div className="max-w-[1500px] mx-auto px-6 py-24 sm:px-12 lg:px-20 lg:py-32">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-mono text-charcoal/40 block mb-4"
        >
          ✱ Supported by
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-display text-[clamp(1.5rem,3vw,2.5rem)] text-charcoal mb-16"
        >
          Partners & Funders
        </motion.h2>

        <div className="mb-12">
          <span className="text-mono text-charcoal/40 block mb-6">
            Key Funders
          </span>
          <div className="flex flex-wrap gap-8">
            {funders.map((funder, i) => (
              <motion.div
                key={funder.name}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="px-8 py-5 border-2 border-charcoal/10 hover:border-teal transition-colors duration-300"
              >
                <span className="text-xl font-bold text-charcoal tracking-tight">
                  {funder.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <span className="text-mono text-charcoal/40 block mb-6">Partners</span>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {partnersList.map((partner, i) => (
              <motion.span
                key={partner.name}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }}
                className="text-charcoal/60 font-medium text-base hover:text-teal transition-colors duration-300 cursor-default"
              >
                {partner.name}
                {i < partnersList.length - 1 && (
                  <span className="ml-8 text-orange/40 select-none">✱</span>
                )}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
