import React from 'react'
import QuickLinkBox from '../QuickLinkBox'

function QuickLinSection() {
  return (
    <ul className='flex justify-center items-center gap-20'>
        <li>
            <QuickLinkBox tittle={'پیام‌ها'} desc={'لیست تمامی پیام‌های ارسالی'} url={"/admin/panel/comments"} counter={'6'} />
        </li>
        <li>
            <QuickLinkBox tittle={' ویزیت نشده'} desc={'لیست رژیم‌های ویزیت نشده '} url={"/admin/panel/comments"} counter={''} />
        </li>
        <li>
            <QuickLinkBox tittle={'بیمارها'} desc={'سوابق و مشخصات تمام بیمارها'} url={"/admin/panel/comments"} counter={''} /> 
        </li>
        <li>
            <QuickLinkBox tittle={'فایل‌ها'} desc={'فایل‌های آپلود شده شما'} url={"/admin/panel/comments"} counter={''} />
        </li>
    </ul>
  )
}

export default QuickLinSection;