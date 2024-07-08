
import { BmiType } from '@/types'
import React from 'react'

function DietBmi({
    age,
    height,
    hipcircumference,
    weight,
    bmi,
    abdominalCircumference,
    autoIncrementId,
  }: BmiType) {
  return (
        <div className="grid grid-cols-12 pr-6 gap-4">
            <p className="min-[1000px]:col-span-6 justify-center col-span-full text-[var(--black-blue)] w-fit ">
            BMI: {bmi}
            </p>
            <p className='min-[1000px]:col-span-2 text-sm sm:text-base md:col-span-6 col-span-full'>سن: {age}</p>
            <p className='min-[1000px]:col-span-2 text-sm sm:text-base md:col-span-6 col-span-full'>قد: {height}</p>
            <p className='min-[1000px]:col-span-2 text-sm sm:text-base md:col-span-6 col-span-full'>وزن: {weight}</p>
            <p className='min-[1000px]:col-span-2 text-sm sm:text-base md:col-span-6 col-span-full'>دور شکم: {abdominalCircumference}</p>
            <p className='min-[1000px]:col-span-2 text-sm sm:text-base md:col-span-6 col-span-full'>دور  باسن: {hipcircumference}</p>
        </div>
  )
}
export default DietBmi
