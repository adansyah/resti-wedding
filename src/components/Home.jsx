export default function Home() {
  return (
    <section
      id="home"
      className="pt-28 md:pt-36 pb-20 bg-gradient-to-b from-[#fdfcf7] to-[#fffaf5]"
    >
      <div className="max-w-4xl mx-auto px-6 text-center" data-aos="fade-up">
        
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-[#2d1b0d] mb-4 tracking-tight">
          ✨ The Wedding ✨
        </h2>
        <h3 className="text-base md:text-lg font-medium text-gray-600 mb-6">
          25 Oktober 2025 • Bandung, Jawa Barat
        </h3>
        <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed text-base md:text-lg">
          Dengan penuh cinta dan kebahagiaan, kami mengundang 
          teman-teman, sahabat, serta keluarga tercinta untuk hadir di hari spesial kami 💖
        </p>

        {/* Couple */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="backdrop-blur-md bg-white/60 border border-white/40 rounded-3xl shadow-lg p-6">
            <p className="text-xl font-bold text-[#2d1b0d] mb-2">
              Ari Muhammad Wildan
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Putra dari <br />
              Bapak. Agus Nurzaman <br />
              Ibu. Elis Dini Haryati
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/60 border border-white/40 rounded-3xl shadow-lg p-6">
            <p className="text-xl font-bold text-[#2d1b0d] mb-2">
              Resti Agustina
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Putri dari <br />
              Bapak. H. Undang Hidayat <br />
              Ibu. Teni Mulyati
            </p>
          </div>
        </div>

        {/* Turut Mengundang */}
        <h3 className="text-lg md:text-xl font-semibold mt-14 mb-6 text-[#2d1b0d]">
          🤍 Turut Mengundang 🤍
        </h3>
        <div className="backdrop-blur-md bg-white/60 border border-white/40 rounded-3xl shadow-lg p-6 mx-auto max-w-md text-left space-y-2">
          <p className="text-gray-700">Kel. besar Halim Jaya Atmaja (alm)</p>
          <p className="text-gray-700">Kel. besar Eyen Sumiana (alm)</p>
          <p className="text-gray-700">Kel. besar H. Abidin (alm) Soreang</p>
          <p className="text-gray-700">Dani Kusniawan GOER (Kades Bojong Kunci)</p>
          <p className="text-gray-700">Candra Nugraha (Sekdes Bojong Kunci)</p>
          <p className="text-gray-700">Eliawati (Bona)</p>
          <p className="text-gray-700">Riki Zamaludin (Bokir)</p>
        </div>
      </div>
    </section>
  );
}
