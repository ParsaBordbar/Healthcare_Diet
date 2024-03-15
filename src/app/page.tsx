import Hero from "@/components/landingPage_components/Hero";
import Navbar from "@/components/landingPage_components/Navbar";
import PlanBox from "@/components/landingPage_components/PlanBox";
import WhyHealthySection from "@/components/landingPage_components/whyHealthySection";
import Strawberries from "/public/svg/strawberries.svg"

export default function Home() {
  return (
    <main>
        <div className="sticky top-0 shadow-sm z-20">
          <Navbar />
        </div>
        <div className="bg-[var(--primary)] h-5/6">
          <Hero/>
        </div>
        <div className="flex justify-center items-center">
          <WhyHealthySection />
        </div>
        <div className="flex items-center my-9">
        <Strawberries className="z-0"/>
          <PlanBox/>
        </div>
    </main>
  );
}
