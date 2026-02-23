export function Hero() {
  return (
    <section id="home" className="hero">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero__video"
        src="/_assets/video/08d5ce08469aca9195f352b24b57a185.mp4"
      />
      <div className="hero__overlay" />
      <div className="hero__grain" />

      <div className="hero__content section-shell">
        <div className="hero__copy">
          <p className="section-kicker">Digital Art Studio</p>
          <h1 className="hero__title">RESETNFT</h1>
          <p className="hero__lead">
            Curated digital works exploring memory, identity, and healing
            through motion, texture, and light.
          </p>
          <div className="hero__actions">
            <a href="#gallery" className="button button--solid">
              View Collection
            </a>
            <a href="#exhibitions" className="button button--ghost">
              Current Shows
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}