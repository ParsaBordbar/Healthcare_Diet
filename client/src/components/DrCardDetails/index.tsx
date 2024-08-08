import CopyToClipboard from '@/utils/CopyToClipBoard'
import React from 'react'

function DoctorsCardDetails() {
  return (
    <div className='bg-[var(--black-blue)] text-white font-extrabold text-3xl flex justify-center flex-col  gap-4 p-8 rounded-xl items-center cursor-pointer'>
        <div className='grid grid-cols-6 gap-12 justify-center items-center md:mt-20 xl:w-[800px] xl:h-[180px]'>
            <div className='lg:hover:scale-110 col-span-1 flex justify-center' onClick={() => CopyToClipboard("5041721221242507")}><button className='sm:text-sm text-xs border rounded-full p-2'>کپی</button></div>
            <span className='xl:text-6xl md:text-3xl  text-xl col-span-1 col-start-2'>2507</span>
            <span className='xl:text-6xl md:text-3xl  text-xl col-span-1 col-start-3'>2124</span>
            <span className='xl:text-6xl md:text-3xl  text-xl col-span-1 col-start-4'>7212</span>
            <span className='xl:text-6xl md:text-3xl  text-xl col-span-1 col-start-5'>5041</span>
        </div>
        <div className='grid grid-cols-5'>
        <h2 className='xl:text-2xl text-lg lg:col-start-2 col-span-full'>
             محمدرضا ربیعی    
        </h2>
        </div>
    </div>
  )
}

export default DoctorsCardDetails