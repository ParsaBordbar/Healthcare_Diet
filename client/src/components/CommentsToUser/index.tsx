"use client";
import useFetchPatientComments from "@/hooks/useFetchPatientComments/useFetchPatientComments";
import CommentBox from "../AdminComponents/CommentBox";
import CommentIcon from "/public/svg/adminPanelSvgs/messages.svg";

const CommentsToUser = ({ userID }: { userID: string }) => {
  const comments = useFetchPatientComments(userID);

  return (
    <main className="grid col-span-4 custom-scroll pl-6 grid-cols-1 ">
      <div className="col-span-full flex flex-col gap-6">
        <section className="flex items-center gap-2">
          <CommentIcon className="[&>path]:stroke-black" />
          <h1>جدیدترین پیام های دریافتی شما</h1>
        </section>
        {comments.length > 0
          ? comments.map((comment, index) => {
              if (index >= 3) return;
              return (
                <CommentBox
                  className="col-span-full"
                  key={comment.createdAtJalali}
                  sender={comment.sender}
                  body={comment.body}
                  receiver={comment.receiver}
                  createdAtJalali={comment.createdAtJalali}
                />
              );
            })
          : <h1 className="text-2xl text-center">پیامی ندارید</h1>}
      </div>
    </main>
  );
};
export default CommentsToUser;
