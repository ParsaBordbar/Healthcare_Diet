
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
        <div className="grid grid-cols-5 gap-16">
            <p className='col-span-1'>قد: {height}</p>
            <p className='col-span-1'>وزن: {weight}</p>
            <p className='col-span-1'>سن: {age}</p>
            <p className='col-span-1'>دور شکم: {abdominalCircumference}</p>
            <p className="col-span-1 text-[var(--new-green)] text-lg w-fit ">
            BMI: {bmi}
            </p>
        </div>
  )
}
export default DietBmi