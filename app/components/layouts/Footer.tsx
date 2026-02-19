import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-[#0d1f16] px-6 sm:px-10 lg:px-20 py-10 lg:py-12
      border-t border-white/5"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        {/* Logo */}
        <div className="font-playfair text-xl font-black text-[#f0c040]">
          Melon<span className="text-white/50 font-normal">Prime</span>
        </div>

        {/* Copyright */}
        <p className="text-white/30 text-sm order-last sm:order-0 text-center sm:text-left">
          © 2025 MelonPrime. Semua hak dilindungi.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {["Instagram", "YouTube", "TikTok", "Tokopedia"].map((social) => (
            <Link
              key={social}
              href="#"
              className="text-white/40 text-sm hover:text-[#f0c040] transition-colors"
            >
              {social}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
