import { FC, memo } from "react";
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
    </>
  );
};

export default memo(UserPanel);
