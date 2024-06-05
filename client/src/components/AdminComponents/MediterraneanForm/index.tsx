"use Client";
import useSpecificFetchBmi from "@/hooks/useFetchName/useFetchName";
import useUpdateIsChecked from "@/hooks/useUpdateIsChecked";
import { MediterraneanFormType } from "@/types";
import { useState } from "react";
import Tick from "/public/svg/adminPanelSvgs/check_ring_round.svg";
import Cross from "/public/svg/adminPanelSvgs/close_ring_fill.svg";

const MediterraneanForm = ({
  dailyFruit,
  dailyVegetable,
  Cereals,
  dailyCereals,
  potatoAndStarchWeekly,
  oliveAndOliveOilDaily,
  nutsDaily,
  dairyDaily,
  beans,
  eggWeekly,
  fishWeekly,
  chickensWeekly,
  redMeatWeekly,
  sugarWeekly,
  alcoholWeekly,
  fermentationWeekly,
  supplements,
  physicalActivity,
  diabetes,
  anemia,
  bloodPressure,
  digestiveProblems,
  selfSafety,
  stroke,
  fattyLiver,
  kidneyProblems,
  thyroid,
  cancer,
  Migraine,
  otherSickness,
  medicine,
  phoneNumber,
  isChecked,
}: MediterraneanFormType) => {
  const data = useSpecificFetchBmi(phoneNumber);
  const [checked, setChecked] = useState(isChecked);
  useUpdateIsChecked(phoneNumber, checked);

  const handleClickChecked = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex flex-row bg-[var(--primary)] my-10 rounded-lg text-lg shadow-md">
      <ul className="flex w-full flex-col">
        <div className="flex sm:flex-row flex-col items-start sm:items-center justify-between">
          <li className="text-4xl bg-[var(--new-green)] text-white w-fit pe-4 ps-2 rounded-e-full py-3 my-5">
            {data?.name} {data?.lastName}
          </li>
          <button
            onClick={handleClickChecked}
            className="sm:rounded-full rounded-full rounded-r-none flex justify-center items-center  sm:px-10"
          >
            {checked ? (
              <p className="text-white text-xl bg-[var(--new-green)] sm:rounded-full rounded-full rounded-r-none py-2.5 my-2 sm:my-12 flex flex-row items-center justify-center gap-2 w-52">
                {" "}
                <Tick />
                ویزیت شده
              </p>
            ) : (
              <p className="text-white text-xl bg-[var(--orange)] sm:rounded-full rounded-full rounded-r-none py-2.5 my-2 sm:my-12 flex flex-row items-center gap-2 justify-center w-52">
                {" "}
                <Cross />
                ویزیت نشده{" "}
              </p>
            )}
          </button>
        </div>
        <li className="ps-12 pe-7 text-2xl bg-[var(--new-green)] text-white w-fit rounded-e-lg py-2 my-5">
          مواد غذایی مصرفی:
        </li>
        <li className="grid min-[1410px]:grid-cols-3 grid-cols-4 gap-4 m-4">
          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان مصرف روزانه میوه :</p>
            <p className="text-[var(--new-green)]">{dailyFruit}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className=""> میزان مصرف روزانه سبزیجات:</p>
            <p className="text-[var(--new-green)]">{dailyVegetable}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">غلات سبوس ‌دار مصرف می‌کنند:</p>
            <p className="text-[var(--new-green)]">{Cereals}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان مصرف روزانه غلات:</p>
            <p className="text-[var(--new-green)]">{dailyCereals}</p>
          </li>

          <li
            className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row"
            gap-2
          >
            <p className="">سایر سبزیجات نشاسته ای در هفته:</p>
            <p className="text-[var(--new-green)]">{potatoAndStarchWeekly}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان مصرف روزانه زیتون و روغن زیتون :</p>
            <p className="text-[var(--new-green)]">{oliveAndOliveOilDaily}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان مصرف مغزها به صورت روزانه:</p>
            <p className="text-[var(--new-green)]">{nutsDaily}</p>
          </li>
          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان مصرف روزانه محصولات لبنی :</p>
            <p className="text-[var(--new-green)]">{dairyDaily}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان مصرف حبوبات :</p>
            <p className="text-[var(--new-green)]">{beans}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان مصرف تخم مرغ به صورت هفتگی :</p>
            <p className="text-[var(--new-green)]">{eggWeekly}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان مصرف ماهی به صورت هفتگی:</p>
            <p className="text-[var(--new-green)]">{fishWeekly}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان مصرف ماکیان به صورت هفتگی :</p>
            <p className="text-[var(--new-green)]">{chickensWeekly}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان مصرف گوشت قرمز به صورت هفتگی:</p>
            <p className="text-[var(--new-green)]">{redMeatWeekly}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان مصرف شیرینی به صورت هفتگی:</p>
            <p className="text-[var(--new-green)]">{sugarWeekly}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان مصرف نوشیدنی الکلی به صورت هفتگی:</p>
            <p className="text-[var(--new-green)]">{alcoholWeekly}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان مصرف محصوالت تخمیری به صورت هفتگی:</p>
            <p className="text-[var(--new-green)]">{fermentationWeekly}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className=""> مکمل‌هایی که مصرف می‌کنند:</p>
            <p className="text-[var(--new-green)]">{supplements}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان فعالیت بدنی در هفته :</p>
            <p className="text-[var(--new-green)]">{physicalActivity}</p>
          </li>
        </li>

        <li>
          <li className="text-2xl ps-12 pe-7 bg-[var(--new-green)] text-white w-fit rounded-e-lg py-2 my-5">
            بیماری‌ها و وضعیت‌های خاص:
          </li>
          <ul className="grid grid-cols-4 mb-5 px-4 gap-2">
            <li className="min-[1420px]:col-span-1 lg:col-span-2 col-span-4">
              <p className='w-fit text-base'> وضعیت دیابت: {diabetes}</p>
            </li>
            <li className="min-[1420px]:col-span-1 lg:col-span-2 col-span-4">
              <p className='w-fit text-base'>وضعیت فشارخون: {bloodPressure}</p>
            </li>
            <li className="min-[1420px]:col-span-1 lg:col-span-2 col-span-4">
              <p className='w-fit text-base'>وضعیت مشکلات گوارشی: {digestiveProblems}</p>
            </li>
            <li className="min-[1420px]:col-span-1 lg:col-span-2 col-span-4">
              <p className='w-fit text-base'>وضعیت خودایمنی: {selfSafety}</p>
            </li>
            <li className="min-[1420px]:col-span-1 lg:col-span-2 col-span-4">
              <p className='w-fit text-base'>وضعیت سکته: {stroke}</p>
            </li>
            <li className="min-[1420px]:col-span-1 lg:col-span-2 col-span-4">
              <p className='w-fit text-base'>وضعیت چربی کبد: {fattyLiver}</p>
            </li>
            <li className="min-[1420px]:col-span-1 lg:col-span-2 col-span-4">
              <p className='w-fit text-base'>وضعیت مشکلات کلیوی: {kidneyProblems}</p>
            </li>
            <li className="min-[1420px]:col-span-1 lg:col-span-2 col-span-4">
              <p className='w-fit text-base'>وضعیت تیروئید: {thyroid}</p>
            </li>
            <li className="min-[1420px]:col-span-1 lg:col-span-2 col-span-4">
              <p className='w-fit text-base'>سرطان دارد: {cancer}</p>
            </li>
            <li className="min-[1420px]:col-span-1 lg:col-span-2 col-span-4">
              <p className='w-fit text-base'>میگرن دارد: {Migraine}</p>
            </li>

            <li className="flex gap-1 min-[1420px]:col-span-1 lg:col-span-2 col-span-4">
              <p className=" w-fit text-base"> سایر بیماری ها یا جراحی قبلی بیمار:</p>
              <p className="text-[var(--new-green)] w-fit text-base"> {otherSickness}</p>
            </li>
            <li className="flex gap-1 min-[1420px]:col-span-1 lg:col-span-2 col-span-4">
              <p className=" w-fit text-base">داروهای مصرفی بیمار :</p>
              <p className="text-[var(--new-green)]  text-base w-fit"> {medicine}</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default MediterraneanForm;
