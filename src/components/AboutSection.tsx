export function AboutSection() {
  return (
    <section id="about" className="about section-shell">
      <div className="about__content">
        <p className="section-kicker">About The Artist</p>
        <h2 className="section-title">An evolving body of work rooted in resilience.</h2>
        <p>
          RESETNFT began painting early and developed a multidisciplinary practice
          that spans digital painting, mixed media, AI-assisted workflows, and
          moving image. The work often combines polished composition with
          imperfect textures to reflect the complexity of personal history.
        </p>
        <p>
          Past showcases include Times Square in New York, plus exhibitions in
          London, Paris, Dubai, Tokyo, and Rome. Each piece is built as a
          conversation between vulnerability and strength.
        </p>
        <p>
          Following years of trauma-informed social work, RESETNFT uses visual art
          as a mechanism for memory, accountability, and healing.
        </p>
      </div>

      <div className="about__media-card">
        <video
          src="/_assets/video/053edf327a35c6aedf2b8b6bb60a90c6.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="about__media"
        />
        <div className="about__media-caption">
          <p className="about__media-title">Selected Moving Work</p>
          <p className="about__media-meta">Digital film study, 2025</p>
        </div>
      </div>
    </section>
  );
}