'use Client'
import api from '@/apis';
import useSpecificFetchBmi from '@/hooks/useFetchName/useFetchName'
import { MediterraneanFormType } from '@/types'
import { useState } from 'react';

const updateIsChecked = async (phoneNumber: string, isChecked: boolean) => {
  const response = await api.put(`mediterranean/${phoneNumber}`, {
      isChecked: isChecked
  });
  console.log(response);
  return response;
}

const MediterraneanForm = ({dailyFruit, dailyVegetable,Cereals ,dailyCereals ,potatoAndStarchWeekly,oliveAndOliveOilDaily ,nutsDaily ,dairyDaily ,beans ,eggWeekly ,fishWeekly ,chickensWeekly, redMeatWeekly,sugarWeekly ,alcoholWeekly ,fermentationWeekly ,supplements ,physicalActivity, diabetes, anemia ,bloodPressure ,digestiveProblems ,selfSafety ,stroke ,fattyLiver ,kidneyProblems ,thyroid ,cancer, Migraine, otherSickness ,medicine ,phoneNumber, isChecked }:MediterraneanFormType) => {

  const data = useSpecificFetchBmi(phoneNumber);
  const [checked, setChecked] = useState(isChecked) //This will be for checked

  useUpdateIsChecked(phoneNumber, checked)
  const handleClickChecked = () => {
    setChecked(!checked)
    //Send a PUT Request to change the value in backend as well here
  }
  return (
    <div className='flex flex-row bg-[var(--primary)] my-4 py-4 rounded-lg text-lg'>
        <ul className='flex gap-4 flex-col'>
          <div className='flex items-center gap-16'>
            <li className='text-6xl px-10 bg-[var(--rating-color)] text-white w-fit pe-4 ps-4 rounded-e-full py-3 my-5'>
              {data?.name} {data?.lastName}
            </li>
            <button onClick={handleClickChecked} className='rounded-full flex justify-center items-center'>
              {isChecked?<p className='text-white text-4xl bg-[var(--rating-color)] rounded-full'>ویزیت شده</p>:<p className='text-white text-4xl bg-[var(--text-important)] rounded-full py-2.5 px-5'>ویزیت نشده</p>}
            </button>
          </div>
            <li className='px-10 text-3xl bg-[var(--rating-color)] text-white w-fit pe-4 ps-1 rounded-e-lg py-2 my-5'>
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

            <li className='px-10 text-3xl bg-[var(--rating-color)] text-white w-fit pe-4 ps-1 rounded-e-lg py-2 my-5'>
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
              <p className='text-[var(--rating-color)]'>{" "}{medicine}</p>
            </li>
        </ul>
    </div>
  )
}

export default MediterraneanForm

function useUpdateIsChecked(phoneNumber: string, checked: boolean) {
  throw new Error('Function not implemented.');
}
