import mypovWhyUs from "../assets/mypov/why-us.png";
import mypovGuests from "../assets/mypov/how-it-works-guests.png";
import mypovHosts from "../assets/mypov/how-it-works-hosts.png";
import mypovReviews from "../assets/mypov/reviews.png";
import mypovPackage from "../assets/mypov/package.png";
import mypovFaq from "../assets/mypov/faq.png";
import mypovPresentasi from "../assets/mypov/presentasi.png";
import mypovTim from "../assets/mypov/tim.png";
import mypovLogo from "../assets/mypov/logo.png";

import katalisLogo from "../assets/katalis/logo-katalis.png";
import katalisDosen from "../assets/katalis/dashboard-dosen.jpg";
import katalisAnakBimbing from "../assets/katalis/anak-bimbing.jpg";
import katalisDetailPkl from "../assets/katalis/detail-pkl.jpg";
import katalisKonsultasi from "../assets/katalis/konsultasi.jpg";
import katalisSeminar from "../assets/katalis/seminar.jpg";
import katalisMahasiswa from "../assets/katalis/dashboard-mahasiswa.jpg";
import katalisKoordinator from "../assets/katalis/dashboard-koordinator.jpg";

import katalisUseCase from "../assets/katalis/use-case.png";
import katalisArchitecture from "../assets/katalis/architecture.jpg";
import katalisCdm from "../assets/katalis/cdm.png";
import katalisPdm from "../assets/katalis/pdm.png";
import katalisFigma from "../assets/katalis/figma-login.png";
import katalisUserGuide from "../assets/katalis/user-guide-cover.jpg";


import nmLogo from "../assets/nutrimate/logo-nutrimate.png";
import nmHero from "../assets/nutrimate/landing-hero.jpg";
import nmWhy from "../assets/nutrimate/landing-why.jpg";
import nmFeatures from "../assets/nutrimate/landing-features.jpg";
import nmLogin from "../assets/nutrimate/login.jpg";
import nmRegister from "../assets/nutrimate/register.jpg";
import nmHome from "../assets/nutrimate/home.jpg";
import nmInputMeal from "../assets/nutrimate/input-meal.jpg";
import nmSearchMeal from "../assets/nutrimate/search-meal.jpg";
import nmMealAdded from "../assets/nutrimate/meal-added.jpg";

import nmSurvey from "../assets/nutrimate/survey.png";
import nmUserFlow from "../assets/nutrimate/user-flow.png";
import nmScreenFlow from "../assets/nutrimate/screen-flow.png";
import nmFigma from "../assets/nutrimate/figma-input-meal.png";

