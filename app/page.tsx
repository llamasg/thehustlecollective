import NavbarServer from "@/components/layout/NavbarServer";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ManifestoStrip from "@/components/home/ManifestoStrip";
import ImpactStats from "@/components/home/ImpactStats";
import FestivalCarousel from "@/components/home/FestivalCarousel";
import Testimonials from "@/components/home/Testimonials";
import PartnersGrid from "@/components/home/PartnersGrid";
import BlogPreview from "@/components/home/BlogPreview";
import EditorialGallery from "@/components/home/EditorialGallery";
import ProgrammesGrid from "@/components/home/ProgrammesGrid";
import { getLatestPosts, getAllFestivals, sanityImageUrl } from "@/lib/sanity";
import { festivals as staticFestivals } from "@/data/festivals";
import type { BlogPreviewPost } from "@/components/home/BlogPreview";

export default async function Home() {
  let blogPosts: BlogPreviewPost[] = [];
  let festivalCards: { slug: string; name: string; tagline: string; heroImage: string }[] = [];

  try {
    const [posts, sanityFestivals] = await Promise.all([
      getLatestPosts(),
      getAllFestivals(),
    ]);
    blogPosts = posts.map((p) => ({
      title: p.title,
      date: p.publishedAt,
      category: p.category,
      slug: p.slug.current,
    }));
    if (sanityFestivals.length > 0) {
      festivalCards = sanityFestivals.map((f) => ({
        slug: f.slug,
        name: f.name,
        tagline: f.tagline || "",
        heroImage: f.heroImage ? sanityImageUrl(f.heroImage) : "/images/placeholder-festival.jpg",
      }));
    }
  } catch {
    // Sanity unavailable — use static fallbacks
  }

  // Fall back to static data if Sanity returned nothing
  if (festivalCards.length === 0) {
    festivalCards = staticFestivals.map((f) => ({
      slug: f.slug,
      name: f.name,
      tagline: f.tagline,
      heroImage: f.heroImage,
    }));
  }

  return (
    <>
      <NavbarServer />
      <main>
        <Hero />
        <ImpactStats />
        <ManifestoStrip />
        <FestivalCarousel festivals={festivalCards} />
        <ProgrammesGrid />
        <EditorialGallery />
        <Testimonials />
        <BlogPreview posts={blogPosts} />
        <PartnersGrid />
      </main>
      <Footer />
    </>
  );
}
