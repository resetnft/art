type GalleryItem = {
  type: "image" | "video";
  src: string;
  title: string;
  medium: string;
  year: string;
};

export function GallerySection() {
  const items: GalleryItem[] = [
    { type: "video", src: "/collection/Days.mp4",                   title: "Days",                   medium: "Digital video",    year: "2025" },
    { type: "video", src: "/collection/justagirl.mp4",              title: "Just a Girl",            medium: "Digital video",    year: "2025" },
    { type: "video", src: "/collection/No Love in the jungle.mp4",  title: "No Love in the Jungle", medium: "Digital video",    year: "2025" },
    { type: "video", src: "/collection/Playing in your head.mp4",   title: "Playing in Your Head",  medium: "Digital video",    year: "2025" },
    { type: "video", src: "/collection/save my soul.mp4",           title: "Save My Soul",           medium: "Digital video",    year: "2025" },
    { type: "image", src: "/collection/dont buy me flowrs.png",     title: "Don't Buy Me Flowers",  medium: "Digital painting", year: "2025" },
    { type: "image", src: "/collection/High_Def_Chrysalis_.png",    title: "High Def Chrysalis",    medium: "Digital painting", year: "2025" },
    { type: "image", src: "/collection/reaper collab.png",          title: "Reaper Collab",         medium: "Digital painting", year: "2025" },
  ];

  return (
    <section id="gallery" className="gallery section-shell">
      <div className="gallery__heading">
        <p className="section-kicker">Collection</p>
        <h2 className="section-title">Recent works</h2>
      </div>

      <div className="gallery-grid">
        {items.map((item, index) => {
          const cardClass =
            index % 5 === 0
              ? "gallery-card gallery-card--large"
              : index % 3 === 0
                ? "gallery-card gallery-card--tall"
                : "gallery-card";

          return (
            <figure key={item.src} className={cardClass}>
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="gallery-card__media"
                />
              ) : (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="gallery-card__media"
                  aria-label={item.title}
                />
              )}
              <figcaption className="gallery-card__caption">
                <p className="gallery-card__title">{item.title}</p>
                <p className="gallery-card__meta">
                  {item.medium} | {item.year}
                </p>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}