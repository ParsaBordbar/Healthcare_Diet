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
  // {
  //   if (gender === "male" || gender == "مرد") {
  //     return (
  //       <div className="flex m-3 col-span-full bg-[var(--primary)] gap-10 py-4 rounded-lg shadow-md ">
  //         <div className="flex flex-col gap-4 px-8 w-full">
  //           <div className="flex justify-between items-center pt-2.5 gap-5">
  //             <h2 className="text-3xl text-[var(--new-green)]">
  //               {name} {lastName}
  //             </h2>
  //             {linkTo ? (
  //               <Link className="pt-2 text-blue-600 text-xs" href={`${linkTo}`}>
  //                 اطلاعات بیشتر
  //               </Link>
  //             ) : null}
  //           </div>
  //           <div className="flex gap-2">
  //             <PhoneIcon />
  //             <p className="text-base text-[var(--new-green)]">
  //               {phoneNumber}
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }

  //   if (gender === "female" || gender === "زن") {
  //     return (
  //       <div className="flex m-3 col-span-full bg-[var(--primary)] gap-10 py-4 rounded-lg shadow-md ">
  //         <div className="flex flex-col gap-4 px-8 w-full">
  //           <div className="flex justify-between items-center pt-2.5 gap-5">
  //             <h2 className="text-3xl text-[var(--new-green)]">
  //               {name} {lastName}
  //             </h2>
  //             {linkTo ? (
  //               <Link className="pt-2 text-blue-600 text-xs" href={`${linkTo}`}>
  //                 اطلاعات بیشتر
  //               </Link>
  //             ) : null}
  //           </div>
  //           <div className="flex gap-2">
  //             <PhoneIcon />
  //             <p className="text-base text-[var(--new-green)]">
  //               {phoneNumber}
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }
  // }
  return (
    <div className="flex m-3 col-span-full bg-[var(--primary)] px-8 gap-10 py-4 rounded-lg shadow-md ">
      {ChoseAvatar}
      <div className="flex flex-col gap-4  w-full">
        <div className="flex justify-between items-center pt-2.5 gap-5">
          <h2 className="text-3xl text-[var(--new-green)]">
            {name} {lastName}
          </h2>
          {linkTo ? (
            <Link className="pt-2 text-blue-600 text-xs" href={`${linkTo}`}>
              اطلاعات بیشتر
            </Link>
          ) : null}
        </div>
        <div className="flex gap-2">
          <PhoneIcon />
          <p className="text-base text-[var(--new-green)]">{phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};
export default PatientCard;
