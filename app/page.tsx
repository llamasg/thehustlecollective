import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ImpactStats from "@/components/home/ImpactStats";
import FestivalCarousel from "@/components/home/FestivalCarousel";
import Testimonials from "@/components/home/Testimonials";
import PartnersGrid from "@/components/home/PartnersGrid";
import BlogPreview from "@/components/home/BlogPreview";
import EditorialGallery from "@/components/home/EditorialGallery";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ImpactStats />
        <EditorialGallery />
        <FestivalCarousel />
        <Testimonials />
        <BlogPreview />
        <PartnersGrid />
      </main>
      <Footer />
    </>
  );
}
