"use client";
import useFetchPatientComments from "@/hooks/useFetchPatientComments/useFetchPatientComments";
import CommentBox from "../AdminComponents/CommentBox";
import CommentIcon from "/public/svg/adminPanelSvgs/messages.svg";
import Link from "next/link";
import Calendar from "../Calendar";

const CommentsToUser = ({ userID }: { userID: string }) => {
  const comments = useFetchPatientComments(userID);

  return (
    <main className="grid col-span-full lg:col-span-4   grid-cols-1 ">
      <div className="col-span-full flex flex-col gap-6">
        <section className="flex sm:flex-row flex-col  min-[950px]:items-center gap-2 justify-between">
          <div className="flex gap-2  items-center">
            <CommentIcon className="[&>path]:stroke-black" />
            <h1>جدیدترین پیام های دریافتی شما</h1>
          </div>
          <div className="flex gap-2  items-center">
            <Calendar />
          </div>
        </section>
        <div
          className={`flex ${
            comments.length > 0 && "custom-scroll-y max-h-[590px]"
          } pl-6 flex-col`}
        >
          {comments.length > 0 ? (
            comments
              .slice(-3)
              .reverse()
              .map((data): React.ReactNode => {
                return (
                  <CommentBox
                    className="w-full"
                    _id=""
                    key={data.receiver}
                    sender={data.sender}
                    body={data.body}
                    receiver={data.receiver}
                    createdAtJalali={data.createdAtJalali}
                    files={data.files}
                    isDoctor={false}
                  />
                );
              })
          ) : (
            <h2 className="text-center text-xl md:text-2xl lg:text-3xl">
              پیامی ندارید
            </h2>
          )}
        </div>
      </div>
      {comments.length > 0 && (
        <Link
          className="mt-2 text-[var(--secondary-blue)] text-lg"
          href={`/user/${userID}/panel/massege`}
        >
          دیدن همه ی پیام ها
        </Link>
      )}
    </main>
  );
};
export default CommentsToUser;
