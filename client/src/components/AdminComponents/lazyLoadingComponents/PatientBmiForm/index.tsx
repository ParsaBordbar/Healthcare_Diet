import { BmiType } from '@/types'
import React from 'react'

function PatientBmiFormLazy() {
  return (
    <div className='flex flex-col bg-[var(--milky-white)] py-4 rounded-lg gap-4 shadow-md'>
     <div className='flex flex-col 2xl:flex-row justify-between mt-3 items-start gap-4 2xl:gap-0 2xl:items-center'>
          <div className='flex items-center bg-gray-200 text-white text-3xl font-semibold rounded-e-full overflow-hidden whitespace-nowrap text-ellipsis ps-6 pe-10 w-fit py-4 animate-pulse'><div className='bg-gray-200 w-full h-3 mx-10 mt-3 px-10 animate-pulse'>{" "}</div></div>
          <div className='flex items-center text-[var(--new-green)] text-lg font-semibold  px-6 2xl:p-2.5 rounded-full bg-gray-200 w-1/12 h-3 mx-6 mt-3 animate-pulse'></div>
        </div>
        <div className='flex 2xl:flex-row items-start 2xl:items-center flex-col'>
          <div className='flex flex-col gap-6 2xl:px-10 px-6 text-lg '>
            <div className='bg-gray-200 w-full h-3 mx-6 mt-3 animate-pulse'></div>
            <div className='bg-gray-200 w-full h-3 mx-6 mt-3 animate-pulse' ></div>
          </div>
          <div className='flex  flex-col 2xl:px-10 px-6 text-lg gap-6'>
            <div className='bg-gray-200 w-full h-3 mx-6 mt-3 animate-pulse'></div>
            <div className='bg-gray-200 w-full h-3 mx-6 mt-3 animate-pulse'></div>
          </div>
        </div>
        <div className='bg-gray-200 w-1/6 h-3 mx-4 mt-3 animate-pulse'></div>
    </div>
  )
}
export default PatientBmiFormLazy