const projects = [
  {
    number: "01",
    slug: "mypov",

    title: "MyPOV",
    label: "Internship",

    category:
      "Responsive company profile website developed with Laravel.",

    color: "purple",
    logo: mypovLogo,

    type: "Web Development",
    year: "2025",
    role: "Web Developer",

        overviewLead:
      "A company profile website whose content can be **managed without touching code**.",

    client: "PT Penta Grup Indonesia",
    duration: "Mar – Jun 2025",

    stats: [
      { value: "6", label: "Content modules managed via dashboard" },
      { value: "2", label: "Layouts: desktop & mobile" },
      { value: "10", label: "Skills used" },
      { value: "3.5", label: "Months of development" },
    ],

        problemLead: "Website content was **locked inside the code**.",

    painPoints: [
      "Every content update required a developer to edit the frontend.",
      "Packages, reviews, and FAQs had no central place to be managed.",
      "The company lacked a professional platform to promote its services.",
    ],

    solution:
      "An admin dashboard with full CRUD, so the team can update content, packages, reviews, and FAQs on their own — no code changes needed.",
    
      contribution: [
      "Designed and developed responsive desktop and mobile interfaces.",
      "Designed the MyPOV database structure.",
      "Integrated the Laravel backend with the frontend using MVC architecture.",
      "Implemented dynamic data using Laravel Model, Controller, and Blade View.",
      "Developed CRUD functionality for content management through the admin dashboard.",
      "Presented the project to the field supervisor and implemented revisions.",
    ],

    stack: [
      "Laravel",
      "PHP",
      "MySQL",
      "Blade",
      "Eloquent ORM",
      "Tailwind CSS",
      "JavaScript",
      "jQuery",
      "Swiper.js",
      "MVC",
    ],

    features: [
      {
        title: "PACKAGE",
        description:
          "Dynamic pricing cards with alternating backgrounds and mobile slider interaction using Swiper.js.",
      },
      {
        title: "FAQ",
        description:
          "Two-column accordion FAQ with smooth opening and closing transitions that becomes vertically stacked on mobile.",
      },
      {
        title: "CONTENT MANAGEMENT",
        description:
          "Dynamic management of Why Us, How It Works for Guests, and How It Works for Hosts content through the admin dashboard.",
      },
      {
        title: "REVIEW MANAGEMENT",
        description:
          "Dynamic customer review cards with star ratings.",
      },
      {
        title: "PACKAGE MANAGEMENT",
        description:
          "Many-to-many relationship between packages and features using the detailpackage pivot table.",
      },
      {
        title: "RESPONSIVE FOOTER",
        description:
          "Responsive Support and Legal navigation with social media links and mobile accordion behavior.",
      },
    ],

    screenshots: [
      {
        image: mypovWhyUs,
        title: "WHY US",
        description:
          "Why Us content is fully dynamic and managed through the admin dashboard — no frontend code changes needed.",
      },
      {
        image: mypovGuests,
        title: "HOW IT WORKS — GUESTS",
        description:
          "Step-by-step guide for event guests, with each step editable from the admin dashboard.",
      },
      {
        image: mypovHosts,
        title: "HOW IT WORKS — HOSTS",
        description:
          "Onboarding flow for event hosts, managed dynamically alongside the guest guide.",
      },
      {
        image: mypovReviews,
        title: "REVIEWS",
        description:
          "Dynamic customer review cards with star ratings, added and edited through the dashboard.",
      },
      {
        image: mypovPackage,
        title: "PACKAGES",
        description:
          "Pricing cards with alternating backgrounds and a Swiper.js slider on mobile. Packages and features are linked through a many-to-many relationship using the detailpackage pivot table.",
      },
      {
        image: mypovFaq,
        title: "FAQ",
        description:
          "Two-column accordion with smooth open/close transitions that stacks vertically on mobile.",
      },
    ],

    documentation: [
      {
        image: mypovPresentasi,
        caption: "Presenting MyPOV to the field supervisor at Penta Grup",
      },
      {
        image: mypovTim,
        caption: "With the Penta Grup team at the end of the internship",
      },
    ],

    learning: [
      "Understood the full data flow — from database design to Laravel models, controllers, and Blade views — and how MVC keeps logic and presentation separate.",
      "Built truly responsive layouts with Tailwind CSS breakpoints, designing desktop and mobile versions side by side.",
      "Experienced a professional workflow: briefing, iteration, presenting to a supervisor, and turning feedback into revisions.",
    ],

    // ---------- VERSI BAHASA INDONESIA ----------
    indonesian: {
      category: "Website company profile responsif yang dikembangkan dengan Laravel.",
      label: "Magang",
      type: "Pengembangan Web",
      overviewLead: "Website company profile yang kontennya bisa **dikelola tanpa menyentuh kode**.",
      stats: [
        { label: "Modul konten yang dikelola lewat dashboard" },
        { label: "Tampilan: desktop & mobile" },
        { label: "Teknologi yang digunakan" },
        { value: "3,5", label: "Bulan pengembangan" },
      ],
      problemLead: "Konten website **terkunci di dalam kode**.",
      painPoints: [
        "Setiap pembaruan konten mengharuskan developer mengubah kode frontend.",
        "Paket, ulasan, dan FAQ tidak punya tempat terpusat untuk dikelola.",
        "Perusahaan belum memiliki platform profesional untuk mempromosikan layanannya.",
      ],
      solution:
        "Dashboard admin dengan CRUD lengkap, sehingga tim dapat memperbarui konten, paket, ulasan, dan FAQ sendiri — tanpa perlu mengubah kode.",
      contribution: [
        "Merancang dan mengembangkan tampilan responsif untuk desktop dan mobile.",
        "Merancang struktur database MyPOV.",
        "Mengintegrasikan backend Laravel dengan frontend menggunakan arsitektur MVC.",
        "Menerapkan data dinamis menggunakan Model, Controller, dan Blade View Laravel.",
        "Mengembangkan fitur CRUD untuk pengelolaan konten melalui dashboard admin.",
        "Mempresentasikan proyek kepada pembimbing lapangan dan menerapkan revisi.",
      ],
      screenshots: [
        {
          description:
            "Konten Why Us sepenuhnya dinamis dan dikelola melalui dashboard admin — tanpa perlu mengubah kode frontend.",
        },
        {
          description:
            "Panduan langkah demi langkah untuk tamu acara, dengan setiap langkah dapat diubah dari dashboard admin.",
        },
        {
          description:
            "Alur onboarding untuk penyelenggara acara, dikelola secara dinamis bersama panduan untuk tamu.",
        },
        {
          title: "ULASAN",
          description:
            "Kartu ulasan pelanggan yang dinamis dengan rating bintang, ditambahkan dan diubah melalui dashboard.",
        },
        {
          title: "PAKET",
          description:
            "Kartu harga dengan latar belakang selang-seling dan slider Swiper.js di mobile. Paket dan fitur dihubungkan melalui relasi many-to-many menggunakan pivot table detailpackage.",
        },
        {
          description:
            "Accordion dua kolom dengan transisi buka-tutup yang halus dan tersusun vertikal di mobile.",
        },
      ],
      documentation: [
        { caption: "Mempresentasikan MyPOV kepada pembimbing lapangan di Penta Grup" },
        { caption: "Bersama tim Penta Grup di akhir masa magang" },
      ],
      learning: [
        "Memahami alur data secara menyeluruh — dari perancangan database hingga model, controller, dan Blade view Laravel — serta bagaimana MVC memisahkan logika dan tampilan.",
        "Membangun tata letak yang benar-benar responsif dengan breakpoint Tailwind CSS, merancang versi desktop dan mobile secara berdampingan.",
        "Merasakan alur kerja profesional: briefing, iterasi, presentasi kepada pembimbing, dan mengubah masukan menjadi revisi.",
      ],
    },
  },

  {
    number: "02",
    slug: "katalis",

    title: "KATALIS",
    label: "Academic Project",

    category:
      "Laravel-based internship management system connecting students, supervisors, and coordinators.",

    color: "pink",
    logo: katalisLogo,

    type: "Web Development",
    year: "2024",
    role: "Full-Stack Developer",

    client: "Software Engineering Lab — UNAIR",
    duration: "Sep – Dec 2024",

    overviewLead:
      "One platform connecting **students, supervisors, and coordinators** across the entire internship journey.",

    overview:
      "KATALIS is a web-based system designed to manage and monitor student internships. The application connects three roles — Students, Supervisors, and Internship Coordinators — through an integrated workflow covering internship submission, supervision, logbooks, seminars, and assessment.",

    stats: [
      { value: "3", label: "User roles in one workflow" },
      { value: "5", label: "Supervisor module menus I built" },
      { value: "5", label: "Team members" },
      { value: "10", label: "Skills used" },
    ],

    problem:
      "Internship administration involved multiple stakeholders and documents that were not integrated into a single system. Students faced unclear submission procedures, supervisors and coordinators had difficulty monitoring activities, and documents such as logbooks, supervision records, and final reports were scattered.",

    problemLead: "Internship documents were **scattered everywhere**.",

    painPoints: [
      "Students faced unclear submission procedures.",
      "Supervisors and coordinators struggled to monitor student activities.",
      "Logbooks, supervision records, and final reports were spread across different places.",
    ],

    solution:
      "A single multi-role system where each role's output becomes the next role's input — from submission and supervision to logbooks, seminars, and grading.",

    contribution: [
      "Defined the system concept and scope together with the team.",
      "Mapped workflows between Students, Supervisors, and Internship Coordinators.",
      "Investigated real internship management problems as a basis for system requirements.",
      "Implemented the Lecturer/Supervisor module using Laravel MVC and MySQL.",
      "Prepared user guides for Students, Supervisors, and Coordinators.",
      "Reviewed and edited the final project documentation with the team.",
    ],

    stack: [
      "Laravel",
      "PHP",
      "MySQL",
      "Blade",
      "Eloquent ORM",
      "JavaScript",
      "Git",
      "GitHub",
      "Figma",
      "PlantUML",
    ],

    heroScreenshots: [
      { image: katalisLogo, fit: "contain" },
      { image: katalisDosen },
      { image: katalisUseCase, fit: "contain" },
      { image: katalisArchitecture, fit: "contain" },
      { image: katalisCdm, fit: "contain" },
      { image: katalisPdm, fit: "contain" },
      { image: katalisUserGuide, fit: "contain" },
    ],

    screenshots: [
      {
        image: katalisDosen,
        title: "LECTURER DASHBOARD",
        description:
          "Summary of supervised students, active students, pending supervision validations, and upcoming seminars.",
      },
      {
        image: katalisAnakBimbing,
        fit: "contain",
        title: "STUDENT SUPERVISION",
        description:
          "List of supervised students with quick access to their internship details, logbook history, and supervision history.",
      },
      {
        image: katalisDetailPkl,
        fit: "contain",
        title: "INTERNSHIP DETAILS",
        description:
          "Company, period, and submitted documents for each student, viewed directly from the supervisor module.",
      },
      {
        image: katalisKonsultasi,
        fit: "contain",
        title: "CONSULTATION",
        description:
          "Supervisors review student consultations and set their status to approved, revised, or waiting approval.",
      },
      {
        image: katalisSeminar,
        fit: "contain",
        title: "SEMINAR",
        description:
          "Access to final internship reports and assessment input, with graduation status generated automatically.",
      },
      {
        image: katalisMahasiswa,
        title: "STUDENT ROLE",
        description:
          "Students see deadlines, remaining internship days, logbook count, and consultations in one dashboard.",
      },
      {
        image: katalisKoordinator,
        title: "COORDINATOR ROLE",
        description:
          "Coordinators monitor active internships and assign supervisors — completing the three-role workflow.",
      },
    ],

    documentation: [
      { image: katalisUseCase, caption: "Use case diagram — student and supervisor interactions" },
      { image: katalisArchitecture, caption: "High-level software architecture" },
      { image: katalisCdm, caption: "Conceptual Data Model (CDM)" },
      { image: katalisPdm, caption: "Physical Data Model (PDM)" },
      { image: katalisFigma, caption: "Early Figma design — the app was first named EduWorkTrack" },
      { image: katalisUserGuide, caption: "User guide for Students, Supervisors, and Coordinators"},
    ],

    learning: [
      "Designed a multi-role system where the output of one role becomes the input for another.",
      "Implemented approval workflows and automatic status calculation.",
      "Translated real-world campus processes into concrete system requirements.",
      "Defined project scope and system boundaries.",
      "Collaborated using Git and GitHub.",
      "Created documentation and user guides for non-technical users.",
    ],

    // ---------- VERSI BAHASA INDONESIA ----------
    indonesian: {
      category:
        "Sistem manajemen PKL/magang berbasis Laravel yang menghubungkan mahasiswa, dosen pembimbing, dan koordinator.",
      label: "Proyek Kuliah",
      type: "Pengembangan Web",
      client: "Praktikum Rekayasa Perangkat Lunak — UNAIR",
      duration: "Sep – Des 2024",
      overviewLead:
        "Satu platform yang menghubungkan **mahasiswa, dosen pembimbing, dan koordinator** di sepanjang proses magang.",
      overview:
        "KATALIS adalah sistem berbasis web untuk mengelola dan memantau kegiatan magang mahasiswa. Aplikasi ini menghubungkan tiga peran — Mahasiswa, Dosen Pembimbing, dan Koordinator Magang — dalam satu alur kerja terintegrasi, mulai dari pengajuan magang, bimbingan, logbook, seminar, hingga penilaian.",
      stats: [
        { label: "Peran pengguna dalam satu alur kerja" },
        { label: "Menu modul dosen pembimbing yang saya bangun" },
        { label: "Anggota tim" },
        { label: "Teknologi yang digunakan" },
      ],
      problem:
        "Administrasi magang melibatkan banyak pihak dan dokumen yang belum terintegrasi dalam satu sistem. Mahasiswa menghadapi prosedur pengajuan yang tidak jelas, dosen pembimbing dan koordinator kesulitan memantau kegiatan, dan dokumen seperti logbook, catatan bimbingan, serta laporan akhir tersebar di berbagai tempat.",
      problemLead: "Dokumen magang **tersebar di mana-mana**.",
      painPoints: [
        "Mahasiswa menghadapi prosedur pengajuan yang tidak jelas.",
        "Dosen pembimbing dan koordinator kesulitan memantau kegiatan mahasiswa.",
        "Logbook, catatan bimbingan, dan laporan akhir tersebar di berbagai tempat.",
      ],
      solution:
        "Satu sistem multi-peran di mana hasil kerja satu peran menjadi input bagi peran berikutnya — mulai dari pengajuan dan bimbingan hingga logbook, seminar, dan penilaian.",
      contribution: [
        "Menentukan konsep dan ruang lingkup sistem bersama tim.",
        "Memetakan alur kerja antara Mahasiswa, Dosen Pembimbing, dan Koordinator Magang.",
        "Menggali permasalahan nyata dalam pengelolaan magang sebagai dasar kebutuhan sistem.",
        "Mengimplementasikan modul Dosen Pembimbing menggunakan Laravel MVC dan MySQL.",
        "Menyusun panduan pengguna untuk Mahasiswa, Dosen Pembimbing, dan Koordinator.",
        "Meninjau dan menyunting dokumentasi akhir proyek bersama tim.",
      ],
      screenshots: [
        {
          title: "DASHBOARD DOSEN",
          description:
            "Ringkasan jumlah mahasiswa bimbingan, mahasiswa aktif, validasi bimbingan yang tertunda, dan seminar yang akan datang.",
        },
        {
          title: "MAHASISWA BIMBINGAN",
          description:
            "Daftar mahasiswa bimbingan dengan akses cepat ke detail magang, riwayat logbook, dan riwayat bimbingan.",
        },
        {
          title: "DETAIL MAGANG",
          description:
            "Perusahaan, periode, dan dokumen yang diunggah setiap mahasiswa, dapat dilihat langsung dari modul dosen pembimbing.",
        },
        {
          title: "KONSULTASI",
          description:
            "Dosen pembimbing meninjau konsultasi mahasiswa dan mengubah statusnya menjadi disetujui, revisi, atau menunggu persetujuan.",
        },
        {
          title: "SEMINAR",
          description:
            "Akses ke laporan akhir magang dan input penilaian, dengan status kelulusan yang dihitung otomatis.",
        },
        {
          title: "PERAN MAHASISWA",
          description:
            "Mahasiswa dapat melihat tenggat waktu, sisa hari magang, jumlah logbook, dan konsultasi dalam satu dashboard.",
        },
        {
          title: "PERAN KOORDINATOR",
          description:
            "Koordinator memantau magang yang sedang berjalan dan menetapkan dosen pembimbing — melengkapi alur kerja tiga peran.",
        },
      ],
      documentation: [
        { caption: "Use case diagram — interaksi mahasiswa dan dosen pembimbing" },
        { caption: "Arsitektur perangkat lunak secara garis besar" },
        { caption: "Conceptual Data Model (CDM)" },
        { caption: "Physical Data Model (PDM)" },
        { caption: "Desain awal di Figma — aplikasi ini awalnya bernama EduWorkTrack" },
        { caption: "Panduan pengguna untuk Mahasiswa, Dosen Pembimbing, dan Koordinator" },
      ],
      learning: [
        "Merancang sistem multi-peran di mana output satu peran menjadi input bagi peran lainnya.",
        "Menerapkan alur persetujuan (approval) dan perhitungan status otomatis.",
        "Menerjemahkan proses kampus di dunia nyata menjadi kebutuhan sistem yang konkret.",
        "Menentukan ruang lingkup proyek dan batasan sistem.",
        "Berkolaborasi menggunakan Git dan GitHub.",
        "Membuat dokumentasi dan panduan pengguna untuk pengguna non-teknis.",
      ],
    },

    github:
      "https://github.com/AgileRE-2024/KATALIS.git",
  },


  {
    number: "03",
    slug: "nutrimate",

    title: "NutriMate",
    label: "Academic Project",

    category:
      "Nutrition tracking website designed and implemented with Next.js, TypeScript, and Tailwind CSS.",

    color: "cream",
    logo: nmLogo,

    type: "Web Development / UI-UX Design",
    year: "2024",
    role: "Frontend Developer",
    client: "Interaction Design Lab — UNAIR",
    duration: "Oct – Dec 2024",
    overviewLead: "A nutrition tracker that turns **calorie counting into a few taps**.",
    overview: "NutriMate is a nutrition tracking website designed to help users monitor daily calorie and nutritional intake. Users can record consumed food, adjust portions, view nutritional information, and monitor their daily progress.",
    stats: [
      { value: "60.7%", label: "Survey respondents struggled to count calories" },
      { value: "4", label: "Frontend pages I built" },
      { value: "5", label: "Team members" },
    ],


    problem: "Based on the team's survey, 60.7% of respondents experienced difficulties calculating their daily calorie and nutritional intake. NutriMate was designed to simplify this process through automated nutritional calculations and personalized recommendations.",
    problemLead: "Counting calories felt like **doing math at every meal**.",

    painPoints: [
      "60.7% of surveyed respondents found it hard to calculate daily calorie and nutrient intake.",
      "Manually looking up nutrition facts for every food was tedious.",
      "Without clear progress, it was hard to stay consistent with nutrition goals.",
    ],

    solution:
      "Search a food, adjust the portion, and NutriMate calculates calories and nutrients automatically — then tracks daily progress toward your targets.",
      
      
    contribution: [
      "Implemented four frontend pages using Next.js, TypeScript, and Tailwind CSS.",
      "Built a multi-section landing page with animation and interactive components.",
      "Implemented the food input flow including food search, portion settings, and meal time selection.",
      "Developed responsive layouts using Tailwind CSS grids and breakpoints.",
      "Translated high-fidelity Figma designs into responsive frontend components.",
    ],

    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "Node.js",
      "Figma",
      "Git",
      "GitHub",
    ],

    features: [
      {
        title: "AUTHENTICATION",
        description:
          "Login and registration interfaces with social login options.",
      },
      {
        title: "LANDING PAGE",
        description:
          "Multi-section landing page containing healthy lifestyle, plans, features, benefits, testimonials, and footer sections.",
      },
      {
        title: "HOME PAGE",
        description:
          "Personalized greeting and summary of user information such as weight, height, and age.",
      },
      {
        title: "DAILY MEAL",
        description:
          "Food search, portion adjustment, nutritional information, and meal-time selection.",
      },
    ],

      heroScreenshots: [
      { image: nmLogo, fit: "contain" },
      { image: nmScreenFlow, fit: "contain"},
      { image: nmFigma, fit: "contain"},
    ],

    screenshots: [
      {
        image: nmHero,
        title: "LANDING PAGE",
        description:
          "Hero section with a clear call to action, built with Framer Motion entrance animations.",
      },
      {
        image: nmWhy,
        title: "HEALTHY LIFESTYLE",
        description:
          "Benefit list paired with an image grid, laid out with responsive Tailwind CSS grids.",
      },
      {
        image: nmFeatures,
        title: "FEATURES",
        description:
          "Interactive feature cards highlighting daily nutrition, calorie tracking, alerts, and recommendations.",
      },
      {
        image: nmLogin,
        title: "LOGIN",
        description:
          "Login screen with email and social login options, translated from the high-fidelity Figma design.",
      },
      {
        image: nmRegister,
        title: "REGISTER",
        description:
          "Account creation form with password confirmation and terms agreement.",
      },
      {
        image: nmHome,
        title: "HOME",
        description:
          "Personalized greeting with weight, height, and age summary, plus a quick link to the food journal.",
      },
      {
        image: nmInputMeal,
        title: "INPUT DAILY MEAL",
        description:
          "Meals grouped by breakfast, lunch, dinner, and snacks, with a live daily calorie ring.",
      },
      {
        image: nmSearchMeal,
        title: "SEARCH & PORTION",
        description:
          "Pop-up to search foods, adjust portion size, and preview calories and nutrients before adding.",
      },
      {
        image: nmMealAdded,
        title: "AUTOMATIC CALCULATION",
        description:
          "Once a meal is added, calories, carbs, protein, fat, and fiber are calculated and the daily ring updates.",
      },
    ],

    documentation: [
      { image: nmSurvey, fit: "contain", caption: "Survey: 60.7% of respondents struggled to count daily calories" },
      { image: nmUserFlow, fit: "contain", caption: "User flow for tracking daily calorie and nutrient intake" },
      { image: nmScreenFlow, fit: "contain", caption: "Screen flow with main, alternate, and exception paths" },
      { image: nmFigma, fit: "contain", caption: "High-fidelity Figma design of the Input Daily Meal page" },
    ],

    learning: [
      "Developed frontend applications using Next.js and TypeScript.",
      "Implemented animations and micro-interactions using Framer Motion.",
      "Built complex food input forms with search and portion calculation.",
      "Translated high-fidelity Figma designs into responsive interfaces.",
      "Collaborated with a team using Git and GitHub.",
    ],

    // ---------- VERSI BAHASA INDONESIA ----------
    indonesian: {
      category:
        "Website pencatat nutrisi yang dirancang dan diimplementasikan dengan Next.js, TypeScript, dan Tailwind CSS.",
      label: "Proyek Kuliah",
      type: "Pengembangan Web / Desain UI-UX",
      client: "Praktikum Desain Interaksi — UNAIR",
      duration: "Okt – Des 2024",
      overviewLead: "Pencatat nutrisi yang mengubah **hitung kalori jadi cukup beberapa ketukan**.",
      overview:
        "NutriMate adalah website pencatat nutrisi yang membantu pengguna memantau asupan kalori dan nutrisi harian. Pengguna dapat mencatat makanan yang dikonsumsi, mengatur porsi, melihat informasi nutrisi, dan memantau progres harian.",
      stats: [
        { value: "60,7%", label: "Responden survei kesulitan menghitung kalori" },
        { label: "Halaman frontend yang saya bangun" },
        { label: "Anggota tim" },
      ],
      problem:
        "Berdasarkan survei tim, 60,7% responden mengalami kesulitan menghitung asupan kalori dan nutrisi harian. NutriMate dirancang untuk menyederhanakan proses ini melalui perhitungan nutrisi otomatis dan rekomendasi yang dipersonalisasi.",
      problemLead: "Menghitung kalori terasa seperti **mengerjakan soal matematika setiap makan**.",
      painPoints: [
        "60,7% responden survei kesulitan menghitung asupan kalori dan nutrisi harian.",
        "Mencari informasi nutrisi setiap makanan secara manual terasa merepotkan.",
        "Tanpa progres yang jelas, sulit untuk konsisten mencapai target nutrisi.",
      ],
      solution:
        "Cari makanan, atur porsinya, dan NutriMate menghitung kalori serta nutrisinya secara otomatis — lalu memantau progres harian menuju target.",
      contribution: [
        "Mengimplementasikan empat halaman frontend menggunakan Next.js, TypeScript, dan Tailwind CSS.",
        "Membangun landing page multi-section dengan animasi dan komponen interaktif.",
        "Mengimplementasikan alur input makanan, termasuk pencarian makanan, pengaturan porsi, dan pemilihan waktu makan.",
        "Mengembangkan tata letak responsif menggunakan grid dan breakpoint Tailwind CSS.",
        "Menerjemahkan desain high-fidelity Figma menjadi komponen frontend yang responsif.",
      ],
      screenshots: [
        {
          description:
            "Hero section dengan call to action yang jelas, dilengkapi animasi masuk dari Framer Motion.",
        },
        {
          title: "GAYA HIDUP SEHAT",
          description:
            "Daftar manfaat yang dipadukan dengan grid gambar, disusun dengan grid Tailwind CSS yang responsif.",
        },
        {
          title: "FITUR",
          description:
            "Kartu fitur interaktif yang menampilkan nutrisi harian, pelacakan kalori, peringatan, dan rekomendasi.",
        },
        {
          description:
            "Halaman login dengan opsi email dan login media sosial, diterjemahkan dari desain high-fidelity Figma.",
        },
        {
          description:
            "Form pembuatan akun dengan konfirmasi password dan persetujuan syarat dan ketentuan.",
        },
        {
          description:
            "Sapaan personal dengan ringkasan berat badan, tinggi badan, dan usia, serta tautan cepat ke jurnal makanan.",
        },
        {
          title: "INPUT MAKANAN HARIAN",
          description:
            "Makanan dikelompokkan menjadi sarapan, makan siang, makan malam, dan camilan, dengan lingkaran kalori harian yang langsung diperbarui.",
        },
        {
          title: "CARI & ATUR PORSI",
          description:
            "Pop-up untuk mencari makanan, mengatur ukuran porsi, dan melihat kalori serta nutrisi sebelum ditambahkan.",
        },
        {
          title: "PERHITUNGAN OTOMATIS",
          description:
            "Setelah makanan ditambahkan, kalori, karbohidrat, protein, lemak, dan serat langsung dihitung dan lingkaran harian diperbarui.",
        },
      ],
      documentation: [
        { caption: "Survei: 60,7% responden kesulitan menghitung kalori harian" },
        { caption: "User flow untuk mencatat asupan kalori dan nutrisi harian" },
        { caption: "Screen flow dengan jalur utama, alternatif, dan exception" },
        { caption: "Desain high-fidelity Figma untuk halaman Input Daily Meal" },
      ],
      learning: [
        "Mengembangkan aplikasi frontend menggunakan Next.js dan TypeScript.",
        "Menerapkan animasi dan micro-interaction menggunakan Framer Motion.",
        "Membangun form input makanan yang kompleks dengan fitur pencarian dan perhitungan porsi.",
        "Menerjemahkan desain high-fidelity Figma menjadi tampilan yang responsif.",
        "Berkolaborasi dalam tim menggunakan Git dan GitHub.",
      ],
    },

    github:
      "https://github.com/sisilialeonita1384/Nutrimate.git",
  },
];

export default projects;