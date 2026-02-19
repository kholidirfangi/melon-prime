import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import HeroSection from "./components/sections/HeroSection";
import KenapaSection from "./components/sections/KenapaSection";
import KontakSection from "./components/sections/KontakSection";
import LayananSection from "./components/sections/LayananSection";
import ProdukSection from "./components/sections/ProdukSection";
import ProsesSection from "./components/sections/ProsesSection";
import TestimoniSection from "./components/sections/TestimoniSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <LayananSection />
      <KenapaSection />
      <ProsesSection />
      <ProdukSection />
      <TestimoniSection />
      <KontakSection />
      <Footer />
    </main>
  );
}
