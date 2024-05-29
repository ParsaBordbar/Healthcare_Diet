// "use client";
import { ReactNode } from "react";
import Link from "next/link";
import AdminPanelLogo from '/public/svg/adminPanelSvgs/Stethoscope.svg';
import FormIcon from '/public/svg/adminPanelSvgs/Form.svg';
import MedicalDocIcon from '/public/svg/adminPanelSvgs/Medical-Documentation.svg'

const LayoutAdmin = ({ children }: { children: ReactNode }) => {

  return (
    <>
      <div className="sticky flex justify-end w-full top-0 z-40">
        <div className="fixed top-0 right-0 bg-[var(--panel-blue)] gap-16 flex flex-col h-screen w-1/6 pb-4">
          <div className="flex items-center pb-2 rounded-lg justify-around bg-IslamicArt h-64 bg-cover bg-center">
          </div>
          <h1 className="text-white text-2xl font-semibold bg-custom-IslamicArt flex justify-center"> مشاور تغذیه</h1>

          
          <ul className="flex flex-col rounded-lg h-screen pb-4 ps-4 gap-4">

            <Link
              href={"/admin/panel/"}
              className="hover:text-[var(--rating-color)] text-xl cursor-pointer hover:text-black text-white hover:bg-white hover:bg-full ease-in-out transition-all duration-150 p-4 rounded-s-md"
            >
              <li className="flex items-center gap-3"> <AdminPanelLogo />پنل اصلی</li>
            </Link>
            <Link
              href={"/admin/panel/patients/"}
              className="hover:text-[var(--rating-color)] text-xl group cursor-pointer hover:text-black text-white hover:bg-white hover:bg-full ease-in-out transition-all duration-150 p-4 rounded-s-md"
            >
              <li className="flex gap-2 items-center justify-start"> <MedicalDocIcon/>سوابق بیمارها  </li>
            </Link>
            <Link
              href={"/admin/panel/bmi/"}
              className="hover:text-[var(--rating-color)] text-xl cursor-pointer hover:text-black text-white hover:bg-white hover:bg-full ease-in-out transition-all duration-150 p-4 rounded-s-md"
            >
              <li className="flex gap-2 items-center"><FormIcon/> فرم‌های BMI</li>
            </Link>
            <Link
              href={"/admin/panel/mediterranean/"}
              className="hover:text-[var(--rating-color)] text-xl cursor-pointer hover:text-black text-white hover:bg-white hover:bg-full ease-in-out transition-all duration-150 p-4 rounded-s-md"
            >
              <li className="flex gap-2 items-center justify-start"><FormIcon/>فرم‌های رژیم مدیترانه‌ای</li>
            </Link>

            <Link
              href={"/admin/panel/mediterranean/"}
              className="hover:text-[var(--rating-color)] text-xl cursor-pointer hover:text-black text-white hover:bg-white hover:bg-full ease-in-out transition-all duration-150 p-4 rounded-s-md"
            >
              <li className="flex gap-2 items-center justify-start"><FormIcon/>فرم‌های پاسخ داده نشده</li>
            </Link>
          </ul>
        </div>
        <main className="w-5/6 p-28 bg-white">
          <div className="">{children}</div>
        </main>
      </div>
    </>
  );
};

export default LayoutAdmin;
