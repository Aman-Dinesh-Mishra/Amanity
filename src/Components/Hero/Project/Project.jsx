import React, { useEffect, useRef } from "react";

const projects = [
  {
    title: "Cryptoplace",
    description: "A real-time cryptocurrency tracking app that monitors market trends, price fluctuations, and portfolio performance.",
    image: "/PROJECT1.png",
    link: "https://github.com/Aman-Dinesh-Mishra/CRYPT0PLACE",
    special: true,
  },
  {
    title: "Aqua Pulse",
    description: "An AI-driven water prediction system leveraging data analytics and machine learning to forecast water availability.",
    image: "/PROJECT2.png",
    link: "https://github.com/Aman-Dinesh-Mishra/AQUA",
  },
  {
    title: "Key Sprint",
    description: "A typing speed test app that tracks words per minute (WPM), accuracy, and performance.",
    image: "/PROJECT3.png",
    link: "https://github.com/Aman-Dinesh-Mishra/KeySprint",
  },
];

const Project = () => {
  const projectRef = useRef(null);

  useEffect(() => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div id="project" ref={projectRef} className="mx-auto py-16 px-6">
      <h1 className="text-6xl font-bold text-center text-blue-700 mb-12">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-blue-600 to-[#97d9e1] shadow-xl flex flex-col items-center gap-8 rounded-lg border border-white p-8 min-h-[400px] w-full transform hover:scale-105 transition duration-300 relative"
          >
            <div className="flex justify-center items-center w-full h-full">
              <img
                src={project.image}
                alt={project.title}
                className={`w-[700px] h-[300px] object-cover rounded-lg border border-white shadow-lg`}
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white p-6 opacity-0 transition-opacity duration-500 hover:opacity-100">
              <h1 className="text-3xl font-bold">{project.title}</h1>
              <p className="text-lg">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="mt-4 py-3 px-6 rounded-lg bg-white text-black font-bold transition-colors duration-300 hover:bg-blue-500 hover:text-white">
                  Read More
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;