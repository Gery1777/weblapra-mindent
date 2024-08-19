import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Services from "./components/Services";

//Import css files
import "./App.css";
import "./src/style/Components.css";
import "./src/style/NavBar.css";

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const sectionRefs = useRef({});
  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = document.getElementById("navbar").clientHeight;
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - navbarHeight;
        const sectionBottom = sectionTop + section.clientHeight;
        const sectionId = section.id;
        // Add visited class to section when it reaches more than 20% of the way of the height
        if (scrollY >= sectionTop - window.innerHeight * 0.8) {
          section.classList.add("visited");
        }
        if (scrollY >= sectionTop && scrollY <= sectionBottom) {
          setCurrentSection(sectionId);
          // Find the element with matching data-rr-ui-event-key
          const activeSection = document.querySelector(
            `[data-rr-ui-event-key="#${sectionId}"]`
          );
          if (activeSection) {
            // Update the element (replace with your desired logic)
            activeSection.classList.add("active"); // Example: Add an "active" class
          }
        } else {
          const inActiveSection = document.querySelector(
            `[data-rr-ui-event-key="#${sectionId}"]`
          );
          inActiveSection?.classList.remove("active");
        }
      });
    };
    // add initial load in case multiple sections are already visible onload
    window.addEventListener("load", handleScroll);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection]);
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
    </>
  );
}

export default App;
