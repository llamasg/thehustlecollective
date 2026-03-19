"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { SanityEvent } from "@/lib/sanity";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const TYPE_COLORS: Record<string, { bg: string; text: string }> = {
  Workshop: { bg: "bg-emerald-500/15", text: "text-emerald-400" },
  Panel: { bg: "bg-purple-500/15", text: "text-purple-400" },
  Discussion: { bg: "bg-blue/15", text: "text-blue" },
  "1-1 Sessions": { bg: "bg-amber-500/15", text: "text-amber-400" },
};

interface TimeSlot {
  time: string;
  events: SanityEvent[];
}

function groupByTime(events: SanityEvent[]): TimeSlot[] {
  const map = new Map<string, SanityEvent[]>();
  for (const e of events) {
    const existing = map.get(e.time) || [];
    existing.push(e);
    map.set(e.time, existing);
  }
  return Array.from(map.entries()).map(([time, events]) => ({ time, events }));
}

function EventCard({ event, index }: { event: SanityEvent; index: number }) {
  const colors = TYPE_COLORS[event.type] || TYPE_COLORS.Workshop;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease }}
      className="relative border border-white/10 p-6 transition-colors duration-300 hover:border-white/20"
    >
      {/* Type badge + booking badge */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${colors.bg} ${colors.text}`}
        >
          {event.type}
        </span>
        {event.bookingRequired && (
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/50">
            Booking Required
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-display text-lg text-white sm:text-xl">
        {event.title}
      </h3>

      {/* Host */}
      {event.host && (
        <p className="text-editorial mt-2 text-sm text-white/40 sm:text-base">
          Hosted by{" "}
          <span className="text-white/60 font-medium">{event.host}</span>
        </p>
      )}

      {/* Panelists */}
      {event.panelists && event.panelists.length > 0 && (
        <ul className="mt-4 space-y-1.5 border-t border-white/5 pt-4">
          {event.panelists.map((p) => (
            <li key={p.name} className="flex items-baseline gap-2 text-sm">
              <span className="text-white/70 font-medium">{p.name}</span>
              {p.role && (
                <>
                  <span className="text-white/20" aria-hidden="true">
                    —
                  </span>
                  <span className="text-white/40">{p.role}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      )}

      {/* Eventbrite link */}
      {event.eventbriteUrl && (
        <a
          href={event.eventbriteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue transition-colors hover:text-white"
        >
          Book on Eventbrite
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 11L11 3M11 3H5M11 3v6" />
          </svg>
        </a>
      )}
    </motion.div>
  );
}

export default function ScheduleSection({
  events,
  eventbriteUrl,
}: {
  events: SanityEvent[];
  eventbriteUrl?: string;
}) {
  const days = ["Saturday", "Sunday"];
  const [activeDay, setActiveDay] = useState(days[0]);

  const filtered = events.filter((e) => e.day === activeDay);
  const slots = groupByTime(filtered);

  return (
    <section className="relative bg-black overflow-hidden">
      <div className="mx-auto max-w-[900px] px-6 py-24 sm:px-12 lg:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="mb-12"
        >
          <span className="text-mono mb-4 block text-white/30">
            * Schedule
          </span>
          <h2 className="text-display text-2xl text-white sm:text-3xl md:text-4xl">
            Lineup
          </h2>
          <p className="text-editorial mt-3 text-white/40 text-base sm:text-lg">
            Fishergate Point · 21st &amp; 22nd March 2026
          </p>
        </motion.div>

        {/* Day tabs */}
        <div className="mb-10 flex gap-2">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`relative px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeDay === day
                  ? "bg-blue text-white"
                  : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Events by time slot */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease }}
            className="space-y-10"
          >
            {slots.map((slot) => (
              <div key={slot.time}>
                {/* Time header */}
                <div className="mb-4 flex items-center gap-4">
                  <span className="text-mono text-blue text-sm whitespace-nowrap">
                    {slot.time}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>

                {/* Event cards */}
                <div className="space-y-3">
                  {slot.events.map((event, i) => (
                    <EventCard key={event._key || event._id || i} event={event} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        {eventbriteUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
            className="mt-16 text-center"
          >
            <div className="mb-8 flex items-center gap-4" aria-hidden="true">
              <span className="text-blue text-xl">*</span>
              <span className="h-px flex-1 bg-white/10" />
              <span className="text-blue text-xl">*</span>
            </div>
            <a
              href={eventbriteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 border-2 border-blue px-8 py-5 text-lg font-bold uppercase tracking-wide text-white transition-all duration-500 hover:gap-6 hover:bg-blue"
            >
              Book on Eventbrite
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M3 17L17 3M17 3H7M17 3v10" />
              </svg>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
