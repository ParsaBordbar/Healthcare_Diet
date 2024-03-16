import Hero from "@/components/landingPage_components/Hero";
import Navbar from "@/components/landingPage_components/Navbar";
import PlanBox from "@/components/landingPage_components/PlanBox";
import WhyHealthySection from "@/components/landingPage_components/whyHealthySection";
import Strawberries from "/public/svg/strawberries.svg"
import TextBoxSection from "@/components/landingPage_components/TextBoxSection";

export default function Home() {
  return (
    <main>
        <div className="grid grid-cols-1">
          <div className="sticky top-0 shadow-sm z-20 col-span-full">
            <Navbar />
          </div>
          <div className="bg-[var(--primary)] h-5/6 col-span-full">
            <Hero/>
          </div>
          <div className="flex justify-center items-center col-span-full">
            <WhyHealthySection />
          </div>
          <div className="flex items-center my-9 gap-14 justify-end col-span-full">
            <Strawberries className="z-0"/>
            <PlanBox/>
          </div>
          <div>
            <TextBoxSection />
          </div>  
        </div>
    </main>
  );
}
