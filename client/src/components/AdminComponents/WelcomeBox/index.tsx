'use client'
import MainInput from "@/components/MainInput";
import { WelcomeBoxType } from "@/types";
import React from "react";
import SearchIcon from "/public/svg/search-normal.svg";
function WelcomeBox({ doctorName }: WelcomeBoxType) {
  return (
    <div className="flex items-center justify-between w-full">
      <h1 className="text-[var(--new-green)] text-2xl font-semibold  ">
        خوش آمدید مشاور تغذیه {doctorName}{" "}
      </h1>
      <MainInput
        iconFirst={SearchIcon}
        parentClassName="!w-1/2 "
        type="search"
        placeholder="نام بیمار مورد نظر خود را وارد کنید"
      />
    </div>
  );
}

export default WelcomeBox;
