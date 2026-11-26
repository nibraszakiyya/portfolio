import { useState } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { en: "ABOUT ME", id: "TENTANG SAYA", to: "/#about" },
  { en: "EDUCATION", id: "PENDIDIKAN", to: "/#education" },
  { en: "CERTIFICATIONS", id: "SERTIFIKASI", to: "/#certifications" },
  { en: "PROJECTS", id: "PROYEK", to: "/#projects" },
];

function Navbar({ lang, setLang }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
        NIBRAS<span>.</span>
      </Link>

      <div className="navbar-right">
        <nav className={`navbar-links ${open ? "is-open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>
              {link[lang]}
            </Link>
          ))}
        </nav>

        <div className="lang-switch" aria-label="Language">
          <button
            className={lang === "en" ? "is-active" : ""}
            onClick={() => setLang("en")}
          >
            EN
          </button>
          <button
            className={lang === "id" ? "is-active" : ""}
            onClick={() => setLang("id")}
          >
            ID
          </button>
        </div>

        <button
          className={`navbar-toggle ${open ? "is-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;