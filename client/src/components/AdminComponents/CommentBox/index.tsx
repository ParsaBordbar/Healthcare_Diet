import { CommentType } from "@/types";
import React from "react";
import AttachmentIcon from "/public/svg/adminPanelSvgs/attachment-svgrepo-com.svg";
import DateSvg from "/public/svg/adminPanelSvgs/date-range-svgrepo-com.svg";
import Link from "next/link";
import useSpecificFetchBmi from "@/hooks/useFetchName/useFetchName";

const CommentBox = ({
    className,
  sender,
  body,
  receiver,
  createdAtJalali,
}: CommentType) => {
  const userData = useSpecificFetchBmi(receiver);

  // Convert newlines to <br> tags
  const formatBody = (text: string) => {
    return { __html: text.replace(/\n/g, "<br/>") };
  };

  return (
    <div className="flex flex-col ml-3 col-span-full bg-[var(--milky-white)]  gap-2 rounded-lg shadow-md">
      <div className="ps-4 py-3  flex items-start  min-[1320px]:gap-5 gap-2 pb-2 bg-[var(--new-green)] text-white rounded-lg rounded-br-none justify-between pe-4">
        <section className="flex items-start flex-col gap-2">
          <div className="flex gap-2 items-center">
            <p>ارسال کننده:</p>
            <p className="text-xl text-ellipsis overflow-hidden whitespace-nowrap">{sender} </p>
          </div>
          {receiver ? (
            <div className="flex gap-2 items-center">
              <p className="w-fit">دریافت کننده:</p>
              <p className="text-lg text-ellipsis overflow-hidden whitespace-nowrap">
                {userData?.name} {userData?.lastName}{" "}
              </p>
            </div>
          ) : null}
          <div className="flex gap-2 justify-start min-[1320px]:justify-center items-center flex-row">
            {" "}
            <DateSvg />
            {createdAtJalali}
          </div>
        </section>
        <Link href={`/admin/panel/patients/${receiver}`}>
          <AttachmentIcon width={24} />
        </Link>
      </div>
      <Link
        className="min-[1320px]:hidden inline-block"
        href={`/admin/panel/patients/${receiver}`}
      >
        <AttachmentIcon width={24} />
      </Link>
      <p
        className="p-5 w-full pb-12"
        dangerouslySetInnerHTML={formatBody(body)}
      />
    </div>
  );
};

export default CommentBox;
