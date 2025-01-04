import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import FinalCTA from "@/components/finalCTA";
import StatsSection from "@/components/statsSection";
import Services from "@/components/services";
import ValueProp from "@/components/valueProp";
import Pricing from "@/components/pricing";
import FAQSection from "@/components/FAQ";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-relaydigital-black px-[20px] sm:px-[70px] font-neue-montreal">
      <Navbar />
      <Hero />
      <FinalCTA />
      <StatsSection />
      <Services />
      <ValueProp />
      <Pricing />
      <FAQSection />
      <Footer />
    </main>
  );
}
