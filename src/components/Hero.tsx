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
          <h1 className="hero__title">RESET</h1>
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

        <aside className="hero__panel" aria-label="Studio highlights">
          <p className="hero__panel-label">Studio Profile</p>
          <ul className="hero__stats">
            <li>
              <span className="hero__stat-value">20+</span>
              <span className="hero__stat-label">International features</span>
            </li>
            <li>
              <span className="hero__stat-value">60+</span>
              <span className="hero__stat-label">Original works</span>
            </li>
            <li>
              <span className="hero__stat-value">2019</span>
              <span className="hero__stat-label">Practice established</span>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}