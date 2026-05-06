import HeroSection from "@/components/home/HeroSection";
import LiveEnergyIndicator from "@/components/home/LiveEnergyIndicator";
import WhatsOnSection from "@/components/home/WhatsOnSection";
import DJLineupSection from "@/components/home/DJLineupSection";
import CocktailSection from "@/components/home/CocktailSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LiveEnergyIndicator />
      <DJLineupSection />
      <WhatsOnSection />
      <CocktailSection />
    </>
  );
}
