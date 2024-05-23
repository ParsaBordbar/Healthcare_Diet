// "use client";
import { ReactNode } from "react";
import Link from "next/link";
import HamburgerNavbar from "@/components/HamburgerMenu";


interface LayoutUserProps {
  children: ReactNode;
  params: {
    user: string;
  };
}

const LayoutUser = ({ children, params }: LayoutUserProps) => {
  const { user } = params;
  return (
    <>
      <div className="sticky  flex justify-end w-full top-0 z-40">
        <HamburgerNavbar
          className="!bg-transparent "
          valueOne="خانه"
          valueTwo="رژیم ها"
          linkOne={"/"}
          linkTwo={`/user/${user}/panel/diets`}
        />
        <div className="fixed hidden py-6 top-0 right-0 h-screen bg-[var(--rating-color)] gap-16 md:flex flex-col w-[30%] lg:w-1/6 ">
          <div className="flex lg:gap-0 lg:flex-row items-center md:p-4 lg:p-0 rounded-lg justify-around ">
            <h1 className="text-white">name of the user</h1>
          </div>
          <ul className=" rounded-lg h-screen pr-4">
            <Link href={"/"}>
              <li className="hover:text-[var(--rating-color)] text-lg cursor-pointer hover:text-black text-white hover:bg-zinc-100 hover:bg-full ease-in-out transition-all duration-150 p-2 rounded-s-md">
                خانه
              </li>
            </Link>
            <Link href={`/user/${user}/panel/diets`}>
              <li className="hover:text-[var(--rating-color)] text-lg cursor-pointer hover:text-black text-white hover:bg-zinc-100 hover:bg-full ease-in-out transition-all duration-150 p-2 rounded-s-md">
                رژیم ها
              </li>
            </Link>
          </ul>
        </div>
        <main className=" sm:w-full md:w-[70%] lg:w-5/6 p-20 bg-white">
          <div className="">{children}</div>
        </main>
      </div>
    </>
  );
};

export default LayoutUser;
