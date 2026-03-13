import { Metadata } from "next";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { getFestivalBySlug, festivals } from "@/data/festivals";
import {
  getFestivalBySlugFromSanity,
  getAllFestivalSlugs,
  sanityImageUrl,
} from "@/lib/sanity";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FestivalPageContent from "@/components/festivals/FestivalPageContent";
import { type Festival } from "@/data/festivals";

async function resolveFestival(slug: string, isDraft = false): Promise<Festival | null> {
  // Try Sanity first
  const sanity = await getFestivalBySlugFromSanity(slug, isDraft);
  if (sanity) {
    return {
      slug: sanity.slug,
      name: sanity.name,
      tagline: sanity.tagline || "",
      established: sanity.established || 2006,
      accentColor: sanity.accentColor?.hex || "#174af4",
      accentColorLight: sanity.accentColorLight?.hex || sanity.accentColor?.hex || "#174af4",
      intro: sanity.intro || "",
      sections: sanity.sections || [],
      pullQuote: sanity.pullQuote,
      stats: sanity.stats || [],
      externalLink: sanity.externalLink,
      heroImage: sanity.heroImage ? sanityImageUrl(sanity.heroImage) : "/images/placeholder-festival.jpg",
      galleryImages: (sanity.galleryImages || []).map((img) => sanityImageUrl(img)),
    };
  }

  // Fall back to static data
  return getFestivalBySlug(slug) || null;
}

export async function generateStaticParams() {
  // Merge Sanity slugs with static slugs
  const sanitySlugs = await getAllFestivalSlugs();
  const staticSlugs = festivals.map((f) => f.slug);
  const allSlugs = [...new Set([...sanitySlugs, ...staticSlugs])];
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const festival = await resolveFestival(slug);

  if (!festival) {
    return { title: "Festival Not Found" };
  }

  return {
    title: `${festival.name} — The Hustle Collective`,
    description: festival.intro,
    keywords: [
      festival.name,
      "Nottingham festival",
      "community events",
      "The Hustle Collective",
      "arts festival",
      "music festival",
    ],
    openGraph: {
      title: `${festival.name} — The Hustle Collective`,
      description: festival.tagline,
      images: [festival.heroImage],
    },
  };
}

export default async function FestivalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { isEnabled: isDraft } = await draftMode();
  const festival = await resolveFestival(slug, isDraft);

  if (!festival) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <FestivalPageContent festival={festival} />
      </main>
      <Footer />
    </>
  );
}
