"use client";
import React, { useEffect, useState } from "react";
import SendIcon from "/public/svg/adminPanelSvgs/send.svg";
import AttachmentIcon from "/public/svg/adminPanelSvgs/attachment-svgrepo-com.svg";
import MainButton from "@/components/MainButton";
import useComment from "@/hooks/useComment/useComment";
import useFetchOneMediterranean from "@/hooks/useFetchOneMediterranean";
import { usePathname } from "next/navigation";
import useCheckedState from "@/hooks/useChecked/useChecked";
import { toast } from "react-toastify";

interface ReplyBoxProps {
  receiver: string;
}

const ReplyBox: React.FC<ReplyBoxProps> = ({ receiver }) => {
  const { handleValueInputs, register, errors, handleSubmit, setValue } =
    useComment();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const pathName = usePathname();
  const patientId = pathName.split("/")[pathName.split("/").length - 2];
  const medData = useFetchOneMediterranean(patientId);
  console.log(medData);
  const sender = "admin"; // Assuming 'admin' is the sender
  const theLastMedData = medData[medData.length - 1];
  console.log(theLastMedData);
  const { toggleChecked } = useCheckedState(
    theLastMedData?.isChecked,
    theLastMedData?._id
  );

  const mapping = () => {
    if (!theLastMedData.isChecked) {
      toggleChecked();
      toast.info("آخرین رژیم بیمار به صورت خودکار ویزیت شد");
    }
  };

  useEffect(() => {
    setValue("sender", sender);
    setValue("receiver", receiver);
  }, [receiver, setValue]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };
  const updateChecking = (isChecked: boolean, _id: string) => {
    const { checked, toggleChecked } = useCheckedState(isChecked, _id);
    return checked;
  };

  const onSubmit = async (data: any) => {
    mapping();
    try {
      const formData: any = new FormData();
      formData.append("sender", sender);
      formData.append("receiver", receiver);
      formData.append("body", data.body);
      selectedFiles.forEach((file) => {
        formData.append("document", file);
      });

      await handleValueInputs(formData);
      // Clear selected files after submission
      setSelectedFiles([]);
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <div className="flex flex-col bg-[var(--soft-blue)] my-10 rounded-lg text-lg shadow-md justify-center">
      <h2 className="text-3xl px-20 pt-8 text-[var(--black-blue)] font-extrabold">
        ثبت پیام جدید
      </h2>
      <form
        className="flex w-full flex-col m-3 gap-4 p-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        {errors.body && <p className="text-red-500">{errors.body.message}</p>}

        <textarea
          placeholder="پیام خود را وارد کنید..."
          className={`bg-[#FEFDF9] border ${
            errors.body ? "border-red-500" : "border-[var(--rating-color)]"
          } px-6 py-5 rounded-xl w-full`}
          rows={10}
          {...register("body")}
        />

        <div className="flex gap-4">
          <label className="flex justify-center items-center bg-[var(--orange)] rounded-full px-4 hover:bg-[var(--new-green)] ease-in-out">
            <AttachmentIcon />
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          <MainButton
            value={"ارسال"}
            modern
            type="submit"
            className="!text-white py-2 px-6"
            iconSrc={SendIcon}
          />
        </div>
      </form>
    </div>
  );
};

export default ReplyBox;
