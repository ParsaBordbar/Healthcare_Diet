
import { BmiType } from '@/types'
import React from 'react'

function DietBmi({
    age,
    height,
    weight,
    bmi,
    abdominalCircumference,
  }: BmiType) {
  return (
    <div className="flex justify-start my-2 mx-10">
        <div className="grid 2xl:grid-cols-4 gap-16">
            <p className='col-span-1'>قد: {height}</p>
            <p className='col-span-1'>وزن: {weight}</p>
            <p className='col-span-1'>دور شکم: {abdominalCircumference}</p>
            <p className="col-span-1 text-[var(--new-green)] text-lg font-semibold w-fit ">
            BMI: {bmi}
            </p>
        </div>
    </div>
  )
}
export default DietBmi