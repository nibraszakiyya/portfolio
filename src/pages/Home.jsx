import { useEffect } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

const CV_URL = "/cv/Nibras_Zakiyya_Azizah_CV.pdf";
const EMAIL = "nibrszkzh@gmail.com";
const PHOTO = "/IMG_3470_d_crop-removebg-preview.png";

const SOCIALS = [
  { label: "GitHub ↗", href: "https://github.com/nibraszakiyya" },
  { label: "LinkedIn ↗", href: "https://linkedin.com/in/nibras-zakiyya-azizah" },
  { label: "WhatsApp ↗", href: "https://wa.me/6281212768781?text=Hi%20Nibras%2C%20I%20saw%20your%20portfolio" },
];

/* =========================
   TEKS DUA BAHASA (EN / ID)
   Ubah kalimat di sini, bukan di dalam JSX.
========================= */
const TEXT = {
  en: {
    status: "Open to full-time roles · Greater Jakarta",
    heroTitle: ["Web Developer &", "System Analyst"],
    heroDescription:
      "I'm Nibras, an Information Systems graduate from Universitas Airlangga. I analyze what a system needs, then build it into web applications with Laravel and Next.js.",
    viewProjects: "View Projects",
    downloadCv: "Download CV",
    photoAlt: "Photo of Nibras Zakiyya Azizah",

    stats: {
      gpa: ["3.40", "GPA out of 4.00"],
      projects: "Web projects (internship & academic)",
      certs: "Certifications",
      toefl: "TOEFL score",
    },

    aboutLabel: "About Me",
    aboutTitle: "Bridging business needs and technical solutions.",
    aboutText:
      "I built my foundation through an internship and academic projects: analyzing requirements, designing databases, and developing web applications. I learn fast, enjoy working in teams, and I'm ready to grow in a professional environment.",
    analyzeTitle: "Systems Analysis",
    analyzeList: [
      "Requirements & scope",
      "Use cases & business processes",
      "Database design (CDM/PDM)",
      "Documentation & user guides",
    ],
    buildTitle: "Web Development",
    buildList: [
      "Laravel (MVC, Eloquent)",
      "Next.js, React, TypeScript",
      "Tailwind CSS, responsive UI",
      "Admin dashboards & CRUD",
    ],

    workLabel: "Selected Work",
    workTitle: "Case studies",
    workIntro:
      "Three projects from my internship and coursework, from requirements analysis to working applications.",

    eduLabel: "Education & Organization",
    eduTitle: "Background",
    degree: "Bachelor of Information Systems · Faculty of Science and Technology",
    gpaText: "GPA 3.40 / 4.00",
    thesisLabel: "Undergraduate Thesis",
    thesisTitle:
      "Forecasting Indonesia's Annual Rice Production Using LSTM with Transfer Learning on Multivariate Low-Frequency Time Series",
    thesisSummary:
      "Compared XGBoost, LSTM, and LSTM with transfer learning against an ARIMA baseline using 66 years of USDA data (1960–2025). XGBoost delivered the most accurate and stable predictions for this small annual dataset.",
    thesisStats: [
      ["1.33%", "Best MAPE"],
      ["0.826", "R² score"],
      ["66", "Years of data"],
    ],
    orgRole: "Expert Staff · Entrepreneurship and Inventory Division",
    orgList: [
      "Managed inventory records, equipment lending logs, and transaction documentation to keep administrative data accurate.",
      "Coordinated with vendors and internal divisions on procuring and selling association merchandise.",
      "Supported budgeting and reporting through organized sales and inventory records.",
    ],

    certLabel: "Certifications",
    certTitle: "Credentials",
    view: "View ↗",
    hkiTitle: "Intellectual Property:",
    hkiText: "contributor to 3 registered copyright works for MSME and Islamic business training",
  },

  id: {
    status: "Terbuka untuk posisi full-time · Jabodetabek",
    heroTitle: ["Web Developer &", "System Analyst"],
    heroDescription:
      "Saya Nibras, fresh graduate Sistem Informasi Universitas Airlangga. Saya menganalisis kebutuhan sistem lalu membangunnya menjadi aplikasi web dengan Laravel dan Next.js.",
    viewProjects: "Lihat Proyek",
    downloadCv: "Unduh CV",
    photoAlt: "Foto Nibras Zakiyya Azizah",

    stats: {
      gpa: ["3,40", "IPK dari 4,00"],
      projects: "Proyek web (magang & kuliah)",
      certs: "Sertifikasi",
      toefl: "Skor TOEFL",
    },

    aboutLabel: "Tentang Saya",
    aboutTitle: "Menjembatani kebutuhan bisnis dan solusi teknis.",
    aboutText:
      "Saya membangun dasar kemampuan melalui magang dan proyek perkuliahan: menganalisis kebutuhan, merancang database, dan mengembangkan aplikasi web. Saya cepat belajar, senang bekerja dalam tim, dan siap berkembang di lingkungan profesional.",
    analyzeTitle: "Analisis Sistem",
    analyzeList: [
      "Analisis kebutuhan & ruang lingkup",
      "Use case & proses bisnis",
      "Database design (CDM/PDM)",
      "Dokumentasi & user guide",
    ],
    buildTitle: "Pengembangan Web",
    buildList: [
      "Laravel (MVC, Eloquent)",
      "Next.js, React, TypeScript",
      "Tailwind CSS, responsif",
      "Dashboard admin & CRUD",
    ],

    workLabel: "Proyek Pilihan",
    workTitle: "Studi kasus",
    workIntro:
      "Tiga proyek dari magang dan perkuliahan, dari analisis kebutuhan hingga aplikasi yang berjalan.",

    eduLabel: "Pendidikan & Organisasi",
    eduTitle: "Latar belakang",
    degree: "Sarjana Sistem Informasi · Fakultas Sains dan Teknologi",
    gpaText: "IPK 3,40 / 4,00",
    thesisLabel: "Skripsi",
    thesisTitle:
      "Prediksi Produksi Beras Tahunan Indonesia Menggunakan LSTM dengan Transfer Learning pada Data Multivariate Low-Frequency Time Series",
    thesisSummary:
      "Membandingkan XGBoost, LSTM, dan LSTM dengan transfer learning terhadap baseline ARIMA menggunakan data USDA selama 66 tahun (1960–2025). XGBoost menghasilkan prediksi paling akurat dan stabil untuk dataset tahunan yang kecil ini.",
    thesisStats: [
      ["1,33%", "MAPE terbaik"],
      ["0,826", "Skor R²"],
      ["66", "Tahun data"],
    ],
    orgRole: "Staf Ahli · Divisi Kewirausahaan dan Inventaris",
    orgList: [
      "Mengelola catatan inventaris, log peminjaman alat, dan dokumentasi transaksi agar data administrasi tetap akurat.",
      "Berkoordinasi dengan vendor dan divisi internal untuk pengadaan dan penjualan merchandise himpunan.",
      "Mendukung penganggaran dan pelaporan melalui pencatatan penjualan dan inventaris yang rapi.",
    ],

    certLabel: "Sertifikasi",
    certTitle: "Kredensial",
    view: "Lihat ↗",
    hkiTitle: "Hak Kekayaan Intelektual:",
    hkiText: "kontributor 3 karya hak cipta terdaftar untuk pelatihan UMKM dan bisnis syariah",
  },
};

