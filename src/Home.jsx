import React, { useRef } from "react";
import About from "./About";
import Achievements from "./Achievements";
import Education from "./Education";
import Experience from "./Experience";
import Navbar from "./Navbar";
import Project from "./Project";
import Skills from "./Skills";

function Home() {
  // Create refs for each section
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const achievementsRef = useRef(null);

  // Scroll function
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="">
      {/* Pass scroll functions to Navbar */}
      <Navbar
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToEducation={() => scrollToSection(educationRef)}
        scrollToExperience={() => scrollToSection(experienceRef)}
        scrollToSkills={() => scrollToSection(skillsRef)}
        scrollToProjects={() => scrollToSection(projectRef)}
        scrollToAchievements={() => scrollToSection(achievementsRef)}
      />

     
      <div className="min-h-screen w-full bg-gradient-to-r from-indigo-200 via-green-200 to-blue-300">
        <div ref={aboutRef}>
          <About />
        </div>

        <div ref={educationRef}>
          <Education />
        </div>

        <div ref={experienceRef}>
          <Experience />
        </div>

        <div ref={skillsRef}>
          <Skills />
        </div>

        <div ref={projectRef}>
          <Project />
        </div>

        <div ref={achievementsRef}>
          <Achievements />
        </div>
      </div>
    </div>
  );
}

export default Home;
