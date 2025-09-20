import { useState } from "react";

export default function RSVP() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.target.reset(); // reset input
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="rsvp" className="py-20 bg-gradient-to-b from-[#e7dfd5] to-[#d4c2a5]">
      <div className="max-w-xl mx-auto px-4 text-center" data-aos="fade-up">
        <h2 className="font-sacramento text-5xl text-[#3e2a1a] mb-8">
          Kirim Ucapan
        </h2>

        <form
          action="https://formsubmit.co/EMAILKAMU@gmail.com"
          method="POST"
          className="backdrop-blur-md bg-white/70 shadow-xl rounded-2xl p-6 space-y-4 border border-white/40"
          target="hidden_iframe"
          onSubmit={handleSubmit}
        >
          {/* hidden config */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="Ucapan Pernikahan Baru!" />

          {/* Nama */}
          <input
            type="text"
            name="nama"
            placeholder="Nama lengkap"
            required
            className="w-full p-3 rounded-lg bg-white/90 font-sans text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6b4226] placeholder-gray-400"
          />

          {/* Pesan */}
          <textarea
            name="pesan"
            placeholder="Tulis ucapan terbaikmu..."
            required
            rows={4}
            className="w-full p-3 rounded-lg bg-white/90 font-sans text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6b4226] placeholder-gray-400"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#6b4226] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#4b2e1b] transition-all hover:scale-[1.02]"
          >
            Kirim Ucapan 💌
          </button>
        </form>

        {/* hidden iframe */}
        <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>

        {/* notif */}
        {sent && (
          <div className="mt-6 inline-block bg-green-500/90 text-white px-6 py-3 rounded-xl shadow-lg animate-bounce">
            🎉 Ucapan kamu sudah terkirim, terima kasih!
          </div>
        )}
      </div>
    </section>
  );
}
