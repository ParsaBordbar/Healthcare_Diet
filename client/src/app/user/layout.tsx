// "use client";
import { ReactNode } from "react";
import Navbar from "@/components/landingPage_components/Navbar";
import Link from "next/link";

const LayoutUser = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="sticky flex w-full top-0 z-40">
        <div className="bg-[var(--rating-color)] gap-16 flex flex-col w-1/6 p-4">
          <div className="flex items-center p-2 rounded-lg justify-around ">
            <img
              className="w-16 h-16 border border-white rounded-full p-1"
              src="/svg/User.svg"
              alt="admin-profile"
            />
            <h1 className="text-white">name of the user</h1>
          </div>
          <ul className=" rounded-lg h-screen p-4">
            <Link href={"/user/panel/diets"}>
              <ul className="hover:text-[var(--rating-color)] text-lg cursor-pointer hover:text-black text-white hover:bg-zinc-100 ease-in-out transition-all duration-150 p-2 rounded-md">
                رژیم ها
              </ul>
            </Link>
          </ul>
        </div>
        <main className="w-5/6 p-28 bg-white">
          <div className="">{children}</div>
        </main>
      </div>
    </>
  );
};

export default LayoutUser;
