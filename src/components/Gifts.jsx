import { useState } from "react";

export default function Gifts() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("3791527315");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000); // kembali ke "Salin Nomor" setelah 3 detik
  };

  return (
    <section id="gifts" className="relative z-10 py-16 bg-[#fdfcf7]">
      <div className="max-w-md mx-auto px-4 text-center">
        <h2 className="font-sacramento text-4xl md:text-5xl text-[#6b4226] mb-6">
          Kirim Hadiah
        </h2>
        <div className="w-full rounded-2xl shadow-lg bg-gradient-to-tr from-[#6b4226] via-[#8e5f3f] to-[#d4c2a5] text-white p-6 md:p-7">
          {/* Header bank */}
          <div className="flex justify-between items-center">
            <div className="text-left">
              <p className="text-xs text-[#f5e6d3]/90 uppercase tracking-widest">
                Bank
              </p>
              <p className="text-xl font-bold">BCA</p>
            </div>
            <div className="w-10 h-8 rounded bg-[#f5e6d3]/80 flex items-center justify-center shadow-inner">
              <img src="chip.png" alt="chip" className="w-8" />
            </div>
          </div>

          {/* Nomor rekening */}
          <div className="mt-6 text-left">
            <p className="tracking-widest text-sm text-[#f5e6d3]/90">
              Nomor Rekening
            </p>
            <p className="mt-2 text-xl md:text-2xl font-mono font-semibold select-all break-all">
              3791 5273 15
            </p>
          </div>

          {/* Nama pemilik + tombol salin */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="text-left">
              <p className="text-xs text-[#f5e6d3]/90">Atas nama</p>
              <p className="text-sm font-semibold">Resti</p>
            </div>
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-white text-[#3e2a1a] rounded-lg text-sm font-semibold shadow-sm hover:scale-105 transition w-full sm:w-auto"
            >
              {copied ? "Tersalin ✔" : "Salin Nomor"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
