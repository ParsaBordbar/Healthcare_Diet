"use client";
import useFetchPatientComments from "@/hooks/useFetchPatientComments/useFetchPatientComments";
import DocumentIcon from "/public/svg/adminPanelSvgs/document.svg";
import CommentBox from "@/components/AdminComponents/CommentBox";
const PlansPage = ({ params }: { params: { user: string } }) => {
  const userID = params.user;
  const comments = useFetchPatientComments(userID);

  return (
    <div>
      <section className="flex items-center gap-2">
        <DocumentIcon className="[&>path]:stroke-black [&>path]:stroke-2" />
        <h1 className="text-3xl">برنامه های شما</h1>
      </section>
      <main>
        <section>
          {comments.length > 0 ? (
            comments.map((comment) => {
              if (comment.files && !(comment.files?.length > 0)) return;
              return (
                <CommentBox
                  className="col-span-full"
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
        </section>
      </main>
    </div>
  );
};

export default PlansPage;
