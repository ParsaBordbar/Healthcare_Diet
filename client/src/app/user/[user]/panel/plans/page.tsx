"use client";
import useDownloader from "react-use-downloader";
import useFetchPatientComments from "@/hooks/useFetchPatientComments/useFetchPatientComments";
import DocumentIcon from "/public/svg/adminPanelSvgs/document.svg";
import CommentBox from "@/components/AdminComponents/CommentBox";
import MainButton from "@/components/MainButton";
import useSpecificFetchBmi from "@/hooks/useFetchName/useFetchName";
import ModalMediterraneanForm from "@/components/ModalMediterraneanForm";
import { useState } from "react";
import DietStatus from "@/components/DietStatus";

const PlansPage = ({ params }: { params: { user: string } }) => {
  const userID = params.user;
  const comments = useFetchPatientComments(userID);
  const [click, isClick] = useState<boolean>(false);
  const [show, isShow] = useState<boolean>(false);
  const [dateComment, isDateComment] = useState<string | undefined>("");
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  // async function DownloadFile(file: any) {
  //   console.log(file);
  //   const anchor = document.createElement("a");
  //   anchor.href = file;
  //   anchor.download = file;
  //   anchor.click();
  // }
  // const data = useSpecificFetchBmi(userID);
  // useEffect(() => {
  //   console.log(click);
  //   console.log(data?.phoneNumber, params.user);
  //   if (params.user != data?.phoneNumber) {
  //     isShow(false);
  //     console.log("flase");
  //   } else {
  //     isShow(true);
  //   }
  // }, [click]);
  return (
    <div>
      <DietStatus phoneNumber={params.user} />
      <ModalMediterraneanForm
        commentMoment={dateComment}
        userPhoneNumber={userID}
        isShow={isShow}
        show={show}
        className={""}
      />
      <section className="flex items-center gap-2">
        <DocumentIcon className="[&>path]:stroke-black" />
        <h1 className="text-3xl">برنامه های شما</h1>
      </section>
      <main>
        <section className="flex flex-col-reverse">
          {comments.length > 0 ? (
            comments.map((comment) => {
              console.log(comment.files);
              if (comment.files && !(comment.files?.length > 0)) return;
              return (
                <div key={comment._id}>
                  <CommentBox 
                    _id={comment._id}
                    className="col-span-full"
                    sender={comment.sender}
                    body={comment.body}
                    files={comment.files}
                    createdAtJalali={comment.createdAtJalali}
                    createdAtGregorian={comment.createdAtGregorian}
                  />
                  <section className="grid grid-cols-3 gap-3">
                    <MainButton
                      onClick={() => {
                        if (comment.files) {
                          console.log(comment.files, "this our files");
                          download(
                            `${process.env.DOMAIN_FILES}${comment.files[0].path}`,
                            "رژیم مدیترانه ای.png"
                          );
                        }
                      }}
                      className="bg-[var(--new-green)] p-2.5 col-span-1 !text-white"
                      value={"دانلود رژیم"}
                    />
                    <MainButton
                      onClick={() => {
                        // if (comment.files) {
                        //   download(
                        //     `http://localhost:8080/${comment.files[0].path}`,
                        //     "رژیم مدیترانه ای.png"
                        //   );
                        // }
                        isDateComment(comment.createdAtJalali);
                        isShow(true);
                      }}
                      className="bg-[var(--orange)] p-2.5 col-span-1 !text-white"
                      value={"مشاهده رژیم مدیترانه ای"}
                    />
                    <MainButton
                      onClick={() => {
                        if (comment.files) {
                          download(
                            `${process.env.DOMAIN_FILES}${comment.files[0].path}`,
                            "رژیم مدیترانه ای.png"
                          );
                        }
                      }}
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
