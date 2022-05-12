import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Navigasi from "./Component/Navigasi/Navigasi";
import HomePage from "./HomePage/HomePage";
import SkillPage from "./SkillPage/SkillPage";
import ExperiencePage from "./ExperiencePage/ExperiencePage";
import ContactPage from "./ContactPage/ContactPage";
import PortofolioPage from "./PortofolioPage/PortofolioPage";
import "./Routing.css";

const Routing = () => {
  return (
    <div>
      <Navigasi />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/skills" element={<SkillPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portofolio" element={<PortofolioPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Routing;
