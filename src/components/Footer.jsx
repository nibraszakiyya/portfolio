const EMAIL = "nibrszkzh@gmail.com";

const TEXT = {
  en: { label: "OPEN TO FULL-TIME OPPORTUNITIES", top: "BACK TO TOP ↑" },
  id: { label: "TERBUKA UNTUK PEKERJAAN FULL-TIME", top: "KEMBALI KE ATAS ↑" },
};

const FOOTER_LINKS = [
  { label: "GITHUB", href: "https://github.com/nibraszakiyya" },
  { label: "LINKEDIN", href: "https://linkedin.com/in/nibras-zakiyya-azizah" },
  { label: "WHATSAPP", href: "https://wa.me/6281212768781?text=Hi%20Nibras%2C%20I%20saw%20your%20portfolio" },
  { label: "EMAIL", href: `mailto:${EMAIL}` },
];

function Footer({ lang = "en" }) {
  const t = TEXT[lang];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <p className="footer-label">{t.label}</p>
          <a href={`mailto:${EMAIL}`} className="footer-email">
            {EMAIL} ↗
          </a>
        </div>

        <nav className="footer-links">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="footer-bottom">
        <p>© 2026 NIBRAS ZAKIYYA AZIZAH</p>
        <button
          className="footer-top-button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {t.top}
        </button>
      </div>
    </footer>
  );
}

export default Footer;