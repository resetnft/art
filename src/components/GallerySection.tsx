export function GallerySection() {
    const items = [
        { type: "image", src: "/_assets/media/aaa3912052ec93c11f115f0888f9cff7.jpg" },
        { type: "video", src: "/_assets/video/f69225dd106196c459faf3434455c122.mp4" },
        { type: "image", src: "/_assets/media/e4d44ee0da51b979d0587ab6092a683b.jpg" },
        { type: "video", src: "/_assets/video/08d5ce08469aca9195f352b24b57a185.mp4" },
        { type: "image", src: "/_assets/media/cbafa193422b431b7312388efba6b1a6.jpg" },
        { type: "video", src: "/_assets/video/6f8c9aaeb48e19b55ac6a3441969785c.mp4" },
    ];

    return (
        <section id="gallery" className="relative bg-black w-full min-h-screen py-24">
            <div className="max-w-[1600px] mx-auto px-6">
                <div className="flex flex-col items-center mb-24">
                    <h2 className="text-5xl md:text-8xl font-outfit font-black tracking-[-0.05em] text-white">
                        RӔsets’ Work
                    </h2>
                    <div className="h-1 w-24 bg-white/20 mt-8 rounded-full" />
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-8 flex-1">
                        {items.slice(0, 3).map((item, id) => (
                            <div key={id} className="relative group overflow-hidden rounded-2xl glow-hover glass p-2 cursor-pointer">
                                {item.type === "image" ? (
                                    <img src={item.src} className="w-full h-auto object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700" alt="Artwork" />
                                ) : (
                                    <video src={item.src} autoPlay loop muted playsInline className="w-full h-auto object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700" />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-8 flex-1 pt-0 md:pt-24">
                        {items.slice(3, 6).map((item, id) => (
                            <div key={id} className="relative group overflow-hidden rounded-2xl glow-hover glass p-2 cursor-pointer">
                                {item.type === "image" ? (
                                    <img src={item.src} className="w-full h-auto object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700" alt="Artwork" />
                                ) : (
                                    <video src={item.src} autoPlay loop muted playsInline className="w-full h-auto object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
