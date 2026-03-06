import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFestivalBySlug, festivals } from "@/data/festivals";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FestivalPageContent from "@/components/festivals/FestivalPageContent";

export function generateStaticParams() {
  return festivals.map((festival) => ({
    slug: festival.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const festival = getFestivalBySlug(slug);

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
  const festival = getFestivalBySlug(slug);

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
