import React, { useContext, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { ThemeContext } from "../Theme/ThemeProvider";

const Navbar = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const tabData = [
    { title: "Home", hash: "#hero" },
    { title: "Skills", hash: "#skills" },
    { title: "Projects", hash: "#project" },
    { title: "Certificates", hash: "#certificate" },
  ];

  const [activeTab, setActiveTab] = useState("#hero");
  const [showMenu, setShowMenu] = useState(false);

  const handleHashNav = (hash) => {
    setActiveTab(hash);
    setShowMenu(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md dark:bg-black">
      <div className="flex items-center justify-between w-full px-3 py-3">
        <div className="flex items-center space-x-4">
          <button onClick={() => setShowMenu(!showMenu)} className="text-4xl text-blue-700 font-bold">
            ☰
          </button>
          <h1 className="text-4xl font-bold text-blue-700">Aman</h1>
        </div>

        <div
          style={{ gridTemplateColumns: `repeat(${tabData.length + 1}, 1fr)` }}
          className="hidden md:grid gap-1 relative h-12 rounded-full bg-[#F5F8FF] border border-[#3b82f6]/50 dark:bg-[#1f2937] px-3 items-center">
          {tabData.map((tab) => (
            <Link
              smooth
              to={`/${tab.hash}`}
              key={tab.title}
              onClick={() => handleHashNav(tab.hash)}
              className={`p-2 w-full h-full flex items-center justify-center text-2xl z-10 ${
                activeTab === tab.hash ? "text-black dark:text-white " : "text-[#3b82f6]"
              }`}
            >
              {tab.title}
            </Link>
          ))}

          {/* 🔘 Dark Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 w-full h-full flex items-center justify-center text-2xl z-10 text-[#3b82f6] hover:opacity-80 transition"
          >
            {isDark ? "☀️ Light" : "🌙 Dark"}
          </button>

          {/* Background blob */}
          <span
            style={{
              width: `calc(100%/${tabData.length + 1})`,
              left: `calc(${tabData.findIndex((tab) => tab.hash === activeTab)} * 100%/${tabData.length + 1})`,
            }}
            className="absolute inset-y-0 rounded-full transition-all duration-300 bg-[#3b82f6]/30"
          />
        </div>
      </div>

      {/* Mobile menu — optional: include dark toggle here too if you like */}
      {showMenu && (
        <div className="absolute top-16 left-4 w-40 bg-[#F5F8FF] dark:bg-[#1f2937] shadow-lg rounded-md z-50">
          {tabData.map((tab) => (
            <Link
              smooth
              to={`/${tab.hash}`}
              key={tab.title}
              onClick={() => handleHashNav(tab.hash)}
              className="text-[#3b82f6] block w-full px-3 py-3 text-left hover:bg-[#3b82f6]/30 transition-all"
            >
              {tab.title}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="text-[#3b82f6] block w-full px-3 py-3 text-left hover:bg-[#3b82f6]/30 transition-all"
          >
            {isDark ? "☀️ Switch to Light" : "🌙 Switch to Dark"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
