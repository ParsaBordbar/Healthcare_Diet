"use Client";
import useSpecificFetchBmi from "@/hooks/useFetchName/useFetchName";
import useUpdateIsChecked from "@/hooks/useUpdateIsChecked";
import { FileType, MediterraneanFormType } from "@/types";
import { useState } from "react";
import Tick from "/public/svg/adminPanelSvgs/check_ring_round.svg";
import Cross from "/public/svg/adminPanelSvgs/close_ring_fill.svg";
import AttachmentIcon from "/public/svg/adminPanelSvgs/attachment-svgrepo-com.svg";
import DateSvg from "/public/svg/adminPanelSvgs/calendar.svg";
import PatientPageIcon from '/public/svg/User.svg'
import Link from "next/link";
import PatientCard from "../PatientCard";
import DietBmi from "../DietBmi";
import useCheckedState from "@/hooks/useChecked/useChecked";


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
  createdAtGregorian,
  createdAtJalali,
  files = [],
  dietBmi,
  payment,
  _id,
}: MediterraneanFormType)  => {
 
  const data = useSpecificFetchBmi(phoneNumber);
  const { checked, toggleChecked } = useCheckedState(isChecked, _id);
  
  return (
    <div className="flex flex-row   rounded-lg text-lg">
      <ul className="flex w-full flex-col">
        <div className="flex sm:flex-row flex-col items-start sm:items-center justify-between">
          <li className="text-4xl bg-[var(--new-green)] text-white w-fit pe-4 ps-2 rounded-e-full py-3 my-5 flex items-center justify-center gap-2">
            <Link href={`/admin/panel/patients/${phoneNumber}`}><PatientPageIcon width={32}/></Link>
            <p>{data?.name} {data?.lastName}</p>
          </li>
          <button
            onClick={toggleChecked}
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
        <div className="text-2xl ps-12 pe-7 bg-[var(--new-green)] text-white w-fit rounded-e-lg py-2 my-5 flex gap-2 items-center">
          <DateSvg className="sm:flex [&>path]:stroke-white  hidden" width={24} />
          <p className="pt-1.5  text-base"> تاریخ ثبت فرم: {createdAtJalali}</p>
          </div>
        <li className="ps-12 pe-7 text-2xl bg-[var(--new-green)] text-white w-fit rounded-e-lg py-2 my-5">
          مواد غذایی مصرفی:
        </li>
        <li className="grid min-[1410px]:grid-cols-3 grid-cols-4 gap-4 m-4">
          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان مصرف روزانه میوه :</p>
            <p className="  ">{dailyFruit}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className=""> میزان مصرف روزانه سبزیجات:</p>
            <p className="text-[var(--black-blue)]">{dailyVegetable}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">غلات سبوس ‌دار مصرف می‌کنند:</p>
            <p className="text-[var(--black-blue)] font-extrabold">{Cereals}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان مصرف روزانه غلات:</p>
            <p className="text-[var(--black-blue)] font-extrabold">{dailyCereals}</p>
          </li>

          <li
            className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row"
            gap-2
          >
            <p className="">سایر سبزیجات نشاسته ای در هفته:</p>
            <p className="text-[var(--black-blue)]">{potatoAndStarchWeekly}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان مصرف روزانه زیتون و روغن زیتون :</p>
            <p className="text-[var(--black-blue)]">{oliveAndOliveOilDaily}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان مصرف مغزها به صورت روزانه:</p>
            <p className="text-[var(--black-blue)]">{nutsDaily}</p>
          </li>
          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان مصرف روزانه محصولات لبنی :</p>
            <p className="text-[var(--black-blue)]">{dairyDaily}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان مصرف حبوبات :</p>
            <p className="text-[var(--black-blue)]">{beans}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان مصرف تخم مرغ به صورت هفتگی :</p>
            <p className="text-[var(--black-blue)]">{eggWeekly}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان مصرف ماهی به صورت هفتگی:</p>
            <p className="text-[var(--black-blue)]">{fishWeekly}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان مصرف ماکیان به صورت هفتگی :</p>
            <p className="text-[var(--black-blue)]">{chickensWeekly}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان مصرف گوشت قرمز به صورت هفتگی:</p>
            <p className="text-[var(--black-blue)]">{redMeatWeekly}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان مصرف شیرینی به صورت هفتگی:</p>
            <p className="text-[var(--black-blue)]">{sugarWeekly}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان مصرف نوشیدنی الکلی به صورت هفتگی:</p>
            <p className="text-[var(--black-blue)]">{alcoholWeekly}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان مصرف محصوالت تخمیری به صورت هفتگی:</p>
            <p className="text-[var(--black-blue)]">{fermentationWeekly}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className=""> مکمل‌هایی که مصرف می‌کنند:</p>
            <p className="text-[var(--black-blue)]">{supplements}</p>
          </li>

          <li className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1 sm:text-base text-sm flex-row gap-2">
            <p className="">میزان فعالیت بدنی در هفته :</p>
            <p className="text-[var(--black-blue)]">{physicalActivity}</p>
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
              <div className='w-fit text-base flex'>سرطان: {cancer?<p className="text-[var(--black-blue)]"> دارد </p>: <p className="text-[var(--black-blue)]">ندارد</p>}</div>
            </li>
            <li className="min-[1420px]:col-span-1 lg:col-span-2 col-span-4">
              <div className='w-fit text-base flex'>میگرن: {Migraine?<p className="text-[var(--black-blue)]">دارد</p>: <p className="text-[var(--black-blue)]">ندارد</p>}</div>
            </li>

            <li className="flex gap-1 min-[1420px]:col-span-1 lg:col-span-2 col-span-4">
              <p className=" w-fit text-base"> سایر بیماری ها یا جراحی قبلی بیمار:</p>
              <p className="text-[var(--black-blue)] w-fit text-base"> {otherSickness}</p>
            </li>
            <li className="flex gap-1 min-[1420px]:col-span-1 lg:col-span-2 col-span-4">
              <p className=" w-fit text-base">داروهای مصرفی بیمار :</p>
              <p className="text-[var(--black-blue)]  text-base w-fit"> {medicine}</p>
            </li>
          </ul>
        </li>
        <div className="pe-6 py-2 flex justify-start flex-col">
          <div className="flex flex-row">
            <h4 className="text-2xl ps-12 pe-7 bg-[var(--new-green)] text-white w-fit rounded-e-lg py-2 mb-4">فرم BMI:</h4>
          </div>
          <DietBmi height={dietBmi?.height} weight={dietBmi?.weight} age={dietBmi?.age} abdominalCircumference={dietBmi?.abdominalCircumference} bmi={dietBmi?.bmi}/>
      </div>
            
        {files.length > 0 && (
        <div className="pe-8 py-2 flex justify-start flex-col">
          <div className="flex flex-row">
            <h4 className="text-2xl ps-12 pe-7 bg-[var(--new-green)] text-white w-fit rounded-e-lg py-2 my-5">آزمایش‌ها:</h4>
          </div>

          <ul className="list-disc list-inside grid grid-cols-3 px-8">
            {files?.map((file: FileType) => (
              <li className="flex gap-2 items-center my-1 pb-6" key={file.filename}>
                <AttachmentIcon />
                {/* This should be The server host and port */}
                <a
                href={`${process.env.DOMAIN_FILES}/uploads/${file.filename}`}
                download={file.originalName}
                className="text-blue-400 hover:underline pt-2 text-sm col-span-1"
              >
                {file.originalName}
              </a>
              </li>
            ))}
          </ul>
        </div>
      )}

        {payment?<div className="pe-8 py-2 flex justify-start">
              <div className="flex gap-2 my-1 pb-6 flex-col">
                <h4 className="text-2xl ps-12 pe-7 bg-[var(--new-green)] text-white w-fit rounded-e-lg py-2 mb-4">رسید پرداخت:</h4>
                <div className="flex gap-2 items-center px-10">
                  <AttachmentIcon />
                  <a
                  href={`${process.env.DOMAIN_FILES}uploads/${payment.filename}`}
                  download={payment.originalName}
                  className="text-blue-400 hover:underdivne pt-2 text-sm col-span-1"
                >
                  {payment.originalName}
                </a>
                </div>
              </div>
            </div>: null}
      </ul>
    </div>
  );
};

export default MediterraneanForm;