import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import ProjectDetail from "./components/ProjectDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/projects/:id"
          element={<ProjectDetail />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;