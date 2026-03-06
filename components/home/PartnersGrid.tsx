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
    <section ref={ref} className="bg-grey">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-black/40">
              Supported By
            </p>
          </motion.div>

          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-10"
            >
              <p className="text-[11px] uppercase tracking-[0.15em] text-black/40 mb-4">
                Key Funders
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                {funders.map((funder) => (
                  <span
                    key={funder.name}
                    className="text-black tracking-[-0.01em]"
                    style={{ fontWeight: 700, fontSize: "0.95rem" }}
                  >
                    {funder.name}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <p className="text-[11px] uppercase tracking-[0.15em] text-black/40 mb-4">
                Partners
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-1">
                {partnersList.map((partner, i) => (
                  <span
                    key={partner.name}
                    className="text-black/50 text-sm"
                    style={{ fontWeight: 400 }}
                  >
                    {partner.name}
                    {i < partnersList.length - 1 && (
                      <span className="ml-6 text-black/15 select-none">
                        /
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
