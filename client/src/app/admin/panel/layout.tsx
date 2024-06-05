// "use client";
import { ReactNode } from "react";
import Link from "next/link";
import AdminPanelLogo from "/public/svg/adminPanelSvgs/Stethoscope.svg";
import FormIcon from "/public/svg/adminPanelSvgs/document.svg";
import MedicalDocIcon from "/public/svg/adminPanelSvgs/Medical-Documentation.svg";
import HamburgerNavbar from "@/components/HamburgerMenu";

const LayoutAdmin = ({ children }: { children: ReactNode }) => {
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
            <Link
              href={"/admin/panel/"}
              className="group text-xl cursor-pointer hover:bg-white hover:bg-full ease-in-out transition-all duration-150 p-4 rounded-s-md"
            >
              <li className="flex items-center gap-3 text-white group-hover:text-[var(--new-green)]">
                {" "}
                <AdminPanelLogo className="[&>path]:group-hover:fill-[var(--new-green)] " />
                پنل اصلی
              </li>
            </Link>
            <Link
              href={"/admin/panel/patients/"}
              className=" text-xl group cursor-p-white hover:bg-white hover:bg-full ease-in-out transition-all duration-150 p-4 rounded-s-md"
            >
              <li className="flex gap-2 items-center text-white group-hover:text-[var(--new-green)] justify-start">
                {" "}
                <MedicalDocIcon className="[&>path]:group-hover:stroke-[var(--new-green)]" />
                سوابق بیمارها{" "}
              </li>
            </Link>
            <Link
              href={"/admin/panel/bmi/"}
              className="group text-xl cursor-pointer hover:bg-white hover:bg-full ease-in-out transition-all duration-150 p-4 rounded-s-md"
            >
              <li className="flex gap-2 items-center text-white group-hover:text-[var(--new-green)]">
                <FormIcon className="[&>path]:stroke-white [&>path]:stroke-2 [&>path]:group-hover:stroke-[var(--new-green)]" />{" "}
                فرم‌های BMI
              </li>
            </Link>
            <Link
              href={"/admin/panel/mediterranean/"}
              className="group text-xl cursor-pointer hover:bg-white hover:bg-full ease-in-out transition-all duration-150 p-4 rounded-s-md"
            >
              <li className="flex gap-2 items-center text-white group-hover:text-[var(--new-green)] justify-start">
                <FormIcon className="[&>path]:stroke-white [&>path]:stroke-2 [&>path]:group-hover:stroke-[var(--new-green)]" />
                فرم‌های رژیم مدیترانه‌ای
              </li>
            </Link>

            <Link
              href={"/admin/panel/unvisited_diets"}
              className="group text-xl cursor-pointer hover:bg-white hover:bg-full ease-in-out transition-all duration-150 p-4 rounded-s-md"
            >
              <li className="flex gap-2 items-center text-white group-hover:text-[var(--new-green)] justify-start">
                <FormIcon className="[&>path]:stroke-white [&>path]:stroke-2 [&>path]:group-hover:stroke-[var(--new-green)]" />
                فرم‌های پاسخ داده نشده
              </li>
            </Link>
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
