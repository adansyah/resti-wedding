import { useState } from "react";

export default function RSVP() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.target.reset(); // reset semua input setelah submit
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="rsvp" className="py-20 bg-[#d4c2a5]">
      <div className="max-w-xl mx-auto px-4 text-center" data-aos="fade-up">
        <h2 className="font-sacramento text-5xl text-[#3e2a1a] mb-6">
          Kirim Ucapan
        </h2>
        <form
          action="https://formsubmit.co/EMAILKAMU@gmail.com"
          method="POST"
          className="space-y-4"
          target="hidden_iframe"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_subject"
            value="Ucapan Pernikahan Baru!"
          />

          <input
            type="text"
            name="nama"
            placeholder="Nama"
            required
            className="w-full p-3 rounded bg-white font-sans text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6b4226]"
          />
          <textarea
            name="pesan"
            placeholder="Pesan"
            required
            className="w-full p-3 rounded bg-white font-sans text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6b4226]"
          ></textarea>

          <button
            type="submit"
            className="bg-[#6b4226] text-white px-6 py-3 rounded font-bold hover:bg-[#3e2a1a] transition"
          >
            Kirim
          </button>
        </form>

        <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>

        {sent && (
          <div className="mt-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow inline-block">
            🎉 Ucapan telah dikirim, terima kasih!
          </div>
        )}
      </div>
    </section>
  );
}
