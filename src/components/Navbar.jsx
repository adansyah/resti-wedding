import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#f6f2eb]/90 backdrop-blur shadow z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <a href="#" className="font-sacramento text-3xl text-[#6b4226]">A&R</a>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#6b4226] text-2xl"
        >
          ☰
        </button>
        <nav
          className={`absolute md:static top-full left-0 w-full md:w-auto bg-[#f6f2eb] md:bg-transparent md:flex flex-col md:flex-row text-center md:space-x-6 transition-all duration-300 ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 md:opacity-100 md:translate-y-0"
          }`}
        >
          <a href="#home" className="block py-2 hover:text-[#6b4226]">Beranda</a>
          <a href="#info" className="block py-2 hover:text-[#6b4226]">Informasi</a>
          <a href="#gallery" className="block py-2 hover:text-[#6b4226]">Foto</a>
          <a href="#rsvp" className="block py-2 hover:text-[#6b4226]">RSVP</a>
          <a href="#gifts" className="block py-2 hover:text-[#6b4226]">Gift</a>
        </nav>
      </div>
    </header>
  );
}
