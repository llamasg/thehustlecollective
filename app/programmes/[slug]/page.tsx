import { Metadata } from "next";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { getProgrammeBySlug, programmes } from "@/data/programmes";
import {
  getProgrammeBySlugFromSanity,
  getAllProgrammeSlugs,
  sanityImageUrl,
} from "@/lib/sanity";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProgrammePageContent from "@/components/programmes/ProgrammePageContent";
import { type Programme } from "@/data/programmes";

async function resolveProgramme(slug: string, isDraft = false): Promise<Programme | null> {
  // Try Sanity first
  const sanity = await getProgrammeBySlugFromSanity(slug, isDraft);
  if (sanity) {
    return {
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
    };
  }

  // Fall back to static data
  return getProgrammeBySlug(slug) || null;
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
  const programme = await resolveProgramme(slug);

  if (!programme) {
    return { title: "Programme Not Found" };
  }

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
  const programme = await resolveProgramme(slug, isDraft);

  if (!programme) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <ProgrammePageContent programme={programme} />
      </main>
      <Footer />
    </>
  );
}
