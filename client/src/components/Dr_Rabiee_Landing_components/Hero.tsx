import React from "react";
import Image from 'next/image';
import HeroImg from '/public/images/Hero.jpg';
import Kashi from '/public/images/kashi.png'
import Link from "next/link";
import MainButton from "../MainButton";
import PointerSvg from "/public/svg/Dr_Rabiee_Landing/HeroPointer.svg"

function MainSection() {
  return (
    <div className="flex justify-center items-center flex-row md:flex-row w-full bg-[#FEFDF9] ps-8">
      <div className="grid xl:grid-cols-7">

        <div className="flex justify-center items-center w-1/2 h-full xl:col-span-1">
            <Image
            src={Kashi}
            alt="Decorative pattern"
            className="w-full h-full"
            width={5000} 
            height={5000}
            />
        </div>

        <div className="flex flex-col md:flex-row w-full h-full items-end xl:col-span-3 justify-start">
          <div className="flex flex-col items-center justify-center text-right p-5 text-[#3A3A97] rtl">
            <div className="flex flex-col justify-end px-16">
              <h3 className="mb-5 text-5xl font-extrabold">
                رژیم مدیترانه‌ای، نه فقط غذا بلکه یک سبک زندگی است.
              </h3>
              <p className="mb-5 text-lg text-[#8A9196] justify-start items-start xl:pe-72">
              برنامه شخصی سازشده خود را دریافت کنید،  
              ما در هر مرحله با شماییم!</p>
            </div>
            <Link href="/register/login/enterNumber">
              <MainButton className="border border-[#FFA301] rounded-lg font-extrabold shadow-md px-9 py-2 bg-[#FFA301] hover:border-[var(--secondary-blue)] modern hover:bg-[var(--secondary-blue)] text-white transition-colors duration-300"
                value={"دریافت رژیم"} />
            </Link>
            <PointerSvg className="relative right-36 top-3" />
          </div>

        </div>
        <div className="flex justify-center items-center w-full xl:col-span-3">
          <div className="w-[661px] h-[561px] rounded-[170px_0_170px_0] shadow-md overflow-hidden flex justify-center items-center">
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
    </div>
  );
}

export default MainSection;
