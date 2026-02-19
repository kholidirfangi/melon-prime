import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "MelonPrime — Pertanian Melon Premium",
  description:
    "Solusi lengkap pertanian melon premium: greenhouse, irigasi presisi, nutrisi, dan peralatan pertanian berkualitas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${dmSans.variable} bg-cream font-dm-sans overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
