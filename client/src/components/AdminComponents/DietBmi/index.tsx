
import { BmiType } from '@/types'
import React from 'react'

function DietBmi({
    age,
    height,
    hipcircumference,
    weight,
    bmi,
    abdominalCircumference,
  }: BmiType) {
  return (
        <div className="grid grid-cols-4 pr-6 gap-4">
            <p className="min-[1000px]:col-span-3 justify-center col-span-full text-[var(--black-blue)] w-fit ">
            BMI: {bmi}
            </p>
            <p className='min-[1000px]:col-span-3 text-base col-span-2'>سن: {age}</p>
            <p className='min-[1000px]:col-span-3 text-base col-span-2'>قد: {height}</p>
            <p className='min-[1000px]:col-span-3 text-base col-span-2'>وزن: {weight}</p>
            <p className='min-[1000px]:col-span-3 text-base col-span-2'>دور شکم: {abdominalCircumference}</p>
            <p className='col-span-1'>دور  باسن: {hipcircumference}</p>
        </div>
  )
}
export default DietBmi
