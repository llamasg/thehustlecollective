"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "/images/541847336_18394665364187915_7260792503741488921_n.jpg",
    alt: "Female vocalist performing at Hockley Hustle",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/565735102_18401580418187915_849310556340828048_n.jpg",
    alt: "DJ performing at Hockley Hustle",
    span: "col-span-1",
  },
  {
    src: "/images/d0e19794-c994-453e-b8ba-3ffbedcfd844_rw_1920.jpg",
    alt: "Dancer at Hockley Hustle",
    span: "col-span-1",
  },
  {
    src: "/images/43869f59-ab48-4bde-ba89-379b24d17ea6_rw_1920.jpg",
    alt: "DJ mixing at an event",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/8c70f875-df13-4ea6-af50-49b299d1c0a2_rw_1920.jpg",
    alt: "Dancing at Hockley Hustle",
    span: "col-span-1",
  },
  {
    src: "/images/493902284_1244835304315655_1530664092942420598_n.jpg",
    alt: "DJs at Young Hustlers",
    span: "col-span-1",
  },
];

export default function EditorialGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="bg-off-white">
      <div className="max-w-[1500px] mx-auto px-6 py-16 sm:px-12 lg:px-20 lg:py-24">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-mono text-charcoal/40 block mb-8"
        >
          ✱ The energy
        </motion.span>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-[minmax(180px,1fr)]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.1,
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              }}
              className={`editorial-image relative overflow-hidden ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-orange/0 hover:bg-orange/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
