import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import PartnersSection from "@/components/Partners";
import EventsSection from "@/components/Events";
import GallerySection from "@/components/Gallery";
import CTASection from "@/components/CTA";


export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <PartnersSection />
      <EventsSection />
      <Testimonials />
      <GallerySection />
      <CTASection />
    </div>
  );
}
