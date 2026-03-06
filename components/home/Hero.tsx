"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
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

interface TrailCard {
  id: number;
  x: number;
  y: number;
  src: string;
  rotation: number;
  scale: number;
}

const MAX_CARDS = 14;
const THROTTLE_MS = 130;
const CARD_W = 240;
const CARD_H = 320;

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [cards, setCards] = useState<TrailCard[]>([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgIdx = useRef(0);
  const cardId = useRef(0);
  const lastTime = useRef(0);
  const lastPos = useRef({ x: 0, y: 0 });
  const MIN_DISTANCE = 60;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Mobile slideshow — slow smooth crossfade
  useEffect(() => {
    if (!isMobile) return;
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isMobile]);

  useEffect(() => {
    if (cards.length === 0) return;
    const timer = setInterval(() => {
      setCards((prev) =>
        prev.length > MAX_CARDS ? prev.slice(-MAX_CARDS) : prev
      );
    }, 2000);
    return () => clearInterval(timer);
  }, [cards.length]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isMobile) return;
      const now = Date.now();
      if (now - lastTime.current < THROTTLE_MS) return;
      lastTime.current = now;

      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = e.clientX - rect.left - CARD_W / 2;
      const y = e.clientY - rect.top - CARD_H / 2;

      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      if (Math.sqrt(dx * dx + dy * dy) < MIN_DISTANCE) return;
      lastPos.current = { x, y };
      const rotation = (Math.random() - 0.5) * 16;
      const scale = 0.85 + Math.random() * 0.3;

      const src = heroImages[imgIdx.current % heroImages.length];
      imgIdx.current++;

      setCards((prev) => [
        ...prev.slice(-(MAX_CARDS - 1)),
        { id: cardId.current++, x, y, src, rotation, scale },
      ]);
    },
    [isMobile]
  );

  const showTrail = !isMobile;

  return (
    <section className="relative h-screen flex flex-col overflow-hidden bg-grey">
      {/* Trail layer — desktop */}
      {showTrail && (
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="absolute inset-0 z-0 cursor-crosshair"
        >
          <AnimatePresence>
            {cards.map((card) => (
              <motion.div
                key={card.id}
                className="absolute pointer-events-none"
                style={{
                  left: card.x,
                  top: card.y,
                  width: CARD_W,
                  height: CARD_H,
                }}
                initial={{ opacity: 0, scale: 0.3, rotate: card.rotation }}
                animate={{
                  opacity: 0.95,
                  scale: card.scale,
                  rotate: card.rotation,
                }}
                exit={{ opacity: 0, scale: 0.5, filter: "blur(8px)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img
                  src={card.src}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Mobile slideshow — smooth crossfade with black overlay */}
      {!showTrail && (
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.img
              key={slideIndex}
              src={heroImages[slideIndex]}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
          {/* Black overlay for contrast with white text */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}

      {/* Title + bottom bar */}
      <div
        className="relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-8 select-none pointer-events-none"
        style={showTrail ? { mixBlendMode: "difference" } : undefined}
      >
        {/* Center — the big type */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1
            className="leading-[0.88] tracking-[0.04em] text-center text-white"
            style={{
              fontFamily: "var(--font-formula)",
              fontSize: "clamp(2.4rem, 11vw, 14rem)",
              fontWeight: 700,
            }}
          >
            The Hustle
            <br />
            Collective
          </h1>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-auto grid grid-cols-3 gap-x-6">
          <motion.div
            className="self-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p
              className={`text-[11px] sm:text-xs uppercase tracking-[0.2em] ${
                showTrail ? "text-white" : "text-white/70"
              }`}
            >
              Est. 2006
            </p>
          </motion.div>

          <motion.div
            className="self-end text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <p
              className={`text-[11px] sm:text-xs uppercase tracking-[0.2em] ${
                showTrail ? "text-white" : "text-white/70"
              }`}
            >
              Art + Music + Culture
            </p>
          </motion.div>

          <motion.div
            className="self-end text-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {showTrail && (
              <p className="text-[10px] uppercase tracking-[0.2em] text-white">
                Move your cursor
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
