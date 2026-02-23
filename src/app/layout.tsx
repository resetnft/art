import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RESETNFT | Contemporary Digital Art",
  description:
    "RESETNFT is a contemporary digital art studio and gallery focused on healing, identity, and immersive media.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${manrope.variable} site-body`}>
        <header className="site-header">
          <div className="site-header__inner">
            <a href="#home" className="site-brand" aria-label="Resetnft Home">
              RESETNFT
            </a>
            <nav className="site-nav" aria-label="Primary">
              <a href="#about" className="site-nav__link">
                About
              </a>
              <a href="#gallery" className="site-nav__link">
                Gallery
              </a>
              <a href="#exhibitions" className="site-nav__link">
                Exhibitions
              </a>
              <a href="#contact" className="site-nav__link">
                Contact
              </a>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}