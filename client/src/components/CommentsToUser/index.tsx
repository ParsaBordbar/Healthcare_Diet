"use client";
import useFetchPatientComments from "@/hooks/useFetchPatientComments/useFetchPatientComments";
import CommentBox from "../AdminComponents/CommentBox";
import CommentIcon from "/public/svg/adminPanelSvgs/messages.svg";
import Link from "next/link";

const CommentsToUser = ({ userID }: { userID: string }) => {
  const comments = useFetchPatientComments(userID);

  return (
    <main className="grid col-span-full lg:col-span-4 custom-scroll pl-6 grid-cols-1 ">
      <div className="col-span-full flex flex-col gap-6">
        <section className="flex items-center gap-2">
          <CommentIcon className="[&>path]:stroke-black" />
          <h1>جدیدترین پیام های دریافتی شما</h1>
        </section>
            {comments? comments.slice(-3).map((data): React.ReactNode => {
              return <CommentBox className=' min-[1320px]:w-[96%] w-11/12' _id="" key={data.receiver} sender={data.sender}body={data.body} receiver={data.receiver} createdAtJalali={data.createdAtJalali} isDoctor={true}/>
              }): <h2>پیامی ندارید</h2>
            }
      </div>
      <Link
        className="mt-2 text-[var(--soft-blue)] text-lg"
        href={`/user/${userID}/panel/massege`}
      >
        دیدن همه ی پیام ها
      </Link>
    </main>
  );
};
export default CommentsToUser;
