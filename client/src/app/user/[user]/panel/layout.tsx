"use client";
import { ReactNode, memo } from "react";
import HamburgerNavbar from "@/components/HamburgerMenu";
import HomeIcon from "/public/svg/userPanelSvgs/home-2.svg";
import DocumentIcon from "/public/svg/adminPanelSvgs/document.svg";
import PersonalIcon from "/public/svg/userPanelSvgs/personal.svg";
import LogOutIcon from "/public/svg/userPanelSvgs/LogOut.svg"
import SideBarItems from "@/components/SidebarItems";
import { usePathname } from "next/navigation";
import Image from "next/image";


interface LayoutUserProps {
  children: ReactNode;
  params: {
    user: string;
  };
}

const LayoutUser = ({ children, params }: LayoutUserProps) => {
  const { user } = params;
  const router = usePathname();

  const handleLogout = () => {
    localStorage.removeItem('user');
  }

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
        <div className="fixed hidden pb-6 px-2  top-0 right-0 h-screen bg-[var(--soft-blue)]  md:flex w-[25%] lg:w-[20%]">
        <Image
            src={"/svg/sideBarBanner.svg"}
            width={80}
            height={1}
            layout="fixed"
            className="object-cover hidden lg:inline rounded-2xl py-2 "
            alt={""}
          />          <ul className="flex flex-col w-full rounded-lg h-screen py-4 ps-4 gap-4 ">
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
            <SideBarItems
              router={router}
              value={"خروج"}
              href={`/`}
              icon={LogOutIcon}
              onClick={handleLogout}
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
