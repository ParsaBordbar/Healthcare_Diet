import { FC, memo } from "react";
import WelcomeUser from "@/components/WelcomeUser";
import CommentsUser from "@/components/CommentsUser";
interface UserPanelProps {
  params: {
    user: string;
  };
}

const UserPanel: FC<UserPanelProps> = ({ params }) => {
  const userID = params.user;
  console.log(userID);
  return (
    <section className="grid min-[1320px]:grid-cols-8 grid-cols-7 gap-8">
      <WelcomeUser userID={userID} />
      <CommentsUser userID={userID}/>
    </section>
  );
};

export default memo(UserPanel);
