import { LazyVideo } from "./LazyVideo";

type GalleryItem = {
  type: "image" | "video";
  src: string;
  poster?: string;
  title: string;
};

export function GallerySection() {
  const items: GalleryItem[] = [
    { type: "video", src: "/collection/Days_web.mp4",                   poster: "/collection/Days-poster.webp",                   title: "Days" },
    { type: "video", src: "/collection/justagirl_web.mp4",              poster: "/collection/justagirl-poster.webp",              title: "Just a Girl" },
    { type: "video", src: "/collection/No Love in the jungle_web.mp4",  poster: "/collection/No Love in the jungle-poster.webp",  title: "No Love in the Jungle" },
    { type: "video", src: "/collection/Playing in your head_web.mp4",   poster: "/collection/Playing in your head-poster.webp",   title: "Playing in Your Head" },
    { type: "video", src: "/collection/save my soul_web.mp4",           poster: "/collection/save my soul-poster.webp",           title: "Save My Soul" },
    { type: "image", src: "/collection/dont buy me flowrs.webp",    title: "Don't Buy Me Flowers" },
    { type: "image", src: "/collection/High_Def_Chrysalis_.webp",   title: "High Def Chrysalis" },
    { type: "image", src: "/collection/reaper collab.webp",         title: "Reaper Collab" },
  ];

  return (
    <section id="gallery" className="gallery section-shell">
      <div className="gallery__heading">
        <p className="section-kicker">Collection</p>
        <h2 className="section-title">Recent works</h2>
      </div>

      <div className="gallery-grid">
        {items.map((item) => (
          <figure key={item.src} className="gallery-card">
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="gallery-card__media"
              />
            ) : (
              <LazyVideo
                src={item.src}
                poster={item.poster}
                className="gallery-card__media"
                ariaLabel={item.title}
              />
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
