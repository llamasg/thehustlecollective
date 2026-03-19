import { Metadata } from "next";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { getProgrammeBySlug, programmes } from "@/data/programmes";
import {
  getProgrammeBySlugFromSanity,
  getAllProgrammeSlugs,
  sanityImageUrl,
} from "@/lib/sanity";
import type { SanityEvent } from "@/lib/sanity";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProgrammePageContent from "@/components/programmes/ProgrammePageContent";
import { type Programme } from "@/data/programmes";

interface ResolvedProgramme {
  programme: Programme;
  events: SanityEvent[];
  eventbriteUrl?: string;
}

async function resolveProgramme(slug: string, isDraft = false): Promise<ResolvedProgramme | null> {
  // Try Sanity first
  const sanity = await getProgrammeBySlugFromSanity(slug, isDraft);
  if (sanity) {
    return {
      programme: {
        slug: sanity.slug,
        name: sanity.name,
        tagline: sanity.tagline || "",
        descriptor: sanity.descriptor || "",
        label: sanity.label || "",
        heroImage: sanity.heroImage ? sanityImageUrl(sanity.heroImage) : "/images/placeholder-programme.jpg",
        galleryImages: (sanity.galleryImages || []).map((img) => sanityImageUrl(img)),
        hasContent: sanity.hasContent ?? false,
        featured: sanity.featured ?? false,
        intro: sanity.intro,
        sections: sanity.sections,
        pullQuote: sanity.pullQuote,
        speakers: sanity.speakers,
      },
      events: sanity.events || [],
      eventbriteUrl: sanity.eventbriteUrl,
    };
  }

  // Fall back to static data
  const staticProgramme = getProgrammeBySlug(slug);
  if (!staticProgramme) return null;
  return { programme: staticProgramme, events: [], eventbriteUrl: undefined };
}

export async function generateStaticParams() {
  // Merge Sanity slugs with static slugs
  const sanitySlugs = await getAllProgrammeSlugs();
  const staticSlugs = programmes.map((p) => p.slug);
  const allSlugs = [...new Set([...sanitySlugs, ...staticSlugs])];
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resolved = await resolveProgramme(slug);

  if (!resolved) {
    return { title: "Programme Not Found" };
  }

  const { programme } = resolved;
  return {
    title: `${programme.name} — The Hustle Collective`,
    description: programme.intro || programme.descriptor,
    keywords: [
      programme.name,
      "Future Hustlers",
      "Nottingham",
      "The Hustle Collective",
      "talent development",
    ],
    openGraph: {
      title: `${programme.name} — The Hustle Collective`,
      description: programme.tagline,
      images: [programme.heroImage],
    },
  };
}

export default async function ProgrammePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { isEnabled: isDraft } = await draftMode();
  const resolved = await resolveProgramme(slug, isDraft);

  if (!resolved) {
    notFound();
  }

  const { programme, events, eventbriteUrl } = resolved;

  return (
    <>
      <Navbar />
      <main>
        <ProgrammePageContent programme={programme} events={events} eventbriteUrl={eventbriteUrl} />
      </main>
      <Footer />
    </>
  );
}
