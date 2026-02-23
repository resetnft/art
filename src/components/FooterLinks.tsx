export function FooterLinks() {
  const links = [
    { name: "Foundation", url: "https://foundation.app/@resetnft" },
    {
      name: "SuperRare",
      url: "https://superrare.com/0x9f65f845d85132eafa36332fe88f34cc8c5a1e68/alchemy-166",
    },
    { name: "Gamma", url: "https://gamma.io/resetnft/created" },
    { name: "OBJKT", url: "https://objkt.com/profile/resetnft/created" },
    { name: "Exchange", url: "https://exchange.art/resetnft/nfts" },
  ];

  const socials = [
    { name: "Instagram", url: "https://www.instagram.com/resetnft/" },
    { name: "X", url: "https://twitter.com/ResetNft" },
  ];

  return (
    <footer id="contact" className="site-footer">
      <div className="site-footer__inner section-shell">
        <div className="site-footer__top">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">Collect and connect</h2>
          </div>
          <p className="site-footer__lead">
            For commissions, exhibition proposals, and collector requests, use
            the official platforms below.
          </p>
        </div>

        <div className="market-links" aria-label="Collection platforms">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-link"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="site-footer__bottom">
          <div className="social-links" aria-label="Social profiles">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name}
              </a>
            ))}
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} RESETNFT Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}