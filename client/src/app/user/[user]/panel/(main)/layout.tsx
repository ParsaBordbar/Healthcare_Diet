"use client";
import QuickLinkBox from "@/components/AdminComponents/QuickLinkBox";
import WelcomeUser from "@/components/WelcomeUser";
import useFetchBmi from "@/hooks/useFetchBmi";
import useFetchComments from "@/hooks/useFetchComments/useFetchComments";
import useFetchMediterranean from "@/hooks/useFetchMediterranean";
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
      <div className="grid min-[1320px]:grid-cols-8 grid-cols-7 gap-8">
        <ul className="col-span-full grid grid-cols-4 gap-8">
          <li>
            <QuickLinkBox
              tittle={"پیام های دریافتی"}
              desc={"لیست تمام پیام های دریافتی شما"}
              url={`/user/${userID}/panel/massege`}
              counter={comments.length}
            />
          </li>
          <li>
            <QuickLinkBox
              tittle={"پبام های ارسالی"}
              desc={"لیست تمام پیام های ارسالی شما"}
              url={`/user/${userID}/panel/diets`}
              counter={comments.length}
            />
          </li>
          <li>
            <QuickLinkBox
              tittle={"رژیم ها"}
              desc={"لیست تمام رژیم های شما"}
              url={`/user/${userID}/panel/plans`}
              counter={comments.length}
            />
          </li>
          <li>
            <QuickLinkBox
              tittle={"پیام ها"}
              desc={"لیست تمام پیام های دریافتی"}
              url={`/user/${userID}/panel/massege`}
              counter={comments.length}
            />
          </li>
        </ul>
        <WelcomeUser userID={userID} />
        {children}
      </div>
    </>
  );
};

export default memo(LayoutMainPageUser);
