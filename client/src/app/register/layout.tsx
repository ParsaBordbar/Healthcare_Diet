// "use client";
import { ReactNode } from "react";
import Navbar from "@/components/landingPage_components/Navbar";

const LayoutRegister = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="relative top-0 z-40">
        <header className="absolute bg-no-repeat bg-cover w-full h-28 bg-[url('/svg/header-register.svg')] top-0 ">
          <Navbar />
        </header>
        <main className="flex !bg-cover md:!bg-contain bg-no-repeat !bg-none lg:!bg-[url('/svg/loginBanner.svg')] h-screen items-center w-full justify-center lg:justify-end">
          {children}
        </main>
      </div>
    </>
  );
};

export default LayoutRegister;
