import { WelcomeBoxType } from '@/types'
import React from 'react'

function WelcomeBox({doctorName}: WelcomeBoxType) {
  return (
    <div className='flex justify-start w-full'>
        <h1 className='text-[var(--new-green)] text-2xl font-semibold  '>خوش آمدید  مشاور تغذیه {doctorName} </h1>
    </div>
  )
}

export default WelcomeBox