import { WelcomeBoxType } from '@/types'
import React from 'react'

function WelcomeBox({doctorName}: WelcomeBoxType) {
  return (
    <div className='flex justify-center w-full'>
        <h1 className='bg-[var(--rating-color)] text-white text-2xl font-semibold p-4 rounded-xl shadow-md'>خوش آمدید  دکتر {doctorName} </h1>
    </div>
  )
}

export default WelcomeBox