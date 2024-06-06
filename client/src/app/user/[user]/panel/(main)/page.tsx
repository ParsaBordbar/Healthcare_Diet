// app/user/[user]/panel/main.tsx
"use client";
import CommentBox from "@/components/AdminComponents/CommentBox";
import useFetchPatientComments from "@/hooks/useFetchPatientComments/useFetchPatientComments";
import { FC, memo } from "react";
import MassegeIcon from "/public/svg/adminPanelSvgs/messages.svg";
interface UserPanelProps {
  params: {
    user: string;
  };
}

const UserPanel: FC<UserPanelProps> = ({ params }) => {
  const userID = params.user;
  console.log(userID);
  const comments = useFetchPatientComments(userID);

  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <MassegeIcon className='[&>path]:stroke-black [&>path]:stroke-2'/>
        <h1 className="text-3xl">پیام‌های شما:</h1>
      </div>
      <main className="grid grid-cols-2 gap-8">
        {comments
          ? comments.map((comment) => (
              <CommentBox
                className="md:col-span-1 col-span-2"
                key={comment.createdAtJalali}
                sender={comment.sender}
                body={comment.body}
                receiver={comment.receiver}
                createdAtJalali={comment.createdAtJalali}
              />
            ))
          : null}
      </main>
    </section>
  );
};

export default memo(UserPanel);
