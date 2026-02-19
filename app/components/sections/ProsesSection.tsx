"use client";
import { motion } from "framer-motion";
import { STEPS } from "../../constants/data";

export default function ProsesSection() {
  return (
    <section id="proses" className="py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-20 bg-[#f5ead0]">
      
      {/* Header */}
      <div className="text-center mb-12 lg:mb-16">
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#2d6a4f] block mb-4">
          Alur Kerja Kami
        </span>
        <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a3a2a]">
          Proses <span className="text-[#52b788]">Mudah</span> &amp; Transparan
        </h2>
      </div>

      {/* Mobile & Tablet: vertical list */}
      <div className="flex flex-col gap-0 lg:hidden relative">
        {/* Vertical connector */}
        <div className="absolute left-9 top-9 bottom-9 w-0.5 bg-linear-to-b from-[#2d6a4f] to-[#52b788] z-0" />

        {STEPS.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex gap-5 items-start relative z-10 pb-8 last:pb-0"
          >
            {/* Circle */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-[72] h-[72] shrink-0 bg-[#1a3a2a] rounded-full flex items-center justify-center
                border-4 border-[#f5ead0] font-playfair text-2xl font-black text-[#f0c040]"
            >
              {step.num}
            </motion.div>

            {/* Text */}
            <div className="pt-4">
              <h4 className="font-bold text-[#1a3a2a] text-sm mb-1.5">{step.title}</h4>
              <p className="text-[#6b7e6e] text-xs leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop: horizontal grid */}
      <div className="hidden lg:grid lg:grid-cols-5 gap-0 relative">
        {/* Horizontal connector */}
        <div className="absolute top-9 left-[10%] right-[10%] h-0.5 bg-linear-to-r from-[#2d6a4f] to-[#52b788] z-0" />

        {STEPS.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center relative z-10 px-3"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-[72] h-[72] bg-[#1a3a2a] rounded-full flex items-center justify-center
                mx-auto mb-5 border-4 border-[#f5ead0] font-playfair text-2xl font-black text-[#f0c040]"
            >
              {step.num}
            </motion.div>
            <h4 className="font-bold text-[#1a3a2a] text-sm mb-2">{step.title}</h4>
            <p className="text-[#6b7e6e] text-xs leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}