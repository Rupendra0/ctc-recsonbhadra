import React, { useEffect } from "react";
import "./App.css"; // Load CSS at the top
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Footer from "./components/footer"; 

import Home from "./pages/Home";
import Event from "./pages/Event";
import Leaderboard from "./pages/Leaderboard";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Animations trigger once
  }, []);

  return (
    <Router>
      {/* 🌌 Background Layers */}
      <div className="stars"></div>
      <div className="nebula"></div>

      {/* 🌠 Shooting Stars */}
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>

      {/* 🪐 Planets */}
      <div className="planet small"></div>
      <div className="planet medium"></div>
      <div className="planet large"></div>

      {/* ☄️ Comet */}
      <div className="comet"></div>

      {/* Layout Wrapper */}
      <div className="flex flex-col min-h-screen relative z-10">
        {/* Navbar */}
        <Navbar />

        {/* Main Page Content */}
        <main className="flex-grow main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<Event />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
   <Footer/>
      </div>
    </Router>
  );
}

export default App;
