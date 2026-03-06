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

export default function Home() {
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
        <BlogPreview />
        <PartnersGrid />
      </main>
      <Footer />
    </>
  );
}
