import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import ProjectDetail from "./components/ProjectDetail";
import Footer from "./components/Footer";

function App() {
  // bahasa yang dipilih: "en" atau "id" (disimpan di browser)
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("lang") === "id" ? "id" : "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* browser menolak penyimpanan, website tetap jalan */
    }
  }, [lang]);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar lang={lang} setLang={setLang} />

      <Routes>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/projects/:id" element={<ProjectDetail lang={lang} />} />
      </Routes>

      <Footer lang={lang} />
    </BrowserRouter>
  );
}

export default App;
