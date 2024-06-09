"use client";
import useFetchPatientComments from "@/hooks/useFetchPatientComments/useFetchPatientComments";
import DocumentIcon from "/public/svg/adminPanelSvgs/document.svg";
import CommentBox from "@/components/AdminComponents/CommentBox";
import MainButton from "@/components/MainButton";
const PlansPage = ({ params }: { params: { user: string } }) => {
  const userID = params.user;
  const comments = useFetchPatientComments(userID);
  async function DownloadFile(file: any) {
    console.log(file);
    const anchor = document.createElement("a");
    anchor.href = `http://localhost:8080/uploads/${file.filename} `;
    anchor.download = file.originalName;
    anchor.click();
  }
  return (
    <div>
      <section className="flex items-center gap-2">
        <DocumentIcon className="[&>path]:stroke-black [&>path]:stroke-2" />
        <h1 className="text-3xl">برنامه های شما</h1>
        <img className="w-10 h-10" src="/1717966653661-105346677.png" alt="" />
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
                    sender={comment.sender}
                    body={comment.body}
                    receiver={comment.receiver}
                    files={comment.files}
                    createdAtJalali={comment.createdAtJalali}
                    createdAtGregorian={comment.createdAtGregorian}
                  />
                  <section className="grid grid-cols-3 gap-3">
                    <MainButton
                      // onClick={() => DownloadFile(comment.files)}
                      className="bg-[var(--new-green)] p-2.5 col-span-1 !text-white"
                      value={"دانلود رژیم"}
                    />
                    <MainButton
                      // onClick={() => DownloadFile(comment.files)}
                      className="bg-[var(--orange)] p-2.5 col-span-1 !text-white"
                      value={"دانلود رژیم مدیترانه ای"}
                    />
                    <MainButton
                      // onClick={() => DownloadFile(comment.files)}
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
