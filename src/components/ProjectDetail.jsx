import { useState, useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import projects from "../data/projects";


/* teks **tebal** di projects.js diberi warna aksen */
function renderHighlight(text = "") {
  return text.split(/\*\*(.*?)\*\*/).map((part, i) =>
    i % 2 === 1 ? <mark key={i}>{part}</mark> : part
  );
}


/* =========================
   LABEL DUA BAHASA (EN / ID)
========================= */
const TEXT = {
  en: {
    back: "← Back to projects",
    source: "View source code on GitHub ↗",
    notFound: "Project not found",
    caseStudy: "Case study",
    overview: "Overview",
    problem: "Problem & solution",
    before: "Before",
    after: "After",
    solutionTitle: "The solution",
    skills: "Technologies",
    contribution: "My contribution",
    features: "Key features",
    documentation: "Documentation",
    learning: "What I learned",
    next: "Next project",
    viewCase: "View case study →",
    meta: { role: "Role", client: "Client", year: "Year", duration: "Duration", type: "Type" },
    slide: "Show image",
  },
  id: {
    back: "← Kembali ke proyek",
    source: "Lihat source code di GitHub ↗",
    notFound: "Proyek tidak ditemukan",
    caseStudy: "Studi kasus",
    overview: "Gambaran umum",
    problem: "Masalah & solusi",
    before: "Sebelum",
    after: "Sesudah",
    solutionTitle: "Solusinya",
    skills: "Teknologi",
    contribution: "Kontribusi saya",
    features: "Fitur utama",
    documentation: "Dokumentasi",
    learning: "Yang saya pelajari",
    next: "Proyek berikutnya",
    viewCase: "Lihat studi kasus →",
    meta: { role: "Peran", client: "Klien", year: "Tahun", duration: "Durasi", type: "Jenis" },
    slide: "Tampilkan gambar",
  },
};


/* Gabungkan teks Indonesia (project.indonesian) ke data proyek.
   Bagian yang belum diterjemahkan otomatis memakai versi Inggris.
   Untuk daftar berisi gambar (screenshots, documentation, stats),
   teks digabung per urutan sehingga gambarnya tetap sama. */
function localizeProject(project, lang) {
  if (!project || lang !== "id" || !project.indonesian) return project;

  const merged = { ...project };

  Object.entries(project.indonesian).forEach(([key, value]) => {
    const base = project[key];
    const isObjectList =
      Array.isArray(value) &&
      Array.isArray(base) &&
      base.some((item) => item && typeof item === "object");

    merged[key] = isObjectList
      ? base.map((item, index) => ({ ...item, ...(value[index] || {}) }))
      : value;
  });

  return merged;
}


function stackName(tech) {
  return typeof tech === "string" ? tech : tech.name;
}


function ProjectDetail({ lang = "en" }) {
  const { id } = useParams();
  const t = TEXT[lang] || TEXT.en;

  const index = projects.findIndex((item) => item.number === id);
  const baseProject = index >= 0 ? projects[index] : null;
  const nextProject = index >= 0 ? projects[(index + 1) % projects.length] : null;

  const project = useMemo(
    () => localizeProject(baseProject, lang),
    [baseProject, lang]
  );

  // ---------- DATA (aman walau kosong) ----------
  const screenshots = project?.screenshots || [];
  const heroSlides = project?.heroScreenshots || screenshots.slice(0, 4);
  const documentation = project?.documentation || [];
  const stack = project?.stack || [];
  const contribution = project?.contribution || [];
  const learning = project?.learning || [];
  const painPoints = project?.painPoints || [];
  const stats = project?.stats || [];


  // ---------- SLIDESHOW HERO ----------
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setActiveSlide(0);
  }, [id]);

  useEffect(() => {
    if (heroSlides.length <= 1 || paused) return undefined;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [heroSlides.length, paused]);


  // ---------- ANIMASI MUNCUL SAAT SCROLL ----------
  useEffect(() => {
    const items = document.querySelectorAll(".reveal, .pd-stack");

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [id]);


  if (!project) {
    return (
      <main className="pd-not-found">
        <h1>{t.notFound}</h1>
        <Link to="/#projects" className="btn btn-primary">
          {t.back}
        </Link>
      </main>
    );
  }


  const meta = [
    [t.meta.role, project.role],
    [t.meta.client, project.client],
    [t.meta.year, project.year],
    [t.meta.duration, project.duration],
    [t.meta.type, project.type],
  ].filter(([, value]) => value);


  return (
    <main>

      {/* ===== JUDUL & HERO ===== */}
      <section className="pd-top">
        <div className="container">
          <div className="pd-actions">
            <Link to="/#projects" className="pd-back">
              {t.back}
            </Link>

            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="pd-github">
                {t.source}
              </a>
            )}
          </div>

          <p className="section-label pd-eyebrow hero-anim" style={{ "--d": 0 }}>
            {t.caseStudy} · {project.label}
          </p>
          <h1 className="hero-anim" style={{ "--d": 1 }}>{project.title}</h1>
          <p className="pd-lead hero-anim" style={{ "--d": 2 }}>{project.category}</p>

          <div className="pd-meta hero-anim" style={{ "--d": 3 }}>
            {meta.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>

          {heroSlides.length > 0 && (
            <div
              className="hero-anim"
              style={{ "--d": 4 }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="browser">
                <div className="browser-bar" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div
                  className="browser-view"
                  style={project.heroRatio ? { "--hero-ratio": project.heroRatio } : undefined}
                >
                  {heroSlides.map((item, i) => (
                    <img
                      key={item.image}
                      src={item.image}
                      alt={item.title || `${project.title} ${i + 1}`}
                      className={i === activeSlide ? "is-active" : ""}
                      style={{
                        objectFit: item.fit || "cover",
                        objectPosition: item.fit === "contain" ? "center" : "top",
                      }}
                    />
                  ))}
                </div>
              </div>

              {heroSlides.length > 1 && (
                <div className="slide-dots">
                  {heroSlides.map((item, i) => (
                    <button
                      key={item.image}
                      type="button"
                      className={i === activeSlide ? "is-active" : ""}
                      aria-label={`${t.slide} ${i + 1}`}
                      onClick={() => setActiveSlide(i)}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>


      {/* ===== OVERVIEW ===== */}
      <section className="section">
        <div className="container pd-row">
          <div className="pd-row-label reveal">
            <p className="section-label">{t.overview}</p>
          </div>

          <div className="pd-row-body reveal" style={{ "--d": 1 }}>
            {project.overviewLead && (
              <p className="pd-overview-lead">{renderHighlight(project.overviewLead)}</p>
            )}
            {project.overview && <p className="pd-overview-body">{project.overview}</p>}

            {stats.length > 0 && (
              <div className="pd-stats">
                {stats.map((stat) => (
                  <div className="card" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>


      {/* ===== PROBLEM & SOLUTION ===== */}
      {(painPoints.length > 0 || project.solution) && (
        <section className="section section-white">
          <div className="container pd-row">
            <div className="pd-row-label reveal">
              <p className="section-label">{t.problem}</p>
            </div>

            <div className="pd-row-body pd-problem">
              <div className="pd-problem-card reveal">
                <p className="pd-problem-tag">{t.before}</p>
                {project.problemLead && <h3>{renderHighlight(project.problemLead)}</h3>}
                <ul>
                  {painPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              {project.solution && (
                <div className="pd-problem-card is-after reveal" style={{ "--d": 1 }}>
                  <p className="pd-problem-tag">{t.after}</p>
                  <h3>{t.solutionTitle}</h3>
                  <p>{project.solution}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}


      {/* ===== CONTRIBUTION ===== */}
      {contribution.length > 0 && (
        <section className="section">
          <div className="container pd-row">
            <div className="pd-row-label reveal">
              <p className="section-label">{t.contribution}</p>
            </div>

            <ol className="pd-row-body pd-list reveal" style={{ "--d": 1 }}>
              {contribution.map((item, i) => (
                <li key={item}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}


      {/* ===== TECHNOLOGIES ===== */}
      {stack.length > 0 && (
        <section className="section section-white">
          <div className="container pd-row">
            <div className="pd-row-label reveal">
              <p className="section-label">{t.skills}</p>
            </div>

            <div className="pd-row-body pd-stack">
              {stack.map((tech, i) => (
                <span key={stackName(tech)} style={{ "--i": i }}>
                  {stackName(tech)}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* ===== KEY FEATURES ===== */}
      {screenshots.length > 0 && (
        <section className="section">
          <div className="container">
            <p className="section-label reveal">{t.features}</p>

            <div className="pd-gallery">
              {screenshots.map((item, i) => (
                <figure className="pd-figure reveal" style={{ "--d": i % 2 }} key={item.image}>
                  <div className={`pd-figure-image ${item.fit === "contain" ? "is-contain" : ""}`}>
                    <img src={item.image} alt={item.title || project.title} loading="lazy" />
                  </div>
                  {(item.title || item.description) && (
                    <figcaption>
                      {item.title && <h3>{item.title}</h3>}
                      {item.description && <p>{item.description}</p>}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* ===== DOCUMENTATION ===== */}
      {documentation.length > 0 && (
        <section className="section section-white">
          <div className="container">
            <p className="section-label reveal">{t.documentation}</p>

            <div className="pd-gallery">
              {documentation.map((item, i) => (
                <figure className="pd-figure reveal" style={{ "--d": i % 2 }} key={item.image}>
                  <div className={`pd-figure-image ${item.fit === "contain" ? "is-contain" : ""}`}>
                    <img src={item.image} alt={item.caption || project.title} loading="lazy" />
                  </div>
                  {item.caption && (
                    <figcaption>
                      <p>{item.caption}</p>
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* ===== LEARNING ===== */}
      {learning.length > 0 && (
        <section className="section">
          <div className="container pd-row">
            <div className="pd-row-label reveal">
              <p className="section-label">{t.learning}</p>
            </div>

            <ul className="pd-row-body pd-learning">
              {learning.map((item, i) => (
                <li className="card reveal" style={{ "--d": i % 3 }} key={item}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}


      {/* ===== NEXT PROJECT ===== */}
      {nextProject && nextProject.number !== project.number && (
        <section className="pd-next">
          <div className="container">
            <div>
              <span>{t.next}</span>
              <h2>{nextProject.title}</h2>
            </div>
            <Link to={`/projects/${nextProject.number}`} className="btn btn-primary">
              {t.viewCase}
            </Link>
          </div>
        </section>
      )}

    </main>
  );
}

export default ProjectDetail;
