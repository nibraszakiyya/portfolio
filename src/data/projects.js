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

    title: "MYPOV",

    category:
      "Responsive company profile website developed with Laravel.",

    color: "purple",
    logo: mypovLogo,

    type: "WEB DEVELOPMENT",
    year: "2025",
    role: "WEB DEVELOPER",

        overviewLead:
      "A company profile website whose content can be **managed without touching code**.",

    client: "PENTA GRUP INDONESIA",
    duration: "MAR – JUN 2025",

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
  },

  {
    number: "02",
    slug: "katalis",

    title: "KATALIS",

    category:
      "Laravel-based internship management system connecting students, supervisors, and coordinators.",

    color: "pink",
    logo: katalisLogo,

    type: "WEB DEVELOPMENT",
    year: "2024",
    role: "FULL-STACK DEVELOPER",

    client: "SOFTWARE DEVELOPMENT COURSE — UNAIR",
    duration: "SEP – DEC 2024",

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
      { image: katalisLogo },
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

    github:
      "https://github.com/AgileRE-2024/KATALIS.git",
  },


  {
    number: "03",
    slug: "nutrimate",

    title: "NUTRIMATE",

    category:
      "Nutrition tracking website designed and implemented with Next.js, TypeScript, and Tailwind CSS.",

    color: "cream",
    logo: nmLogo,

    type: "WEB DEVELOPMENT / UI-UX DESIGN",
    year: "2024",
    role: "FRONTEND DEVELOPER",
    client: "INTERACTION DESIGN COURSE — UNAIR",
    duration: "OCT – DEC 2024",
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
      { image: nmLogo },
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

    github:
      "https://github.com/sisilialeonita1384/Nutrimate.git",
  },
];

export default projects;