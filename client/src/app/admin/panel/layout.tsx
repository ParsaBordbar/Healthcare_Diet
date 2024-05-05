// "use client";
import { ReactNode } from "react";
import Navbar from "@/components/landingPage_components/Navbar";

const LayoutAdmin = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="relative top-0 z-40">
        <header className="absolute bg-no-repeat bg-cover w-full h-28 bg-[url('/svg/header-register.svg')] top-0 ">
          <Navbar />
        </header>
        <main className="">
          {children}
        </main>
      </div>
    </>
  );
};

export default LayoutAdmin;
