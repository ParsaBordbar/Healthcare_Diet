"use client";
import { ReactNode } from "react";
import LogOutIcon from "/public/svg/userPanelSvgs/LogOut.svg"
import AdminPanelLogo from "/public/svg/adminPanelSvgs/Stethoscope.svg";
import FormIcon from "/public/svg/adminPanelSvgs/document.svg";
import MedicalDocIcon from "/public/svg/adminPanelSvgs/Medical-Documentation.svg";
import HamburgerNavbar from "@/components/HamburgerMenu";
import SideBarItems from "@/components/SidebarItems";
import { usePathname } from "next/navigation";
import Image from "next/image";
import HomeIcon from "/public/svg/userPanelSvgs/home-2.svg";

const LayoutAdmin = ({ children }: { children: ReactNode }) => {
  const router = usePathname();
  const handleLogout = () => {
    localStorage.removeItem('admin');
  }
  return (
    <>
      <div className=" flex justify-end w-full top-0 z-40">
        <HamburgerNavbar
          valueOne="پنل اصلی"
          iconOne={AdminPanelLogo}
          iconTwo={MedicalDocIcon}
          iconThree={FormIcon}
          iconFour={FormIcon}
          iconFive={FormIcon}
          valueTwo="سوابق بیمار"
          linkOne={"/admin/panel"}
          linkTwo={`/admin/panel/patients`}
          valueThree="فرم BMI"
          linkThree="/admin/panel/bmi"
          valueFour="فرم رژیم مدیترانه ای"
          linkFour="/admin/panel/mediterranean"
          valueFive="فرم رژیم مدیترانه ای وزیت نشده"
          linkFive="/admin/panel/unvisited_diets"
          valueSix="پبام ها"
          linkSix="/admin/panel/comments"
          iconSix={FormIcon}
        />
        
        <div className="fixed md:flex top-0 right-0 bg-[var(--soft-blue)] hidden h-screen">
        <Image
            src={"/svg/userPanelSvgs/sideBarBanner.svg"}
            width={80}
            height={1}
            layout="fixed"
            className="object-cover h-full w-[38.33333%]"
            alt={""}
          />
          <section className="w-full flex flex-col gap-6 py-4">
            <h1 className="text-[var(--dark-blue)] text-2xl font-semibold bg-custom-IslamicArt">
              {" "}
              مشاور تغذیه
            </h1>

            <ul className="flex flex-col rounded-lg h-screen pb-4  gap-4">
              <SideBarItems
                router={router}
                value={"پنل اصلی"}
                href={"/admin/panel"}
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
              <SideBarItems
              router={router}
              value={"خروج"}
              href={`/`}
              icon={LogOutIcon}
              onClick={handleLogout}
            />
            </ul>
          </section>
        </div>
        <main className="w-full mt-6 md:w-[75%] lg:w-[80%] flex flex-col py-16 gap-10 px-16 bg-white h-screen">
          <div className="">{children}</div>
        </main>
      </div>
    </>
  );
};

export default LayoutAdmin;
