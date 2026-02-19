"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const KONTAK_INFO = [
  { icon: "📞", label: "WhatsApp / Telepon", value: "+62 812-3456-7890" },
  { icon: "✉️", label: "Email", value: "halo@melonprime.id" },
  { icon: "📍", label: "Kantor Pusat", value: "Malang, Jawa Timur — Melayani Seluruh Indonesia" },
  { icon: "🕐", label: "Jam Operasional", value: "Senin–Sabtu: 08.00–17.00 WIB" },
];

const LAYANAN_OPTIONS = [
  "Pembuatan Greenhouse",
  "Sistem Irigasi",
  "Paket Nutrisi",
  "Peralatan Pertanian",
  "Paket Lengkap (Semua Layanan)",
];

export default function KontakSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="kontak" className="py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-20 bg-[#1a3a2a]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* Left — Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#f0c040] block mb-4">
            Hubungi Kami
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white mb-4">
            Siap Memulai <span className="text-[#f0c040]">Perjalanan</span> Anda?
          </h2>
          <p className="text-white/60 leading-relaxed mb-8 lg:mb-10 text-sm sm:text-base">
            Konsultasi awal GRATIS bersama agronomis kami. Ceritakan kebutuhan
            Anda dan kami siapkan solusi terbaik.
          </p>

          <div className="flex flex-col gap-4 lg:gap-5">
            {KONTAK_INFO.map((info) => (
              <div key={info.label} className="flex gap-4 items-center">
                <div className="w-11 h-11 shrink-0 bg-[#d4a017]/15 rounded-xl flex items-center justify-center text-xl">
                  {info.icon}
                </div>
                <div>
                  <strong className="block text-white text-sm">{info.label}</strong>
                  <span className="text-white/50 text-sm">{info.value}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm"
        >
          <h3 className="font-playfair text-xl sm:text-2xl font-bold text-[#f0c040] mb-6 lg:mb-7">
            Kirim Pesan
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Nama Lengkap", type: "text", placeholder: "Ahmad Fauzi" },
              { label: "No. WhatsApp", type: "tel", placeholder: "+62 812-xxxx-xxxx" },
              { label: "Email", type: "email", placeholder: "email@anda.com" },
              { label: "Lokasi", type: "text", placeholder: "Kota, Provinsi" },
            ].map((field) => (
              <div key={field.label}>
                <label className="block text-white/60 text-xs font-semibold tracking-widest uppercase mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3
                    text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#52b788]
                    transition-colors duration-300"
                />
              </div>
            ))}

            <div className="col-span-1 sm:col-span-2">
              <label className="block text-white/60 text-xs font-semibold tracking-widest uppercase mb-2">
                Layanan yang Diminati
              </label>
              <select
                className="w-full bg-[#1a3a2a] border border-white/15 rounded-lg px-4 py-3
                  text-white text-sm focus:outline-none focus:border-[#52b788] transition-colors duration-300"
              >
                <option value="">— Pilih Layanan —</option>
                {LAYANAN_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="col-span-1 sm:col-span-2">
              <label className="block text-white/60 text-xs font-semibold tracking-widest uppercase mb-2">
                Pesan / Kebutuhan
              </label>
              <textarea
                placeholder="Ceritakan kebutuhan Anda (luas lahan, modal, target, dll.)..."
                rows={4}
                className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3
                  text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#52b788]
                  transition-colors duration-300 resize-y"
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className={`w-full mt-4 py-4 rounded-lg font-bold text-sm tracking-wide transition-all duration-300
              ${sent
                ? "bg-[#52b788] text-white"
                : "bg-[#d4a017] text-[#1a3a2a] hover:bg-[#f0c040] hover:-translate-y-0.5"
              }`}
          >
            {sent ? "✓ Pesan Terkirim!" : "Kirim Pesan →"}
          </button>
        </motion.div>

      </div>
    </section>
  );
}