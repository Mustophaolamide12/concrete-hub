import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Divider from "@/components/Divider";
import StartHere from "@/components/StartHere";
import TeamSection from "@/components/TeamSection";
import ActivitySection from "@/components/WhoToTalkTo";
import Recaps from "@/components/Recaps";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Divider />
      <StartHere />
      <Divider />
      <TeamSection />
      <Divider />
      <ActivitySection />
      <Divider />
      <Recaps />
      <Footer />
    </main>
  );
}
