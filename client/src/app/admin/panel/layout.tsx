"use client";
import { ReactNode } from "react";
import LogOutIcon from "/public/svg/userPanelSvgs/LogOut.svg"
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
          valueFive="فرم رژیم مدیترانه ای پاسخ داده نشده"
          linkFive="/admin/panel/unvisited_diets"
          valueSix="پیام ها"
          linkSix="/admin/panel/comments"
          iconSix={FormIcon}
        />
        
        <div className="fixed md:flex top-0 lg:w-[25%] md:w-[25%] xl:w-[15%] right-0 bg-[var(--soft-blue)] hidden h-screen">
          <section className="w-full flex flex-col gap-6 py-4">
            <h1 className="text-[var(--dark-blue)] text-2xl font-semibold bg-custom-IslamicArt">
              {" "}
              مشاور تغذیه
            </h1>

            <ul className="flex flex-col rounded-lg h-screen py-4 px-3  gap-4">
              <SideBarItems
              className="lg:text-lg md:text-base"
                router={router}
                value={"پنل اصلی"}
                href={"/admin/panel"}
                icon={AdminPanelLogo}
              />
              <SideBarItems
              className="lg:text-lg md:text-base"
                router={router}
                value={"سوابق بیمارها"}
                href={"/admin/panel/patients"}
                icon={MedicalDocIcon}
              />
              <SideBarItems
              className="lg:text-lg md:text-base"
                router={router}
                value={"فرم های BMI"}
                href={"/admin/panel/bmi"}
                icon={FormIcon}
              />
              <SideBarItems
              className="lg:text-lg md:text-base"
                router={router}
                value={"فرم رژیم مدیترانه ای"}
                href={"/admin/panel/mediterranean"}
                icon={FormIcon}
              />
              <SideBarItems
              className="lg:text-lg md:text-base"
                router={router}
                value={"فرم مدیترانه ای پاسخ داده نشده"}
                href={"/admin/panel/unvisited_diets"}
                icon={FormIcon}
              />
              <SideBarItems
              className="lg:text-lg md:text-base"
              router={router}
              value={"خروج"}
              href={`/`}
              icon={LogOutIcon}
            />
            </ul>
          </section>
        </div>
        <main className="w-full mt-6 md:w-[75%] xl:w-[85%] lg:w-[75%] flex flex-col py-16 gap-10 px-4 lg:px-6 bg-white h-screen">
          <div className="">{children}</div>
        </main>
      </div>
    </>
  );
};

export default LayoutAdmin;
