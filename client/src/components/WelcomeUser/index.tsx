"use client";
import CommentBox from "@/components/AdminComponents/CommentBox";
import useFetchPatientComments from "@/hooks/useFetchPatientComments/useFetchPatientComments";
import { FC, memo } from "react";
import MassegeIcon from "/public/svg/adminPanelSvgs/messages.svg";
import useSpecificFetchBmi from "@/hooks/useFetchName/useFetchName";
import FemaleAvatar from "/public/svg/adminPanelSvgs/Group 107.svg";
import MaleAvatar from "/public/svg/adminPanelSvgs/Group 108.svg";
import PhoneNumber from "/public/svg/phone.svg";
import QuickLinkBox from "@/components/AdminComponents/QuickLinkBox";
import ReplyBox from "@/components/AdminComponents/ReplyBox";
import MainInput from "@/components/MainInput";
import MainButton from "@/components/MainButton";
import SendMassege from "/public/svg/adminPanelSvgs/send.svg";

const WelcomeUser = ({ userID }: { userID: string }) => {
  const patients = useSpecificFetchBmi(userID);
  return (
    <>
      <div className="col-span-4 bg-[var(--milky-white)] shadow-md flex items-center gap-4 p-4 rounded-lg">
        <MaleAvatar />
        <section className="flex items-start justify-between w-full">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl">
              {patients?.name + " " + patients?.lastName}
            </h1>
            <section className="flex items-center">
              <PhoneNumber className="[&>path]:stroke-[var(--new-green)]" />
              <p className="text-[var(--new-green)]">{patients?.phoneNumber}</p>
            </section>
          </div>
          <section className="flex items-center gap-2 flex-col ">
            <p className="text-[var(--new-green)]">BMI: {patients?.bmi}</p>
            <div className="grid grid-cols-2 place-items-center gap-2">
              <p className="text-black col-span-1">سن : {patients?.age}</p>
              <p className="text-black col-span-1">قد : {patients?.height}</p>
              <p className="text-black col-span-1">وزن : {patients?.weight}</p>
              <p className="text-black col-span-1">
                جنسیت : {patients?.gender}
              </p>
            </div>
          </section>
        </section>
      </div>
      <div className="col-span-4 flex flex-col gap-2">
        <h1>ارسال پیام جدید</h1>
        <form action="" className="grid grid-cols-4 gap-2">
          <select
            name="reciver"
            className={`col-span-2 rounded-lg outline-none py-3 px-4 border flex items-center gap-1  bg-white `}
          >
            <option value="null">ارسال به...</option>
            <option value="admin">admin</option>
          </select>
          <section className="gap-4 items-center col-span-full grid grid-cols-3">
            <MainInput
              parentClassName="col-span-2"
              placeholder="پبام خود را اینجا وارد کنید..."
            />
            <MainButton
              iconSrc={SendMassege}
              modern
              className="col-span-1 flex items-center justify-center py-2.5 !text-white"
              value={"ارسال پیام"}
            />
          </section>
        </form>
      </div>
    </>
  );
};

export default WelcomeUser;
