import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProgrammeBySlug, programmes } from "@/data/programmes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProgrammePageContent from "@/components/programmes/ProgrammePageContent";

export function generateStaticParams() {
  return programmes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const programme = getProgrammeBySlug(slug);

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
  const programme = getProgrammeBySlug(slug);

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
