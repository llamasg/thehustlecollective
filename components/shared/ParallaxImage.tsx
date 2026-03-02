"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  overlay?: boolean;
  overlayColor?: string;
}

export default function ParallaxImage({
  src,
  alt,
  className,
  speed = 0.1,
  overlay,
  overlayColor = "rgba(0, 0, 0, 0.4)",
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to a vertical translation range based on speed.
  // A speed of 0.1 produces a +/- 10% shift, so the image must be
  // scaled up enough to cover those edges without revealing gaps.
  const yRange = speed * 100;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${yRange}%`, `${yRange}%`],
  );

  // Scale the image larger than the container so the parallax shift
  // never exposes empty space. A small extra buffer (1.05) accounts
  // for sub-pixel rounding.
  const scale = 1 + speed * 2 + 0.05;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className ?? ""}`}
    >
      <motion.div
        style={{ y, scale }}
        className="relative h-full w-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {overlay && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{ backgroundColor: overlayColor }}
        />
      )}
    </div>
  );
}
