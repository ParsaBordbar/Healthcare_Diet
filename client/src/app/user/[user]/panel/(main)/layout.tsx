'use client'
import QuickLinkBox from "@/components/AdminComponents/QuickLinkBox";
import DietStatus from "@/components/DietStatus";
import UserInfo from "@/components/WelcomeUser";
import useFetchPatientComments from "@/hooks/useFetchPatientComments/useFetchPatientComments";
import Link from "next/link";
import { ReactNode, memo } from "react";

interface LayoutMainPageUserProps {
  children: ReactNode;
  params: {
    user: string;
  };
}

const LayoutMainPageUser = ({ children, params }: LayoutMainPageUserProps) => {
  const userID = params.user;
  const comments = useFetchPatientComments(userID);

  return (
    <>
      <div className="grid grid-cols-8 gap-8">
        <ul className="col-span-full grid grid-cols-4 gap-8">
          <li className="col-span-full md:col-span-2 lg:col-span-1">
            <QuickLinkBox
              tittle={"پیام های شما"}
              desc={"پیام‌های شما و مشاورین تغذیه شما"}
              url={`/user/${userID}/panel/massege`}
              counter={comments.length}
            />
          </li>
          <li className="col-span-full md:col-span-2 lg:col-span-1">
            <QuickLinkBox
              tittle={"رژیم ها"}
              desc={"لیست تمام رژیم های شما"}
              url={`/user/${userID}/panel/plans`}
              counter={comments.length}
            />
          </li>
          <li className="col-span-full md:col-span-2 lg:col-span-1">
            <QuickLinkBox
              tittle={"برنامه‌ها"}
              desc={"تمام فعالیت‌ها و برنامه‌های شما "}
              url={`/user/${userID}/panel/massege`}
              counter={comments.length}
            />
          </li>
          <li className="col-span-full md:col-span-2 lg:col-span-1">
            <QuickLinkBox
              tittle={"مشاوره"}
              desc={"نیاز به راهنمایی دارید؟  با ما ارتباط برقرار کنید"}
              url={`/user/${userID}/panel/massege`}
              counter={comments.length}
            />
          </li>
        </ul>
        <div className="col-span-full grid grid-cols-8 gap-x-28 mt-4">
          <div className="col-span-2 flex flex-col gap-6">
            <UserInfo userID={userID} />
            <DietStatus phoneNumber={params.user} />
            <Link
              className=" text-[var(--secondary-blue)] text-lg"
              href={``}
            >
              تمام برنامه‌های شما
            </Link>
          </div>
          <div className="col-span-6">{children}</div>
          
        </div>
      </div>
    </>
  );
};

export default memo(LayoutMainPageUser);