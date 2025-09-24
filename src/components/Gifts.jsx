import { useState } from "react";
import { Copy, Check } from "lucide-react"; // ikon lucide-react

export default function Gifts() {
  const [copied, setCopied] = useState(null);

  const handleCopy = (number, index) => {
    navigator.clipboard.writeText(number);
    setCopied(index);
    setTimeout(() => setCopied(null), 3000);
  };

  // data bank
  const banks = [
    {
      name: "BCA",
      number: "8105627021",
      owner: "ARI MUHAMMAD WILDAN",
    },
    {
      name: "BCA",
      number: "3790219472",
      owner: "Resti Agustina",
    },
  ];

  return (
    <section
      id="gifts"
      className="relative z-10 py-20 bg-gradient-to-b from-[#fdfcf7] to-[#f5ebe0]"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="font-sacramento text-5xl md:text-6xl text-[#6b4226] mb-12 drop-shadow-sm">
          🎁 Kirim Hadiah
        </h2>

        {/* Grid bank cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {banks.map((bank, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-white/70 backdrop-blur-md shadow-xl p-6 md:p-8 border border-white/40 hover:scale-105 transition-transform duration-300 hover:rotate-1"
            >
              {/* Header bank */}
              <div className="flex justify-between items-center">
                <div className="text-left">
                  <p className="text-xs text-[#6b4226]/70 uppercase tracking-widest">
                    Bank 🏦
                  </p>
                  <p className="text-2xl font-bold text-[#6b4226]">{bank.name}</p>
                </div>

                {/* Ganti chip dengan 2 bulatan overlap (ala Mastercard/Visa) */}
                <div className="flex items-center space-x-[-12px]">
                  <div className="w-10 h-10 rounded-full bg-red-500"></div>
                  <div className="w-10 h-10 rounded-full bg-yellow-400 opacity-90"></div>
                </div>
              </div>

              {/* Nomor rekening */}
              <div className="mt-6 text-left">
                <p className="tracking-widest text-sm text-[#6b4226]/70">
                  Nomor Rekening
                </p>
                <p className="mt-2 text-2xl font-mono font-bold text-[#3e2a1a] break-all">
                  {bank.number}
                </p>
              </div>

              {/* Nama pemilik + tombol salin */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-left">
                  <p className="text-xs text-[#6b4226]/70">Atas nama</p>
                  <p className="text-base font-semibold text-[#3e2a1a]">
                    {bank.owner}
                  </p>
                </div>
                <button
                  onClick={() => handleCopy(bank.number, index)}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#6b4226] via-[#8e5f3f] to-[#d4c2a5] text-white rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition"
                >
                  {copied === index ? (
                    <>
                      <Check className="w-4 h-4" /> Tersalin
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" /> Salin
                    </>
                  )}
                </button>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-[#d4c2a5]/30 to-[#6b4226]/30 blur-2xl opacity-40"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
