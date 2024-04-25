import Hero from "@/components/landingPage_components/Hero";
import Navbar from "@/components/landingPage_components/Navbar";
import PlanBox from "@/components/landingPage_components/PlanBox";
import WhyHealthySection from "@/components/landingPage_components/whyHealthySection";
import Strawberries from "/public/svg/strawberries.svg";
import TextBoxSection from "@/components/landingPage_components/TextBoxSection";
import LoginNowBox from "@/components/landingPage_components/LoginNowBox";
import WhatIsYourHealthyBite from "@/components/landingPage_components/WhatIsYourHealthyBite";
import ProductsSection from "@/components/landingPage_components/ProducctsSection";
import FoodStorySection from "@/components/landingPage_components/FoodStorySection";
import UpgradeYourselfSection from "@/components/landingPage_components/UpgradeYourselfSection";
import CheckHealthySection from "@/components/CheckHealthySection";
import Footer from "@/components/Footer";
import HamburgerNavbar from "@/components/HamburgerMenu";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 justify-center">
        <div className="sticky top-0 shadow-sm z-20 col-span-full">
          <Navbar />
          <HamburgerNavbar />
        </div>
        <div className="col-span-full">
          <Hero />
        </div>
        <div className="flex justify-center items-center col-span-full">
          <WhyHealthySection />
        </div>
        <div className="flex items-center my-9 gap-20 justify-between col-span-full">
          <Strawberries className="z-0 hidden md:flex" />
          <PlanBox />
        </div>
        <div className="col-span-full">
          <TextBoxSection />
        </div>
        <div className="flex items-center justify-center col-span-full">
          <LoginNowBox />
        </div>
        <div className="col-span-full">
          <WhatIsYourHealthyBite />
        </div>
        <div className="col-span-full max-w-full ">
          <ProductsSection />
        </div>
        <div className="col-span-full max-w-full ">
          <FoodStorySection />
        </div>
        <div className="col-span-full">
          <UpgradeYourselfSection />
        </div>
        <div className="col-span-full">
          <CheckHealthySection />
        </div>
        <div className="col-span-full">
          <Footer />
        </div>
      </div>
    </main>
  );
}