const TOEFL = "593";

const CERTIFICATIONS = [
  {
    title: "Data Classification and Summarization Using IBM Granite",
    issuer: "IBM SkillsBuild",
    date: { en: "Oct 2025", id: "Okt 2025" },
    link: "/certificates/ibm-granite.pdf",
  },
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding",
    date: { en: "Aug 2026 · valid until Aug 2029", id: "Agu 2026 · berlaku hingga Agu 2029" },
    link: "https://www.dicoding.com/certificates/72ZDMQOYQZYW",
  },
  {
    title: "React JS Web Frontend",
    issuer: "Sanbercode",
    date: "Jul 2023",
    link: "https://sanbercode.com/certificate/in/ac07f35f-0ad3-488f-aff9-5aff6a4d4292",
  },
  {
    title: "Introduction to Financial Literacy",
    issuer: "Dicoding",
    date: { en: "Aug 2026 · valid until Aug 2029", id: "Agu 2026 · berlaku hingga Agu 2029" },
    link: "https://www.dicoding.com/certificates/JMZVLQGDOXN9",
  },
  {
    title: "NDG Linux Essentials",
    issuer: "Cisco Networking Academy",
    date: "2023",
    link: "/certificates/cisco-linux.pdf",
  },
  {
    title: "NDG Linux Unhatched",
    issuer: "Cisco Networking Academy",
    date: "2023",
    link: "/certificates/cisco-unhatched.pdf",
  },
];

const HKI = {
  issuer: "Universitas YARSI",
  date: { en: "Oct 2025", id: "Okt 2025" },
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

/* teks yang berbeda per bahasa ditulis { en: "...", id: "..." } */
function tr(value, lang) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[lang] || value.en;
  }
  return value;
}

/* ambil teks proyek sesuai bahasa (bagian `indonesian` di projects.js) */
function projectText(project, key, lang) {
  if (lang === "id" && project.indonesian && project.indonesian[key]) {
    return project.indonesian[key];
  }
  return project[key];
}

function projectCover(project) {
  const first = (project.screenshots || [])[0];
  return project.cover || (first && first.image) || project.logo;
}

function stackName(tech) {
  return typeof tech === "string" ? tech : tech.name;
}

/* animasi muncul saat di-scroll: elemen dengan class "reveal" */
function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");

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
  }, []);
}

