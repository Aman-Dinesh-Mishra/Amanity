import React from "react";
import Navbar from "./Components/Hero/Navbar/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Hero/Home/Home";
import ScrollToTop from "./Components/Hero/ScrollToTop/ScrollToTop";

const App = () => {
  return (
    <div>
      
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Home />} />
        <Route path="/certificate" element={<Home/>} />
        <Route path="/contact" element={<Home />} />
        <Route path="/project" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
