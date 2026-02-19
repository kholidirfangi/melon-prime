"use client";
import { motion } from "framer-motion";
import { PRODUCTS } from "../../constants/data";
import Link from "next/link";

export default function ProdukSection() {
  return (
    <section id="produk" className="py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-20 bg-[#fdf6e3]">
      
      {/* Header */}
      <div className="text-center mb-10 lg:mb-14">
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#2d6a4f] block mb-4">
          Produk Unggulan
        </span>
        <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a3a2a]">
          Pilihan <span className="text-[#52b788]">Paket</span> Terbaik
        </h2>
        <p className="text-[#6b7e6e] mt-4 max-w-md mx-auto leading-relaxed text-sm sm:text-base">
          Dari benih unggul, paket nutrisi, hingga starter kit lengkap untuk pemula maupun petani berpengalaman.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
        {PRODUCTS.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-[#1a3a2a] rounded-2xl overflow-hidden group cursor-pointer"
          >
            <div className={`h-40 sm:h-44 lg:h-48 flex items-center justify-center text-5xl sm:text-6xl bg-linear-to-br ${product.bgClass}`}>
              {product.emoji}
            </div>
            <div className="p-5 sm:p-6 lg:p-7">
              <h3 className="font-playfair text-lg sm:text-xl font-bold text-[#f0c040] mb-2">
                {product.name}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                {product.description}
              </p>
              <Link
                href="#kontak"
                className="text-[#52b788] text-sm font-semibold tracking-wide
                flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300"
              >
                Pesan Sekarang <span>→</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}