import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Intro({ onClose }) {
  const [open, setOpen] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  // countdown
  useEffect(() => {
    const target = new Date("2025-09-30T23:59:59").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff < 0) {
        clearInterval(timer);
        setTimeLeft({ d: 0, h: 0, m: 0, s: 0 });
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ d, h, m, s });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
    // kasih delay biar animasi keluar dulu
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" }); // scroll ke atas
      onClose && onClose();
    }, 800);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-cover bg-center flex flex-col items-center justify-center text-center text-white z-50"
          style={{ backgroundImage: "url('bg.png')" }}
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#3e2a1a]/70 to-[#d4c2a5]/80"></div>

          {/* Content */}
          <div className="relative z-10">
            <h4 className="text-lg mb-2">
              Kepada <span className="font-semibold">Bapak/Ibu/Saudara/i,</span>
            </h4>
            <h1 className="font-sacramento text-6xl md:text-7xl">& Resti</h1>
            <p className="mt-3 text-sm md:text-base">
              Akan melangsungkan pernikahan dalam:
            </p>

            {/* Countdown */}
            <div className="flex justify-center gap-4 mt-6">
              {["Hari", "Jam", "Menit", "Detik"].map((label, idx) => {
                const val = [timeLeft.d, timeLeft.h, timeLeft.m, timeLeft.s][idx];
                return (
                  <div
                    key={label}
                    className="bg-[#f5e6d3]/90 text-[#3e2a1a] rounded-lg px-4 py-2 text-center shadow"
                  >
                    <p className="text-2xl font-bold">{val}</p>
                    <p className="text-xs uppercase">{label}</p>
                  </div>
                );
              })}
            </div>

            {/* Button */}
            <motion.button
              onClick={handleClose}
              whileTap={{ scale: 0.9 }}
              className="mt-6 inline-block bg-[#f5e6d3] text-[#6b4226] font-semibold px-6 py-3 rounded-full shadow hover:bg-[#6b4226] hover:text-white transition"
            >
              Lihat Undangan
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
