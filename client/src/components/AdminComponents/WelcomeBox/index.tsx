'use client'
import Calendar from "@/components/Calendar";
import { WelcomeBoxType } from "@/types";
import React from "react";

function WelcomeBox({ doctorName }: WelcomeBoxType) {
  return (
    <div className="flex items-center justify-between w-full">
      <h1 className="text-[var(--new-green)] text-2xl font-semibold  ">
        خوش آمدید مشاور تغذیه {doctorName}{" "}
      </h1>
      <Calendar />
    </div>
  );
}

export default WelcomeBox;
