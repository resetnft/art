import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "600", "800"]
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "700"]
});

export const metadata: Metadata = {
  title: "RӔSET | Digital Art Portfolio",
  description: "RӔset explores the human condition using a variety of difference mediums. From digital painting, mixed media, to Ai and glitch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.variable} ${inter.variable} antialiased bg-black text-white selection:bg-white/20 isolate`}>
        {/* Sleek Glossy Navigation Bar */}
        <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-black/50 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <h1 className="text-2xl font-outfit font-bold tracking-[0.2em] uppercase text-white hover:text-white/80 transition-colors">
              R<span className="text-white/50">Ӕ</span>set
            </h1>
            <div className="hidden md:flex gap-8 font-inter text-sm tracking-widest uppercase text-white/50">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
              <a href="#exhibitions" className="hover:text-white transition-colors">Exhibitions</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
