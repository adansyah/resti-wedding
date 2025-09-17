import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Home from "./components/Home";
import Info from "./components/Info";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import Gifts from "./components/Gifts";
import Footer from "./components/Footer";
import MusicButton from "./components/MusicButton";

function App() {
  const [introOpen, setIntroOpen] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-[#fdfcf7] text-gray-700">
      {introOpen ? (
        // tampilkan Intro dulu
        <Intro onClose={() => setIntroOpen(false)} />
      ) : (
        // kalau sudah ditutup, render isi halaman
        <>
          <Navbar />
          <Home />
          <Info />
          <Gallery />
          <RSVP />
          <Gifts />
          <Footer />
          <MusicButton />
        </>
      )}
    </div>
  );
}

export default App;
