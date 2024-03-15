import Hero from "@/components/landingPage_components/Hero";
import Navbar from "@/components/landingPage_components/Navbar";
import PlanBox from "@/components/landingPage_components/PlanBox";
import WhyHealthySection from "@/components/landingPage_components/whyHealthySection";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-12">
        <div className="col-span-full sticky top-0 shadow-sm z-20">
          <Navbar />
        </div>
        <div className="col-span-full bg-[var(--primary)] h-5/6">
          <Hero/>
        </div>
        <div className="col-span-full flex justify-center items-center">
          <WhyHealthySection />
        </div>
        <div className="col-span-full flex justify-end items-center">
          <PlanBox />
        </div>
      </div>
    </main>
  );
}
