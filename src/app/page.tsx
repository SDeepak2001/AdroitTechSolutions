// src/app/page.tsx
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import CalloutBand from "@/components/CalloutBand";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <Hero />
      {/* Removed: <StatsRibbon /> */}
      <Services />
      <About />
      <CalloutBand />
      <Contact />
    </>
  );
}
