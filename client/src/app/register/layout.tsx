// "use client";
import { ReactNode } from "react";
import Logo from "/public/svg/Logo.svg";
import ListItems from "@/components/ListItems";
import Navbar from "@/components/landingPage_components/Navbar";

const LayoutRegister = ({ children }: { children: ReactNode }) => {
  console.log(children);
  return (
    <div className="relative top-0 z-40">
      <header className="absolute bg-no-repeat bg-cover w-full h-28 bg-[url('/svg/header-register.svg')] top-0 ">
        {/* <HeaderSVG className="header opacity-100" width={1920} /> */}
        {/* <nav className="flex flex-row-reverse left-0 py-7 absolute top-0 px-10 gap-16 items-center">
          <Logo />
          <ListItems
            desc="خدمات"
            className="cursor-pointer !text-[var(--text)]"
          />
          <ListItems
            desc="بلاگ ها"
            className="cursor-pointer !text-[var(--text)]"
          />
        </nav> */}
        <Navbar />
      </header>
      <main className="flex !bg-cover md:!bg-contain bg-no-repeat !bg-none lg:!bg-[url('/svg/loginBanner.svg')] h-screen items-center w-full justify-center lg:justify-end">
        {/* <div className="absolute -z-20 left-0  h-screen bottom-0 top-0">
          <LoginBanner className="bg-repeat-y" />
        </div> */}
        {children}
      </main>
    </div>
  );
};

export default LayoutRegister;
