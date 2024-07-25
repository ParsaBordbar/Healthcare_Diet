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
import useFetchOneMediterranean from "@/hooks/useFetchOneMediterranean";

const PlansPage = ({ params }: { params: { user: string } }) => {
  const userID = params.user;
  const comments = useFetchPatientComments(userID);
  const [click, isClick] = useState<boolean>(false);
  const [show, isShow] = useState<boolean>(false);
  const [dateComment, isDateComment] = useState<string | undefined>("");
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const isDiet = useFetchOneMediterranean(params.user)

  return (
    <div>
      {isDiet.length > 0 ?(
        <DietStatus direction="md:!flex-row !flex-col mb-10" phoneNumber={params.user} />
      ): null}
      <ModalMediterraneanForm
        commentMoment={dateComment}
        userPhoneNumber={userID}
        isShow={isShow}
        show={show}
        className={""}
      />
      <section className="flex items-center gap-2">
        <DocumentIcon className="[&>path]:stroke-black" />
        <h1 className="text-xl md:text-2xl lg:text-3xl">برنامه های شما</h1>
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
                  <section className="grid grid-cols-6 gap-3">
                    <MainButton
                      onClick={() => {
                        if (comment.files) {
                          console.log(comment.files, "this our files");
                          download(
                            `${process.env.DOMAIN_FILES}${comment.files[0].path}`,
                            "رژیم.png"
                          );
                        }
                      }}
                      className="!py-1.5  md:!py-3 md:p-2.5 bg-[var(--new-green)] !px-1 !text-base md:text-lg col-span-full md:col-span-2 !text-white"
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
                      className="!py-1.5  md:!py-3 md:p-2.5 bg-[var(--orange)] !px-1 !text-base md:text-lg col-span-3 md:col-span-2 !text-white"
                      value={"رژیم مدیترانه ای"}
                    />
                    <MainButton
                      onClick={() => {
                        if (comment.files) {
                          console.log(
                            process.env.DOMAIN_FILES + comment.files[0].path
                          );
                          download(
                            `${process.env.DOMAIN_FILES}uploads/diet.pdf`,
                            "diet.pdf"
                          );
                        }
                      }}
                      trasparent
                      className="!py-1.5  md:!py-3 md:px-2.5 col-span-3  md:col-span-2 !text-base md:text-lg !text-[var(--new-green)]"
                      value={" واحدهای میوه  و سبزیجات "}
                    />
                  </section>
                </div>
              );
            })
          ) : (
            <h1 className="text-xl md:text-2xl lg:text-3xl text-center">هنوز برنامه‌ای ندارید</h1>
          )}
        </section>
      </main>
    </div>
  );
};

export default PlansPage;
