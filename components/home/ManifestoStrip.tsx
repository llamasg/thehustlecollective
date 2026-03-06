"use client";

import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const MANIFESTO_TEXT =
  "A network of community festivals celebrating art, music, and good times in Nottingham since 2006.";

export default function ManifestoStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (charCount >= MANIFESTO_TEXT.length) return;

    const timeout = setTimeout(() => {
      setCharCount((c) => c + 1);
    }, 30);
    return () => clearTimeout(timeout);
  }, [isInView, charCount]);

  return (
    <section ref={ref} className="bg-white border-t border-black/10">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-36">
        <div className="flex justify-center">
          <p
            className="text-black leading-[1.15] tracking-[-0.02em] text-center max-w-[22ch]"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 300,
            }}
          >
            {MANIFESTO_TEXT.slice(0, charCount)}
            {charCount < MANIFESTO_TEXT.length && (
              <span className="inline-block w-[3px] h-[1em] bg-black/70 align-middle ml-0.5 animate-pulse" />
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
