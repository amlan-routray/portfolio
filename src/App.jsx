import "./App.css";
import React from "react";
import About from "./about";
import Skills from "./skills";
import Navbar from "./navbar";
import Features from "./features";
import Contact from "./contact";
import { isLargeViewport } from "./utility";

const App = () => {
  const [activeSection, setActiveSection] = React.useState("");

  React.useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      threshold: 0.6, // Section should be at least 60% visible to be active
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className={`${isLargeViewport() ? "main-container" : ""}`}>
      <Navbar activeSection={activeSection} />
      <main>
        <About />
        <Skills />
        <Features />
        <Contact />
      </main>
    </div>
  );
};

export default App;
