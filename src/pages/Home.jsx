import { Link } from "react-router-dom";
import projects from "../data/projects";
import { useState } from "react";

const CV_URL = "/cv/Nibras_Zakiyya_Azizah_CV.pdf";
const EMAIL = "nibrszkzh@gmail.com";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/nibraszakiyya", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/nibras-zakiyya-azizah", icon: "linkedin" },
  { label: "WhatsApp", href: "https://wa.me/6281212768781?", icon: "whatsapp"},
  { label: "Email", href: `mailto:${EMAIL}`, icon: "mail" },
];

const EYEBROW = "FRESH GRADUATE · INFORMATION SYSTEMS · UNIVERSITAS AIRLANGGA · ";

function SocialIcon({ name }) {
  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
      </svg>
    );
  }
  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0" />
      </svg>
    );
  }
  if (name === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

const CERTIFICATIONS = [
  {
    title: "React JS Web Frontend",
    issuer: "Sanbercode",
    initials: "SB",
    badgeColor: "var(--purple)",
    logo: "",
    date: "Jul 2023",
    link: "https://sanbercode.com/certificate/in/ac07f35f-0ad3-488f-aff9-5aff6a4d4292",
  },
  {
    title: "Data Classification and Summarization Using IBM Granite",
    issuer: "IBM SkillsBuild",
    initials: "IBM",
    badgeColor: "var(--pink)",
    logo: "",
    date: "Oct 2025",
    link: "/certificates/ibm-granite.pdf",
  },
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding",
    initials: "D",
    badgeColor: "#fff",
    logo: "",
    date: "Aug 2026 · valid until Aug 2029",
    link: "https://www.dicoding.com/certificates/72ZDMQOYQZYW",
  },
  {
    title: "Introduction to Financial Literacy",
    issuer: "Dicoding",
    initials: "D",
    badgeColor: "#fff",
    logo: "",
    date: "Aug 2026 · valid until Aug 2029",
    link: "https://www.dicoding.com/certificates/JMZVLQGDOXN9",
  },
  {
    title: "NDG Linux Essentials",
    issuer: "Cisco NetAcad",
    initials: "C",
    badgeColor: "#fff",
    logo: "",
    date: "2023",
    link: "/certificates/cisco-linux.pdf",
  },
  {
    title: "NDG Linux Unhatched",
    issuer: "Cisco NetAcad",
    initials: "C",
    badgeColor: "#fff",
    logo: "",
    date: "2023",
    link: "/certificates/cisco-unhatched.pdf",
  },
];

const HKI = {
  issuer: "Universitas YARSI",
  date: "Oct 2025",
  items: [
    {
      title: "Modul Business Plan UMKM Syariah",
      link: "https://drive.google.com/file/d/1WT7gdCyiIsLCsIARuzNrMsyxhoEQx_KG/view",
    },
    {
      title: "Poster: Pelatihan UMKM dan Bisnis Syariah",
      link: "https://drive.google.com/file/d/194_QZsfuubY3NXBNMUhGkmlQhRCjPnPp/view",
    },
    {
      title: "Video: Pelatihan UMKM dan Bisnis Syariah",
      link: "https://drive.google.com/file/d/1bOxtMJXJuGTfKE7i3IzVlRUL0bwbtIbr/view",
    },
  ],
};

