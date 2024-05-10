// "use client";
import { ReactNode } from "react";
import Navbar from "@/components/landingPage_components/Navbar";
import Link from "next/link";

const LayoutUser = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="sticky flex justify-end w-full top-0 z-40">
        <div className="fixed top-0 right-0 h-screen bg-[var(--rating-color)] gap-16 flex flex-col w-1/6 ">
          <div className="flex items-center p-4rounded-lg justify-around ">
            <img
              className="w-16 h-16 border border-white rounded-full p-1"
              src="/svg/User.svg"
              alt="admin-profile"
            />
            <h1 className="text-white">name of the user</h1>
          </div>
          <ul className=" rounded-lg h-screen pr-4">
            <Link href={"/"}>
              <li className="hover:text-[var(--rating-color)] text-lg cursor-pointer hover:text-black text-white hover:bg-zinc-100 hover:bg-full ease-in-out transition-all duration-150 p-2 rounded-s-md">
                خانه
              </li>
            </Link>
            <Link href={"/user/panel/diets"}>
              <li className="hover:text-[var(--rating-color)] text-lg cursor-pointer hover:text-black text-white hover:bg-zinc-100 hover:bg-full ease-in-out transition-all duration-150 p-2 rounded-s-md">
                رژیم ها
              </li>
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
