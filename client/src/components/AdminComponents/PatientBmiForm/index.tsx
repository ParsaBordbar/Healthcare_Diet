import { BmiType } from '@/types'
import React from 'react'

function PatientBmiForm({name, lastName, phoneNumber, gender, age, height, weight, bmi, abdominalCircumference,joinedAtGregorian, joinedAtJalali,}: BmiType) {
  return (
    <section className='flex flex-col bg-[var(--milky-white)] py-4 rounded-lg gap-4 shadow-md'>
        <div className='flex flex-col 2xl:flex-row justify-around text-[var(--text)] mt-3 items-start gap-4 2xl:gap-0 2xl:items-center '>
          <h2 className='flex items-center bg-[var(--new-green)] text-white text-3xl font-semibold rounded-e-full overflow-hidden whitespace-nowrap text-ellipsis ps-6 pe-10 w-fit py-3'>{name}{" "}{lastName}</h2>
          <p className='flex items-center text-[var(--new-green)] text-lg font-semibold w-fit mx-6 xl:p-2.5 rounded-full'>تاریخ ثبت:{" "} {joinedAtJalali}</p>
          <p className='flex items-center text-[var(--new-green)] text-lg font-semibold w-fit mx-6 2xl:p-2.5 rounded-full'>BMI:{" "} {bmi}</p>
        </div>
        <div className='flex 2xl:flex-row items-start 2xl:items-center flex-col'>
          <div className='flex flex-col gap-4 text-[var(--text)] 2xl:px-10 px-6 text-lg'>
            <p>جنسیت:{" "} {gender}</p>
            <p>سن:{" "} {age}</p>
          </div>
          <div className='flex  flex-col text-[var(--text)] 2xl:px-10 px-6 text-lg gap-4  '>
            <p>قد:{" "} {height}</p>
            <p>وزن:{" "} {weight}</p>
          </div>
          <div className='flex  flex-col text-[var(--text)] 2xl:px-10 px-6 text-lg gap-4  '>
            <p> شماره تماس:  {" "}  {phoneNumber}</p>
            <p>دور شکم:{" "} {abdominalCircumference}</p>
          </div>
        </div>
    </section>
  )
}
export default PatientBmiForm