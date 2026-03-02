import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedReveal from "@/components/shared/AnimatedReveal";
import StaggeredText from "@/components/shared/StaggeredText";

export const metadata: Metadata = {
  title: "What We Do — The Hustle Collective",
  description:
    "A family of experienced freelancers creating positive change through festivals, events, and community projects in Nottingham since 2006.",
};

/* ── Festival data ── */
const festivals = [
  {
    name: "Hockley Hustle",
    color: "#e85d26",
    description: "Nottingham's original multi-venue music and arts festival",
  },
  {
    name: "Young Hustlers",
    color: "#1a8a8a",
    description: "Platforming the next generation of creative talent",
  },
  {
    name: "Green Hustle",
    color: "#0d6b6b",
    description: "Where sustainability meets celebration",
  },
  {
    name: "Hustle Cinematic",
    color: "#1a1a1a",
    accentColor: "#e85d26",
    description: "Film, sound and visual storytelling",
  },
];

/* ── Programmes ── */
const programmes = [
  {
    name: "Future Hustlers",
    description: "Schools outreach and youth development",
  },
  {
    name: "Queer Hustle",
    description: "Celebrating LGBTQ+ creativity and community",
  },
  {
    name: "Industry Day",
    description: "Professional development for emerging artists",
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero Section ── */}
        <section className="relative min-h-[70vh] flex items-end bg-charcoal overflow-hidden">
          {/* Decorative background brace */}
          <div
            className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 select-none text-teal opacity-[0.04] hidden lg:block"
            aria-hidden="true"
            style={{
              fontFamily:
                "var(--font-display), Helvetica, sans-serif",
              fontWeight: 100,
              fontSize: "40rem",
              lineHeight: 0.8,
            }}
          >
            {"{"}
          </div>

          <div className="relative z-10 w-full px-6 pt-32 pb-16 sm:px-12 lg:px-20 lg:pb-24">
            {/* Section label */}
            <AnimatedReveal delay={0.2}>
              <span className="text-mono text-white/40 mb-8 block">
                &#x2731; About Us
              </span>
            </AnimatedReveal>

            {/* Main display heading */}
            <StaggeredText
              text="WHAT WE DO"
              as="h1"
              delay={0.3}
              className="text-display text-white text-[clamp(4rem,15vw,14rem)] leading-[0.85]"
            />

            {/* Tagline */}
            <AnimatedReveal delay={0.8}>
              <p className="text-editorial mt-8 text-lg sm:text-xl text-white/60 max-w-lg">
                Creating positive change through festivals, events, and
                community projects in Nottingham.
              </p>
            </AnimatedReveal>
          </div>

          {/* Bottom gradient transition */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-off-white to-transparent" />
        </section>

        {/* ── Editorial Body Section ── */}
        <section className="relative px-6 py-24 sm:px-12 lg:px-20 lg:py-40 bg-off-white overflow-hidden">
          <div className="mx-auto max-w-[1500px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              {/* ── Left column: Editorial text ── */}
              <div className="lg:col-span-7">
                <AnimatedReveal>
                  <span className="text-mono text-charcoal/40 mb-10 block">
                    &#x2731; Our Story
                  </span>
                </AnimatedReveal>

                <div className="space-y-8">
                  <AnimatedReveal delay={0.1}>
                    <p className="text-editorial text-xl sm:text-2xl text-charcoal/90 leading-relaxed">
                      The Hustle Collective are a family of experienced
                      freelancers from many backgrounds. Sharing an ethos to
                      create positive change, we promote and support creativity.
                      We support young people and we support communities.
                    </p>
                  </AnimatedReveal>

                  <AnimatedReveal delay={0.2}>
                    <p className="text-editorial text-xl sm:text-2xl text-charcoal/90 leading-relaxed">
                      Based in Nottingham, we produce and organise festivals,
                      events and projects for all ages. Over 19 productive years
                      of Hustling we&rsquo;ve come together countless times to
                      lay on feasts for the eyes, ears, brains, and
                      bellies&nbsp;&mdash; often whilst raising money for good
                      causes.
                    </p>
                  </AnimatedReveal>

                  <AnimatedReveal delay={0.3}>
                    <p className="text-editorial text-xl sm:text-2xl text-charcoal/90 leading-relaxed">
                      Through our festivals, fundraising, green initiatives,
                      schools projects, music, art, poetry, digital media, and
                      whatever else we can help happen, we hope to bring people
                      together in an inclusive and celebratory way.
                    </p>
                  </AnimatedReveal>

                  {/* Call to action */}
                  <AnimatedReveal delay={0.4}>
                    <div className="pt-4">
                      <p className="text-display text-2xl sm:text-3xl md:text-4xl text-charcoal leading-tight">
                        Talk to us.
                        <br />
                        We want to hear it.
                      </p>
                      <span
                        className="inline-block mt-4 text-orange text-3xl"
                        aria-hidden="true"
                      >
                        &#x2731;
                      </span>
                    </div>
                  </AnimatedReveal>
                </div>
              </div>

              {/* ── Right column: Image placeholder + accent ── */}
              <div className="lg:col-span-5">
                <AnimatedReveal direction="right" delay={0.3}>
                  <div className="relative">
                    {/* Image placeholder */}
                    <div className="editorial-image aspect-[4/5] w-full bg-cream rounded-sm overflow-hidden">
                      <div className="flex h-full w-full items-center justify-center">
                        <div className="text-center">
                          <span
                            className="block text-charcoal/10 text-[8rem] leading-none select-none"
                            aria-hidden="true"
                          >
                            &#x2731;
                          </span>
                          <span className="text-mono text-charcoal/20 mt-4 block">
                            Image placeholder
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Decorative offset box */}
                    <div
                      className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-sm bg-teal/10 hidden lg:block"
                      aria-hidden="true"
                    />
                  </div>
                </AnimatedReveal>

                {/* Pull quote */}
                <AnimatedReveal delay={0.5}>
                  <div className="mt-12 border-l-2 border-orange pl-6">
                    <p className="text-editorial text-charcoal/60 text-base sm:text-lg italic leading-relaxed">
                      &ldquo;Feasts for the eyes, ears, brains, and
                      bellies.&rdquo;
                    </p>
                  </div>
                </AnimatedReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── Festivals Section ── */}
        <section className="relative px-6 py-24 sm:px-12 lg:px-20 lg:py-32 bg-cream overflow-hidden">
          {/* Background decorative brace */}
          <div
            className="pointer-events-none absolute left-8 bottom-12 select-none text-teal opacity-[0.05] hidden lg:block"
            aria-hidden="true"
            style={{
              fontFamily:
                "var(--font-display), Helvetica, sans-serif",
              fontWeight: 100,
              fontSize: "20rem",
              lineHeight: 0.8,
            }}
          >
            {"}"}
          </div>

          <div className="relative mx-auto max-w-[1500px]">
            <AnimatedReveal>
              <span className="text-mono text-charcoal/40 mb-6 block">
                &#x2731; Our Festivals
              </span>
            </AnimatedReveal>

            <AnimatedReveal delay={0.1}>
              <h2 className="text-display text-[clamp(2rem,6vw,5rem)] text-charcoal mb-16 leading-[0.9]">
                Four festivals,
                <br />
                one collective.
              </h2>
            </AnimatedReveal>

            {/* Festival list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {festivals.map((festival, index) => (
                <AnimatedReveal
                  key={festival.name}
                  delay={0.15 + index * 0.1}
                >
                  <div className="group relative border-l-[3px] pl-6 py-6 transition-all duration-300 hover:pl-8">
                    <span
                      className="absolute left-0 top-0 h-full w-[3px] transition-all duration-300"
                      style={{ backgroundColor: festival.color }}
                      aria-hidden="true"
                    />

                    <div className="flex items-start gap-4">
                      {/* Color dot */}
                      <span className="relative mt-2 flex h-4 w-4 shrink-0 items-center justify-center">
                        <span
                          className="h-4 w-4 rounded-full transition-transform duration-300 group-hover:scale-125"
                          style={{ backgroundColor: festival.color }}
                        />
                        {festival.accentColor && (
                          <span
                            className="absolute h-6 w-6 rounded-full border-[1.5px] opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                            style={{ borderColor: festival.accentColor }}
                          />
                        )}
                      </span>

                      <div>
                        <h3
                          className="text-display text-xl sm:text-2xl text-charcoal leading-tight"
                          style={{ letterSpacing: "-0.02em" }}
                        >
                          {festival.name}
                        </h3>
                        <p className="text-editorial mt-2 text-charcoal/60 text-base">
                          {festival.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Programmes Section ── */}
        <section className="relative px-6 py-24 sm:px-12 lg:px-20 lg:py-32 bg-off-white overflow-hidden">
          <div className="mx-auto max-w-[1500px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              {/* Left heading */}
              <div className="lg:col-span-5">
                <AnimatedReveal>
                  <span className="text-mono text-charcoal/40 mb-6 block">
                    &#x2731; Programmes
                  </span>
                </AnimatedReveal>

                <AnimatedReveal delay={0.1}>
                  <h2 className="text-display text-[clamp(2rem,5vw,4rem)] text-charcoal leading-[0.9]">
                    Beyond
                    <br />
                    the festivals.
                  </h2>
                </AnimatedReveal>

                <AnimatedReveal delay={0.2}>
                  <p className="text-editorial mt-6 text-charcoal/60 text-lg max-w-md">
                    Our work extends year-round through dedicated programmes
                    that invest in people, creativity, and community.
                  </p>
                </AnimatedReveal>
              </div>

              {/* Right: programme cards */}
              <div className="lg:col-span-7">
                <div className="space-y-6">
                  {programmes.map((programme, index) => (
                    <AnimatedReveal
                      key={programme.name}
                      direction="right"
                      delay={0.15 + index * 0.1}
                    >
                      <div className="group flex items-start gap-6 border-b border-charcoal/10 pb-6 transition-colors duration-300 hover:border-orange/30">
                        {/* Number */}
                        <span className="text-display text-4xl sm:text-5xl text-charcoal/10 leading-none transition-colors duration-300 group-hover:text-orange/30">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div>
                          <h3 className="text-display text-lg sm:text-xl text-charcoal leading-tight">
                            {programme.name}
                          </h3>
                          <p className="text-editorial mt-2 text-charcoal/60 text-base">
                            {programme.description}
                          </p>
                        </div>
                      </div>
                    </AnimatedReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Closing CTA Section ── */}
        <section className="relative px-6 py-24 sm:px-12 lg:px-20 lg:py-32 bg-charcoal overflow-hidden">
          {/* Decorative asterisks */}
          <div
            className="pointer-events-none absolute right-12 top-12 select-none text-orange opacity-10 hidden lg:block"
            aria-hidden="true"
            style={{ fontSize: "12rem", lineHeight: 1 }}
          >
            &#x2731;
          </div>

          <div className="relative mx-auto max-w-[1500px] text-center">
            <AnimatedReveal>
              <span className="text-mono text-white/30 mb-10 block">
                &#x2731; Get involved
              </span>
            </AnimatedReveal>

            <AnimatedReveal delay={0.15}>
              <h2 className="text-display text-[clamp(2.5rem,8vw,7rem)] text-white leading-[0.85] mb-8">
                Talk to us.
              </h2>
            </AnimatedReveal>

            <AnimatedReveal delay={0.25}>
              <p className="text-editorial text-xl sm:text-2xl text-white/60 max-w-xl mx-auto mb-12">
                We want to hear it.
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.35}>
              <a
                href="/get-in-touch"
                className="inline-block border border-white/20 px-10 py-4 text-mono text-white transition-all duration-300 hover:border-orange hover:bg-orange hover:text-white"
              >
                Get in touch &rarr;
              </a>
            </AnimatedReveal>

            {/* Asterisk row */}
            <AnimatedReveal delay={0.45}>
              <div
                className="mt-16 flex items-center justify-center gap-4"
                aria-hidden="true"
              >
                <span className="h-px w-16 bg-white/10" />
                <span className="text-orange text-xl">&#x2731;</span>
                <span className="h-px w-16 bg-white/10" />
                <span className="text-orange text-xl">&#x2731;</span>
                <span className="h-px w-16 bg-white/10" />
                <span className="text-orange text-xl">&#x2731;</span>
                <span className="h-px w-16 bg-white/10" />
              </div>
            </AnimatedReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
