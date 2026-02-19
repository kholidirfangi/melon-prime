"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "Layanan", href: "#layanan" },
  { label: "Keunggulan", href: "#kenapa" },
  { label: "Proses", href: "#proses" },
  { label: "Produk", href: "#produk" },
  { label: "Testimoni", href: "#testimoni" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const onScroll = () => {
      if (!navRef.current) return;
      navRef.current.classList.toggle("shadow-2xl", window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tutup menu saat resize ke desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  const handleKonsultasi = () => {
    setMenuOpen(false);
    document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        ref={navRef}
        suppressHydrationWarning
        className="fixed top-0 w-full z-50 px-6 md:px-16 py-4 flex items-center justify-between
        bg-[#1a3a2a]/95 backdrop-blur-lg border-b border-[#d4a017]/20
        transition-shadow duration-300"
      >
        {/* Logo */}
        <div className="font-playfair text-2xl font-black text-[#f0c040]">
          Melon<span className="text-white font-normal">Prime</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-9 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`text-sm font-medium tracking-widest uppercase transition-colors duration-300
                  ${
                    activeLink === link.href
                      ? "text-[#f0c040] border-b-2 border-[#f0c040] pb-0.5"
                      : "text-white/80 hover:text-[#f0c040]"
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={handleKonsultasi}
          className="hidden md:block px-6 py-2.5 bg-[#d4a017] text-[#1a3a2a] rounded font-bold text-sm
          tracking-widest uppercase hover:bg-[#f0c040] hover:-translate-y-0.5
          transition-all duration-300"
        >
          Konsultasi Gratis
        </button>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 
          rounded focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#f0c040] transition-all duration-300
              ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#f0c040] transition-all duration-300
              ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#f0c040] transition-all duration-300
              ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-[65] left-0 w-full z-40 bg-[#1a3a2a]/98 backdrop-blur-lg
        border-b border-[#d4a017]/20 transition-all duration-300 overflow-hidden md:hidden
        ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`block py-3 text-sm font-medium tracking-widest uppercase
                  border-b border-[#d4a017]/10 transition-colors duration-300
                  ${
                    activeLink === link.href
                      ? "text-[#f0c040]"
                      : "text-white/80 hover:text-[#f0c040]"
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* CTA di Mobile */}
          <li className="pt-3">
            <button
              onClick={handleKonsultasi}
              className="w-full py-3 bg-[#d4a017] text-[#1a3a2a] rounded font-bold text-sm
              tracking-widest uppercase hover:bg-[#f0c040] transition-all duration-300"
            >
              Konsultasi Gratis
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