function Home({ lang = "en" }) {
  const t = TEXT[lang] || TEXT.en;
  useReveal();

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="hero" id="top">
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="hero-status hero-anim" style={{ "--d": 0 }}>
              <span className="status-dot" />
              {t.status}
            </div>

            <h1 className="hero-anim" style={{ "--d": 1 }}>
              {t.heroTitle[0]}
              <br />
              {t.heroTitle[1]}
            </h1>

            <p className="hero-description hero-anim" style={{ "--d": 2 }}>
              {t.heroDescription}
            </p>

            <div className="hero-actions hero-anim" style={{ "--d": 3 }}>
              <a href="#projects" className="btn btn-primary">
                {t.viewProjects}
              </a>
              <a href={CV_URL} download className="btn btn-outline">
                {t.downloadCv}
              </a>
            </div>

            <div className="hero-links hero-anim" style={{ "--d": 4 }}>
              {SOCIALS.map((social) => (
                <a key={social.href} href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              ))}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>

          <div className="hero-photo hero-anim" style={{ "--d": 2 }}>
            <img src={PHOTO} alt={t.photoAlt} />
          </div>
        </div>
      </section>

      {/* ===== BARIS ANGKA ===== */}
      <section className="stats">
        <div className="container stats-grid">
          <div>
            <strong>{t.stats.gpa[0]}</strong>
            <span>{t.stats.gpa[1]}</span>
          </div>
          <div>
            <strong>{projects.length}</strong>
            <span>{t.stats.projects}</span>
          </div>
          <div>
            <strong>{CERTIFICATIONS.length}</strong>
            <span>{t.stats.certs}</span>
          </div>
          <div>
            <strong>{TOEFL}</strong>
            <span>{t.stats.toefl}</span>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="section" id="about">
        <div className="container about-inner">
          <div className="about-text reveal">
            <p className="section-label">{t.aboutLabel}</p>
            <h2 className="section-title">{t.aboutTitle}</h2>
            <p>{t.aboutText}</p>
          </div>

          <div className="about-cards">
            <div className="card skill-card reveal" style={{ "--d": 1 }}>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="M7 9h10M7 13h6M7 17h4" />
              </svg>
              <h3>{t.analyzeTitle}</h3>
              <ul>
                {t.analyzeList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="card skill-card reveal" style={{ "--d": 2 }}>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
              </svg>
              <h3>{t.buildTitle}</h3>
              <ul>
                {t.buildList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className="section section-white" id="projects">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <p className="section-label">{t.workLabel}</p>
              <h2 className="section-title">{t.workTitle}</h2>
            </div>
            <p>{t.workIntro}</p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <Link
                to={`/projects/${project.number}`}
                className="card project-card reveal"
                style={{ "--d": index }}
                key={project.number}
              >
                <div className="project-card-image">
                  <img src={projectCover(project)} alt={project.title} loading="lazy" />
                </div>

                <div className="project-card-body">
                  <span className="project-card-meta">
                    {projectText(project, "label", lang)} · {project.year}
                  </span>
                  <h3>{project.title}</h3>
                  <p>{projectText(project, "category", lang)}</p>

                  <div className="project-card-tags">
                    {(project.stack || []).slice(0, 3).map((tech) => (
                      <span className="tag" key={stackName(tech)}>
                        {stackName(tech)}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EDUCATION ===== */}
      <section className="section" id="education">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 48 }}>
            <p className="section-label">{t.eduLabel}</p>
            <h2 className="section-title">{t.eduTitle}</h2>
          </div>

          <div className="card edu-card reveal">
            <div className="edu-top">
              <div>
                <h3>Universitas Airlangga</h3>
                <p>{t.degree}</p>
              </div>
              <div className="edu-side">
                2022 – 2026
                <strong>{t.gpaText}</strong>
              </div>
            </div>

            <div className="edu-thesis">
              <div className="edu-thesis-text">
                <p className="edu-small-label">{t.thesisLabel}</p>
                <p className="edu-thesis-title">{t.thesisTitle}</p>
                <p>{t.thesisSummary}</p>
              </div>

              <div className="edu-thesis-stats">
                {t.thesisStats.map(([value, label]) => (
                  <div key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card edu-card org-card reveal">
            <div>
              <h3>HIMSI Universitas Airlangga</h3>
              <p className="org-role">{t.orgRole}</p>
              <ul>
                {t.orgList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <span className="org-year">2024</span>
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="section section-white" id="certifications">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 40 }}>
            <p className="section-label">{t.certLabel}</p>
            <h2 className="section-title">{t.certTitle}</h2>
          </div>

          <div className="cert-list reveal">
            {CERTIFICATIONS.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="cert-item"
              >
                <div>
                  <p className="cert-item-title">{item.title}</p>
                  <p className="cert-item-meta">
                    {item.issuer} · {tr(item.date, lang)}
                  </p>
                </div>
                <span className="cert-view">{t.view}</span>
              </a>
            ))}
          </div>

          <div className="hki-box reveal">
            <strong>{t.hkiTitle}</strong> {t.hkiText} · {HKI.issuer} · {tr(HKI.date, lang)}
            <div className="hki-links">
              {HKI.items.map((item) => (
                <a key={item.link} href={item.link} target="_blank" rel="noreferrer">
                  {item.title} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
