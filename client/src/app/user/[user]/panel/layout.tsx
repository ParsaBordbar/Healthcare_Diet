"use client";
import { ReactNode, memo } from "react";
import HamburgerNavbar from "@/components/HamburgerMenu";
import HomeIcon from "/public/svg/userPanelSvgs/home-2.svg";
import DocumentIcon from "/public/svg/adminPanelSvgs/document.svg";
import PersonalIcon from "/public/svg/userPanelSvgs/personal.svg";
import LogOutIcon from "/public/svg/userPanelSvgs/LogOut.svg";
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
    localStorage.removeItem("user");
  };

  console.log("rendering layout of user panel");
  return (
    <>
      <div className="flex justify-end w-full top-0 z-40">
        <HamburgerNavbar
          userID={user}
          valueOne="خانه"
          iconOne={HomeIcon}
          iconThree={PersonalIcon}
          iconTwo={DocumentIcon}
          iconFive={DocumentIcon}
          iconFour={DocumentIcon}
          iconSix={DocumentIcon}
          valueTwo="رژیم ها"
          valueThree="پروفایل شخصی"
          valueFour="پیام ها"
          valueFive="برنامه ها"
          valueSix="مشاوره"
          linkOne={"/"}
          linkThree={`/user/${user}/panel`}
          linkFour={`/user/${user}/panel/massege`}
          linkFive={`/user/${user}/panel/plans`}
          linkTwo={`/user/${user}/panel/diets`}
          linkSix={`/`}
        />
        <div className="fixed hidden pb-6 px-2  top-0 right-0 h-screen bg-[var(--soft-blue)]  md:flex w-[25%] xl:w-[15%] lg:w-[20%]">
          {/* <Image
            src={"/svg/sideBarBanner.svg"}
            width={80}
            height={1}
            layout="fixed"
            className="object-cover hidden lg:inline rounded-2xl py-2 "
            alt={""}
          /> */}
          <ul className="flex flex-col w-full rounded-lg h-screen py-4 px-4 gap-4 ">
            <SideBarItems
              className="lg:text-lg md:text-base"
              router={router}
              value={"خانه"}
              href={`/`}
              icon={HomeIcon}
            />
            <SideBarItems
              className="lg:text-lg md:text-base"
              router={router}
              value={"پروفایل شخصی"}
              href={`/user/${user}/panel`}
              icon={PersonalIcon}
            />
            <SideBarItems
              className="lg:text-lg md:text-base"
              router={router}
              value={"رژیم ها"}
              href={`/user/${user}/panel/diets`}
              icon={DocumentIcon}
            />
            <SideBarItems
              className="lg:text-lg md:text-base"
              router={router}
              value={"برنامه های شما"}
              href={`/user/${user}/panel/plans`}
              icon={DocumentIcon}
            />
            <SideBarItems
              className="lg:text-lg md:text-base"
              router={router}
              value={"خروج"}
              href={`/`}
              icon={LogOutIcon}
              onClick={handleLogout}
            />
          </ul>
        </div>
        <main className="w-full md:w-[75%] lg:w-[80%] xl:w-[85%] sm:px-10 px-4 lg:px-6 py-16 bg-white">
          {children}
        </main>
      </div>
    </>
  );
};

export default memo(LayoutUser);
