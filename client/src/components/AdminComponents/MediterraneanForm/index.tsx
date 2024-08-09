"use Client";
import useSpecificFetchBmi from "@/hooks/useFetchName/useFetchName";
import { FileType, MediterraneanFormType } from "@/types";
import Tick from "/public/svg/adminPanelSvgs/check_ring_round.svg";
import Cross from "/public/svg/adminPanelSvgs/close_ring_fill.svg";
import AttachmentIcon from "/public/svg/adminPanelSvgs/attachment-svgrepo-com.svg";
import DateSvg from "/public/svg/adminPanelSvgs/calendar.svg";
import PatientPageIcon from "/public/svg/User.svg";
import Link from "next/link";
import DietBmi from "../DietBmi";
import useCheckedState from "@/hooks/useChecked/useChecked";
import QuestionAndAnswerMediForm from "@/components/QAMediForm";
import api from "@/apis";
import { string } from "yup";
import EditMediModal from "@/components/EditMediModal";
import { useState } from "react";
import useEditMediterranean from "../../../hooks/useEditMediterranean/useEditMediterranean"

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
  foodAllergies,
  pregnancyWeeks,
  breastfeeding,
  weightBeforePregnancy,
  phoneNumber,
  isChecked,
  createdAtGregorian,
  createdAtJalali,
  files = [],
  dietBmi,
  payment,
  appetite,
  physicalActivityHours,
  sport,
  preferredDrink,
  _id,
}: MediterraneanFormType) => {
  const data = useSpecificFetchBmi(phoneNumber);
  const { checked, toggleChecked } = useCheckedState(isChecked, _id);
    console.log(supplements , Migraine);
  console.log(
    "in component",
    pregnancyWeeks,
    dietBmi?.age,
    Number(pregnancyWeeks)
  );

  const [show, isShow] = useState<boolean>(false);

  const toggleEditButton = () => {
      isShow((preShow) => !preShow);
  }

  const handelDelete = (id:string) => {
    api.delete(`/mediterranean/${id}`)
  }

  return (
    <div className="flex flex-row mb-10 bg-[var(--milky-white)]  rounded-lg text-lg">
      <ul className="flex w-full flex-col">
        <div className="flex sm:flex-row flex-col items-start sm:items-center justify-between">
          <li className="text-4xl bg-[var(--new-green)] text-white w-fit pe-4 ps-2 rounded-e-full py-3 my-5 flex items-center justify-center gap-2">
            <Link href={`/admin/panel/patients/${phoneNumber}`}>
              <PatientPageIcon width={32} />
            </Link>
            <p className="md:text-2xl lg:text-3xl text-xl">
              {data?.name} {data?.lastName}
            </p>
          </li>
          <EditMediModal className={""} isShow={isShow} show={show} supplements={supplements} appetite={appetite} physicalActivityHours={physicalActivityHours} sport={sport} preferredDrink={preferredDrink} foodAllergies={foodAllergies} pregnancyWeeks={preferredDrink} breastfeeding={breastfeeding} weightBeforePregnancy={weightBeforePregnancy} phoneNumber={phoneNumber} isChecked={isChecked} _id={_id} />
          
          <div className="flex justify-between items-center flex-row ">
            <button  className="sm:rounded-full rounded-full rounded-r-none flex justify-center items-center  sm:px-10" onClick={() => handelDelete((_id))}>
            <p className="text-white text-base md:text-xl bg-red-600 sm:rounded-full rounded-full rounded-r-none py-2.5 my-2 sm:my-12 flex flex-row items-center justify-center gap-2 hover:bg-red-800 w-40"> 
              حذف رژیم
            </p>
            </button>
            <button onClick={toggleEditButton}>
              edit 
            </button>
            <button
              onClick={toggleChecked}
              className="sm:rounded-full rounded-full rounded-r-none flex justify-center items-center  sm:px-10"
            >
              {checked ? (
                <p className="text-white text-base md:text-xl bg-[var(--new-green)] sm:rounded-full rounded-full rounded-r-none py-2.5 my-2 sm:my-12 flex flex-row items-center justify-center gap-2 w-52">
                  {" "}
                  <Tick />
                  ویزیت شده
                </p>
              ) : (
                <p className="text-white text-base md:text-xl bg-[var(--orange)] sm:rounded-full rounded-full rounded-r-none py-2.5 my-2 sm:my-12 flex flex-row items-center gap-2 justify-center w-52">
                  {" "}
                  <Cross />
                  ویزیت نشده{" "}
                </p>
              )}
            </button>
          </div>
        </div>
        
        <div className="text-2xl pr-4 sm:ps-12 pe-7 bg-[var(--new-green)] text-white w-fit rounded-e-lg py-2 my-5 flex gap-2 items-center">
          <DateSvg
            className="sm:flex [&>path]:stroke-white  hidden"
            width={24}
          />
          <p className="pt-1.5  text-base"> تاریخ ثبت فرم: {createdAtJalali}</p>
        </div>
        <li className=" pr-4 sm:ps-12 pe-7 lg:text-2xl sm:text-xl text-base bg-[var(--new-green)] text-white w-fit rounded-e-lg py-2 my-5">
          مواد غذایی مصرفی:
        </li>
        <li className="grid min-[1410px]:grid-cols-3 grid-cols-4 gap-4 m-4">
          <QuestionAndAnswerMediForm
            className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
            answer={dailyFruit}
            question="میزان مصرف روزانه میوه :"
          />
          <QuestionAndAnswerMediForm
            className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
            answer={dailyVegetable}
            question="میزان مصرف روزانه سبزیجات:"
          />
          <QuestionAndAnswerMediForm
            className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
            answer={Cereals}
            question="غلات سبوس ‌دار مصرف می‌کنند:"
          />
          <QuestionAndAnswerMediForm
            className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
            answer={dailyCereals}
            question="میزان مصرف روزانه غلات:"
          />
          <QuestionAndAnswerMediForm
            className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
            answer={potatoAndStarchWeekly}
            question="سایر سبزیجات نشاسته ای در هفته:"
          />
          <QuestionAndAnswerMediForm
            className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
            answer={oliveAndOliveOilDaily}
            question="میزان مصرف روزانه زیتون و روغن زیتون :"
          />
          <QuestionAndAnswerMediForm
            className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
            answer={nutsDaily}
            question="میزان مصرف مغزها به صورت روزانه:"
          />
          <QuestionAndAnswerMediForm
            className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
            answer={dairyDaily}
            question="میزان مصرف روزانه محصولات لبنی :"
          />
          <QuestionAndAnswerMediForm
            className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
            answer={beans}
            question="میزان مصرف روزانه محصولات لبنی :"
          />
          <QuestionAndAnswerMediForm
            className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
            answer={eggWeekly}
            question="میزان مصرف تخم مرغ به صورت هفتگی :"
          />
          <QuestionAndAnswerMediForm
            className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
            answer={fishWeekly}
            question="میزان مصرف ماهی به صورت هفتگی:"
          />
          <QuestionAndAnswerMediForm
            className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
            answer={chickensWeekly}
            question="میزان مصرف ماکیان به صورت هفتگی :"
          />
          <QuestionAndAnswerMediForm
            className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
            answer={redMeatWeekly}
            question="میزان مصرف گوشت قرمز به صورت هفتگی:"
          />
          <QuestionAndAnswerMediForm
            className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
            answer={sugarWeekly}
            question="میزان مصرف شیرینی به صورت هفتگی:"
          />
          <QuestionAndAnswerMediForm
            className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
            answer={alcoholWeekly}
            question="میزان مصرف نوشیدنی الکلی به صورت هفتگی:"
          />
          <QuestionAndAnswerMediForm
            className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
            answer={supplements}
            question="مکمل‌هایی که مصرفی:"
          />
          <QuestionAndAnswerMediForm
            className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
            answer={sport}
            question=" فعالیت بدنی در هفته :"
          />
          <QuestionAndAnswerMediForm
            className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
            answer={preferredDrink}
            question="تمایل نوشیدن :"
          />
          <QuestionAndAnswerMediForm
            className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
            answer={appetite}
            question="اشتهای بیمار: "
          />
          <QuestionAndAnswerMediForm
            className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
            answer={physicalActivityHours}
            question="ساعت معمول وعده‌های غذایی:"
          />
        </li>

        <li>
          <li className="lg:text-2xl sm:text-xl text-base  pr-4 sm:ps-12 pe-7 bg-[var(--new-green)] text-white w-fit rounded-e-lg py-2 my-5">
            بیماری‌ها و وضعیت‌های خاص:
          </li>
          <ul className="grid grid-cols-4 mb-5 px-4 gap-2">
            <QuestionAndAnswerMediForm
              className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
              answer={diabetes}
              question="وضعیت دیابت: "
            />
            <QuestionAndAnswerMediForm
              className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
              answer={bloodPressure}
              question="وضعیت فشارخون: "
            />
            <QuestionAndAnswerMediForm
              className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
              answer={digestiveProblems}
              question=" وضعیت مشکلات گوارشی: "
            />
            <QuestionAndAnswerMediForm
              className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
              answer={selfSafety}
              question="وضعیت خودایمنی:"
            />
            <QuestionAndAnswerMediForm
              className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
              answer={stroke}
              question="وضعیت سکته: "
            />
            <QuestionAndAnswerMediForm
              className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
              answer={fattyLiver}
              question="وضعیت چربی کبد:"
            />
            <QuestionAndAnswerMediForm
              className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
              answer={kidneyProblems}
              question="وضعیت مشکلات کلیوی: "
            />
            <QuestionAndAnswerMediForm
              className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
              answer={thyroid}
              question="وضعیت تیروئید: "
            />
            <QuestionAndAnswerMediForm
              className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
              answer={cancer}
              question="سرطان: "
            />
            <QuestionAndAnswerMediForm
              className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
              answer={Migraine}
              question="میگرن: "
            />
            <QuestionAndAnswerMediForm
              className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
              answer={otherSickness}
              question="سایر بیماری ها یا جراحی قبلی بیمار: "
            />
            <QuestionAndAnswerMediForm
              className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
              answer={medicine}
              question="داروهای مصرفی بیمار : "
            />
            <QuestionAndAnswerMediForm
              className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
              answer={foodAllergies}
              question="آلرژی‌های بیمار: "
            />
          </ul>
          {(!!+pregnancyWeeks ||
            !!+breastfeeding ||
            !!+weightBeforePregnancy) && (
            <h4 className="lg:text-2xl sm:text-xl text-base  pr-4 sm:ps-12 pe-7 bg-[var(--new-green)] text-white w-fit rounded-e-lg py-2 my-5">
              موارد مربوط به بارداری:
            </h4>
          )}
          <ul className="grid grid-cols-4 mb-5 px-4 gap-2">
            <QuestionAndAnswerMediForm
              className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
              answer={+pregnancyWeeks}
              question=" تعداد ماه‌های بارداری بیمار:"
            />
            <QuestionAndAnswerMediForm
              className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
              answer={+breastfeeding}
              question=" تعداد ماه‌های شیردهی بیمار:"
            />
            <QuestionAndAnswerMediForm
              className="flex col-span-4 lg:col-span-2 min-[1410px]:col-span-1  flex-row gap-2 sm:text-base text-sm"
              answer={+weightBeforePregnancy}
              question="وزن قبل از بارداری:"
            />
          </ul>
        </li>
        <div className="pe-6 py-2 flex justify-start flex-col">
          <div className="flex flex-row">
            <h4 className="lg:text-2xl sm:text-xl text-base ps-12 pe-7 bg-[var(--new-green)] text-white w-fit rounded-e-lg py-2 mb-4">
              فرم BMI:
            </h4>
          </div>
          <DietBmi
            height={dietBmi?.height}
            weight={dietBmi?.weight}
            age={dietBmi?.age}
            abdominalCircumference={dietBmi?.abdominalCircumference}
            hipcircumference={dietBmi?.hipcircumference}
            bmi={dietBmi?.bmi}
            whr={dietBmi?.whr}
            linkTo={""}
          />
        </div>

        {files.length > 0 && (
          <div className="pe-8 py-2 flex justify-start flex-col">
            <div className="flex flex-row">
              <h4 className="lg:text-2xl sm:text-xl text-base ps-12 pe-7 bg-[var(--new-green)] text-white w-fit rounded-e-lg py-2 my-5">
                آزمایش‌ها:
              </h4>
            </div>

            <ul className="list-disc list-inside grid grid-cols-3 px-8">
              {files?.map((file: FileType) => (
                <li
                  className="flex gap-2 lg:col-span-1 col-span-full md:col-span-2 items-center my-1 pb-6"
                  key={file.filename}
                >
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

        {payment ? (
          <div className="pe-8 py-2 flex justify-start">
            <div className="flex gap-2 my-1 pb-6 flex-col">
              <h4 className="lg:text-2xl text-xl ps-12 pe-7 bg-[var(--new-green)] text-white w-fit rounded-e-lg py-2 mb-4">
                رسید پرداخت:
              </h4>
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
          </div>
        ) : null}
      </ul>
    </div>
  );
};

export default MediterraneanForm;
