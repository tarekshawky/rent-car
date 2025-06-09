import HeroSection from "@/components/HeroSection";
import Info from "@/components/Info";
import CarCard from "@/components/CarCard";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main>
      <HeroSection/>
        <Info/>
        <CarCard/>
        <Stats/>
    </main>
  );
}
