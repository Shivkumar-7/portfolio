import React, { useRef, useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";

// 🎵 Music Icons
import { FaPlay, FaPause } from "react-icons/fa";

import songFile from "./assets/song.mp3"; // Make sure this file exists

const App = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Keep UI state in sync with actual audio events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio
        .play()
        .catch((err) => {
          console.error("Playback blocked or failed:", err);
        });
    } else {
      audio.pause();
    }
  };

  return (
    <div className="bg-[#050414] relative min-h-screen overflow-hidden">
      {/* Background Blob (won't block clicks) */}
      <div className="pointer-events-none">
        <BlurBlob
          position={{ top: "35%", left: "20%" }}
          size={{ width: "30%", height: "40%" }}
        />
      </div>

      {/* Grid Overlay (won't block clicks) */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* 🎵 Music Button (Top-Right Corner) */}
      <button
        type="button"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className={`fixed top-6 left-6 w-14 h-14 flex items-center justify-center rounded-full shadow-lg text-white cursor-pointer transition-all duration-300 z-[9999] ${
          isPlaying
            ? "bg-purple-600 animate-pulse ring-4 ring-purple-400"
            : "bg-gray-700 hover:bg-purple-500"
        }`}
      >
        {isPlaying ? <FaPause size={22} /> : <FaPlay size={22} />}
      </button>

      {/* Sections */}
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>

      {/* 🎵 Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={songFile}
        loop
        preload="auto"
        playsInline
      />
    </div>
  );
};

export default App;
