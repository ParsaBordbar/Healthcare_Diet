import { BmiType, CommentType, FileType } from "@/types";
import React, { useEffect, useState } from "react";
import AttachmentIcon from "/public/svg/adminPanelSvgs/attachment-svgrepo-com.svg";
import DateSvg from "/public/svg/adminPanelSvgs/calendar.svg";
import Link from "next/link";
import useSpecificFetchBmi from "@/hooks/useFetchName/useFetchName";
import PatientPageIcon from "/public/svg/User.svg";
import useDownloader from "react-use-downloader";

const CommentBox = ({
  className,
  sender,
  body,
  receiver,
  createdAtJalali,
  isDoctor,
  files = [],
}: CommentType) => {
  const [userData, setUserData] = useState<BmiType>();
  const fetchedData = useSpecificFetchBmi(receiver);

  
  useEffect(() => {
    if (fetchedData) {
      setUserData(fetchedData);
    }
  }, [fetchedData]);

  // Convert newlines to <br> tags
  const formatBody = (text: string) => {
    return { __html: text.replace(/\n/g, "<br/>") };
  };

  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  return (
    <div
      className={`flex ${className} flex-col col-span-full bg-[var(--milky-white)] gap-2 rounded-lg shadow-md my-3`}
    >
      <div className="ps-4 py-3 flex items-start min-[1320px]:gap-5 gap-2 pb-2 bg-[var(--secondary-blue)] text-white rounded-lg rounded-br-none pe-4">
        <section className={`flex w-full items-start 2xl:items-center 2xl:flex-row lg:flex-col lg:gap-1 sm:flex-row gap-1 2xl:justify-between justify-between lg:justify-center ${!receiver && '!flex-col md:!flex-row md:!items-center'} flex-col `}>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <p className="text-sm sm:text-base">ارسال کننده:</p>
              <p className="text-base text-ellipsis overflow-hidden whitespace-nowrap">
                {sender}
              </p>
            </div>
            {receiver ? (
              <div className="flex gap-2 items-center">
                <p className="w-fit text-sm sm:text-base">دریافت کننده:</p>
                <p className="text-base text-ellipsis overflow-hidden whitespace-nowrap">
                  {userData?.name} {userData?.lastName}{" "}
                </p>
              </div>
            ) : null}
          </div>
          <div className="flex gap-2 min-[1320px]:justify-center items-center flex-row">
            <div className="flex sm:flex-row gap-4">
              <div className="flex flex-row justify-center items-center gap-2">
                <DateSvg
                  className="flex [&>path]:stroke-white"
                  width={24}
                />
                <p className="pt-1.5 text-base">{createdAtJalali}</p>
              </div>
              {isDoctor ? (
                <Link
                  className="px-3 flex items-center"
                  href={`/admin/panel/patients/${receiver}`}
                >
                  <PatientPageIcon />
                </Link>
              ) : null}
            </div>
          </div>
        </section>
      </div>
      <p
        className="p-5 w-full break-words pb-12 text-base"
        dangerouslySetInnerHTML={formatBody(body)}
      />
      {files.length > 0 && (
        <div className="px-5 py-2 flex justify-start flex-col">
          <div className="flex flex-row">
            <h4 className="text-base font-semibold mb-2">پیوست‌ها:</h4>
          </div>
          <ul className="list-disc list-inside grid grid-cols-2">
            {files.map((file: FileType) => (
              <li className="flex gap-2 col-span-full sm:col-span-1 items-center my-1" key={file.filename}>
                <AttachmentIcon />
                {/* This should be The server host and port */}
                <a
                  onClick={() => {
                    download(
                      `${process.env.DOMAIN_FILES}${file.path}`,
                      `${file.filename}`
                    );
                  }}
                  download={file.originalName}
                  className="text-blue-400 cursor-pointer hover:underline pt-2 text-sm col-span-1"
                >
                  {file.originalName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CommentBox;
