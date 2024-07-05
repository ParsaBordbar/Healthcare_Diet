import { BmiType } from "@/types";
import Link from "next/link";
import React from "react";

function PatientBmiForm({
  name,
  lastName,
  phoneNumber,
  gender,
  hipcircumference,
  age,
  city,
  height,
  className,
  weight,
  bmi,
  whr,
  abdominalCircumference,
  joinedAtGregorian,
  joinedAtJalali,
}: BmiType) {
  return (
    <section className={`flex pl-6 flex-col ${className} bg-[var(--milky-white)] py-4 rounded-lg gap-4 shadow-md`}>
      <div className="flex flex-col 2xl:flex-row justify-between text-[var(--text)] mt-3 items-start gap-4 2xl:gap-0 2xl:items-center ">
        <Link
          href={`/admin/panel/patients/${phoneNumber}`}
          className="flex items-center bg-[var(--new-green)] text-white text-2xl font-semibold rounded-e-full overflow-hidden whitespace-nowrap text-ellipsis ps-6 pe-10 w-fit py-3"
        >
          {name} {lastName}
        </Link>
        <section className="flex flex-col gap-2 items-end">
          <p className="text-[var(--new-green)] text-lg w-fit ">
            BMI: {bmi}
          </p>
         <p className="text-[var(--new-green)] text-lg w-fit ">
            WHR: {whr}
          </p>  
        <p className="text-[var(--new-green)] text-lg w-fit ">
            تاریخ ثبت: {joinedAtJalali}
          </p>
        </section>
      </div>
      <div className="flex 2xl:flex-row pr-6 items-start justify-between 2xl:items-center flex-col">
        <div className="flex flex-col gap-4 text-[var(--text)] text-lg">
          <p>جنسیت: {gender}</p>
          <p>سن: {age}</p>
          <p> شهر {city} </p>
        </div>
        <div className="flex  flex-col text-[var(--text)] text-lg gap-4  ">
          <p>قد: {height}</p>
          <p>وزن: {weight}</p>
        </div>
        <div className="flex  flex-col text-[var(--text)] text-lg gap-4  ">
          <p> شماره تماس: {phoneNumber}</p>
          <p>دور شکم: {abdominalCircumference}</p>
         <p>دور باسن: {hipcircumference}</p>
        </div>
      </div>
    </section>
  );
}
export default PatientBmiForm;
