export default function Info() {
  return (
    <section id="info" className="py-20 bg-[#e7dfd5]">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="font-sacramento text-5xl text-[#3e2a1a] mb-6" data-aos="zoom-in">
          Informasi Acara
        </h2>
        <p className="mb-6" data-aos="fade-up">
          Alamat: Kediaman Mempelai Wanita <br />
          Jl. Cicukang, Desa Mekarrahayu, Kec. Margaasih, Kab. Bandung
        </p>
        <iframe
          className="w-full h-64 rounded-lg mb-8 shadow"
          src="https://www.google.com/maps/embed?pb=..."
          allowFullScreen
          loading="lazy"
          data-aos="fade-up"
        ></iframe>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-lg p-6" data-aos="fade-right">
            <h3 className="font-bold text-[#6b4226] mb-2">Akad Nikah</h3>
            <p>09.00 - 11.00 WIB<br />Minggu, 29 Juni 2025</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6" data-aos="fade-left">
            <h3 className="font-bold text-[#6b4226] mb-2">Resepsi</h3>
            <p>11.00 WIB - selesai<br />Minggu, 29 Juni 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}
