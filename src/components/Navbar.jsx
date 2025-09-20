import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const links = [
    { href: "#home", label: "Beranda" },
    { href: "#info", label: "Informasi" },
    { href: "#gallery", label: "Foto" },
    { href: "#rsvp", label: "RSVP" },
    { href: "#gifts", label: "Gift" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scroll ke bawah → hide navbar
        setVisible(false);
      } else {
        // scroll ke atas → show navbar
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-[#f6f2eb]/80 backdrop-blur-md shadow-md z-40 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a
          href="#"
          className="font-sacramento text-3xl text-[#6b4226] tracking-wide"
        >
          A&R
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#6b4226] text-2xl"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Nav Links */}
        <nav
          className={`absolute md:static top-full left-0 w-full md:w-auto bg-[#f6f2eb] md:bg-transparent flex flex-col md:flex-row text-center md:space-x-8 transition-all duration-300 ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 md:opacity-100 md:translate-y-0"
          }`}
        >
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="block py-3 text-[#6b4226] relative group"
            >
              {link.label}
              <span className="absolute left-0 bottom-1 w-0 h-[2px] bg-[#6b4226] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