function Home() {
  const [eduOpen, setEduOpen] = useState(false);
  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="hero" id="home">

        <span className="hero-decoration decoration-one">✕</span>
        <span className="hero-decoration decoration-two">✱</span>
        <span className="hero-decoration decoration-three">↗</span>
        <span className="hero-decoration decoration-four">+</span>

        <div className="hero-layout">

          {/* KIRI */}
          <div className="hero-main">
            <div className="hero-name-block">

            <div className="eyebrow">
              <div className="eyebrow-track">
                <span>{EYEBROW}</span>
                <span aria-hidden="true">{EYEBROW}</span>
              </div>
            </div>

            <h1 className="hero-title" aria-label="Nibras">
              {"NIBRAS".split("").map((letter, index) => (
                <span
                  key={index}
                  className="hero-letter"
                  style={{ "--i": index }}
                >
                  {letter}
                </span>
              ))}
            </h1>
            </div>

            <p className="hero-subname">ZAKIYYA AZIZAH</p>

            <span className="hero-role">WEB DEVELOPER · SYSTEM ANALYST</span>

            <p className="hero-description">
              Information Systems fresh graduate who can both analyze what a
              system needs and build it — from use cases and data models to
              working Laravel and Next.js apps.
            </p>

            <div className="hero-cta">

              <a
                href={CV_URL}
                download
                className="hero-button hero-button-primary"
                style={{ "--button-index": 0 }}
              >
                DOWNLOAD CV ↓
              </a>

              <a
                href="#projects"
                className="hero-button hero-button-purple"
                style={{ "--button-index": 1 }}
              >
                VIEW PROJECTS
              </a>

              <div className="hero-social">
                {SOCIALS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.icon === "mail" ? undefined : "_blank"}
                    rel="noreferrer"
                    aria-label={item.label}
                  >
                    <SocialIcon name={item.icon} />
                  </a>
                ))}
              </div>

            </div>

          </div>

          {/* KANAN */}
          <div className="hero-side">

            <div className="hero-status">
              <strong>
                <span className="status-dot" /> OPEN TO WORK
              </strong>
              <span>Entry-level</span>
              <span>Jabodetabek</span>
            </div>

            <nav className="hero-nav">
              {[
                ["ABOUT ME", "#about"],
                ["EDUCATION", "#education"],
                ["CERTIFICATIONS", "#certifications"],
              ].map(([label, href], index) => (
                <a
                  key={label}
                  href={href}
                  className="hero-button"
                  style={{ "--button-index": index + 2 }}
                >
                  {label}
                </a>
              ))}
            </nav>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section id="about" className="about section">

        {/* KIRI: deskripsi + kartu */}
        <div className="about-intro">

          <p className="about-text">
            Fresh Information Systems graduate from Universitas Airlangga. I've built my foundation through an internship and academic projects, analyzing requirements, designing databases, and developing web apps with Laravel and Next.js. I learn fast, enjoy working in teams, and I'm eager to grow in a professional environment.
          </p>

          <div className="about-cards">

            <article className="about-card">
              <svg
                className="about-card-art"
                viewBox="0 0 260 78"
                aria-hidden="true"
              >
                <circle cx="22" cy="39" r="14" fill="#FFFBD8" stroke="#232323" strokeWidth="2" />
                <circle cx="22" cy="34" r="4" fill="#232323" />
                <path d="M14 47c3-6 13-6 16 0" stroke="#232323" strokeWidth="2" fill="none" />
                <path d="M38 39h22M62 39l4-14M62 39l4 14" stroke="#232323" strokeWidth="2" fill="none" />
                <ellipse cx="100" cy="20" rx="34" ry="12" fill="#FE64A3" stroke="#232323" strokeWidth="2" />
                <text x="100" y="24" textAnchor="middle" fontSize="10" fontWeight="700" fill="#232323">submit</text>
                <ellipse cx="100" cy="58" rx="34" ry="12" fill="#976BDD" stroke="#232323" strokeWidth="2" />
                <text x="100" y="62" textAnchor="middle" fontSize="10" fontWeight="700" fill="#232323">approve</text>
                <path d="M136 20h30M136 58h30" stroke="#232323" strokeWidth="2" strokeDasharray="4 3" />
                <rect x="170" y="8" width="80" height="62" fill="#FFFBD8" stroke="#232323" strokeWidth="2" />
                <rect x="170" y="8" width="80" height="16" fill="#232323" />
                <path d="M178 36h50M178 46h40M178 56h56" stroke="#232323" strokeWidth="2" />
              </svg>

              <h3>I ANALYZE</h3>
              <ul>
                <li>Requirements and scope</li>
                <li>Use case and process mapping</li>
                <li>Database design (CDM / PDM)</li>
                <li>User guides and documentation</li>
              </ul>
            </article>

            <article className="about-card about-card-dark">
              <div className="about-code" aria-hidden="true">
                <div className="about-code-bar">
                  <span /><span /><span />
                </div>
                <pre>
                  <code>
                    <span className="c-purple">Route</span>::<span className="c-pink">resource</span>(<span className="c-green">'packages'</span>);{"\n"}
                    <span className="c-purple">const</span> meal = <span className="c-pink">useState</span>();
                  </code>
                </pre>
              </div>

              <h3>I BUILD</h3>
              <ul>
                <li>Laravel MVC and Eloquent</li>
                <li>Next.js, React, Tailwind CSS</li>
                <li>CRUD admin dashboards</li>
                <li>Responsive desktop and mobile UI</li>
              </ul>
            </article>

          </div>

        </div>

        {/* KANAN: judul + foto */}
        <div className="about-side">

          <h2 className="about-heading">
            ABOUT <span>ME</span>
          </h2>

          <div className="about-photo">
            <img
              src="/IMG_3470_d_crop-removebg-preview.png"
              alt="Nibras Zakiyya Azizah"
            />
          </div>

        </div>

      </section>


      {/* ================= EDUCATION ================= */}
      <section id="education" className="education section">

        <div className="section-heading">
          <p>BACKGROUND</p>
          <h2>EDUCATION</h2>
        </div>

        <div className="edu-list">

          <div className={`edu-item ${eduOpen ? "is-open" : ""}`}>

            <button
              className="edu-head"
              onClick={() => setEduOpen((prev) => !prev)}
              aria-expanded={eduOpen}
            >
              <span className="edu-year">2022 –<br />2026</span>

              <span className="edu-main">
                <span className="edu-school">Universitas Airlangga</span>
                <span className="edu-degree">
                  Bachelor of Information Systems · Faculty of Science and Technology
                </span>
                <span className="edu-gpa">
                  GPA <strong>3.40</strong> / 4.00
                </span>
              </span>

              <span className="edu-toggle" aria-hidden="true">
                <span>+</span>
              </span>
            </button>

            <div className="edu-body">
              <div>
                <div className="edu-details">

                  {/* SKRIPSI */}
                  <div className="edu-box edu-thesis">
                    <b>UNDERGRADUATE THESIS</b>

                    <h4>
                      Forecasting Indonesia's Annual Rice Production Using LSTM
                      with Transfer Learning on Multivariate Low-Frequency Time
                      Series
                    </h4>

                    <p>
                      Compared XGBoost, LSTM, and LSTM with transfer learning
                      against an ARIMA baseline, using 66 years of USDA data
                      (1960–2025). XGBoost delivered the most accurate and stable
                      predictions for this small annual dataset.
                    </p>

                    <div className="edu-thesis-stats">
                      <div>
                        <strong>1.33%</strong>
                        <span> MAPE (best model)</span>
                      </div>
                      <div>
                        <strong>0.826</strong>
                        <span> R² score</span>
                      </div>
                      <div>
                        <strong>66</strong>
                        <span> years of data</span>
                      </div>
                    </div>

                    <div className="edu-tags">
                      <span>XGBoost</span>
                      <span>LSTM</span>
                      <span>Transfer Learning</span>
                      <span>ARIMA</span>
                      <span>Walk-Forward Validation</span>
                    </div>
                  </div>

                  {/* ORGANISASI */}
                  <div className="edu-box edu-org">
                    <div className="edu-org-head">
                      <div>
                        <b>ORGANIZATION</b>
                        <h4>HIMSI Universitas Airlangga</h4>
                        <span className="edu-org-role">
                          Expert Staff · Entrepreneurship and Inventory Division
                        </span>
                      </div>
                      <span className="edu-org-year">2024</span>
                    </div>

                    <p className="edu-org-desc">
                      Information Systems Student Association — the student
                      organization of the Information Systems program.
                    </p>

                    <ul>
                      <li>
                        Managed inventory records, equipment lending logs, and
                        transaction documentation to keep administrative data
                        accurate and up to date.
                      </li>
                      <li>
                        Coordinated with vendors and internal divisions for the
                        procurement and sale of association merchandise.
                      </li>
                      <li>
                        Supported budgeting and reporting through organized
                        records of sales and inventory.
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

            {/* ================= CERTIFICATIONS ================= */}
      <section className="section certifications" id="certifications">

        <div className="cert-header">
          <div className="section-heading">
            <p>CREDENTIALS</p>
            <h2>CERTIFICATIONS</h2>
          </div>

          <p className="cert-count">
            {CERTIFICATIONS.length} certifications
            <br />
            {HKI.items.length} registered HKI
          </p>
        </div>

        <div className="cert-grid">
          {CERTIFICATIONS.map((item) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="cert-card"
            >
              <div className="cert-issuer">
                <span
                  className={`cert-badge ${item.logo ? "has-logo" : ""}`}
                  style={{ background: item.logo ? "#fff" : item.badgeColor }}
                >
                  {item.logo ? (
                    <img src={item.logo} alt={item.issuer} />
                  ) : (
                    item.initials
                  )}
                </span>
                <span>{item.issuer}</span>
              </div>

              <h3>{item.title}</h3>

              <div className="cert-footer">
                <span>{item.date}</span>
                <span className="cert-view">VIEW ↗</span>
              </div>
            </a>
          ))}
        </div>

        <div className="cert-ip">

          <p className="cert-ip-label">INTELLECTUAL PROPERTY (HKI)</p>
          <p className="cert-ip-meta">
            Registered copyrights as co-creator · {HKI.issuer} · {HKI.date}
          </p>

          <div className="cert-ip-list">
            {HKI.items.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                <span>{item.title}</span>
                <span className="cert-view">VIEW ↗</span>
              </a>
            ))}
          </div>

        </div>

      </section>


      <section id="projects" className="work section">
        <div className="section-heading">
          <p>SELECTED WORK</p>
          <h2>PROJECTS</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <Link
              to={`/projects/${project.number}`}
              className={`pcard ${project.color}`}
              key={project.number}
            >
              <div className="pcard-top">
                <span>{project.number}</span>
                <span className="pcard-arrow">↗</span>
              </div>

              <div className="pcard-frame">
                <div className="pcard-bar">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <div className="pcard-logo">
                  {project.logo ? (
                    <img src={project.logo} alt={`${project.title} logo`} />
                  ) : (
                    <span>{project.title}</span>
                  )}
                </div>
              </div>

              <div className="pcard-info">
                <h3>{project.title}</h3>
                <p>{[project.role, project.year].filter(Boolean).join(" · ")}</p>
              </div>

              <div className="pcard-tags">
                {(project.stack || []).slice(0, 3).map((tech) => {
                  const name = typeof tech === "string" ? tech : tech.name;
                  return <span key={name}>{name}</span>;
                })}
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}

export default Home;
