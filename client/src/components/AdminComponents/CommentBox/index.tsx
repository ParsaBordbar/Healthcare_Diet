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
  isDoctor,
}: CommentType) => {
  const userData = useSpecificFetchBmi(receiver);

  // Convert newlines to <br> tags
  const formatBody = (text: string) => {
    return { __html: text.replace(/\n/g, "<br/>") };
  };

  return (
    <div className="flex flex-col ml-3 col-span-full bg-[var(--milky-white)]  gap-2 rounded-lg shadow-md my-6">
      <div className="ps-4 py-3 flex items-start  min-[1320px]:gap-5 gap-2 pb-2 bg-[var(--new-green)] text-white rounded-lg rounded-br-none justify-between pe-4">
        <section className="flex items-center xl:flex-row lg:flex-col lg:gap-1 sm:flex-row gap-4 justify-center flex-col">
          <div className="flex flex-col xl:flex-row xl:gap-2 lg:flex-col">
            <div className="flex gap-2 items-center">
              <p className="md:text-[1rem] 2xl:text-base text-xs">ارسال کننده:</p>
              <p className="md:text-[1rem] 2xl:text-base text-xs text-ellipsis overflow-hidden whitespace-nowrap">{sender} </p>
            </div>
            {receiver ? (
              <div className="flex gap-2 items-center">
                <p className="w-fit md:text-[1rem] 2xl:text-base text-xs">دریافت کننده:</p>
                <p className="md:text-[1rem] 2xl:text-base text-xs text-ellipsis overflow-hidden whitespace-nowrap">
                  {userData?.name} {userData?.lastName}{" "}
                </p>
              </div>
            ) : null}
          </div>
          <div className="flex gap-2 px-3 min-[1320px]:justify-center items-center flex-row">
            {" "}
            <div className="flex sm:flex-row gap-4">
              <div className="flex flex-row justify-center items-center gap-2">
                <DateSvg className="sm:flex hidden"width={24} />
                <p className="pt-1.5 md:text-sm 2xl:text-base text-xs">{createdAtJalali}</p>
              </div>
              {
                isDoctor? <Link className="" href={`/admin/panel/patients/${receiver}`}>
                <AttachmentIcon className="w-5 md:w-full"width={24} />
              </Link> : null
              }
            </div>
          </div>
        </section>
      </div>
      <p
        className="p-5 w-full pb-12  md:text-sm 2xl:text-base text-xs"
        dangerouslySetInnerHTML={formatBody(body)}
      />
    </div>
  );
};

export default CommentBox;
