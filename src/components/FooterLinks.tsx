export function FooterLinks() {
    const links = [
        { name: "Foundation", url: "https://foundation.app/@resetnft" },
        { name: "SuperRare", url: "https://superrare.com/0x9f65f845d85132eafa36332fe88f34cc8c5a1e68/alchemy-166" },
        { name: "Gamma", url: "https://gamma.io/reset/created" },
        { name: "OBJKT", url: "https://objkt.com/profile/resetnft/created" },
        { name: "Exchange.art", url: "https://exchange.art/resetnft/nfts" },
    ];

    const socials = [
        { name: "Instagram", url: "https://www.instagram.com/resetnft/" },
        { name: "Twitter", url: "https://twitter.com/ResetNft" },
    ];

    return (
        <footer id="contact" className="w-full bg-[#050505] text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
            {/* Abstract background elements */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">

                <h2 className="text-4xl md:text-5xl font-outfit font-light tracking-widest text-center mb-16 uppercase text-white/80">
                    Connect & Collect
                </h2>

                <div className="flex flex-wrap justify-center gap-6 mb-20 max-w-4xl">
                    {links.map((link, i) => (
                        <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 glass hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 rounded-full font-inter font-medium tracking-widest uppercase text-sm"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="w-full h-px bg-white/10 mb-12" />

                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 font-inter text-sm text-white/40 tracking-widest uppercase">
                    <div className="flex gap-8">
                        {socials.map((s, i) => (
                            <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                                {s.name}
                            </a>
                        ))}
                    </div>
                    <p>© {new Date().getFullYear()} RӔSET NFT. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
