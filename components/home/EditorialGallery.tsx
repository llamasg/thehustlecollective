"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "/images/541847336_18394665364187915_7260792503741488921_n.jpg",
    alt: "Female vocalist performing at Hockley Hustle",
  },
  {
    src: "/images/565735102_18401580418187915_849310556340828048_n.jpg",
    alt: "DJ performing at Hockley Hustle",
  },
  {
    src: "/images/d0e19794-c994-453e-b8ba-3ffbedcfd844_rw_1920.jpg",
    alt: "Dancer at Hockley Hustle",
  },
  {
    src: "/images/43869f59-ab48-4bde-ba89-379b24d17ea6_rw_1920.jpg",
    alt: "DJ mixing at an event",
  },
  {
    src: "/images/8c70f875-df13-4ea6-af50-49b299d1c0a2_rw_1920.jpg",
    alt: "Dancing at Hockley Hustle",
  },
  {
    src: "/images/493902284_1244835304315655_1530664092942420598_n.jpg",
    alt: "DJs at Young Hustlers",
  },
];

export default function EditorialGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="bg-white border-t border-black/10">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-12"
        >
          The Gallery
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-black/10">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{
                delay: i * 0.08,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              }}
              className="relative aspect-[4/3] overflow-hidden bg-grey"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
