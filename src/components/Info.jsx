export default function Info() {
  return (
    <section id="info" className="py-20 bg-[#e7dfd5]">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2
          className="font-sacramento text-5xl text-[#3e2a1a] mb-6"
          data-aos="zoom-in"
        >
          Informasi Acara
        </h2>
        <p className="mb-6" data-aos="fade-up">
          Alamat: Kp.Sukamanah RT05 RW03 <br />
          Desa. Bojong Kunci Kec. Pameungpeuk Kab. Bandung
        </p>

        {/* Embed Google Maps */}
        <iframe
  className="w-full h-64 rounded-lg mb-8 shadow"
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1385.9499587674325!2d107.56840496393733!3d-7.01924143803081!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ed6c843f2ae9%3A0xcd665d83fa0afe5e!2sPesona%20Bumi%20Bojong%20Kunci!5e0!3m2!1sid!2sid!4v1758280130615!5m2!1sid!2sid"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  data-aos="fade-up"
/>


        {/* Tombol buka di Google Maps */}
        <a
          href="https://maps.app.goo.gl/SYev7AMohdwmqJkk8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-[#6b4226] text-white rounded-lg shadow hover:bg-[#5a3720] transition"
        >
          Buka di Google Maps
        </a>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div
            className="bg-white shadow rounded-lg p-6"
            data-aos="fade-right"
          >
            <h3 className="font-bold text-[#6b4226] mb-2">Akad Nikah</h3>
            <p>
              19.00 - Selesai <br /> Sabtu, 25 Oktober 2025
            </p>
          </div>
          <div
            className="bg-white shadow rounded-lg p-6"
            data-aos="fade-left"
          >
            <h3 className="font-bold text-[#6b4226] mb-2">Resepsi</h3>
            <p>
              11.00 WIB - Selesai <br /> Minggu, 26 Oktober 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
