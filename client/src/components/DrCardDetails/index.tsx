
import React from 'react'

function DoctorsCardDetails() {
  return (
    <div className='bg-[var(--black-blue)] text-white font-extrabold text-3xl flex justify-center flex-col  gap-4 p-10 rounded-xl'>
        <div className='grid grid-cols-8 gap-1 justify-center items-center mt-20'>
            <span className='text-6xl col-start-3 col-end-4'>5041</span>
            <span className='text-6xl col-start-4 col-end-5'>7212</span>
            <span className='text-6xl col-start-5 col-end-6'>2124</span>
            <span className='text-6xl col-start-6 col-end-7'>2597</span>
        </div>
        <div className='grid grid-cols-4'>
        <h2 className='text-2xl col-start-2'>
            به نام محمدرضا ربیعی    
        </h2>
        </div>
    </div>
  )
}

export default DoctorsCardDetails