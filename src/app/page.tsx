import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { GallerySection } from "../components/GallerySection";
import { Exhibitions } from "../components/Exhibitions";
import { FooterLinks } from "../components/FooterLinks";

export default function Home() {
  return (
    <main className="gallery-site">
      <Hero />
      <AboutSection />
      <GallerySection />
      <Exhibitions />
      <FooterLinks />
    </main>
  );
}