import { useState, useEffect, useRef } from "react";

import {
  Link,
  useParams,
} from "react-router-dom";

import projects from "../data/projects";


function renderHighlight(text = "") {
  return text.split(/\*\*(.*?)\*\*/).map((part, i) =>
    i % 2 === 1 ? <mark key={i}>{part}</mark> : part
  );
}


function ProjectDetail() {

  const { id } = useParams();

  const project = projects.find(
    (project) => project.number === id
  );

  // ---------- DATA (aman walau kosong) ----------
  const screenshots = project?.screenshots || [];
  const heroSlides = project?.heroScreenshots || screenshots;
  const documentation = project?.documentation || [];
  const stack = project?.stack || [];
  const contribution = project?.contribution || [];
  const learning = project?.learning || [];
  const painPoints = project?.painPoints || [];


  // ---------- SLIDESHOW ----------
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setActiveSlide(0);
  }, [id]);

  useEffect(() => {
    if (heroSlides.length <= 1 || paused) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [heroSlides.length, paused]);


  // ---------- ANIMASI SKILLS ----------
  const stackRef = useRef(null);
  const [stackVisible, setStackVisible] = useState(false);

  useEffect(() => {
    setStackVisible(false);

    const el = stackRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStackVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [project]);


  if (!project) {

    return (
      <main className="project-detail">

        <div className="project-detail-top">

          <Link
            to="/#projects"
            className="project-back"
          >
            ← BACK TO PROJECTS
          </Link>

        </div>

        <div className="project-not-found">

          <p>404</p>

          <h1>
            PROJECT NOT FOUND
          </h1>

        </div>

      </main>
    );

  }




  return (

    <main
      className={`project-detail ${project.color}`}
      style={{ "--hero-img-ratio": project.heroRatio }}
    >


      {/* BACK */}

      <div className="project-detail-top">

        <Link
          to="/#projects"
          className="project-back"
        >
          ← BACK TO PROJECTS
        </Link>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-back project-back-github"
          >
            VIEW SOURCE CODE ↗
          </a>
        )}

      </div>



      {/* HERO */}

    <section className="project-hero">

      <div className="project-hero-content">

        <div className="project-hero-number">
          {project.number}
        </div>

        <p className="project-hero-type">
          {project.type} · {project.year}
        </p>

        <h1>
          {project.title}
        </h1>

        <p className="project-hero-description">
          {project.category}
        </p>

      </div>


      {/* PROJECT SLIDESHOW */}

      {heroSlides.length > 0 && (

        <div className="project-hero-gallery">

          <div
            className="project-image-stack"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >

            <div className="stack-image stack-image-2" />
            <div className="stack-image stack-image-1" />

            <div className="stack-image stack-image-0">
              {heroSlides.map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  alt={`${project.title} preview ${index + 1}`}
                  className={`stack-slide ${index === activeSlide ? "is-active" : ""}`}
                />
              ))}
            </div>

          </div>

          <div className="gallery-counter">

            <span>
              {String(activeSlide + 1).padStart(2, "0")}
            </span>

            <span className="gallery-counter-line"></span>

            <span>
              {String(heroSlides.length).padStart(2, "0")}
            </span>

          </div>

        </div>

      )}

    </section>



      {/* OVERVIEW */}

      <section className="project-overview">

        <div className="detail-section-label">OVERVIEW</div>

        <div className="project-overview-grid">

          <div>
            {project.overviewLead ? (
              <>
                <p className="overview-lead">{renderHighlight(project.overviewLead)}</p>
                <p className="overview-body">{project.overview}</p>
              </>
            ) : (
              <p className="detail-large-text">{project.overview}</p>
            )}

            {project.stats && (
              <div className="overview-stats">
                {project.stats.map((stat) => (
                  <div className="stat-item" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="project-meta">
            {[
              ["ROLE", project.role],
              ["CLIENT", project.client],
              ["YEAR", project.year],
              ["DURATION", project.duration],
              ["TYPE", project.type],
            ]
              .filter(([, value]) => value)
              .map(([label, value]) => (
                <div className="meta-item" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
          </div>

        </div>

      </section>



      {/* PROBLEM */}

      <section className="project-problem">

        <div className="detail-section-label">THE PROBLEM</div>

        {project.problemLead ? (
          <div className="problem-grid">

            <p className="problem-lead">{renderHighlight(project.problemLead)}</p>

            <div className="problem-flow">

              <div className="problem-card">
                <span className="problem-tag">BEFORE</span>
                <ul>
                  {painPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="problem-arrow">↓</div>

              <div className="problem-card problem-card-solution">
                <span className="problem-tag">AFTER</span>
                <p>{project.solution}</p>
              </div>

            </div>

          </div>
        ) : (
          <p className="detail-large-text">{project.problem}</p>
        )}

      </section>



      {/* TECHNOLOGY */}

      {stack.length > 0 && (
      <section className="project-stack">

        <div className="detail-section-label">
          SKILLS
        </div>


        <div
          ref={stackRef}
          className={`stack-list ${stackVisible ? "is-visible" : ""}`}
        >
          {stack.map((technology, index) => (
            <span key={technology} style={{ "--i": index }}>
              {technology}
            </span>
          ))}
        </div>

      </section>
      )}



      {/* CONTRIBUTION */}

      {contribution.length > 0 && (
      <section className="project-contribution">

        <div className="detail-section-label">
          MY CONTRIBUTION
        </div>


        <div className="contribution-list">

          {contribution.map(
            (item, index) => (

              <div
                className="contribution-item"
                key={index}
              >

                <span>
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <p>
                  {item}
                </p>

              </div>

            )
          )}

        </div>

      </section>
      )}



      {/* KEY FEATURES + SCREENSHOTS */}

      {screenshots.length > 0 && (

        <section className="project-gallery">

          <div className="detail-section-label">
            KEY FEATURES
          </div>

          <div className="screenshot-list">

            {screenshots.map((item, index) => (

              <figure className="screenshot-item" key={index}>

                <div className="screenshot-frame">
                  <img
                    src={item.image}
                    alt={item.title || `${project.title} screenshot ${index + 1}`}
                    style={{ objectFit: item.fit || "cover" }}
                  />
                </div>

                <figcaption>

                  <span className="screenshot-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="screenshot-text">
                    <h3>{item.title || item.caption}</h3>
                    {item.description && <p>{item.description}</p>}
                  </div>

                </figcaption>

              </figure>

            ))}

          </div>

        </section>

      )}



      {/* DOCUMENTATION */}

      {documentation.length > 0 && (
      <section className="project-documentation">

        <div className="detail-section-label">
          DOCUMENTATION
        </div>


        <div className="documentation-grid">

          {documentation.map(
            (item, index) => (

              <figure
                className="documentation-item"
                key={item.image}
              >

                <img
                  src={item.image}
                  alt={`${project.title} documentation ${
                    index + 1
                  }`}
                />

                <figcaption>

                  <span>
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  {item.caption}

                </figcaption>

              </figure>

            )
          )}

        </div>

      </section>
      )}



      {/* LEARNING */}

      {learning.length > 0 && (
      <section className="project-learning">

        <div className="detail-section-label">
          WHAT I LEARNED
        </div>


        <div className="learning-list">

          {learning.map(
            (item, index) => (

              <div
                className="learning-item"
                key={index}
              >

                <span>
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <p>
                  {item}
                </p>

              </div>

            )
          )}

        </div>

      </section>
      )}

    </main>

  );
}

export default ProjectDetail;