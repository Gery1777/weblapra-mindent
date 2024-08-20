import React, { useState, useEffect, useRef, act } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import About from "./components/About";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

//Import css files
import "./App.css";
import "./style/Components.css";
import "./style/Navigation.css";

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const sectionRefs = useRef({});
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const navbarHeight = navbar.clientHeight;
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll("header, section, footer");
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
          const activeSection = document.getElementById(sectionId);
          const activeNavbarSection = document.querySelector(
            `[data-rr-ui-event-key="#${sectionId}"]`
          );
          if (activeSection) {
            // Update the element (replace with your desired logic)
            activeSection?.classList.add("active");
            activeNavbarSection?.classList.add("active");
            if (
              scrollY <= section.offsetTop + navbarHeight &&
              scrollY >= section.offsetTop - navbarHeight
            ) {
              navbar.classList.add("bg-transparent");
              navbar.classList.remove("bg-secondary");
              navbar.classList.remove("bg-primary");
            } else {
              navbar.classList.remove("bg-transparent");
              if (section.classList.contains("bg-secondary")) {
                navbar.classList.add("bg-secondary");
                navbar.classList.remove("bg-primary");
              } else {
                navbar.classList.add("bg-primary");
                navbar.classList.remove("bg-secondary");
              }
            }
          }
        } else {
          const inActiveSection = document.getElementById(sectionId);
          const inActiveNavbarSection = document.querySelector(
            `[data-rr-ui-event-key="#${sectionId}"]`
          );
          inActiveSection?.classList.remove("active");
          inActiveNavbarSection?.classList.remove("active");
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
      <div id="opacityContainer" className=""></div>
      <Navigation></Navigation>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Showcase></Showcase>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
