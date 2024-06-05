"use client";
import { ReactNode, memo } from "react";
import Link from "next/link";
import HamburgerNavbar from "@/components/HamburgerMenu";
import useSpecificFetchBmi from "@/hooks/useFetchName/useFetchName";
import HomeIcon from "/public/svg/userPanelSvgs/home-2.svg";
import DocumentIcon from "/public/svg/adminPanelSvgs/document.svg";
import PersonalIcon from "/public/svg/userPanelSvgs/personal.svg";

interface LayoutUserProps {
  children: ReactNode;
  params: {
    user: string;
  };
}

const LayoutUser = ({ children, params }: LayoutUserProps) => {
  const bmiData = useSpecificFetchBmi(params.user);
  const { user } = params;
  console.log(params.user);
  let count = 0;
  setTimeout(() => {
    count = count + 1;
    console.log(count + 1);
  }, 1000);
  return (
    <>
      <div className="flex justify-end w-full top-0 z-40">
        <HamburgerNavbar
          className="!bg-transparent !fixed !right-0 !py-6 !px-6 md:!hidden !w-fit !inline-block"
          valueOne="خانه"
          valueTwo="رژیم ها"
          valueThree="پیشخوان"
          linkOne={"/"}
          linkThree={`/user/${user}/panel`}
          linkTwo={`/user/${user}/panel/diets`}
        />
        <div className="fixed hidden pb-6 top-0 right-0 h-screen bg-[var(--new-green)] gap-16 md:flex flex-col w-[25%] lg:w-1/6 ">
          <div className="flex items-center pb-2 rounded-lg justify-around bg-IslamicArt h-64 bg-cover bg-center"></div>
          <div className="flex lg:gap-0 lg:flex-row items-center md:p-4 lg:p-0 rounded-lg justify-around ">
            <h1 className="text-white">
              {bmiData?.name} {bmiData?.lastName}
            </h1>
          </div>
          <ul className="flex flex-col rounded-lg h-screen py-4 ps-4 gap-4 ">
            <Link href={"/"}>
              <label
                // href={"/"}
                className="group text-xl has-[input:checked]:bg-white cursor-pointer hover:bg-white ease-in-out transition-all duration-150 p-4 flex items-center gap-2 rounded-s-md"
              >
                <input
                  className="hidden peer items-center gap-3 text-white group-hover:text-[var(--new-green)]"
                  type="radio"
                  name="radio"
                />
                <HomeIcon className="[&>path]:group-hover:stroke-[var(--new-green)] peer-checked:[&>path]:stroke-[var(--new-green)] [&>path]:stroke-white [&>path]:stroke-2" />
                <p className="group-hover:text-[var(--new-green)] peer-checked:text-[var(--new-green)] pt-2 text-white">
                  خانه
                </p>
              </label>
            </Link>
            <Link href={`/user/${user}/panel`}>
              <label
                className="group text-xl has-[input:checked]:!bg-white hover:bg-white cursor-pointer   ease-in-out transition-all duration-150 p-4  flex items-center gap-2 rounded-s-md"
                // href={`/user/${user}/panel`}
              >
                <input
                  className="hidden peer group2 items-center gap-3 text-white group-hover:text-[var(--new-green)]"
                  type="radio"
                  name="radio"
                />
                <PersonalIcon className="[&>path]:group-hover:stroke-[var(--new-green)] [&>path]:stroke-white [&>path]:group-hover:fill-white [&>path]:stroke-2 peer-checked:[&>path]:stroke-[var(--new-green)] " />
                <p className="group-hover:text-[var(--new-green)] peer-checked:text-[var(--new-green)] text-white ">
                  پیشخوان
                </p>
              </label>
            </Link>
            <Link href={`/user/${user}/panel/diets`}>
              <label
                className="group text-xl has-[input:checked]:!bg-white cursor-pointer hover:bg-white   ease-in-out transition-all duration-150 p-4 flex items-center gap-2  rounded-s-md"
                // href={`/user/${user}/panel/diets`}
              >
                <input
                  className="hidden peer items-center gap-3 checked:hidden text-white group-hover:text-[var(--new-green)]"
                  type="radio"
                  name="radio"
                />
                <DocumentIcon className="[&>path]:group-hover:stroke-[var(--new-green)] [&>path]:stroke-white [&>path]:stroke-2 peer-checked:[&>path]:stroke-[var(--new-green)]" />
                <p className="group-hover:text-[var(--new-green)] peer-checked:text-[var(--new-green)] text-white">
                  رژیم ها
                </p>
              </label>
            </Link>
          </ul>
        </div>
        <main className="w-full md:w-[75%] lg:w-5/6 sm:px-10 px-6 md:px-16 py-20 md:py-16 bg-white">
          <p className="text-3xl">{count + 1}</p>

          <div className="">{children}</div>
        </main>
      </div>
    </>
  );
};

export default memo(LayoutUser);
