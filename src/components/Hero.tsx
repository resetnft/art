import type { ReactNode } from "react";

export function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"
                src="/_assets/video/08d5ce08469aca9195f352b24b57a185.mp4"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black pointer-events-none" />

            {/* Main Content */}
            <div className="relative z-10 text-center max-w-4xl px-4 fade-in-up">
                <h1 className="text-7xl md:text-[12rem] font-outfit font-black tracking-tighter text-white/90 drop-shadow-2xl mix-blend-overlay">
                    R<span className="text-white">Ӕ</span>SET
                </h1>
                <p className="mt-6 md:mt-0 text-xl md:text-3xl font-inter font-light tracking-[0.3em] uppercase text-white/60">
                    Digital Art <span className="text-white/20 px-4">|</span> Mixed Media
                </p>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-pulse">
                <span className="text-xs uppercase tracking-widest font-inter">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
            </div>
        </section>
    );
}
