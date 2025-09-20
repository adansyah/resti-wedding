import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  const images = Array.from({ length: 8 }, (_, i) => `${i + 1}.jpeg`);

  return (
    <section id="gallery" className="py-20 bg-[#fdfcf7]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2
          className="font-sacramento text-5xl md:text-6xl text-[#6b4226] mb-10"
          data-aos="zoom-in"
        >
          Foto Kenangan
        </h2>

        {/* Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {images.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative cursor-pointer group"
              onClick={() => {
                setOpen(true);
                setImgSrc(src);
              }}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="rounded-xl shadow-md object-cover w-full h-48 md:h-56 lg:h-60 transition-all duration-300"
              />
              {/* Overlay aesthetic */}
              <div className="absolute inset-0 bg-black/20 rounded-xl opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-medium">
                ✨ Lihat
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative max-w-4xl w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition"
                  onClick={() => setOpen(false)}
                >
                  <X size={32} />
                </button>
                <img
                  src={imgSrc}
                  className="rounded-xl shadow-2xl w-full max-h-[80vh] object-contain"
                  alt="Preview"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
