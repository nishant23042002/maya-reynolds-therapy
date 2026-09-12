import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionIntro from "@/components/MissionIntro";
import WhoIHelp from "@/components/WhoIHelp";
import AreasOfFocus from "@/components/AreasOfFocus";
import HowIWork from "@/components/HowIWork";
import Services from "@/components/Services";
import OurOffice from "@/components/OurOffice";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

// Section order matches the original homepage (Reynolds Rebuild § 4),
// with "Our Office" and "Faq" inserted as the two additions Part 2/3 call
// for. Don't reorder sections without re-checking that table.
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MissionIntro />
        <WhoIHelp />
        <AreasOfFocus />
        <HowIWork />
        <Services />
        <OurOffice />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
