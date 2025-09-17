import { useState } from "react";

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  return (
    <section id="gallery" className="py-20 bg-[#fdfcf7]">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="font-sacramento text-5xl text-[#6b4226] mb-6" data-aos="zoom-in">
          Foto Kenangan
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }, (_, i) => (
            <img
              key={i}
              src={`${i + 1}.jpeg`}
              alt=""
              className="rounded-lg shadow cursor-pointer hover:scale-105 transition"
              data-aos="fade-up"
              onClick={() => {
                setOpen(true);
                setImgSrc(`${i + 1}.jpeg`);
              }}
            />
          ))}
        </div>

        {open && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-3xl w-full">
              <button
                className="absolute -top-10 right-0 text-white text-3xl"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
              <img src={imgSrc} className="rounded-lg shadow-lg w-full" alt="" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
