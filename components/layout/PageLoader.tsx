"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const imagesToPreload = [
  "/images/542473743_18394665373187915_4817825130762034475_n.jpg",
  "/images/541847336_18394665364187915_7260792503741488921_n.jpg",
  "/images/565735102_18401580418187915_849310556340828048_n.jpg",
  "/images/d0e19794-c994-453e-b8ba-3ffbedcfd844_rw_1920.jpg",
  "/images/43869f59-ab48-4bde-ba89-379b24d17ea6_rw_1920.jpg",
  "/images/8c70f875-df13-4ea6-af50-49b299d1c0a2_rw_1920.jpg",
  "/images/493902284_1244835304315655_1530664092942420598_n.jpg",
  "/images/554913406_18396846703184896_4025014112839678247_n.jpg",
  "/images/498020085_18067802216315376_3387910678819883039_n.jpg",
  "/images/498325184_18067802180315376_1693222967519244142_n.jpg",
  "/images/497886865_18067802189315376_8342772631139718310_n.jpg",
  "/images/468897616_18050716196315376_8780372532129046566_n.jpg",
  "/images/469116236_18050716958315376_4603446225916723297_n.jpg",
];

const DURATION = 1500;

// Ease-out cubic: fast start, slow finish
// Jumps to ~65% in first 40% of time, crawls through last 20%
function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function PageLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const imagesReady = useRef(false);
  const startTime = useRef(0);
  const rafRef = useRef(0);

  // Preload images in the background
  useEffect(() => {
    let loadedCount = 0;
    const total = imagesToPreload.length;

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount >= total) imagesReady.current = true;
      };
      img.src = src;
    });

    // Safety: mark ready after 4s regardless
    const safety = setTimeout(() => {
      imagesReady.current = true;
    }, 4000);

    return () => clearTimeout(safety);
  }, []);

  const tick = useCallback(() => {
    const elapsed = Date.now() - startTime.current;
    const linearT = Math.min(elapsed / DURATION, 1);
    const easedT = easeOutExpo(linearT);

    // If images aren't ready yet and we're past the duration, hold at 95%
    if (linearT >= 1 && !imagesReady.current) {
      setProgress(95);
      rafRef.current = requestAnimationFrame(tick);
      return;
    }

    // If images aren't ready, cap at 90%
    const maxPct = imagesReady.current ? 100 : 90;
    const pct = Math.min(Math.round(easedT * 100), maxPct);
    setProgress(pct);

    if (pct >= 100) {
      // Done — dismiss immediately
      setDone(true);
      return;
    }

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    startTime.current = Date.now();
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  useEffect(() => {
    if (done) {
      const t = setTimeout(() => setDismissed(true), 600);
      return () => clearTimeout(t);
    }
  }, [done]);

  if (dismissed) return <>{children}</>;

  return (
    <>
      <AnimatePresence>
        {!done && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[9999] overflow-hidden"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Black base */}
            <div className="absolute inset-0 bg-black" />

            {/* White fill — sweeps left to right */}
            <div
              className="absolute top-0 left-0 bottom-0 bg-white"
              style={{ width: `${progress}%` }}
            />

            {/* Percentage text — bottom left, huge */}
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 lg:bottom-12 lg:left-12">
              <div className="relative">
                {/* White text layer (visible against black background) */}
                <span
                  className="block text-white select-none"
                  style={{
                    fontWeight: 800,
                    fontSize: "clamp(6rem, 22vw, 20rem)",
                    lineHeight: 0.85,
                    letterSpacing: "-0.03em",
                    fontFamily: "var(--font-display), Helvetica, sans-serif",
                  }}
                >
                  {progress}%
                </span>

                {/* Black text layer — clipped to the white fill area */}
                <span
                  className="absolute inset-0 block text-black select-none"
                  style={{
                    fontWeight: 800,
                    fontSize: "clamp(6rem, 22vw, 20rem)",
                    lineHeight: 0.85,
                    letterSpacing: "-0.03em",
                    fontFamily: "var(--font-display), Helvetica, sans-serif",
                    clipPath: `inset(0 ${100 - progress}% 0 0)`,
                  }}
                >
                  {progress}%
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: done ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </>
  );
}
