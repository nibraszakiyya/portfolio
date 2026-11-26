import { useState } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "ABOUT", to: "/#about" },
  { label: "EDUCATION", to: "/#education" },
  { label: "CERTIFICATIONS", to: "/#certifications" },
  { label: "PROJECTS", to: "/#projects" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
        PORTFOLIO<span>.</span>
      </Link>

      <button
        className={`navbar-toggle ${open ? "is-open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`navbar-links ${open ? "is-open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <Link key={link.label} to={link.to} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;