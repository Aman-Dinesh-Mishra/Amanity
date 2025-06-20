import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" absolute z-9 w-full bg-slate-50 dark:bg-[#1f2937] border-t border-[#3b82f6]/50 shadow-xl">
      <div className=" min-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        {/* Branding */}
        <h2 className="text-[#3b82f6] text-2xl font-bold tracking-wide">Amanity</h2>
        
        {/* Navigation Links */}
        <nav className="flex space-x-6 text-lg font-medium mt-4 md:mt-0">
          <Link to="/" className="text-blue-500 hover:text-[#3b82f6] transition-all">Home</Link>
          <Link to="/skills" className="text-blue-500 hover:text-[#3b82f6] transition-all">Skills</Link>
          <Link to="/project" className="text-blue-500 hover:text-[#3b82f6] transition-all">Projects</Link>
          <Link to="/certificate" className="text-blue-500 hover:text-[#3b82f6] transition-all">Certificates</Link>
        </nav>
        
        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/Aman-Dinesh-Mishra?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/aman-mishra-6158a9308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
      </div>
      {/*Connect with us */}
       <div className="text-center mt-6">
        <h3 className="text-3xl font-semibold text-[#3b82f6]">Connect With Us</h3>
        <p className="text-white mt-2 font-3xl">Have a project in mind? Reach out to collaborate!</p>
        <div className="flex justify-center space-x-4 mt-3">
          <a href="aman9060mishra@gmail.com" className="text-2xl text-blue-500 hover:text-[#3b82f6] transition-all">
            Email : aman9060mishra@gmail.com
          </a>
        </div>
         <a href="+918976028317" className=" text-2xl text-blue-500 hover:text-[#3b82f6] transition-all">
            Contact
          </a>
      </div>

      
      {/* Copyright */}
      <div className="text-center text-xl pb-6 text-gray-500 tracking-wide border-t border-gray-200 dark:border-gray-700 pt-5 mx-8">
        © 2025 Amanity. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;