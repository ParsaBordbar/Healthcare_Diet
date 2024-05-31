"use client";
import { ReactNode } from "react";
import Link from "next/link";
import HamburgerNavbar from "@/components/HamburgerMenu";
import useSpecificFetchBmi from "@/hooks/useFetchName/useFetchName";
import HomeIcon from '/public/svg/userPanelSvgs/home-svgrepo-com.svg'
import DietIcon from '/public/svg/userPanelSvgs/diet-svgrepo-com.svg'
import CustomerFeedIcon from '/public/svg/userPanelSvgs/customer-service-svgrepo-com.svg'

interface LayoutUserProps {
  children: ReactNode;
  params: {
    user: string;
  };
}

const LayoutUser = ({ children, params }: LayoutUserProps) => {
  const bmiData = useSpecificFetchBmi(params.user)
  const { user } = params;
  return (
    <>
      <div className="flex justify-end w-full top-0 z-40">
        <HamburgerNavbar
          className="!bg-transparent !fixed !right-0 !py-6 !px-6 md:!hidden !w-fit !inline-block"
          valueOne="خانه"
          valueTwo="رژیم ها"
          linkOne={"/"}
          linkTwo={`/user/${user}/panel/diets`}
        />
        <div className="fixed hidden pb-6 top-0 right-0 h-screen bg-[var(--rating-color)] gap-16 md:flex flex-col w-[25%] lg:w-1/6 ">
          <div className="flex items-center pb-2 rounded-lg justify-around bg-IslamicArt h-64 bg-cover bg-center"></div>
          <div className="flex lg:gap-0 lg:flex-row items-center md:p-4 lg:p-0 rounded-lg justify-around ">
            <h1 className="text-white">{bmiData?.name} {bmiData?.lastName}</h1>
          </div>
          <ul className="flex flex-col rounded-lg h-screen py-4 ps-4 gap-4 ">
          <Link className="group text-xl cursor-pointer hover:bg-white hover:bg-full ease-in-out transition-all duration-150 p-4 rounded-s-md" href={`/user/${user}/panel`}>
              <li className="flex items-center gap-3 text-white group-hover:text-[var(--new-green)]">
              <CustomerFeedIcon className='[&>path]:group-hover:fill-[var(--new-green)] ' />
                پیشخوان
              </li>
            </Link>
            <Link href={"/"} className="group text-xl cursor-pointer hover:bg-white hover:bg-full ease-in-out transition-all duration-150 p-4 rounded-s-md">
              <li className="flex items-center gap-3 text-white group-hover:text-[var(--new-green)]">
                <HomeIcon className='[&>path]:group-hover:fill-[var(--new-green)] '/>
                <p className="pt-2">خانه</p>
              </li>
            </Link>
            <Link className="group text-xl cursor-pointer hover:bg-white hover:bg-full ease-in-out transition-all duration-150 p-4 rounded-s-md" href={`/user/${user}/panel/diets`}>
              <li className="flex items-center gap-3 text-white group-hover:text-[var(--new-green)]">
                <DietIcon className='[&>path]:group-hover:fill-[var(--new-green)] '/>
                <p>رژیم ها</p>
              </li>
            </Link>
          </ul>
        </div>
        <main className="w-full md:w-[75%] lg:w-5/6 sm:px-10 px-6 md:px-16 py-20 md:py-16 bg-white">
          <div className="">{children}</div>
        </main>
      </div>
    </>
  );
};

export default LayoutUser;
