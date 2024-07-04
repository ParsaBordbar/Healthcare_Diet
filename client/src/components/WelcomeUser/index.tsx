"use client";
import useSpecificFetchBmi from "@/hooks/useFetchName/useFetchName";
import MaleAvatar from "/public/svg/adminPanelSvgs/Group 108.svg";
import PhoneNumber from "/public/svg/phone.svg";


const UserInfo = ({ userID }: { userID: string }) => {
  const patients = useSpecificFetchBmi(userID);
  return (
    <>
      <div className="col-span-full bg-[var(--secondary-blue)] shadow-md flex flex-col min-[950px]:flex-row xl:flex-col justify-between items-center gap-4 px-4 xl:px-2 xl:py-6 py-3 rounded-lg">
        <section className="flex w-full min-[950px]:w-2/4 xl:w-full flex-row  xl:flex-col items-center gap-4  text-white font-bold">
        <MaleAvatar className=""/>
          <div className="flex min-[950px]:flex-col justify-between w-full min-[950px]::w-auto min-[950px]::justify-normal flex-row min-[950px]:justify-center  gap-2">
            <h1 className="text-2xl xl:text-center">
              {patients?.name + " " + patients?.lastName}
            </h1>
            <section className="flex items-center xl:justify-center">
              <PhoneNumber className="[&>path]:stroke-white " />
              <p className="text-white">{patients?.phoneNumber}</p>
            </section>
          </div>
        </section>
          <section className="grid xl:w-full xl:place-items-center grid-cols-4 min-[950px]:w-2/4 w-full text-left gap-5">
              <p className="text-white col-span-2 ">سن : {patients?.age}</p>
              <p className="text-white col-span-2">قد : {patients?.height}</p>
              <p className="text-white col-span-2">وزن : {patients?.weight}</p>
              <p className="text-white  col-span-2">دور شکم : {patients?.abdominalCircumference}</p>
              <p className="text-white  col-span-2"> دور باسن : {patients?.hipcircumference}</p>
              <p className="text-white xl:text-center col-span-2 xl:col-span-full"> BMI اولیه : {patients?.bmi}</p>
              <p className="text-white xl:text-center col-span-2 xl:col-span-full">تاریخ شروع : {patients?.joinedAtJalali?.split(' ')[0]}</p>
          </section>
      </div>
    </>
  );
};

export default UserInfo;
