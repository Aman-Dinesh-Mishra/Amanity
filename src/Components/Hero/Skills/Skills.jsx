import React from "react";

const skillsData = {
  "Web Development": [
    ["React", "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"],
    ["Tailwind CSS", "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"],
    ["Express.js", "https://seekvectors.com/files/download/express.js-logo.png"],
    ["Node.js", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png"],
  ],
  Programming: [
    ["JavaScript", "https://th.bing.com/th/id/OIP.6WAeauHzchaeQIHIwQt7twHaEo?w=266&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"],
    ["Java", "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"],
    ["Python", "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"],
    ["C", "https://upload.wikimedia.org/wikipedia/commons/thumb/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg/120px-The_C_Programming_Language_logo.svg.png"],
    ["C++", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/120px-ISO_C%2B%2B_Logo.svg.png"],
    ["R", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1086px-R_logo.svg.png"],
  ],
  "Machine Learning": [
    ["NumPy", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/NumPy_logo_2020.svg/768px-NumPy_logo_2020.svg.png"],
    ["Pandas", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/768px-Pandas_logo.svg.png"],
    ["Scikit-learn", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/390px-Scikit_learn_logo.svg.png?20180808062052"],
  ],
  "Version Control": [
    ["Git", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/768px-Git-logo.svg.png"],
    ["GitHub", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/GitHub_logo_2013.svg/1199px-GitHub_logo_2013.svg.png"],
  ],
  Databases: [
    ["MongoDB", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/768px-MongoDB_Logo.svg.png"],
    ["PostgreSQL", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/810px-Postgresql_elephant.svg.png"],
    ["MySQL", "https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/MySQL.svg/734px-MySQL.svg.png?20100110142632"],
  ],
};

const Skills = () => (
  <div className="mx-auto py-16 px-6">
    <h1 className="text-6xl font-bold text-center text-blue-700 mb-12"> My Skills</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
      {Object.entries(skillsData).map(([category, techs]) => (
        <div key={category} className="bg-gradient-to-b from-blue-600 to-[#97d9e1] shadow-lg flex flex-col items-center gap-6 
            rounded-lg border border-blue-700 p-6 min-h-[220px] w-full transform hover:scale-105 transition duration-300">
          <h1 className="text-5xl font-bold text-white">{category}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {techs.map(([name, src]) => (
              <div key={name} className="flex justify-center items-center w-[90px] h-[90px] md:w-[140px] md:h-[140px] xl:w-[120px] xl:h-[120px] 
                  border border-white rounded-full p-3 bg-gray-50">
                <img src={src} className="w-full h-full object-contain" alt={name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;