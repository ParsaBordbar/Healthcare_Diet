import React from "react";
import Header from "../components/Dr_Rabiee_Landing_components/Header";
import MainSection from "../components/Dr_Rabiee_Landing_components/Hero";
import CardsSection from "../components/Dr_Rabiee_Landing_components/Cards";
import Pyramid from "../components/Dr_Rabiee_Landing_components/Pyramid";
import InformationSection from "../components/Dr_Rabiee_Landing_components/Information";
import ArticleSlider from "../components/Dr_Rabiee_Landing_components/Article";
import Footer from "../components/Dr_Rabiee_Landing_components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <MainSection />
      <CardsSection />
      <Pyramid />
      <InformationSection />
      <ArticleSlider />
      <Footer />
    </main>
  );
}
