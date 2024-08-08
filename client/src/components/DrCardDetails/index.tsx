import CopyToClipboard from '@/utils/CopyToClipBoard'
import React from 'react'

function DoctorsCardDetails() {
  return (
    <div className='bg-[var(--black-blue)] text-white font-extrabold text-3xl flex justify-center flex-col  gap-4 p-8 rounded-2xl items-center cursor-pointer shadow-lg'>
        <div className='grid grid-cols-4 gap-12 justify-center items-center md:pt-20'>
           <button className='sm:text-sm text-xs px-4 py-2 border rounded-full flex justify-center items-center' onClick={() => CopyToClipboard("5041721221242507")}>کپی</button>
            <span className='xl:text-4xl md:text-3xl  text-xl col-span-1 col-start-2'>2507</span>
            <span className='xl:text-4xl md:text-3xl  text-xl col-span-1 col-start-3'>2124</span>
            <span className='xl:text-4xl md:text-3xl  text-xl col-span-1 col-start-4'>7212</span>
            <span className='xl:text-4xl md:text-3xl  text-xl col-span-1 col-start-5'>5041</span>
        </div>
        <div className='grid grid-cols-4 ps-10 pt-3'>
        <h2 className='xl:text-2xl text-lg lg:col-span-1 col-span-full'>
             محمدرضا ربیعی    
        </h2>
        </div>
    </div>
  )
}

export default DoctorsCardDetails