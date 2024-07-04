import React from "react";
import Image from 'next/image';
import HeroImg from '/public/images/Hero.jpg';
import Kashi from '/public/images/kashi.png'
import Link from "next/link";
import MainButton from "../MainButton";

function MainSection() {
  return (
    <div className="flex flex-row md:flex-row w-full h-[670px] bg-[#FEFDF9] px-12">
      {/* Left Column */}
      <div className="flex justify-center items-center h-full">
          <Image
          src={Kashi}
          alt="Decorative pattern"
          className="w-full h-full object-contain"
          width={5000} 
          height={5000}
          />
        </div>
      <div className="flex flex-col md:flex-row w-full md:w-1/2 h-full items-center">
        <div className="flex flex-col justify-between items-center text-center p-5 text-[#3A3A97] rtl">
          <h3 className="mb-5 text-5xl font-extrabold">
            رژیم مدیترانه‌ای، نه فقط غذا بلکه یک سبک زندگی است.
          </h3>
          <p className="mb-5 text-base text-black">
            برنامه شخصی سازشده خود را دریافت کنید، ما در هر مرحله با شماییم.
          </p>
          <Link href="/register/login/enterNumber">
            <MainButton className="border border-[#FFA301] rounded-lg font-extrabold shadow-md px-9 py-2 bg-[#FFA301] hover:border-[var(--secondary-blue)] modern hover:bg-[var(--secondary-blue)] text-white transition-colors duration-300"
              value={"دریافت رژیم"} />
          </Link>
        </div>
        
      </div>
      {/* Right Column */}
      <div className="flex justify-center items-center w-full md:w-1/2">
        <div className="w-full h-4/5 rounded-[170px_0_170px_0] shadow-md overflow-hidden flex justify-center items-center">
          <Image
          src={HeroImg}
          alt="Hero in Box"          
          className="w-full h-full object-cover object-center "
          width={5000} 
          height={5000}
          />
        </div>
      </div>
      
    </div>
  );
}

export default MainSection;