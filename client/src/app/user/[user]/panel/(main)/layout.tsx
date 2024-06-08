import WelcomeUser from "@/components/WelcomeUser";
import { ReactNode, memo, useEffect } from "react";

interface LayoutMainPageUserProps {
  children: ReactNode;
  params: {
    user: string;
  };
}

const LayoutMainPageUser = ({ children, params }: LayoutMainPageUserProps) => {
  const userID = params.user;
  return (
    <>
      <div className="grid min-[1320px]:grid-cols-8 grid-cols-7 gap-8">
        <WelcomeUser userID={userID} />
        {children}
      </div>
    </>
  );
};

export default memo(LayoutMainPageUser);
