"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

const STATS = [
  { number: "200+", label: "Greenhouse Terbangun" },
  { number: "98%", label: "Tingkat Keberhasilan" },
  { number: "5 Thn", label: "Pengalaman Industri" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[#1a3a2a] relative overflow-hidden
        flex flex-col lg:grid lg:grid-cols-2"
    >
      {/* Background effects */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-linear(ellipse 60% 80% at 70% 50%, rgba(82,183,136,0.12) 0%, transparent 60%),
            radial-linear(ellipse 40% 60% at 10% 80%, rgba(212,160,23,0.08) 0%, transparent 50%)
          `,
        }}
      />

      {/* Image — mobile: full width banner di atas, desktop: kolom kanan */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="relative order-1 lg:order-2
          h-[100vw] min-h-[500]
          lg:h-auto lg:max-h-none lg:min-h-screen
          bg-linear-to-br from-[#1f4d35] via-[#2d6a4f] to-[#1a3a2a]"
      >
        <Image
          src="/mmt.jpg"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          alt="Greenhouse Melon Premium"
          className="object-cover object-center"
          priority
        />

        {/* Fade bawah di mobile — menyatu dengan bg section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-28
          bg-linear-to-t from-[#1a3a2a] to-transparent lg:hidden"
        />

        {/* Fade kiri di desktop */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20
          bg-linear-to-r from-[#1a3a2a] to-transparent hidden lg:block"
        />
      </motion.div>

      {/* Content */}
      <div
        className="flex flex-col justify-center
        px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20
        pt-6 sm:pt-8 lg:pt-40
        pb-12 lg:pb-20
        relative z-10 order-2 lg:order-1"
      >
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 bg-[#d4a017]/15 border border-[#d4a017]/40
          rounded-full px-4 py-1.5 w-fit mb-6 lg:mb-8"
        >
          <span className="w-1.5 h-1.5 bg-[#d4a017] rounded-full animate-pulse" />
          <span className="text-[#f0c040] text-xs font-semibold tracking-widest uppercase">
            Solusi Pertanian Premium
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="font-playfair text-4xl sm:text-5xl xl:text-6xl font-black leading-tight text-white mb-5 lg:mb-6"
        >
          Wujudkan Kebun
          <br />
          Melon <span className="text-[#52b788]">Premium</span>
          <br />
          <span className="italic font-normal">Berteknologi Tinggi</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="text-white/65 text-base sm:text-lg leading-relaxed max-w-md mb-8 lg:mb-12"
        >
          Dari pembangunan greenhouse modern, sistem irigasi presisi, nutrisi
          berkualitas, hingga peralatan canggih — kami hadir sebagai mitra
          terpercaya Anda dari nol hingga panen.
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center"
        >
          <Link
            href="#kontak"
            className="px-8 py-3.5 bg-[#d4a017] text-[#1a3a2a] rounded font-bold text-center
            hover:bg-[#f0c040] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#d4a017]/30
            transition-all duration-300 text-sm sm:text-base"
          >
            Mulai Konsultasi
          </Link>
          <Link
            href="#layanan"
            className="px-8 py-3.5 border border-white/30 text-white/80 rounded text-center
            hover:border-white/70 hover:text-white transition-all duration-300 text-sm sm:text-base"
          >
            Lihat Layanan
          </Link>
        </motion.div>

        <motion.div
          {...fadeUp(0.4)}
          className="flex gap-6 sm:gap-10 mt-10 lg:mt-16 pt-8 lg:pt-10 border-t border-white/10"
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-playfair text-2xl sm:text-3xl font-black text-[#f0c040]">
                {s.number}
              </div>
              <div className="text-white/50 text-xs mt-1 tracking-wide leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
