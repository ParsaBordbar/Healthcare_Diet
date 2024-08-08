
import React from 'react'

function DoctorsCardDetails() {
  return (
    <div className='bg-[var(--black-blue)] text-white font-extrabold text-3xl flex justify-center flex-col  gap-4 p-8 rounded-xl items-center cursor-pointer'>
        <div className='grid grid-cols-6 gap-12 justify-center items-center mt-20'>
            <div className='flex justify-end hover:scale-110'><button className='text-sm border rounded-full p-1 w-1/3 h-1/2'>کپی</button></div>
            <span className='text-6xl col-span-1 col-start-2'>5041</span>
            <span className='text-6xl col-span-1 col-start-3'>7212</span>
            <span className='text-6xl col-span-1 col-start-4'>2124</span>
            <span className='text-6xl col-span-1 col-start-5'>2597</span>
        </div>
        <div className='grid grid-cols-5'>
        <h2 className='text-2xl col-start-2'>
            به نام محمدرضا ربیعی    
        </h2>
        </div>
    </div>
  )
}

export default DoctorsCardDetails