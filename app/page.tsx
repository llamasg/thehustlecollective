import Navbar from "@/components/layout/Navbar";
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
import { getLatestPosts } from "@/lib/sanity";
import type { BlogPreviewPost } from "@/components/home/BlogPreview";

export default async function Home() {
  let blogPosts: BlogPreviewPost[] = [];

  try {
    const posts = await getLatestPosts();
    blogPosts = posts.map((p) => ({
      title: p.title,
      date: p.publishedAt,
      category: p.category,
      slug: p.slug.current,
    }));
  } catch {
    // Sanity unavailable — BlogPreview will hide itself
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ImpactStats />
        <ManifestoStrip />
        <FestivalCarousel />
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
