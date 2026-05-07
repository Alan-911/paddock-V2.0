import HeroSection from "@/components/home/HeroSection";
import LiveEnergyIndicator from "@/components/home/LiveEnergyIndicator";
import MenuCTASection from "@/components/home/MenuCTASection";
import WhatsOnSection from "@/components/home/WhatsOnSection";
import CocktailSection from "@/components/home/CocktailSection";
import FoodSection from "@/components/home/FoodSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <LiveEnergyIndicator />
      <MenuCTASection />
      <WhatsOnSection />
      <CocktailSection />
      <FoodSection />
    </>
  );
}
