import { BmiType } from "@/types";
import FemaleAvatar from "/public/svg/adminPanelSvgs/Group 107.svg";
import MaleAvatar from "/public/svg/adminPanelSvgs/Group 108.svg";
import PhoneIcon from "/public/svg/phone.svg";
import Link from "next/link";
import { useMemo } from "react";

const PatientCard = ({
  name,
  lastName,
  gender,
  phoneNumber,
  linkTo,
}: BmiType) => {
  const ChoseAvatar = useMemo(() => {
    if (gender === "male" || gender === "مرد") {
      return (
        <>
          <Link href={linkTo}>
            <MaleAvatar />
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link href={linkTo}>
            <FemaleAvatar />
          </Link>
        </>
      );
    }
  }, []);

  return (
    <div className="flex col-span-full bg-[var(--milky-white)] px-4 sm:px-8 gap-8 py-4 rounded-lg shadow-md ">
      {ChoseAvatar}
      <div className="flex flex-col gap-4  w-full">
        <div className="flex justify-between items-center pt-2.5 ">
          <Link href={linkTo}>
            <h2 className="md:text-2xl text-xl overflow-ellipsis overflow-hidden whitespace-nowrap text-[var(--secondary-blue)]">
              {name} {lastName}
            </h2>
          </Link>
        </div>
        <section className="flex justify-between items-center">
          <div className="flex gap-2">
            <PhoneIcon className="" />
            <p className="text-base mt-1">{phoneNumber}</p>
          </div>
        </section>
      </div>
    </div>
  );
};
export default PatientCard;
