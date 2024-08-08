import React, { useEffect } from 'react';
import Close from "/public/svg/close.svg";
import MainInput from '../MainInput';

type ModalMediterraneanFormType = {
    className: string;
    isShow: Function;
    show: boolean;
  dailyFruit?: String;
  dailyVegetable?: String;
  Cereals?: String;
  dailyCereals?: String;
  potatoAndStarchWeekly?: String;
  oliveAndOliveOilDaily?: String;
  nutsDaily?: String;
  dairyDaily?: String;
  beans?: String;
  eggWeekly?: String;
  fishWeekly?: String;
  chickensWeekly?: String;
  redMeatWeekly?: String;
  sugarWeekly?: String;
  alcoholWeekly?: String;
  fermentationWeekly?: String;
  supplements: string | [];
  appetite: string,
  physicalActivityHours: string,
  sport: string,
  preferredDrink: string,
  physicalActivity?: String;
  diabetes?: String;
  anemia?: String;
  bloodPressure?: String;
  digestiveProblems?: String;
  selfSafety?: String;
  stroke?: String;
  fattyLiver?: String;
  kidneyProblems?: String;
  thyroid?: String;
  cancer?: boolean;
  Migraine?: boolean;
  otherSickness?: String;
  medicine?: String;
  foodAllergies: String;
  pregnancyWeeks: String;
  breastfeeding: String;
  weightBeforePregnancy: String;
  phoneNumber: string;
  isChecked: boolean;
  createdAtGregorian?: string;
  createdAtJalali?: string;
//   files?: FileType[];
  dietBmi?: {
    height?: number;
    weight?: number;
    bmi?: number;
    age: number;
    linkTo?: string;
    abdominalCircumference?: number;
    whr: number;
    hipcircumference: number;
  };
//   payment?: FileType;
  _id: string;
};

function EditMediModal({   
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
    dietBmi,
    appetite,
    physicalActivityHours,
    sport,
    preferredDrink,
    isShow,
    className,
    show,
    _id,}: ModalMediterraneanFormType) {
  
  useEffect(() => {
  }, [show]);

  return (
    <div className='flex justify-center items-center'>
        <section
      className={`
        fixed top-0 right-8 w-full h-screen transition-opacity duration-500 ease-in-out gap-2
        ${show ? 'opacity-100 z-50' : 'opacity-0 -z-50'} 
        ${className}
      `}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-lg flex gap-4 flex-col">
        <Close
        className="cursor-pointer bg-[var(--milky-white)] fixed w-8 h-8 p-1 transition-all ease-in-out duration-200 hover:!stroke-white hover:bg-red-600 rounded-full"
        onClick={() => {
        isShow(false);
        }}
        />
        <p className="mt-10 pr-4 sm:ps-12 pe-7 lg:text-2xl sm:text-xl text-base bg-[var(--new-green)] text-white w-fit rounded-e-lg py-2 my-5">
          مواد غذایی مصرفی:
        </p>
        <div className=' grid grid-cols-5 gap-3'>
            <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="دور باسن خود را اینجا وارد کنید"
            label="میزان مصرف روزانه میوه "
            />
            <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="دور باسن خود را اینجا وارد کنید"
            label="میزان مصرف روزانه سبزیجات:"

            />
            <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="غلات سبوس ‌دار مصرف می‌کنند"
            label="غلات سبوس ‌دار مصرف می‌کنند"
            />
            <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="میزان مصرف روزانه غلات"
            label="میزان مصرف روزانه غلات"
            />
            <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="دور باسن خود را اینجا وارد کنید"
            label="سایر سبزیجات نشاسته ای در هفته
            "/>

<MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="دور باسن خود را اینجا وارد کنید"
            label="میزان مصرف روزانه زیتون و روغن زیتون"
            />
            <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="دور باسن خود را اینجا وارد کنید"
            label="میزان مصرف مغزها به صورت روزانه"

            />
            <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="غلات سبوس ‌دار مصرف می‌کنند"
            label="میزان مصرف روزانه محصولات لبنی :"
            />
            <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="میزان مصرف روزانه غلات"
            label="میزان مصرف روزانه محصولات لبنی :"
            />
            <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="دور باسن خود را اینجا وارد کنید"
            label="میزان مصرف تخم مرغ به صورت هفتگی 
            "/>

<MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="دور باسن خود را اینجا وارد کنید"
            label="میزان مصرف ماهی به صورت هفتگی"
            />
            <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="دور باسن خود را اینجا وارد کنید"
            label="میزان مصرف ماکیان به صورت هفتگی :"

            />
            <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="غلات سبوس ‌دار مصرف می‌کنند"
            label="میزان مصرف گوشت قرمز به صورت هفتگی:"
            />
            <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="میزان مصرف روزانه غلات"
            label="میزان مصرف شیرینی به صورت هفتگی:"
            />
            <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="دور باسن خود را اینجا وارد کنید"
            label="
            میزان مصرف نوشیدنی الکلی به صورت هفتگی:"/>

<MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="دور باسن خود را اینجا وارد کنید"
            label="مکمل‌های که مصرفی"
            />
            <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="دور باسن خود را اینجا وارد کنید"
            label="فعالیت بدنی در هفته :"

            />
            <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="غلات سبوس ‌دار مصرف می‌کنند"
            label="تمایل نوشیدن :"
            />
            <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="میزان مصرف روزانه غلات"
            label="اشتهای بیمار:"
            />
            <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="دور باسن خود را اینجا وارد کنید"
            label="ساعت معمول وعده‌های غذایی:"/>
        </div>
        <p className="mt-10 pr-4 sm:ps-12 pe-7 lg:text-2xl sm:text-xl text-base bg-[var(--new-green)] text-white w-fit rounded-e-lg py-2 my-5">
        بیماری‌ها و وضعیت‌های خاص:        
        </p>
        <div className=' grid grid-cols-5 gap-3'>
        <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="دور باسن خود را اینجا وارد کنید"
            label="وضعیت دیابت:"
            />
            <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="دور باسن خود را اینجا وارد کنید"
            label="وضعیت فشارخون:"
            />
            <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="غلات سبوس ‌دار مصرف می‌کنند"
            label="
            وضعیت مشکلات گوارشی:"
            />
            <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="میزان مصرف روزانه غلات"
            label="وضعیت خودایمنی:"
            />
            <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="دور باسن خود را اینجا وارد کنید"
            label="وضعیت سکته:"/>

        <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="دور باسن خود را اینجا وارد کنید"
            label="وضعیت چربی کبد:"/>

            <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="غلات سبوس ‌دار مصرف می‌کنند"
            label="وضعیت مشکلات کلیوی:"
            />
            <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="میزان مصرف روزانه غلات"
            label="وضعیت تیروئید"
            />
            <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="دور باسن خود را اینجا وارد کنید"
            label="سرطان"/>
            <MainInput
            name="hipcircumference"
            parentClassName="[&>label]:text-base lg:col-span-1 col-span-2"
            placeholder="دور باسن خود را اینجا وارد کنید"
            label="میگرن"
            />
        </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default EditMediModal;
