import { ServiceItem, TestimonialItem, StepItem, ProductItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    icon: "🏗️",
    title: "Pembuatan Greenhouse",
    description:
      "Konstruksi greenhouse modern dengan material anti-UV, ventilasi optimal, dan desain sesuai kondisi iklim lokal Anda.",
    tag: "Konstruksi & Desain",
  },
  {
    icon: "💧",
    title: "Sistem Irigasi",
    description:
      "Instalasi drip irrigation & NFT presisi tinggi dengan kontrol otomatis, menghemat air hingga 60% dibanding konvensional.",
    tag: "Presisi & Efisiensi",
  },
  {
    icon: "🧪",
    title: "Nutrisi Tanaman",
    description:
      "Paket nutrisi hidroponik lengkap Formula A & B, diformulasikan khusus untuk pertumbuhan optimal melon premium.",
    tag: "Formulasi Premium",
  },
  {
    icon: "🔧",
    title: "Peralatan Pertanian",
    description:
      "Penyediaan alat lengkap: EC meter, pH meter, TDS meter, pompa, net pot, rockwool, hingga sensor monitoring IoT.",
    tag: "Kelengkapan Alat",
  },
];

export const STEPS: StepItem[] = [
  {
    num: "01",
    title: "Konsultasi Awal",
    description:
      "Diskusi kebutuhan, lahan, dan target bisnis Anda bersama agronomis kami secara gratis.",
  },
  {
    num: "02",
    title: "Survey & Desain",
    description:
      "Tim kami survei lokasi dan membuat desain GH serta sistem irigasi yang optimal.",
  },
  {
    num: "03",
    title: "Instalasi",
    description:
      "Pembangunan GH dan pemasangan sistem dilakukan oleh teknisi terlatih kami.",
  },
  {
    num: "04",
    title: "Pelatihan",
    description:
      "Pelatihan operasional dan manajemen nutrisi untuk tim kebun Anda.",
  },
  {
    num: "05",
    title: "Pendampingan",
    description:
      "Monitoring rutin dan support berkelanjutan hingga panen perdana berhasil.",
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    emoji: "🍈",
    bgClass: "from-green-600 to-green-500",
    name: "Benih Melon Premium",
    description:
      "Varietas unggulan Inthanon, Glamour, dan Action — brix tinggi, tahan penyakit, produktivitas maksimal.",
  },
  {
    emoji: "🧪",
    bgClass: "from-amber-700 to-amber-600",
    name: "Paket Nutrisi Hidroponik",
    description:
      "Formula A & B lengkap untuk satu musim tanam. Tersedia ukuran 500ml, 1L, dan 5L sesuai skala kebun.",
  },
  {
    emoji: "🔬",
    bgClass: "from-blue-700 to-blue-600",
    name: "Starter Kit Lengkap",
    description:
      "Paket all-in-one: EC meter, pH meter, net pot, rockwool, dan panduan budidaya digital.",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    text: "Dari nol pengalaman berkebun melon, sekarang omset saya 80 juta per musim. Tim MelonPrime sangat sabar mendampingi dari awal hingga panen pertama sukses besar.",
    name: "Budi Santoso",
    role: "Petani, Malang — GH 1.000 m²",
    avatar: "👨‍🌾",
  },
  {
    text: "Sistem irigasi drip yang dipasang sangat efisien. Konsumsi air turun drastis tapi hasil melon justru lebih besar dan manis. Brix tembus 17 derajat konsisten setiap panen!",
    name: "Siti Rahayu",
    role: "Petani, Jember — GH 500 m²",
    avatar: "👩‍🌾",
  },
  {
    text: "Greenhouse yang dibangun sangat kokoh, sudah melewati musim hujan dua kali tanpa masalah. Kualitas konstruksi dan pelayanan purna jual MelonPrime benar-benar memuaskan.",
    name: "Ahmad Fauzi",
    role: "Pengusaha, Medan — GH 2.000 m²",
    avatar: "🧑‍🌾",
  },
];
