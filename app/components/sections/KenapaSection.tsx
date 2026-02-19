"use client";
import { motion } from "framer-motion";

const KEUNGGULAN = [
  { icon: "🎓", title: "Tim Berpengalaman & Tersertifikasi", desc: "Agronomis & teknisi berpengalaman 5+ tahun dalam budidaya melon premium skala komersial." },
  { icon: "📊", title: "Monitoring & Pendampingan Berkala", desc: "Kunjungan lapangan rutin dan konsultasi online 7 hari seminggu sepanjang masa tanam." },
  { icon: "🛡️", title: "Garansi Sistem & Purna Jual", desc: "Garansi konstruksi greenhouse 3 tahun dan garansi peralatan irigasi 1 tahun." },
  { icon: "🌱", title: "Solusi Ramah Lingkungan", desc: "Sistem pertanian presisi yang hemat air, meminimalkan pestisida, dan mendukung keberlanjutan." },
];

const KSTATS = [
  { num: "200+", label: "GH Terbangun" },
  { num: "18 Prov", label: "Jangkauan Nasional" },
  { num: "98%", label: "Panen Sukses" },
  { num: "60%", label: "Hemat Air" },
];

export default function KenapaSection() {
  return (
    <section id="kenapa" className="py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-20 bg-[#1a3a2a] relative overflow-hidden">
      
      {/* Background glow */}
      <div
        className="absolute -top-40 -right-40 w-80 h-80 sm:w-[600] sm:h-[600] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(82,183,136,0.1), transparent 70%)" }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10">
        
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#f0c040] block mb-4">
            Mengapa Memilih Kami
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white mb-4">
            Tim Ahli,<br /><span className="text-[#f0c040]">Hasil Nyata</span>
          </h2>
          <p className="text-white/60 leading-relaxed mb-8 lg:mb-10 text-sm sm:text-base">
            Kami bukan sekadar pemasok, kami adalah mitra pertumbuhan bisnis Anda — dari perencanaan, instalasi, hingga pendampingan panen.
          </p>

          <div className="flex flex-col gap-4 lg:gap-5">
            {KEUNGGULAN.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 items-start p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10
                hover:bg-white/8 transition-colors"
              >
                <div className="w-10 h-10 shrink-0 bg-[#d4a017]/15 rounded-xl flex items-center justify-center text-xl">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="bg-linear-to-br from-[#2d6a4f] to-[#52b788] rounded-3xl p-8 sm:p-10 lg:p-12 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/6 rounded-full" />
            
            <div className="font-playfair text-6xl sm:text-7xl lg:text-8xl font-black text-white/15 leading-none mb-2">
              5★
            </div>
            <h3 className="text-white font-playfair text-xl sm:text-2xl font-bold mb-2">
              Rating Kepuasan Petani
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6 lg:mb-8">
              Dari 200+ klien aktif di seluruh Indonesia, kami mempertahankan standar kualitas tertinggi.
            </p>

            <div className="grid grid-cols-2 gap-4 lg:gap-5">
              {KSTATS.map((s) => (
                <div key={s.label} className="bg-white/10 border border-white/15 rounded-xl p-4 sm:p-5">
                  <div className="font-playfair text-2xl sm:text-3xl font-black text-[#f0c040]">{s.num}</div>
                  <div className="text-white/60 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}