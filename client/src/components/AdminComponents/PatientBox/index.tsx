import { BmiType } from '@/types'
import React from 'react'

function PatientBox({name, lastName, phoneNumber, bmi}: BmiType) {
  return (
    <div className=" border-[var(--tittle-box)] shadow-md flex gap-7 justify-center my-3 bg-[var(--primary)] py-4 items-center w-3/5 rounded-2xl text-lg">
      <h2 className='flex justify-center text-[var(--text)]'>نام و نام‌خانوادگی:{name}{" "}{lastName}</h2>
      <span className='flex justify-center text-[var(--text)]'>شماره تماس:{" "}{phoneNumber}</span>
    </div>
  )
}

export default PatientBox