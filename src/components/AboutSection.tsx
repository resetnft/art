export function AboutSection() {
    return (
        <section id="about" className="relative w-full min-h-screen flex items-center bg-black py-24">
            {/* Subtile ambient glow */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
                {/* Left: Bio Card (Glassmorphism) */}
                <div className="glass p-10 md:p-14 lg:p-20 rounded-3xl glow-hover">
                    <div className="flex items-start gap-6 mb-12">
                        <span className="text-5xl md:text-7xl font-inter font-bold text-white/10 mt-[-10px]">
                            01
                        </span>
                        <h2 className="text-4xl md:text-6xl font-outfit font-bold tracking-tight text-white mb-8">
                            Background
                        </h2>
                    </div>

                    <div className="space-y-8 text-lg font-inter font-light leading-relaxed text-white/70">
                        <p>
                            RӔset is a female artist who discovered a love of painting from a young age.
                            Through many moves across the globe RӔset found a freedom in creating digitally.
                            This opened up a whole new creative process allowing RӔset to experiment with
                            different mediums, techniques, and technologies.
                        </p>
                        <p>
                            RӔset has had her work displayed in many countries including Times Square NYC,
                            London, Paris, Dubai, and Japan to name a few.
                        </p>
                        <p>
                            In her past experience as a social worker RӔset witnessed unspeakable trauma,
                            she uses art as a way to shine light on the issues that she is passionate about.
                            Art provides us with the path to freedom and healing.
                        </p>
                    </div>
                </div>

                {/* Right: Abstract media or image grids */}
                <div className="relative h-[600px] w-full rounded-2xl overflow-hidden glass p-4 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
                    <video
                        src="/_assets/video/053edf327a35c6aedf2b8b6bb60a90c6.mp4"
                        autoPlay loop muted playsInline
                        className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
            </div>
        </section>
    );
}
