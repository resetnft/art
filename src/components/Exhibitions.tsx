export function Exhibitions() {
    const exhibitions = [
        { title: "Times Square NYC", detail: "Dance with the Devil" },
        { title: "MFA Gallery, Rome", detail: "Hestia" },
        { title: "Beijing", detail: "By The Moon" },
        { title: "imnotArt Gallery, Chicago", detail: "Erimia" },
        { title: "Belgium", detail: "Exhale" },
        { title: "Canada", detail: "Alchemy" },
    ];

    return (
        <section id="exhibitions" className="relative w-full min-h-screen bg-black text-white py-32 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">

                {/* Number identifier */}
                <div className="flex justify-start mb-24 opacity-20">
                    <span className="text-8xl font-inter font-bold">02</span>
                </div>

                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Left Intro text */}
                    <div>
                        <h2 className="text-6xl md:text-8xl font-outfit font-black tracking-tighter mb-8 bg-gradient-to-br from-white to-white/30 bg-clip-text text-transparent">
                            Recent <br /> Exhibitions
                        </h2>
                        <p className="text-xl font-inter font-light text-white/60 mb-12 max-w-md leading-relaxed">
                            Freedom through art. Showcased across the globe, bringing dark aspects of the human psyche into the light.
                        </p>
                        <div className="w-full h-px bg-gradient-to-r from-white/20 to-transparent" />
                    </div>

                    {/* Right List */}
                    <div className="flex flex-col justify-center space-y-12">
                        {exhibitions.map((ex, i) => (
                            <div key={i} className="group relative border-l border-white/10 pl-8 hover:border-white transition-colors duration-500">
                                <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                                <h3 className="text-3xl md:text-5xl font-outfit font-light mb-2 text-white/50 group-hover:text-white transition-colors duration-300">
                                    {ex.title}
                                </h3>
                                <p className="text-xl font-inter text-white/30 uppercase tracking-widest font-bold">
                                    {ex.detail}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
