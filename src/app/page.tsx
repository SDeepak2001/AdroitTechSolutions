import Hero from "@/components/sections/Hero";
import StatsRibbon from "@/components/StatsRibbon";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import CalloutBand from "@/components/CalloutBand";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <Hero />
      {/* Remove Stats if not needed */}
      {/* <StatsRibbon /> */}
      <Services />
      <About />
      <CalloutBand />
      <Contact />
    </>
  );
}
