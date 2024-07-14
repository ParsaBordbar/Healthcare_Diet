import Header from "@/components/Dr_Rabiee_Landing_components/Header";
import { ReactNode } from "react";
import Image from 'next/image';
import HeaderPic from '/public/images/articleHeaderPic.jpg'
import DocPhoto from "/public/images/dr.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";


const ArticleLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="grid grid-cols-7 gap-10">
      <header className="col-span-full mb-8">
          <Header/>
      </header>
      <section className="my-10 flex justify-center flex-col xl:col-start-3 xl:col-span-3 col-span-5 col-start-2 gap-8">
      {children}
      </section>
    </main>
  );
};

export default ArticleLayout;