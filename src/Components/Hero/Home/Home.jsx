import React from "react";
import { useLocation } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Skills from "../Skills/Skills";
import Project from "../Project/Project";
import Certificate from "../Certificate/Certificate";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const location = useLocation(); // Get the current route

  return (
    <div className="flex flex-col min-h-screen bg-white text-blue dark:bg-black">
      <Navbar />
      {/* Hero Section */}
      <section id="hero" className="pt-32 flex flex-col items-center justify-center min-h-screen px-4">
        <img src="/hero.png" className="w-48 h-48 rounded-full mb-4" alt="Hero" />
        <h1 className="text-blue-700 text-4xl sm:text-5xl md:text-6xl font-bold mb-2 dark:text-white">Aman Mishra</h1>
        <h2 className="text-4xl text-purple-500 font-mono tracking mb-2 ">Web Developer</h2>
        <p className="text-center max-w-3xl text-2xl lg:text-xl mb-8 dark:text-white">
          Software Enthusiast & Coder crafting web experiences & learning AI
        </p>
        <div className="flex space-x-6 text-4xl mb-8 dark:text-white">
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>
        <a
  href="https://drive.google.com/file/d/11zAaH4Gx8qkAXUZYEgAqPGb1bvjizglp/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  className="text-xl font-semibold px-6 py-3 bg-blue-700 hover:bg-blue-600 text-white dark:bg-white dark:text-black dark:font-bold rounded-full transition-all"
>
  Resume
</a>
      </section>

      {/* Other Sections */}
      <section id="skills" className="mt-5 py-24.7">
        <Skills />
      </section>
      <section id="project" className="py-24">
        <Project />
      </section>
      <section id="certificate" className="py-24">
        <Certificate />
      </section>
    </div>
  );
};

export default Home;