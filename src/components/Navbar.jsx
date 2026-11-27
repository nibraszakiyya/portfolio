import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { id: "about", en: "About", idn: "Tentang" },
  { id: "projects", en: "Projects", idn: "Proyek" },
  { id: "education", en: "Education", idn: "Pendidikan" },
  { id: "certifications", en: "Certifications", idn: "Sertifikasi" },
];

function Navbar({ lang = "en", setLang }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { pathname } = useLocation();

  // tandai menu sesuai section yang sedang dibaca (hanya di beranda)
  useEffect(() => {
    if (pathname !== "/") {
      setActive("");
      return undefined;
    }

    const sections = NAV_LINKS
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (!sections.length || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <span className="logo-full">Nibras Zakiyya Azizah</span>
          <span className="logo-short">Nibras Z. Azizah</span>
        </Link>

        <div className="navbar-right">
          <nav
            className={`navbar-links ${open ? "is-open" : ""}`}
            aria-label={lang === "id" ? "Navigasi utama" : "Main navigation"}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                to={`/#${link.id}`}
                className={active === link.id ? "is-active" : ""}
                onClick={() => setOpen(false)}
              >
                {lang === "id" ? link.idn : link.en}
              </Link>
            ))}
          </nav>

          <div className="lang-switch" role="group" aria-label="Language">
            <button
              type="button"
              className={lang === "en" ? "is-active" : ""}
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={lang === "id" ? "is-active" : ""}
              aria-pressed={lang === "id"}
              onClick={() => setLang("id")}
            >
              ID
            </button>
          </div>

          <button
            type="button"
            className={`navbar-toggle ${open ? "is-open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
