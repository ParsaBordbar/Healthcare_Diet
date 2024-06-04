'use client'
import React from 'react'
import QuickLinkBox from '../QuickLinkBox'
import useFetchComments from '@/hooks/useFetchComments/useFetchComments'
import useFetchMediterranean from '@/hooks/useFetchMediterranean'
import useFetchBmi from '@/hooks/useFetchBmi'

function QuickLinSection() {
   const allComments = useFetchComments()
   const commentCount = allComments.length

   const mediterraneanForms = useFetchMediterranean('/checking/isChecked');
   const unvisitedMediterraneanFormsCount = mediterraneanForms.length
   const bmiForms = useFetchBmi();
   const bmiCount = bmiForms.length

  return (
    <ul className='grid grid-cols-4 gap-8'>
        <li className='lg:col-span-1 md:col-span-2 col-span-full' >
            <QuickLinkBox tittle={'پیام‌ها'} desc={'لیست تمامی پیام‌های ارسالی'} url={"/admin/panel/comments"} counter={commentCount} />
        </li>
        <li className='lg:col-span-1 md:col-span-2 col-span-full' >
            <QuickLinkBox tittle={' ویزیت نشده'} desc={'لیست رژیم‌های ویزیت نشده '} url={"/admin/panel/unvisited_diets"} counter={unvisitedMediterraneanFormsCount} />
        </li>
        <li className='lg:col-span-1 md:col-span-2 col-span-full' >
            <QuickLinkBox tittle={'بیمارها'} desc={'سوابق و مشخصات تمام بیمارها'} url={"/admin/panel/patients"} counter={bmiCount} /> 
        </li>
        <li className='lg:col-span-1 md:col-span-2 col-span-full' >
            <QuickLinkBox tittle={'فایل‌ها'} desc={'فایل‌های آپلود شده شما'} url={"/admin/panel/comments"} counter={0} />
        </li>
    </ul>
  )
}

export default QuickLinSection;