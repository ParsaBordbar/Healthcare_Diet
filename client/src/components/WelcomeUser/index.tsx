"use client";
import useSpecificFetchBmi from "@/hooks/useFetchName/useFetchName";
import MaleAvatar from "/public/svg/adminPanelSvgs/Group 108.svg";
import PhoneNumber from "/public/svg/phone.svg";


const UserInfo = ({ userID }: { userID: string }) => {
  const patients = useSpecificFetchBmi(userID);
  return (
    <>
      <div className="col-span-full bg-[var(--secondary-blue)] shadow-md flex flex-col justify-center items-center gap-4 py-16 p-4 rounded-lg">
        <MaleAvatar className=""/>
        <section className="flex items-center flex-col w-full  text-white font-bold">
          <div className="flex flex-col justify-center  gap-2">
            <h1 className="text-4xl">
              {patients?.name + " " + patients?.lastName}
            </h1>
            <section className="flex items-center justify-center">
              <PhoneNumber className="[&>path]:stroke-white " />
              <p className="text-white">شماره تماس:{patients?.phoneNumber}</p>
            </section>
          </div>
          <section className="flex items-center gap-5 flex-col">
            <h3 className="mt-3 text-lg">مشخصات شما:</h3>
            <div className="grid grid-cols-2 place-items-center gap-3">
              <p className="text-white col-span-1">سن : {patients?.age}</p>
              <p className="text-white col-span-1">قد : {patients?.height}</p>
              <p className="text-white col-span-1">وزن : {patients?.weight}</p>
              <p className="text-white col-span-1">دور شکم : {patients?.abdominalCircumference}</p>
              <p className="text-white col-span-1">تاریخ شروع : {patients?.joinedAtJalali}</p>
              <p className="text-white col-span-1"> BMI اولیه : {patients?.bmi}</p>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default UserInfo;