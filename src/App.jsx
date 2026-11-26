import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("lang") || "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* browser menolak penyimpanan, bahasa tetap jalan */
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