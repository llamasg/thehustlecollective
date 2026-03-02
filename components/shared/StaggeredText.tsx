"use client";

import { motion, type Variants } from "framer-motion";

interface StaggeredTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

const containerVariants: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: {
      staggerChildren: 0.05,
      delayChildren: delay,
    },
  }),
};

const wordVariants: Variants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function StaggeredText({
  text,
  className,
  delay = 0,
  as = "h2",
}: StaggeredTextProps) {
  const words = text.split(" ");

  const MotionTag = motion.create(as);

  return (
    <MotionTag
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={delay}
      className={className}
    >
      {words.map((word, index) => (
        <span
          key={index}
          style={{ overflow: "hidden", display: "inline-block" }}
        >
          <motion.span
            variants={wordVariants}
            style={{ display: "inline-block" }}
          >
            {word}
          </motion.span>
          {index < words.length - 1 && (
            <span style={{ display: "inline-block" }}>&nbsp;</span>
          )}
        </span>
      ))}
    </MotionTag>
  );
}
