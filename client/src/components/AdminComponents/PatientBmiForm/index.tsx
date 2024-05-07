import { BmiType } from '@/types'
import React from 'react'

function PatientBmiForm({name, lastName, phoneNumber, gender, age, height, wight, bmi}: BmiType) {
  return (
    <section className='flex flex-col bg-[var(--primary)] py-4 rounded-lg gap-4 shadow-md'>
        <div className='flex justify-between text-[var(--text)] my-3 '>
          <h2 className='bg-[var(--rating-color)] text-white text-3xl font-semibold rounded-e-full ps-6 pe-10 py-3'>{name}{" "}{lastName}</h2>
          <p className='bg-[var(--rating-color)] text-xl font-semibold w-fit text-white mx-12 p-4 rounded-full'>BMI:{" "} {bmi}</p>
        </div>
        <div className='flex '>
          <div className='flex flex-col gap-4 text-[var(--text)] px-10 text-lg'>
            <p>جنسیت:{" "} {gender}</p>
            <p>سن:{" "} {age}</p>
          </div>
          <div className='flex flex-col text-[var(--text)] px-10 text-lg gap-4  '>
            <p>قد:{" "} {height}</p>
            <p>وزن:{" "} {wight}</p>
          </div>
        </div>
        <p className='px-10 my-2 text-xl text-[var(--tittle-box)]'> شماره تماس:  {" "}  {phoneNumber}</p>
    </section>
  )
}
export default PatientBmiForm