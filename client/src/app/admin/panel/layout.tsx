// "use client";
import { ReactNode } from "react";
import Navbar from "@/components/landingPage_components/Navbar";
import Link from "next/link";

const LayoutAdmin = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="sticky flex w-full top-0 z-40 h-svh">
        <div className="bg-[var(--rating-color)] gap-16 flex flex-col h-screen w-1/6 py-4 ">
          <div className="flex items-center py-2 rounded-lg justify-around ">
           
            <h1 className="text-white text-2xl font-semibold">نام دکتر</h1>
          </div>
          <ul className="flex flex-col rounded-lg h-screen py-4 ps-4 gap-4 ">
          <li className="hover:text-[var(--rating-color)] text-xl cursor-pointer hover:text-black text-white hover:bg-white hover:bg-full ease-in-out transition-all duration-150 p-4 rounded-s-md">
                  <Link href={"/admin/panel/"}> پنل کاربری</Link>                
            </li>
            <li className="hover:text-[var(--rating-color)] text-xl cursor-pointer hover:text-black text-white hover:bg-white hover:bg-full ease-in-out transition-all duration-150 p-4 rounded-s-md">
                  <Link href={"/admin/panel/patients/"}> بیمارها</Link>                
            </li>
            <li className="hover:text-[var(--rating-color)] text-xl cursor-pointer hover:text-black text-white hover:bg-white hover:bg-full ease-in-out transition-all duration-150 p-4 rounded-s-md">
                  <Link href={"/admin/panel/bmi/"}> فرم‌های BMI</Link>                
            </li>
            <li className="hover:text-[var(--rating-color)] text-xl cursor-pointer hover:text-black text-white hover:white hover:bg-full ease-in-out transition-all duration-150 p-4 rounded-s-md">
                  <Link href={"/admin/panel/mediterranean/"}> فرم‌های رژیم مدیترانه‌ای </Link>                
            </li>
          </ul>
        </div>
        <main className="w-5/6 px-28 py-16 bg-white">
          <div className="">
          {children}
          </div>
          </main>
      </div>
    </>
  );
};

export default LayoutAdmin;
