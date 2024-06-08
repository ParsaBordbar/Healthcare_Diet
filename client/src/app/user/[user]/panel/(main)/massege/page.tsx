"use client";
import CommentBox from "@/components/AdminComponents/CommentBox";
import useFetchPatientComments from "@/hooks/useFetchPatientComments/useFetchPatientComments";

const MassegesFromUser = ({ params }: { params: { user: string } }) => {
  const userID = params.user;
  const comments = useFetchPatientComments(userID);

  return (
    <main className="col-span-full gap-8 grid grid-cols-2 ">
      {comments.length > 0 ? (
        comments.map((comment) => {
          return (
            <CommentBox
              className="md:col-span-1 col-span-full"
              key={comment.createdAtJalali}
              sender={comment.sender}
              body={comment.body}
              files={comment.files}
              receiver={comment.receiver}
              createdAtJalali={comment.createdAtJalali}
            />
          );
        })
      ) : (
        <h1 className="text-2xl text-center">پیامی ندارید</h1>
      )}
    </main>
  );
};

export default MassegesFromUser;
