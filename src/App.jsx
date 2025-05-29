import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage1 from "./pages/ProjectPage1";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import "./index.css";

function App() {
  return (
    <Router basename="/orelmarom-portfolio">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<ProjectPage1 />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
