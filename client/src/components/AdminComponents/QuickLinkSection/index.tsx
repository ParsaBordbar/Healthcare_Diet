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
    <ul className='flex justify-center items-center gap-20'>
        <li>
            <QuickLinkBox tittle={'پیام‌ها'} desc={'لیست تمامی پیام‌های ارسالی'} url={"/admin/panel/comments"} counter={commentCount} />
        </li>
        <li>
            <QuickLinkBox tittle={' ویزیت نشده'} desc={'لیست رژیم‌های ویزیت نشده '} url={"/admin/panel/unvisited_diets"} counter={unvisitedMediterraneanFormsCount} />
        </li>
        <li>
            <QuickLinkBox tittle={'بیمارها'} desc={'سوابق و مشخصات تمام بیمارها'} url={"/admin/panel/patients"} counter={bmiCount} /> 
        </li>
        <li>
            <QuickLinkBox tittle={'فایل‌ها'} desc={'فایل‌های آپلود شده شما'} url={"/admin/panel/comments"} counter={0} />
        </li>
    </ul>
  )
}

export default QuickLinSection;