import React from "react";
import Header from "../components/Dr_Rabiee_Landing_components/Header";
import MainSection from "../components/Dr_Rabiee_Landing_components/Hero";
import CardsSection from "../components/Dr_Rabiee_Landing_components/Cards";
import Pyramid from "../components/Dr_Rabiee_Landing_components/Pyramid";
import InformationSection from "../components/Dr_Rabiee_Landing_components/Information";
import ArticleSlider from "../components/Dr_Rabiee_Landing_components/Article";
import Footer from "../components/Dr_Rabiee_Landing_components/Footer";
import BmiForm from "@/components/landingPage_components/BmiForm";

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-8">
      <div className="col-span-full">
        <Header/>
      </div>
      <div className="col-span-full">
        <MainSection />
      </div>
      <div className="col-span-full">
        <CardsSection />
      </div>
      <div className="col-span-full">
        <Pyramid />
      </div>
      <div className="col-span-full">
        <BmiForm/>
      </div>
      <div className="col-span-full" id="info">
        <InformationSection />
      </div>
      <div className="col-span-full "id="blogs">
        <ArticleSlider />
      </div>
      <div className="col-span-full">
        <Footer />
      </div>
    </main> 
  );
}
