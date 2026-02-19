"use client";
import { motion } from "framer-motion";
import { SERVICES } from "../../constants/data";

export default function LayananSection() {
  return (
    <section id="layanan" className="py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-20 bg-[#fdf6e3]">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-10 lg:mb-14">
        <div>
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#2d6a4f] block mb-4">
            Apa yang Kami Tawarkan
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a3a2a] leading-tight">
            Layanan <span className="text-[#52b788]">Lengkap</span>
            <br />
            Pertanian Modern
          </h2>
        </div>
        <p className="text-[#6b7e6e] leading-relaxed max-w-xs text-sm sm:text-base">
          Solusi terintegrasi dari hulu ke hilir, dirancang khusus untuk
          budidaya melon premium.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-white border border-[#2d6a4f]/10 rounded-2xl p-6 sm:p-8 lg:p-9
              relative overflow-hidden cursor-pointer group
              shadow-sm hover:shadow-xl hover:shadow-[#1a3a2a]/10 transition-shadow duration-400"
          >
            <div
              className="absolute bottom-0 left-0 right-0 h-1
              bg-linear-to-r from-[#2d6a4f] to-[#52b788]
              scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400"
            />
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-[#2d6a4f] to-[#52b788]
              rounded-2xl flex items-center justify-center text-xl sm:text-2xl mb-5 lg:mb-6"
            >
              {service.icon}
            </div>
            <h3 className="font-playfair text-lg sm:text-xl font-bold text-[#1a3a2a] mb-3">
              {service.title}
            </h3>
            <p className="text-[#6b7e6e] text-sm leading-relaxed mb-5">
              {service.description}
            </p>
            <span
              className="inline-block bg-[#2d6a4f]/10 text-[#2d6a4f] text-xs font-semibold
              px-3 py-1.5 rounded-full tracking-wide"
            >
              {service.tag}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}