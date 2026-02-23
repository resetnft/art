type GalleryItem = {
  type: "image" | "video";
  src: string;
  title: string;
  medium: string;
  year: string;
};

export function GallerySection() {
  const items: GalleryItem[] = [
    {
      type: "image",
      src: "/_assets/media/aaa3912052ec93c11f115f0888f9cff7.jpg",
      title: "Unfolding Memory",
      medium: "Digital painting",
      year: "2024",
    },
    {
      type: "video",
      src: "/_assets/video/f69225dd106196c459faf3434455c122.mp4",
      title: "Echo Chamber",
      medium: "Looped video",
      year: "2025",
    },
    {
      type: "image",
      src: "/_assets/media/e4d44ee0da51b979d0587ab6092a683b.jpg",
      title: "Fragments of Air",
      medium: "Mixed media",
      year: "2023",
    },
    {
      type: "video",
      src: "/_assets/video/08d5ce08469aca9195f352b24b57a185.mp4",
      title: "Night Current",
      medium: "Motion composition",
      year: "2025",
    },
    {
      type: "image",
      src: "/_assets/media/cbafa193422b431b7312388efba6b1a6.jpg",
      title: "Quiet Resistance",
      medium: "Digital collage",
      year: "2024",
    },
    {
      type: "video",
      src: "/_assets/video/6f8c9aaeb48e19b55ac6a3441969785c.mp4",
      title: "Signal Bloom",
      medium: "Animated study",
      year: "2025",
    },
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