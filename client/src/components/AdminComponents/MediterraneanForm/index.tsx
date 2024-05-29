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
        <ul className='flex  flex-col'>
          <div className='flex items-center justify-between'>
            <li className='text-6xl bg-[var(--new-green)] text-white w-fit pe-4 ps-2 rounded-e-full py-3 my-5'>
              {data?.name} {data?.lastName}
            </li>
            <button onClick={handleClickChecked} className='rounded-full flex justify-center items-center px-10'>
              {checked?<p className='text-white text-2xl bg-[var(--new-green)] rounded-full py-2.5 my-12 flex flex-row items-center justify-center gap-2 w-52'> <Tick/>ویزیت شده</p>:<p className='text-white text-2xl bg-[var(--orange)] rounded-full py-2.5 my-12 flex flex-row items-center gap-2 justify-center w-52'> <Cross />ویزیت نشده </p>}
            </button>
          </div>
            <li className='ps-12 pe-7 text-2xl bg-[var(--new-green)] text-white w-fit rounded-e-lg py-2 my-5'>
                مواد غذایی مصرفی:
            </li>
            <li className='grid grid-cols-3 gap-4 m-4'>
              <ul className='col-span-1 w-full'>
                <li className='flex flex-row gap-2'>
                  <p className=''>میزان مصرف روزانه میوه :</p>
                  <p className='text-[var(--new-green)]'>{dailyFruit}</p>
                </li>

                <li className='flex flex-row gap-2'>
                  <p className=''> میزان مصرف روزانه سبزیجات:</p>
                  <p className='text-[var(--new-green)]'>{dailyVegetable}</p>
                </li>

                <li className='flex flex-row gap-2'>
                  <p className=''>غلات سبوس ‌دار مصرف می‌کنند:</p>
                  <p className='text-[var(--new-green)]'>{Cereals}</p>
                </li>
              </ul>
              <ul className='col-span-1 w-full'>
                  <li className='flex flex-row gap-2'>
                  <p className=''>میزان مصرف روزانه غلات:</p>
                  <p className='text-[var(--new-green)]'>{dailyCereals}</p>
                </li>

                <li className='flex flex-row'gap-2>
                  <p className=''>سایر سبزیجات نشاسته ای در هفته:</p>
                  <p className='text-[var(--new-green)]'>{potatoAndStarchWeekly}</p>
                </li>

                <li className='flex flex-row gap-2'>
                  <p className=''>میزان مصرف روزانه  زیتون و روغن زیتون :</p>
                  <p className='text-[var(--new-green)]'>{oliveAndOliveOilDaily}</p>
                </li>
              </ul>
              <ul className='col-span-1 w-full'>
                <li className='flex flex-row gap-2'>
                  <p className=''>میزان مصرف مغزها به صورت روزانه:</p>
                  <p className='text-[var(--new-green)]'>{nutsDaily}</p>
                </li>
                <li className='flex flex-row gap-2'>
                  <p className=''>میزان مصرف روزانه محصولات لبنی :</p>
                  <p className='text-[var(--new-green)]'>{dairyDaily}</p>
                </li>

                <li className='flex flex-row gap-2'>
                  <p className=''>میزان مصرف  حبوبات :</p>
                  <p className='text-[var(--new-green)]'>{beans}</p>
                </li>
              </ul>
              <ul className='col-span-1 w-full'>
              <li className='flex flex-row gap-2'>
              <p className=''>میزان مصرف تخم مرغ به صورت هفتگی :</p>
              <p className='text-[var(--new-green)]'>{eggWeekly}</p>
            </li>

            <li className='flex flex-row gap-2'>
              <p className=''>میزان مصرف ماهی به صورت هفتگی:</p>
              <p className='text-[var(--new-green)]'>{fishWeekly}</p>
            </li>

            <li className='flex flex-row gap-2'>
              <p className=''>میزان مصرف  ماکیان به صورت هفتگی :</p>
              <p className='text-[var(--new-green)]'>{chickensWeekly}</p>
            </li>
              </ul>
              <ul className='col-span-1 w-full'>
              <li className='flex flex-row gap-2'>
              <p className=''>میزان مصرف گوشت قرمز به صورت هفتگی:</p>
              <p className='text-[var(--new-green)]'>{redMeatWeekly}</p>
            </li>

            <li className='flex flex-row gap-2'>
              <p className=''>میزان مصرف شیرینی به صورت هفتگی:</p>
              <p className='text-[var(--new-green)]'>{sugarWeekly }</p>
            </li>

            <li className='flex flex-row gap-2'>
              <p className=''>میزان مصرف  نوشیدنی الکلی به صورت هفتگی:</p>
              <p className='text-[var(--new-green)]'>{alcoholWeekly}</p>
            </li>

              </ul>
              <ul className='col-span-1 w-full'>
                <li className='flex flex-row gap-2'>
                  <p className=''>میزان مصرف محصوالت تخمیری به صورت هفتگی:</p>
                  <p className='text-[var(--new-green)]'>{fermentationWeekly}</p>
                </li>

                <li className='flex flex-row gap-2'>
                  <p className=''> مکمل‌هایی که مصرف می‌کنند:</p>
                  <p className='text-[var(--new-green)]'>{supplements}</p>
                </li>

                <li className='flex flex-row gap-2'>
                  <p className=''>میزان فعالیت بدنی در هفته :</p>
                  <p className='text-[var(--new-green)]'>{physicalActivity}</p>
                </li>
              </ul>
            </li>

            <li>
              <li className='text-2xl ps-12 pe-7 bg-[var(--new-green)] text-white w-fit rounded-e-lg py-2 my-5'>
                  بیماری‌ها و وضعیت‌های خاص:
              </li>
              <ul className='mx-10 flex flex-col gap-2'>
                <li className='flex flex-row gap-10 w-full'>
                    <p> وضعیت دیابت: {diabetes}</p>
                    <p>وضعیت فشارخون: {bloodPressure}</p>
                    <p>وضعیت مشکلات گوارشی: {digestiveProblems}</p>
                    <p>وضعیت خودایمنی: {selfSafety}</p>
                </li>

                <li className='flex flex-row gap-10 w-full'>
                    <p>وضعیت سکته:{" "} {stroke}</p>
                    <p>وضعیت چربی کبد:{" "} {fattyLiver}</p>
                    <p>وضعیت مشکلات کلیوی:{" "} {kidneyProblems}</p>
                    <p>وضعیت تیروئید:{" "} {thyroid}</p>
                </li>

                <li className='flex flex-row gap-10 w-full mb-4'>
                    <p>سرطان دارد:{" "}{cancer}</p>
                    <p>میگرن دارد:{" "}{Migraine}</p>
                </li>
                <li className='flex flex-row '>
                  <p className=''> سایر بیماری ها یا جراحی قبلی بیمار:</p>
                  <p className='text-[var(--new-green)]'>{" "}{otherSickness}</p>
                </li>

                <li className='flex flex-row '>
                  <p className=''>داروهای مصرفی بیمار :</p>
                  <p className='text-[var(--new-green)] mb-16'>{" "}{medicine}</p>
                </li>
              </ul>
              
            </li>
        </ul>
    </div>
  )
}

export default MediterraneanForm
