export default function Info() {
  return (
    <section id="info" className="py-20 bg-gradient-to-b from-[#fdfcf7] to-[#e7dfd5]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h2
          className="font-sacramento text-5xl md:text-6xl text-[#3e2a1a] mb-6"
          data-aos="zoom-in"
        >
          Informasi Acara
        </h2>

        {/* Address */}
        <p className="mb-8 text-gray-700 leading-relaxed max-w-2xl mx-auto" data-aos="fade-up">
          📍 Alamat: <br />
          Kp. Sukamanah RT05 RW03 <br />
          Desa Bojong Kunci, Kec. Pameungpeuk, Kab. Bandung <br />
          (Kavling Pesona Bumi Bojong Kunci depan Desa Bojong Kunci)
        </p>

        {/* Google Maps */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8" data-aos="fade-up">
          <iframe
            className="w-full h-72 md:h-96"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1385.9499587674325!2d107.56840496393733!3d-7.01924143803081!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ed6c843f2ae9%3A0xcd665d83fa0afe5e!2sPesona%20Bumi%20Bojong%20Kunci!5e0!3m2!1sid!2sid!4v1758280130615!5m2!1sid!2sid"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Google Maps Button */}
        <a
          href="https://maps.app.goo.gl/SYev7AMohdwmqJkk8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-gradient-to-r from-[#6b4226] to-[#8b5e3c] text-white rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          📌 Buka di Google Maps
        </a>

        {/* Event Schedule */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div
            className="backdrop-blur-md bg-white/70 border border-white/40 rounded-2xl p-6 shadow-lg"
            data-aos="fade-right"
          >
            <h3 className="text-xl font-bold text-[#6b4226] mb-3">💍 Akad Nikah</h3>
            <p className="text-gray-700 leading-relaxed">
              Sabtu Malam <br /> Sabtu, 25 Oktober 2025
            </p>
          </div>
          <div
            className="backdrop-blur-md bg-white/70 border border-white/40 rounded-2xl p-6 shadow-lg"
            data-aos="fade-left"
          >
            <h3 className="text-xl font-bold text-[#6b4226] mb-3">🎉 Resepsi</h3>
            <p className="text-gray-700 leading-relaxed">
              10.00 WIB - Selesai <br /> Minggu, 26 Oktober 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
