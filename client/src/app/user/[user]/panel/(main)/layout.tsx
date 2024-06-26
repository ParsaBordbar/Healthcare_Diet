"use client";
import MediterraneanForm from "@/components/AdminComponents/MediterraneanForm";
import QuickLinkBox from "@/components/AdminComponents/QuickLinkBox";
import Calendar from "@/components/Calendar";
import UserInfo from "@/components/WelcomeUser";
import WelcomeUser from "@/components/WelcomeUser";
import useFetchBmi from "@/hooks/useFetchBmi";
import useFetchComments from "@/hooks/useFetchComments/useFetchComments";
import useFetchMediterranean from "@/hooks/useFetchMediterranean";
import useFetchOneMediterranean from "@/hooks/useFetchOneMediterranean";
import useFetchPatientComments from "@/hooks/useFetchPatientComments/useFetchPatientComments";
import { ReactNode, memo, useEffect } from "react";

interface LayoutMainPageUserProps {
  children: ReactNode;
  params: {
    user: string;
  };
}

const LayoutMainPageUser = ({ children, params }: LayoutMainPageUserProps) => {
  const mediterraneanForms = useFetchMediterranean("/checking/isChecked");
  const unvisitedMediterraneanFormsCount = mediterraneanForms.length;
  const bmiForms = useFetchBmi();
  const bmiCount = bmiForms.length;
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
            <Calendar />
          </div>
          <div className="col-span-3">
              <h2> برنامه‌ی فعال شما:</h2>
              {/* {
                mediterraneanForms.slice(-1).map((form): React.ReactNode => {
                  return(

                   />)
                })
              } */}
                
          </div>        
          <div className="col-span-3">
            {children}
          </div>
          <div className="col-span-5 flex justify-start items-start">
            <h2> پیشرفت شما:</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(LayoutMainPageUser);
