'use Client'
import useSpecificFetchBmi from '@/hooks/useFetchName/useFetchName'
import useUpdateIsChecked from '@/hooks/useUpdateIsChecked';
import { MediterraneanFormType } from '@/types'
import { useState } from 'react';
import Tick from "/public/svg/adminPanelSvgs/check_ring_round.svg"
import Cross from "/public/svg/adminPanelSvgs/close_ring_fill.svg"


const MediterraneanForm = ({dailyFruit, dailyVegetable,Cereals ,dailyCereals ,potatoAndStarchWeekly,oliveAndOliveOilDaily ,nutsDaily ,dairyDaily ,beans ,eggWeekly ,fishWeekly ,chickensWeekly, redMeatWeekly,sugarWeekly ,alcoholWeekly ,fermentationWeekly ,supplements ,physicalActivity, diabetes, anemia ,bloodPressure ,digestiveProblems ,selfSafety ,stroke ,fattyLiver ,kidneyProblems ,thyroid ,cancer, Migraine, otherSickness ,medicine ,phoneNumber, isChecked }:MediterraneanFormType) => {

  const data = useSpecificFetchBmi(phoneNumber);
  const [checked, setChecked] = useState(isChecked) 
  useUpdateIsChecked(phoneNumber, checked);

  const handleClickChecked = () => {
    setChecked(!checked);
  }

  return (
    <div className='flex flex-row bg-[var(--primary)] my-10 rounded-lg text-lg shadow-md'>
        <ul className='flex gap-4 flex-col'>
          <div className='flex items-center justify-between gap-16'>
            <li className='text-6xl px-10 bg-[var(--rating-color)] text-white w-fit pe-4 ps-4 rounded-e-full py-3 my-5'>
              {data?.name} {data?.lastName}
            </li>
            <button onClick={handleClickChecked} className='rounded-full flex justify-center items-center'>
              {checked?<p className='text-white text-2xl bg-[var(--tittle-box)] rounded-full py-2.5 px-5 m-12 flex flex-row items-center justify-center gap-2 w-52'> <Tick/>ویزیت شده</p>:<p className='text-white text-2xl bg-[var(--text-important)] rounded-full py-2.5 px-5 m-12 flex flex-row items-center gap-2 justify-center w-52'> <Cross />ویزیت نشده </p>}
            </button>
          </div>
            <li className='ps-12 pe-7 text-2xl bg-[var(--rating-color)] text-white w-fit rounded-e-lg py-2 my-5'>
                مواد غذایی مصرفی:
            </li>

            <li className='px-10 flex flex-row gap-4'>
              <p className=''>میزان مصرف روزانه میوه :</p>
              <p className='text-[var(--rating-color)]'>{dailyFruit}</p>
            </li>

            <li className='px-10 flex flex-row gap-4'>
              <p className=''> میزان مصرف روزانه سبزیجات:</p>
              <p className='text-[var(--rating-color)]'>{dailyVegetable}</p>
            </li>

            <li className='px-10 flex flex-row gap-4'>
              <p className=''>غلات سبوس ‌دار مصرف می‌کنند:</p>
              <p className='text-[var(--rating-color)]'>{Cereals}</p>
            </li>

            <li className='px-10 flex flex-row gap-4'>
              <p className=''>میزان مصرف روزانه غلات:</p>
              <p className='text-[var(--rating-color)]'>{dailyCereals}</p>
            </li>

            <li className='px-10 flex flex-row gap-4'>
              <p className=''>میزان مصرف  سیب زمینی و سایر سبزیجات نشاسته ای در هفته:</p>
              <p className='text-[var(--rating-color)]'>{potatoAndStarchWeekly}</p>
            </li>

            <li className='px-10 flex flex-row gap-4'>
              <p className=''>میزان مصرف روزانه  زیتون و روغن زیتون :</p>
              <p className='text-[var(--rating-color)]'>{oliveAndOliveOilDaily}</p>
            </li>

            <li className='px-10 flex flex-row gap-4'>
              <p className=''>میزان مصرف مغزها به صورت روزانه:</p>
              <p className='text-[var(--rating-color)]'>{nutsDaily}</p>
            </li>

            <li className='px-10 flex flex-row gap-4'>
              <p className=''>میزان مصرف روزانه محصولات لبنی :</p>
              <p className='text-[var(--rating-color)]'>{dairyDaily}</p>
            </li>

            <li className='px-10 flex flex-row gap-4'>
              <p className=''>میزان مصرف  حبوبات :</p>
              <p className='text-[var(--rating-color)]'>{beans}</p>
            </li>

            <li className='px-10 flex flex-row gap-4'>
              <p className=''>میزان مصرف تخم مرغ به صورت هفتگی :</p>
              <p className='text-[var(--rating-color)]'>{eggWeekly}</p>
            </li>

            <li className='px-10 flex flex-row gap-4'>
              <p className=''>میزان مصرف ماهی به صورت هفتگی:</p>
              <p className='text-[var(--rating-color)]'>{fishWeekly}</p>
            </li>

            <li className='px-10 flex flex-row gap-4'>
              <p className=''>میزان مصرف  ماکیان به صورت هفتگی :</p>
              <p className='text-[var(--rating-color)]'>{chickensWeekly}</p>
            </li>

            <li className='px-10 flex flex-row gap-4'>
              <p className=''>میزان مصرف گوشت قرمز به صورت هفتگی:</p>
              <p className='text-[var(--rating-color)]'>{redMeatWeekly}</p>
            </li>

            <li className='px-10 flex flex-row gap-4'>
              <p className=''>میزان مصرف شیرینی به صورت هفتگی:</p>
              <p className='text-[var(--rating-color)]'>{sugarWeekly }</p>
            </li>

            <li className='px-10 flex flex-row gap-4'>
              <p className=''>میزان مصرف  نوشیدنی الکلی به صورت هفتگی:</p>
              <p className='text-[var(--rating-color)]'>{alcoholWeekly}</p>
            </li>

            <li className='px-10 flex flex-row gap-4'>
              <p className=''>میزان مصرف محصوالت تخمیری به صورت هفتگی:</p>
              <p className='text-[var(--rating-color)]'>{fermentationWeekly}</p>
            </li>

            <li className='px-10 flex flex-row gap-4'>
              <p className=''> مکمل‌هایی که مصرف می‌کنند:</p>
              <p className='text-[var(--rating-color)]'>{supplements}</p>
            </li>

            <li className='px-10 flex flex-row gap-4'>
              <p className=''>میزان فعالیت بدنی در هفته :</p>
              <p className='text-[var(--rating-color)]'>{physicalActivity}</p>
            </li>

            <li className='text-2xl ps-12 pe-7 bg-[var(--rating-color)] text-white w-fit rounded-e-lg py-2 my-5'>
                بیماری‌ها و وضعیت‌های خاص:
            </li>

            <li className='px-10 flex flex-row gap-10'>
                <p> وضعیت دیابت: {diabetes}</p>
                <p>وضعیت فشارخون: {bloodPressure}</p>
                <p>وضعیت مشکلات گوارشی: {digestiveProblems}</p>
                <p>وضعیت خودایمنی: {selfSafety}</p>
            </li>

            <li className='px-10 flex flex-row gap-10'>
                <p>وضعیت سکته:{" "} {stroke}</p>
                <p>وضعیت چربی کبد:{" "} {fattyLiver}</p>
                <p>وضعیت مشکلات کلیوی:{" "} {kidneyProblems}</p>
                <p>وضعیت تیروئید:{" "} {thyroid}</p>
            </li>

            <li className='px-10 flex flex-row gap-10 mb-4'>
                <p>سرطان دارد:{" "}{cancer}</p>
                <p>میگرن دارد:{" "}{Migraine}</p>
            </li>
            <li className='px-10 flex flex-row gap-4'>
              <p className=''> سایر بیماری ها یا جراحی قبلی بیمار:</p>
              <p className='text-[var(--rating-color)]'>{" "}{otherSickness}</p>
            </li>

            <li className='px-10 flex flex-row gap-4'>
              <p className=''>داروهای مصرفی بیمار :</p>
              <p className='text-[var(--rating-color)] mb-16'>{" "}{medicine}</p>
            </li>
        </ul>
    </div>
  )
}

export default MediterraneanForm
