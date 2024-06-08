import { FC, memo } from "react";
import WelcomeUser from "@/components/WelcomeUser";
import CommentsToUser from "@/components/CommentsToUser";
interface UserPanelProps {
  params: {
    user: string;
  };
}

const UserPanel: FC<UserPanelProps> = ({ params }) => {
  const userID = params.user;
  console.log(userID);
  return (
    <>
      <CommentsToUser userID={userID} />
      <CommentsToUser userID={userID} />
    </>
  );
};

export default memo(UserPanel);
