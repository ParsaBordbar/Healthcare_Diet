// app/user/[user]/panel/main.tsx
"use client"
import CommentBox from '@/components/AdminComponents/CommentBox';
import useFetchPatientComments from '@/hooks/useFetchPatientComments/useFetchPatientComments';
import { FC } from 'react';

interface UserPanelProps {
  params: {
    user: string;
  };
}

const UserPanel: FC<UserPanelProps> = ({ params }) => {
  const userID = params.user;
  console.log(userID);
  const comments = useFetchPatientComments(userID)

  return (
    <section>
      <h1>پیام‌های شما:</h1>
      {comments ? comments.map((comment) => 
        <CommentBox key={comment.receiver} sender={comment.sender} body={comment.body} receiver={comment.receiver} createdAtJalali={comment.createdAtJalali} /> ) :null}
    </section>
  );
};

export default UserPanel;
