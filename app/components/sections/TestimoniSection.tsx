"use client";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "../../constants/data";

export default function TestimoniSection() {
  return (
    <section id="testimoni" className="py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-20 bg-[#f5ead0]">
      
      {/* Header */}
      <div className="text-center mb-10 lg:mb-14">
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#2d6a4f] block mb-4">
          Kata Mereka
        </span>
        <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a3a2a]">
          Kisah Sukses <span className="text-[#52b788]">Petani</span> Kami
        </h2>
        <p className="text-[#6b7e6e] mt-4 max-w-md mx-auto text-sm sm:text-base">
          Lebih dari 200 petani telah merasakan manfaat nyata bermitra bersama MelonPrime.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {TESTIMONIALS.map((testi, i) => (
          <motion.div
            key={testi.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white rounded-2xl p-6 sm:p-7 lg:p-8 border border-[#2d6a4f]/10
              hover:shadow-xl hover:shadow-[#1a3a2a]/10 transition-shadow duration-300"
          >
            <div className="font-playfair text-5xl text-[#52b788]/30 leading-none mb-3">
              {`"`}
            </div>
            <p className="text-[#1c1c1c] leading-relaxed italic mb-6 text-sm">
              {testi.text}
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 shrink-0 bg-linear-to-br from-[#2d6a4f] to-[#52b788]
                rounded-full flex items-center justify-center text-xl"
              >
                {testi.avatar}
              </div>
              <div>
                <div className="text-[#d4a017] text-xs mb-0.5">★★★★★</div>
                <div className="font-bold text-[#1a3a2a] text-sm">{testi.name}</div>
                <div className="text-[#6b7e6e] text-xs">{testi.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}