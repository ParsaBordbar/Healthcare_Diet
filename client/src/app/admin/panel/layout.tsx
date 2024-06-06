"use client";
import { ReactNode } from "react";
import Link from "next/link";
import AdminPanelLogo from "/public/svg/adminPanelSvgs/Stethoscope.svg";
import FormIcon from "/public/svg/adminPanelSvgs/document.svg";
import MedicalDocIcon from "/public/svg/adminPanelSvgs/Medical-Documentation.svg";
import HamburgerNavbar from "@/components/HamburgerMenu";
import SideBarItems from "@/components/SidebarItems";
import { usePathname } from "next/navigation";

const LayoutAdmin = ({ children }: { children: ReactNode }) => {
  const router = usePathname();

  return (
    <>
      <div className=" flex justify-end w-full top-0 z-40">
        <HamburgerNavbar
          className="!bg-white !fixed !right-0 !py-6 !px-6 md:!hidden !w-full !inline-block"
          valueOne="خانه"
          valueTwo="پنل اصلی"
          linkOne={"/"}
          linkTwo={`/admin/panel`}
          valueThree="سوابق بیمارها"
          linkThree="/admin/panel/patients"
          valueFour="فرمBMI"
          linkFour="/admin/panel/bmi"
          valueFive="فرم های رژیم مدیترانه ای"
          linkFive="/admin/panel/mediterranean"
          valueSix="فرم های پاسخ داده نشده"
          linkSix="/admin/panel/unvisited_diets"
        />
        <div className="fixed w-[25%] lg:w-1/6 md:flex top-0 right-0 bg-[var(--new-green)] gap-16 hidden flex-col h-screen pb-4">
          <div className="flex items-center pb-2 rounded-lg justify-around bg-IslamicArt h-64 bg-cover bg-center"></div>
          <h1 className="text-white text-2xl font-semibold bg-custom-IslamicArt flex justify-center">
            {" "}
            مشاور تغذیه
          </h1>

          <ul className="flex flex-col rounded-lg h-screen pb-4 ps-4 gap-4">
            <SideBarItems
              router={router}
              value={"پنل اصلی"}
              href={"/admin/panel/"}
              icon={AdminPanelLogo}
            />
            <SideBarItems
              router={router}
              value={"سوابق بیمارها"}
              href={"/admin/panel/patients"}
              icon={MedicalDocIcon}
            />
            <SideBarItems
              router={router}
              value={"فرم های BMI"}
              href={"/admin/panel/bmi"}
              icon={FormIcon}
            />
            <SideBarItems
              router={router}
              value={"فرم های رژیم مدیترانه ای"}
              href={"/admin/panel/mediterranean"}
              icon={FormIcon}
            />
            <SideBarItems
              router={router}
              value={"فرم های پاسخ داده نشده"}
              href={"/admin/panel/unvisited_diets"}
              icon={FormIcon}
            />
          </ul>
        </div>
        <main className="w-full mt-6 md:w-[75%] lg:w-5/6 flex flex-col py-16 gap-10 px-16 bg-white   h-screen">
          <div className="">{children}</div>
        </main>
      </div>
    </>
  );
};

export default LayoutAdmin;
