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
      return <MaleAvatar />;
    } else {
      return <FemaleAvatar />;
    }
  }, []);

  return (
    <div className="flex col-span-full bg-[var(--primary)] px-4 sm:px-8 gap-8 py-4 rounded-lg shadow-md ">
      {ChoseAvatar}
      <div className="flex flex-col gap-4  w-full">
        <div className="flex justify-between items-center pt-2.5 ">
          <h2 className="text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap text-[var(--new-green)]">
            {name} {lastName}
          </h2>
          {linkTo ? (
            <Link className="mt-2 sm:inline-block hidden w-fit text-blue-600 text-xs" href={`${linkTo}`}>
              اطلاعات بیشتر
            </Link>
          ) : null}
        </div>
        <section className="flex justify-between items-center">

        <div className="flex gap-2">
          <PhoneIcon className='[&>path]:stroke-[var(--new-green)]'/>
          <p className="text-base mt-1 text-[var(--new-green)]">{phoneNumber}</p>
        </div>
        {linkTo ? (
            <Link className="mt-1 inline-block sm:hidden w-fit text-blue-600 text-xs" href={`${linkTo}`}>
              اطلاعات بیشتر
            </Link>
          ) : null}
        </section>
      </div>
    </div>
  );
};
export default PatientCard;
