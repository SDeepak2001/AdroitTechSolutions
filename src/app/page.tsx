import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import StatsRibbon from "@/components/StatsRibbon";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import CalloutBand from "@/components/CalloutBand";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsRibbon />
      <Services />
      <Work />
      <About />
      <CalloutBand />
      <Contact />
      <Footer />
    </>
  );
}
