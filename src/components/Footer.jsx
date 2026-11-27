const EMAIL = "nibrszkzh@gmail.com";

const TEXT = {
  en: {
    title: "Let's talk.",
    subtitle: "Open to full-time roles as a Web Developer or System Analyst.",
    top: "Back to top ↑",
  },
  id: {
    title: "Mari berdiskusi.",
    subtitle: "Terbuka untuk posisi full-time sebagai Web Developer atau System Analyst.",
    top: "Kembali ke atas ↑",
  },
};

const FOOTER_LINKS = [
  { label: "GitHub", href: "https://github.com/nibraszakiyya" },
  { label: "LinkedIn", href: "https://linkedin.com/in/nibras-zakiyya-azizah" },
  { label: "WhatsApp", href: "https://wa.me/6281212768781?text=Hi%20Nibras%2C%20I%20saw%20your%20portfolio" },
];

function Footer({ lang = "en" }) {
  const t = TEXT[lang] || TEXT.en;

  return (
    <footer className="footer" id="contact">
      <div className="container footer-inner">
        <div className="footer-cta">
          <div>
            <h2>{t.title}</h2>
            <p>{t.subtitle}</p>
          </div>
          <a href={`mailto:${EMAIL}`} className="btn btn-light">
            {EMAIL}
          </a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Nibras Zakiyya Azizah</span>

          <div className="footer-links">
            {FOOTER_LINKS.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
            <button
              type="button"
              className="footer-top-button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {t.top}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
