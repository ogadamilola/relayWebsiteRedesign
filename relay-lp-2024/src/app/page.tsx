import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import FinalCTA from "@/components/finalCTA";
import StatsSection from "@/components/statsSection";
import Services from "@/components/services";
import ValueProp from "@/components/valueProp";
import Pricing from "@/components/pricing";
import FAQSection from "@/components/FAQ";
import Footer from "@/components/footer";
import CaseStudies from "@/components/caseStudies";
import Partners from "@/components/partners";
import Process from "@/components/process";
import { statCards } from "@/data/stats";
import { serviceCards } from "@/data/services";
import { packages } from "@/data/packages";
import { faqs } from "@/data/faqs";

export default function Home() {
  return (
    <main className="bg-relaydigital-black text-white px-[20px] sm:px-[70px] font-neue-montreal overflow-x-hidden">
      <Navbar />
      <Hero />
      <FinalCTA />
      <StatsSection stats={statCards} />
      <Services services={serviceCards} />
      <ValueProp />
      <CaseStudies />
      <Partners />
      <Process />
      <Pricing packages={packages} />
      <FAQSection faq={faqs} />
      <Footer />
    </main>
  );
}
