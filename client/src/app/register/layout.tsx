"use client";
import { ReactNode } from "react";
import Navbar from "@/components/landingPage_components/Navbar";
import Image from "next/image";
import BannerImage from 'public/svg/loginBanner.svg'
const LayoutRegister = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="relative top-0 z-40">
        <main className="flex   bg-[var(--soft-blue)] h-screen items-center w-full justify-center lg:justify-end">
          <Image
            src={'/svg/blueBanner.svg'}
            alt="login banner"
            className="hidden object-cover lg:h-full !w-1/2 lg:inline-block "
            width={9000}
            height={0}
          />
          {children}
        </main>
      </div>
    </>
  );
};

export default LayoutRegister;
