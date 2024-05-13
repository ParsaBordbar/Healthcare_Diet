import { BmiType } from '@/types'
import React from 'react'

function PatientBox({name, lastName }: BmiType) {
  return (
    <div className=" border-[var(--tittle-box)] shadow-md flex gap-7 justify-center my-3 bg-[var(--tittle-box)] py-4 items-center w-3/5 rounded-2xl text-lg">
      <h2 className='flex justify-center text-white text-2xl'>نام و نام‌خانوادگی:{name} {" "} {lastName}</h2>
    </div>
  )
}

export default PatientBox