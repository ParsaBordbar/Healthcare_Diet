"use client";
import useFetchPatientComments from "@/hooks/useFetchPatientComments/useFetchPatientComments";
import DocumentIcon from "/public/svg/adminPanelSvgs/document.svg";
import CommentBox from "@/components/AdminComponents/CommentBox";
import MainButton from "@/components/MainButton";
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
                <div>
                  <CommentBox
                    className="col-span-full"
                    sender={"admin"}
                    body={
                      "سلام این رژیم شماست به صورت هفته به هفته رژیم جدید ارسال مبشه براتون"
                    }
                    receiver={"mohammad mosavat"}
                  />
                  <section className="grid grid-cols-3 gap-3">
                    <MainButton
                      className="bg-[var(--new-green)] p-2.5 col-span-1 !text-white"
                      value={"دانلود رژیم"}
                    />
                    <MainButton
                      className="bg-[var(--orange)] p-2.5 col-span-1 !text-white"
                      value={"دانلود رژیم مدیترانه ای"}
                    />
                    <MainButton
                      trasparent
                      className="p-2.5 col-span-1 !text-[var(--new-green)]"
                      value={"دانلود تغذیه"}
                    />
                  </section>
                </div>
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
