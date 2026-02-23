export function Exhibitions() {
  const exhibitions = [
    {
      year: "2025",
      venue: "Times Square Arts",
      city: "New York, USA",
      work: "Dance With The Devil",
    },
    {
      year: "2025",
      venue: "MFA Gallery",
      city: "Rome, Italy",
      work: "Hestia",
    },
    {
      year: "2024",
      venue: "IMNOTART Gallery",
      city: "Chicago, USA",
      work: "Erimia",
    },
    {
      year: "2024",
      venue: "Contemporary New Media Week",
      city: "Beijing, China",
      work: "By The Moon",
    },
    {
      year: "2023",
      venue: "Digital Futures Program",
      city: "Brussels, Belgium",
      work: "Exhale",
    },
    {
      year: "2023",
      venue: "Independent Artist Showcase",
      city: "Toronto, Canada",
      work: "Alchemy",
    },
  ];

  return (
    <section id="exhibitions" className="exhibitions section-shell">
      <div className="exhibitions__intro">
        <p className="section-kicker">Exhibitions</p>
        <h2 className="section-title">Global presentations</h2>
        <p className="exhibitions__lead">
          RESET works have appeared across public and private programs,
          including urban billboards, gallery installations, and digital-native
          curation platforms.
        </p>
      </div>

      <div className="exhibitions__content">
        <ol className="timeline" aria-label="Exhibition timeline">
          {exhibitions.map((item) => (
            <li key={`${item.venue}-${item.work}`} className="timeline__item">
              <div className="timeline__year">{item.year}</div>
              <div>
                <h3 className="timeline__venue">{item.venue}</h3>
                <p className="timeline__city">{item.city}</p>
                <p className="timeline__work">Featured work: {item.work}</p>
              </div>
            </li>
          ))}
        </ol>

        <aside className="exhibitions__quote">
          <p>
            "Art can hold difficult truths while still making room for beauty."
          </p>
          <span>RESET Studio Note</span>
        </aside>
      </div>
    </section>
  );
}