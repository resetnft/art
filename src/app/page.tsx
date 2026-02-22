import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { GallerySection } from "../components/GallerySection";
import { Exhibitions } from "../components/Exhibitions";
import { FooterLinks } from "../components/FooterLinks";

export default function Home() {
  return (
    <main className="min-h-screen bg-black w-full overflow-hidden">
      <Hero />
      <AboutSection />
      <GallerySection />
      <Exhibitions />
      <FooterLinks />
    </main>
  );
}
