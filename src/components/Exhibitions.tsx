import { LazyVideo } from "./LazyVideo";

type ExhibitionItem = {
  type: "image" | "video";
  src: string;
  poster?: string;
  title: string;
};

export function Exhibitions() {
  const items: ExhibitionItem[] = [
    { type: "image", src: "/exhibitions/Times Square.webp", title: "Times Square, New York" },
    { type: "video", src: "/exhibitions/Miami.mp4",         poster: "/exhibitions/Miami-poster.webp", title: "Miami" },
    { type: "image", src: "/exhibitions/Beeple USA.webp",   title: "Beeple USA" },
    { type: "image", src: "/exhibitions/Rome.webp",         title: "Rome" },
    { type: "image", src: "/exhibitions/Romania.webp",      title: "Romania" },
  ];

  return (
    <section id="exhibitions" className="exhibitions section-shell">
      <div className="exhibitions__intro">
        <p className="section-kicker">Exhibitions</p>
        <h2 className="section-title">Global presentations</h2>
      </div>

      <div className="gallery-grid exhibitions__grid">
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
