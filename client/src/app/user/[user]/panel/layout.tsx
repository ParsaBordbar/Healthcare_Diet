"use client";
import { ReactNode, memo, useEffect } from "react";
import Link from "next/link";
import HamburgerNavbar from "@/components/HamburgerMenu";
import useSpecificFetchBmi from "@/hooks/useFetchName/useFetchName";
import HomeIcon from "/public/svg/userPanelSvgs/home-2.svg";
import DocumentIcon from "/public/svg/adminPanelSvgs/document.svg";
import PersonalIcon from "/public/svg/userPanelSvgs/personal.svg";
import SideBarItems from "@/components/SidebarItems";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import SideBarBanner from "/public/svg/sideBarBanner.svg";
interface LayoutUserProps {
  children: ReactNode;
  params: {
    user: string;
  };
}

const LayoutUser = ({ children, params }: LayoutUserProps) => {
  const { user } = params;
  const router = usePathname();

  console.log("rendering layout of user panel");
  return (
    <>
      <div className="flex justify-end w-full top-0 z-40">
        <HamburgerNavbar
          className="!bg-transparent !fixed !right-0 !py-6 !px-6 md:!hidden !w-fit !inline-block"
          valueOne="خانه"
          valueTwo="رژیم ها"
          valueThree="پروفایل شخصی"
          linkOne={"/"}
          linkThree={`/user/${user}/panel`}
          linkTwo={`/user/${user}/panel/diets`}
        />
        <div className="fixed hidden pb-6 top-0 right-0 h-screen bg-[var(--new-green)]  md:flex w-[25%] lg:w-[20%]">
          <SideBarBanner width={100} />
          <ul className="flex flex-col w-full rounded-lg h-screen py-4 ps-4 gap-4 ">
            <SideBarItems
              router={router}
              value={"خانه"}
              href={`/`}
              icon={HomeIcon}
            />
            <SideBarItems
              router={router}
              value={"پروفایل شخصی"}
              href={`/user/${user}/panel`}
              icon={PersonalIcon}
            />

            <SideBarItems
              router={router}
              value={"پیام های شما"}
              href={`/user/${user}/panel/massege`}
              icon={PersonalIcon}
            />

            <SideBarItems
              router={router}
              value={"رژیم ها"}
              href={`/user/${user}/panel/diets`}
              icon={DocumentIcon}
            />
            <SideBarItems
              router={router}
              value={"برنامه های شما"}
              href={`/user/${user}/panel/plans`}
              icon={DocumentIcon}
            />
          </ul>
        </div>
        <main className="w-full md:w-[75%] lg:w-[80%] sm:px-10 px-6 md:px-16 py-20 md:py-16 bg-white">
          <div className="">{children}</div>
        </main>
      </div>
    </>
  );
};

export default memo(LayoutUser);
