import Hero from '@/components/hero';
import Navbar from '@/components/navbar'
import FinalCTA from '@/components/finalCTA';
import StatsSection from '@/components/statsSection';
import Services from '@/components/services';
import ValueProp from '@/components/valueProp';

export default function Home(){
  return(
    <main>
      <Navbar/>
      <Hero
        title="Pass the Baton, Fast Track Your Growth"
        subtitle="From the starting blocks to the finish line, Relay Digital drives your business growth with precision and speed."
        />
      <FinalCTA />
      <StatsSection />
      <Services />
      <ValueProp />
    </main>
  )
}