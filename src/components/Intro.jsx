import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Intro({ onClose }) {
  const [open, setOpen] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  // countdown
  useEffect(() => {
    const target = new Date("2025-10-25T11:00:00").getTime();

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
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      onClose && onClose();
    }, 800);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-cover bg-center flex flex-col items-center justify-center text-center text-white z-50"
          style={{ backgroundImage: "url('bg.png')" }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#3e2a1a]/60 to-[#d4c2a5]/80 backdrop-blur-[2px]"></div>

          {/* Content */}
          <div className="relative z-10 px-4">
            <h4 className="text-sm md:text-base mb-2 tracking-wide">
              Kepada <span className="font-semibold">Bapak/Ibu/Saudara/i</span>
            </h4>
            <h1 className="font-sacramento text-6xl md:text-7xl text-[#f5e6d3] drop-shadow-lg">
              Ari & Resti 💍
            </h1>
            <p className="mt-3 text-sm md:text-base text-gray-200">
              Akan melangsungkan pernikahan dalam:
            </p>

            {/* Countdown */}
            <div className="flex justify-center gap-4 mt-8">
              {["Hari", "Jam", "Menit", "Detik"].map((label, idx) => {
                const val = [timeLeft.d, timeLeft.h, timeLeft.m, timeLeft.s][idx];
                return (
                  <motion.div
                    key={label}
                    whileHover={{ scale: 1.1 }}
                    className="backdrop-blur-md bg-white/30 text-[#2d1b0d] rounded-2xl px-5 py-3 shadow-md min-w-[70px]"
                  >
                    <p className="text-2xl font-bold">{val}</p>
                    <p className="text-[10px] md:text-xs uppercase">{label}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Button */}
            <motion.button
              onClick={handleClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="mt-8 inline-block bg-gradient-to-r from-[#f5e6d3] to-[#e8d5b5] text-[#2d1b0d] font-semibold px-8 py-3 rounded-full shadow-lg hover:from-[#6b4226] hover:to-[#3e2a1a] hover:text-white transition"
            >
              Lihat Undangan
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
