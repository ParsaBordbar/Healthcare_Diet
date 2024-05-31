// app/user/[user]/panel/main.tsx
"use client";
import CommentBox from "@/components/AdminComponents/CommentBox";
import useFetchPatientComments from "@/hooks/useFetchPatientComments/useFetchPatientComments";
import { FC } from "react";

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
      <h1>پیام‌های شما:</h1>
      <main className="grid grid-cols-2 ">
        {comments
          ? comments.map((comment) => (
              <CommentBox
              className="md:col-span-1 col-span-2"
                key={comment.receiver}
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

export default UserPanel;
